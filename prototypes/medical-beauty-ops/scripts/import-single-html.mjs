import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = path.join(projectDir, "medical-beauty-ops-demo.html");
const sourceDir = path.join(projectDir, "source");
const templateFile = path.join(sourceDir, "template.html");
const manifestFile = path.join(sourceDir, "inline-blocks.json");

if (!process.argv.includes("--force")) {
  console.error("Refusing to replace source/. Re-run with --force after confirming the single-file HTML is the newest version.");
  process.exit(1);
}

const html = await readFile(outputFile, "utf8");
const blockPattern = /<style\b[^>]*>[\s\S]*?<\/style\s*>|<script\b(?![^>]*\bsrc\s*=)[^>]*>[\s\S]*?<\/script\s*>/gi;
const blocks = [];
let styleIndex = 0;
let scriptIndex = 0;

const template = html.replace(blockPattern, (block) => {
  const openTagEnd = block.indexOf(">");
  const closeTagStart = block.search(/<\/(?:style|script)\s*>\s*$/i);
  if (openTagEnd < 0 || closeTagStart < 0) {
    throw new Error("Unable to split an inline style/script block.");
  }

  const type = /^<style\b/i.test(block) ? "style" : "script";
  const index = type === "style" ? ++styleIndex : ++scriptIndex;
  const id = `${type}-${String(index).padStart(2, "0")}`;
  const extension = type === "style" ? "css" : "js";
  const relativeFile = `${type === "style" ? "styles" : "scripts"}/${id}.${extension}`;

  blocks.push({
    id,
    type,
    file: relativeFile,
    openTag: block.slice(0, openTagEnd + 1),
    closeTag: block.slice(closeTagStart),
    content: block.slice(openTagEnd + 1, closeTagStart),
  });

  return `<!-- @inline-block:${id} -->`;
});

if (blocks.length === 0) {
  throw new Error("No inline style or script blocks were found.");
}

await rm(sourceDir, { recursive: true, force: true });
await mkdir(path.join(sourceDir, "styles"), { recursive: true });
await mkdir(path.join(sourceDir, "scripts"), { recursive: true });
await writeFile(templateFile, template, "utf8");

for (const block of blocks) {
  await writeFile(path.join(sourceDir, block.file), block.content, "utf8");
}

const manifest = blocks.map(({ content: _content, ...entry }) => entry);
await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Imported ${blocks.length} inline blocks into ${path.relative(process.cwd(), sourceDir)}.`);
