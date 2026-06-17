"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ColorSwatches } from "@/components/style-preview-panels";
import type { NormalizedStyle } from "@/lib/style-theme";

type StyleFamilyViewProps = {
  featuredStyles: NormalizedStyle[];
  historicalStyles: NormalizedStyle[];
};

type FamilyDefinition = {
  key: string;
  label: string;
  description: string;
};

type StyleFamilyGroup = FamilyDefinition & {
  featured: NormalizedStyle[];
  historical: NormalizedStyle[];
  mainStyles: NormalizedStyle[];
  variants: NormalizedStyle[];
};

const familyDefinitions: FamilyDefinition[] = [
  {
    key: "企业后台基础",
    label: "企业后台基础",
    description: "稳定、清晰、可维护，适合 CRM、ERP、OA、SaaS 后台和数据录入流程。",
  },
  {
    key: "AI 科技",
    label: "AI 科技",
    description: "强调智能助手、推荐、自动化和轻科技感，适合 AI 工具与 Copilot 工作台。",
  },
  {
    key: "深色数据",
    label: "深色数据",
    description: "面向监控、大屏、运维和高信息密度分析场景，突出可视化和状态感知。",
  },
  {
    key: "高级视觉",
    label: "高级视觉",
    description: "适合品牌感更强的企业产品，用玻璃、极光、黑金等机制提升质感。",
  },
  {
    key: "行业业务",
    label: "行业业务",
    description: "围绕医疗、金融、本地生活、电商、教育等行业任务组织视觉与组件。",
  },
  {
    key: "特殊机制",
    label: "特殊机制",
    description: "用于 Linear、Web3、开发者控制台等有明确交互机制和技术语境的项目。",
  },
];

