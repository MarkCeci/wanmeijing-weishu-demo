"use client";

import { useMemo, useState } from "react";
import { AdminPreview, MobilePreview } from "@/components/style-preview-panels";
import type { NormalizedStyle } from "@/lib/style-theme";

type PreviewMode = "light" | "dark";

export function StyleDetailModePreview({ style }: { style: NormalizedStyle }) {
  const [mode, setMode] = useState<PreviewMode>("light");
  const previewStyle = useMemo(() => (mode === "dark" ? toDarkStyle(style) : style), [mode, style]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex rounded-full border border-[#E9ECEF] bg-[#F7F8FA] p-1">
          {(["light", "dark"] as PreviewMode[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                mode === item ? "bg-white text-[#111827] shadow-[0_2px_10px_rgba(0,0,0,0.06)]" : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              {item === "light" ? "浅色" : "深色"}
            </button>
          ))}
        </div>
        <p className="text-sm text-[#9CA3AF]">深色预览基于同一主色生成，用于判断夜间和大屏适配方向。</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-2xl border border-[#E9ECEF] bg-white">
          <div className="border-b border-[#E9ECEF] px-4 py-3">
            <p className="text-sm font-semibold text-[#111827]">后台 Dashboard 预览</p>
          </div>
          <AdminPreview style={previewStyle} size="detail" />
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#E9ECEF] bg-white">
          <div className="border-b border-[#E9ECEF] px-4 py-3">
            <p className="text-sm font-semibold text-[#111827]">移动端 App 首页预览</p>
          </div>
          <MobilePreview style={previewStyle} size="detail" />
        </div>
      </div>
    </div>
  );
}

function toDarkStyle(style: NormalizedStyle): NormalizedStyle {
  const palette = {
    ...style.palette,
    background: "#0F172A",
    surface: "#111827",
    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",
    border: "rgba(148, 163, 184, 0.24)",
  };

  return {
    ...style,
    palette,
    tokens: {
      ...style.tokens,
      colors: palette,
      shadow: {
        ...style.tokens.shadow,
        card: "0 18px 48px rgba(0, 0, 0, 0.32)",
        floating: "0 28px 72px rgba(0, 0, 0, 0.42)",
      },
    },
  };
}
