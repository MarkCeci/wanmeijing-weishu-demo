"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import {
  buildThemePackage,
  generateReactThemeObject,
  type ThemeHandoffTokens,
} from "@/lib/theme-handoff";

type ThemeHandoffPanelProps = {
  style: Record<string, unknown>;
  title?: string;
  description?: string;
  draftNotice?: boolean;
  showDownload?: boolean;
};

type HandoffTab = "css" | "tailwind" | "json" | "usage" | "react";

const tabs: Array<{ id: HandoffTab; label: string }> = [
  { id: "css", label: "CSS Variables" },
  { id: "tailwind", label: "Tailwind Config" },
  { id: "json", label: "Tokens JSON" },
  { id: "usage", label: "使用示例" },
  { id: "react", label: "React Theme Object" },
];

export function ThemeHandoffPanel({
  style,
  title = "开发接入",
  description = "复制下面的主题代码到项目中，即可应用当前风格。第一版推荐使用 CSS Variables，适用于 React、Vue、普通 Web 项目。",
  draftNotice = false,
  showDownload = true,
}: ThemeHandoffPanelProps) {
  const [activeTab, setActiveTab] = useState<HandoffTab>("css");
  const [copied, setCopied] = useState("");
  const packageText = useMemo(() => {
    const handoff = buildThemePackage(style);
    return {
      css: handoff.css,
      tailwind: handoff.tailwind,
      json: handoff.tokensJson,
      usage: handoff.usage,
      react: generateReactThemeObject(style),
    };
  }, [style]);

  const activeValue = packageText[activeTab];

  async function copyValue() {
    await navigator.clipboard.writeText(activeValue);
    setCopied(activeTab);
    window.setTimeout(() => setCopied(""), 1600);
  }

  function downloadJson() {
    const blob = new Blob([packageText.json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${String(style.id ?? "theme")}-tokens.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white lg:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-100">
              Theme Handoff
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-200">{description}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[360px]">
            {[
              ["推荐", "CSS Variables"],
              ["支持", "Light / Dark"],
              ["适用", "React / Vue / Web"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-[11px] font-semibold text-violet-100">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 lg:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {draftNotice ? (
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
              当前为草稿风格，交付前请确认验收清单。
            </p>
          ) : null}
          <ol className="grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-3">
            <li className="rounded-2xl bg-slate-50 p-3">
              <span className="font-semibold text-slate-950">1. 复制</span>
              <br />
              优先复制 CSS Variables。
            </li>
            <li className="rounded-2xl bg-slate-50 p-3">
              <span className="font-semibold text-slate-950">2. 粘贴</span>
              <br />
              放入 global.css 或 theme.css。
            </li>
            <li className="rounded-2xl bg-slate-50 p-3">
              <span className="font-semibold text-slate-950">3. 使用</span>
              <br />
              组件通过 var(...) 调用主题。
            </li>
          </ol>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyValue}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(109,40,217,0.24)] transition hover:bg-violet-800"
          >
            <Icon icon={copied === activeTab ? "check-circle" : "copy"} size={16} color="currentColor" />
            {copied === activeTab ? "已复制" : `复制${tabs.find((tab) => tab.id === activeTab)?.label ?? "代码"}`}
          </button>
          {showDownload ? (
            <button
              type="button"
              onClick={downloadJson}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              <Icon icon="link" size={16} color="currentColor" />
              下载 JSON
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 rounded-full border px-3 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "border-violet-200 bg-violet-50 text-violet-800"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs leading-6 text-slate-100">
        <code>{activeValue}</code>
      </pre>
      </div>
    </section>
  );
}

export type { ThemeHandoffTokens };