export function StyleFamilyView({ featuredStyles, historicalStyles }: StyleFamilyViewProps) {
  const [activeFamilyKey, setActiveFamilyKey] = useState(familyDefinitions[0].key);
  const [showHidden, setShowHidden] = useState(false);

  const groups = useMemo(
    () =>
      familyDefinitions.map((definition) => {
        const featured = featuredStyles.filter((style) => getFamilyKey(style) === definition.key);
        const historical = historicalStyles.filter((style) => getFamilyKey(style) === definition.key);
        const mainStyles = featured.filter(isMainStyle);
        const variants = featured.filter((style) => !isMainStyle(style));

        return {
          ...definition,
          featured,
          historical,
          mainStyles: mainStyles.length ? mainStyles : featured.slice(0, 2),
          variants,
        };
      }),
    [featuredStyles, historicalStyles],
  );

  const visibleGroups = groups.filter((group) => group.featured.length > 0 || group.historical.length > 0);
  const activeFamily = visibleGroups.find((group) => group.key === activeFamilyKey) ?? visibleGroups[0];

  if (!activeFamily) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--styles-pitch-color-border)] bg-white p-8 text-center">
        <p className="text-sm text-[var(--styles-pitch-color-text-secondary)]">
          当前筛选条件下没有可展示的风格家族。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        {visibleGroups.map((group) => (
          <FamilySummaryCard
            key={group.key}
            group={group}
            active={group.key === activeFamily.key}
            onEnter={() => {
              setActiveFamilyKey(group.key);
              setShowHidden(false);
            }}
          />
        ))}
      </div>

      <section className="rounded-[var(--styles-pitch-radius-card)] border border-[var(--styles-pitch-color-border)] bg-white p-5 shadow-[var(--styles-pitch-shadow-card)] sm:p-6">
        <div className="flex flex-col gap-3 border-b border-[var(--styles-pitch-color-border)] pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--styles-pitch-color-primary)]">
              Style Family
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--styles-pitch-color-text-primary)]">
              {activeFamily.label}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--styles-pitch-color-text-secondary)]">
              {activeFamily.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-[var(--styles-pitch-color-primary-soft)] px-3 py-1 text-[var(--styles-pitch-color-primary)]">
              主风格 {activeFamily.mainStyles.length}
            </span>
            <span className="rounded-full bg-[var(--styles-pitch-color-surface-muted)] px-3 py-1 text-[var(--styles-pitch-color-text-secondary)]">
              变体 {activeFamily.variants.length}
            </span>
            <span className="rounded-full bg-[var(--styles-pitch-color-surface-muted)] px-3 py-1 text-[var(--styles-pitch-color-text-secondary)]">
              hidden 历史 {activeFamily.historical.length}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <FamilyBlock title="主风格" description="优先从这些风格开始选，它们代表该家族的核心视觉方向。">
            <div className="grid gap-3 md:grid-cols-2">
              {activeFamily.mainStyles.map((style) => (
                <FamilyStyleCard key={style.id} style={style} emphasis />
              ))}
            </div>
          </FamilyBlock>

          <FamilyBlock title="变体" description="变体用于处理颜色、密度、行业或平台侧重点，不建议当成完全独立风格理解。">
            {activeFamily.variants.length ? (
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {activeFamily.variants.map((style) => (
                  <FamilyStyleCard key={style.id} style={style} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl bg-[var(--styles-pitch-color-surface-muted)] px-4 py-3 text-sm text-[var(--styles-pitch-color-text-secondary)]">
                当前筛选条件下，这个家族暂无可展示变体。
              </p>
            )}
          </FamilyBlock>

          <div className="rounded-[var(--styles-pitch-radius-card)] border border-dashed border-[var(--styles-pitch-color-border)] bg-[var(--styles-pitch-color-surface-muted)] p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--styles-pitch-color-text-primary)]">
                  hidden 历史风格
                </h3>
                <p className="mt-1 text-sm text-[var(--styles-pitch-color-text-secondary)]">
                  {activeFamily.historical.length} 个风格已归并到这个家族，默认不展开，避免干扰选择。
                </p>
              </div>
              {activeFamily.historical.length ? (
                <button
                  type="button"
                  onClick={() => setShowHidden((value) => !value)}
                  className="inline-flex w-fit rounded-md px-1 py-1.5 text-sm font-semibold text-[var(--styles-pitch-color-text-muted)] transition hover:text-[var(--styles-pitch-color-primary)]"
                >
                  {showHidden ? "收起历史风格" : "展开历史风格"}
                </button>
              ) : null}
            </div>

            {showHidden && activeFamily.historical.length ? (
              <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {activeFamily.historical.map((style) => (
                  <FamilyStyleCard key={style.id} style={style} muted />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

function FamilySummaryCard({
  group,
  active,
  onEnter,
}: {
  group: StyleFamilyGroup;
  active: boolean;
  onEnter: () => void;
}) {
  const previewStyles = group.mainStyles.slice(0, 2);

  return (
    <article
      className={`rounded-[var(--styles-pitch-radius-card)] border bg-white p-5 shadow-[var(--styles-pitch-shadow-card)] transition ${
        active
          ? "border-[var(--styles-pitch-color-primary-soft)] ring-1 ring-[var(--styles-pitch-color-primary-soft)]"
          : "border-[var(--styles-pitch-color-border)] hover:-translate-y-0.5 hover:border-[#DFE3E8] hover:shadow-[var(--styles-pitch-shadow-card-hover)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--styles-pitch-color-text-primary)]">
            {group.label}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--styles-pitch-color-text-secondary)]">
            {group.description}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[var(--styles-pitch-color-primary-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--styles-pitch-color-primary)]">
          {group.featured.length}
        </span>
      </div>

      <div className="mt-4 grid gap-2">
        {previewStyles.map((style) => (
          <div key={style.id} className="rounded-xl bg-[var(--styles-pitch-color-surface-muted)] p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="line-clamp-1 text-sm font-semibold text-[var(--styles-pitch-color-text-primary)]">
                {style.name}
              </p>
              <ColorSwatches style={style} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--styles-pitch-color-border)] pt-4">
        <p className="text-sm text-[var(--styles-pitch-color-text-secondary)]">
          {group.mainStyles.length} 个主风格 · {group.variants.length} 个变体 · {group.historical.length} 个历史
        </p>
        <button
          type="button"
          onClick={onEnter}
          className="rounded-[var(--styles-pitch-radius-button)] border border-[var(--styles-pitch-color-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--styles-pitch-color-text-primary)] transition hover:border-[var(--styles-pitch-color-primary-soft)] hover:bg-[var(--styles-pitch-color-primary-soft)] hover:text-[var(--styles-pitch-color-primary)]"
        >
          进入该家族
        </button>
      </div>
    </article>
  );
}

function FamilyBlock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3">
        <h3 className="text-base font-semibold text-[var(--styles-pitch-color-text-primary)]">{title}</h3>
        <p className="mt-1 text-sm text-[var(--styles-pitch-color-text-secondary)]">{description}</p>
      </div>
      {children}
    </section>
  );
}

function FamilyStyleCard({
  style,
  emphasis = false,
  muted = false,
}: {
  style: NormalizedStyle;
  emphasis?: boolean;
  muted?: boolean;
}) {
  return (
    <Link
      href={`/styles/${style.id}`}
      className={`rounded-[var(--styles-pitch-radius-card)] border p-4 transition hover:-translate-y-0.5 hover:border-[#DFE3E8] hover:shadow-[var(--styles-pitch-shadow-card-hover)] ${
        muted
          ? "border-dashed border-[var(--styles-pitch-color-border)] bg-white/70"
          : emphasis
            ? "border-[var(--styles-pitch-color-primary-soft)] bg-white"
            : "border-[var(--styles-pitch-color-border)] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${emphasis ? "bg-[var(--styles-pitch-color-primary-soft)] text-[var(--styles-pitch-color-primary)]" : "bg-[var(--styles-pitch-color-surface-muted)] text-[var(--styles-pitch-color-text-secondary)]"}`}>
              {getStyleRoleLabel(style)}
            </span>
            {typeof style.source.differentiationScore === "number" ? (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {style.source.differentiationScore}
              </span>
            ) : null}
          </div>
          <h4 className="mt-3 line-clamp-2 text-sm font-semibold text-[var(--styles-pitch-color-text-primary)]">
            {style.name}
          </h4>
        </div>
        <ColorSwatches style={style} />
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--styles-pitch-color-text-secondary)]">
        {style.source.positioning || style.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {style.suitableFor.slice(0, 2).map((item) => (
          <span key={item} className="rounded-full bg-[var(--styles-pitch-color-surface-muted)] px-2 py-1 text-xs font-medium text-[var(--styles-pitch-color-text-secondary)]">
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}

function isMainStyle(style: NormalizedStyle) {
  return style.source.isMainStyle || (style.source.parentStyleId ?? style.id) === style.id;
}

function getStyleRoleLabel(style: NormalizedStyle) {
  if (style.source.displayLevel === "hidden") return "已归并";
  if (style.source.displayLevel === "hero") return "主推";
  return isMainStyle(style) ? "主风格" : style.source.variantName || "变体";
}

function getFamilyKey(style: NormalizedStyle) {
  const raw = style.source.styleFamily || "企业后台基础";
  if (raw === "AI科技") return "AI 科技";
  return familyDefinitions.some((item) => item.key === raw) ? raw : "企业后台基础";
}
