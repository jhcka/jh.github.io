# 博客架构

结构记录于 2026-11-05。

博客由 Jekyll 在构建时生成静态页面。浏览器直接读取生成的 HTML 和 CSS。

- `_config.yml` 管理站名、简介、项目子路径和文章地址规则。
- `_posts/` 是文章内容的来源。Jekyll 解析每篇 Markdown 顶部的标题、日期和摘要，将正文转换为 HTML，再交给 `_layouts/post.html`。
- 调研报告可用 `report: true` 加宽阅读区。文章目录链接到章节锚点，`table-scroll` 容器让宽表格和流程图在窄屏内横向滚动。
- `index.html` 和 `archive.html` 读取 Jekyll 生成的 `site.posts`，共用 `_includes/post-list.html`。首页显示最新五篇，归档显示全部文章。
- `_layouts/default.html` 提供共用页眉、导航、页脚和页面元数据。首页的站名与简介放在页眉，`assets/blog.css` 将金山插图用作页眉背景，并管理纸色、字体和窄屏布局。
- Jekyll 的 `relative_url` 给站内路径加上 `baseurl`，让链接在 GitHub Pages 的项目子路径下可用。

本地可用 `jekyll build` 检查生成结果。部署后，GitHub Pages 按发布分支重新生成页面。
