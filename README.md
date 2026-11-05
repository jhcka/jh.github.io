# 纸间笔记

一个使用 Hermes Field Notes 暖纸黄风格的 Jekyll 个人博客。

## 写文章

在 `_posts/` 下新增 `YYYY-MM-DD-slug.md`，参考 [示例文章](_posts/2026-11-05-hello-blog.md)。文件顶部的 `title` 是标题，`description` 是列表和文章页显示的摘要，`category` 是可选分类。用独立的英文短名作为 `slug`，避免文章地址冲突。

Jekyll 会生成 `/notes/slug/`，归档收录全部文章，首页显示最新五篇。开始写作后可以删除示例文章。

站名和简介在 [站点配置](_config.yml)，关于页在 [about.md](about.md)。

## 预览和发布

本地安装 Jekyll 3.10 后，在仓库根目录运行 `jekyll serve`，打开 [本地预览](http://localhost:4000/jh.github.io/)。

在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，使用 `main` 的 `/(root)`。构建成功后，默认站点地址是 [jhcka.github.io/jh.github.io](https://jhcka.github.io/jh.github.io/)。

模板用 `relative_url` 生成站内链接，自动带上配置中的项目路径。更改仓库名或绑定自定义域名时，一并检查 `url` 和 `baseurl`。

## 项目结构

[架构说明](docs/architecture.md)记录了文章到页面的生成过程和各文件的维护入口。
