import { readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(projectDir, "source");
const templateFile = path.join(sourceDir, "template.html");
const manifestFile = path.join(sourceDir, "inline-blocks.json");
const standalone = process.argv.includes("--standalone");
const outputFile = path.join(projectDir, standalone ? "medical-beauty-ops-demo-offline.html" : "medical-beauty-ops-demo.html");
const checkOnly = process.argv.includes("--check");
const iconifyRuntimeUrl = "https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js";

const mimeTypeFor = (file) => ({
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4"
}[path.extname(file).toLowerCase()] || "application/octet-stream");

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to download ${url}: ${response.status} ${response.statusText}`);
  return response.text();
}

async function inlineAssets(html) {
  const references = [...new Set((html.match(/assets\/[A-Za-z0-9_./-]+(?:\?[^"'`\s)<]+)?/g) || []))];
  const replacements = await Promise.all(references.map(async (reference) => {
    const localPath = reference.split("?")[0];
    const assetFile = path.resolve(projectDir, localPath);
    if (!assetFile.startsWith(`${projectDir}${path.sep}`)) throw new Error(`Invalid asset reference: ${reference}`);
    const content = await readFile(assetFile);
    return [reference, `data:${mimeTypeFor(assetFile)};base64,${content.toString("base64")}`];
  }));
  return replacements.reduce((result, [reference, dataUri]) => result.split(reference).join(dataUri), html);
}

async function inlineIconify(html) {
  const runtimeIconNames = [
    "icon-park-outline:alarm", "icon-park-outline:calendar", "icon-park-outline:check-one",
    "icon-park-outline:close", "icon-park-outline:hospital-three", "icon-park-outline:loading-four", "icon-park-outline:message-sent",
    "icon-park-outline:protect", "icon-park-outline:water-rate", "icon-park-solid:star",
    "lucide:ellipsis", "lucide:panel-right-close", "lucide:sparkles", "lucide:x"
  ];
  const iconNames = [...new Set([...(html.match(/(?:icon-park-outline|icon-park-solid|lucide):[a-z0-9-]+/g) || []), ...runtimeIconNames])];
  const iconsBySet = new Map();
  iconNames.forEach((icon) => {
    const [prefix, name] = icon.split(":");
    iconsBySet.set(prefix, [...(iconsBySet.get(prefix) || []), name]);
  });
  const [runtime, ...collections] = await Promise.all([
    fetchText(iconifyRuntimeUrl),
    ...[...iconsBySet.entries()].map(([prefix, names]) => fetchText(`https://api.iconify.design/${prefix}.json?icons=${encodeURIComponent(names.join(","))}`).then(JSON.parse))
  ]);
  const runtimeTag = `<script src="${iconifyRuntimeUrl}"></script>`;
  if (!html.includes(runtimeTag)) throw new Error("Iconify runtime tag not found in template.");
  const safeRuntime = runtime.replace(/<\/script/gi, "<\\/script");
  const collectionScript = `<script>customElements.whenDefined("iconify-icon").then(() => { const IconifyIcon = customElements.get("iconify-icon"); (${JSON.stringify(collections)}).forEach((collection) => IconifyIcon.addCollection(collection)); });</script>`;
  return html.replace(runtimeTag, `<script>${safeRuntime}</script>${collectionScript}`);
}

let output = await readFile(templateFile, "utf8");
const manifest = JSON.parse(await readFile(manifestFile, "utf8"));

for (const block of manifest) {
  const marker = `<!-- @inline-block:${block.id} -->`;
  const occurrences = output.split(marker).length - 1;
  if (occurrences !== 1) {
    throw new Error(`Expected one ${marker}, found ${occurrences}.`);
  }
  const content = await readFile(path.join(sourceDir, block.file), "utf8");
  const reconstructedBlock = `${block.openTag}${content}${block.closeTag}`;
  output = output.replace(marker, () => reconstructedBlock);
}

const unresolved = output.match(/<!-- @inline-block:[^>]+ -->/g);
if (unresolved) {
  throw new Error(`Unresolved inline markers: ${unresolved.join(", ")}`);
}

if (standalone) {
  output = await inlineAssets(output);
  output = await inlineIconify(output);
}

if (checkOnly) {
  const current = await readFile(outputFile, "utf8").catch(() => null);
  if (current !== output) {
    console.error(`Generated HTML is out of date. Run: node scripts/build-single-html.mjs${standalone ? " --standalone" : ""}`);
    process.exit(1);
  }
  console.log("Generated HTML is up to date.");
  process.exit(0);
}

const temporaryFile = `${outputFile}.tmp-${process.pid}`;
try {
  await writeFile(temporaryFile, output, "utf8");
  await rename(temporaryFile, outputFile);
} catch (error) {
  await unlink(temporaryFile).catch(() => {});
  throw error;
}

console.log(`Built ${path.relative(process.cwd(), outputFile)} from modular source.`);
