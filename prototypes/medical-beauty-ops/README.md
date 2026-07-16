# 万美京微枢 AI 私域托管系统交互 Demo

这个目录采用“模块化开发、单文件交付”的方式：日常只修改 `source/`，构建后仍得到可直接双击打开的 `medical-beauty-ops-demo.html`。

## 日常修改

1. HTML 结构：`source/template.html`
2. 页面样式：`source/styles/style-01.css`
3. 交互与数据：`source/scripts/script-01.js`
4. 生成交付文件：

```sh
node prototypes/medical-beauty-ops/scripts/build-single-html.mjs
```

5. 检查交付文件是否与源码同步：

```sh
node prototypes/medical-beauty-ops/scripts/build-single-html.mjs --check
```

## 给 Codex 的任务写法

新建任务时尽量一次只描述一个页面或一组相关修改，例如：

> 修改 `prototypes/medical-beauty-ops/source/` 中的群发任务列表：统一操作按钮宽度。完成后构建单文件并做静态检查；除非发现交互问题，不启动浏览器自动化。

这样 Codex 会读取较小的源文件，减少整页扫描和浏览器反复验证。

## 从旧单文件重新导入

只有在别人直接改了最终 HTML、且确认它是最新版本时才执行：

```sh
node prototypes/medical-beauty-ops/scripts/import-single-html.mjs --force
node prototypes/medical-beauty-ops/scripts/build-single-html.mjs --check
```

导入会替换整个 `source/`，不要把它当作日常构建命令。
