import { StylesExplorer } from "@/components/styles-explorer";
import { styles } from "@/lib/catalog";

export default function StylesPage() {
  return (
    <div className="styles-page-motion mx-[calc(50%-50vw)] -my-6 min-h-[calc(100vh-96px)] bg-[var(--styles-pitch-color-background)] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-[1180px] space-y-9">
        <header className="max-w-3xl pt-1">
          <h1 className="text-3xl font-semibold tracking-normal text-[#111827] sm:text-5xl">
            企业视觉风格库
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
            浏览并选择适合企业项目的 UI 风格。每个风格都支持后台、移动端和主题代码交付。
          </p>
        </header>

        <StylesExplorer styles={styles} />
      </div>
    </div>
  );
}
