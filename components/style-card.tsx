import { StylePreviewCard } from "@/components/style-preview-card";
import { normalizeStyle, type NormalizedStyle } from "@/lib/style-theme";
import type { StylePack } from "@/lib/catalog";

export function StyleCard({
  style,
  normalized,
  parentStyleName,
}: {
  style?: StylePack;
  normalized?: NormalizedStyle;
  parentStyleName?: string;
}) {
  const viewModel = normalized ?? (style ? normalizeStyle(style) : null);

  if (!viewModel) {
    return null;
  }

  return <StylePreviewCard normalized={viewModel} parentStyleName={parentStyleName} />;
}
