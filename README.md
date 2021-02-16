# 诀死行者的博客

网站地址：[jswalk.com](http://jswalk.com)

网站的建设受卢振千的 [《博客系统的心路历程：关于这个网站》](https://lblog.luzhenqian.top/blog/blog-evolution/) 启发，决定也建设一个属于自己的个人博客。

项目基于 <a href="https://github.com/Charca/sapper-blog-template" target="_blank">sapper-blog-template</a> 开发，功能还不完善，只提供最基本的文章列表和展示，后续将逐步完善。网站建设前期比较注重内容，先把内容安排上。

网站特性：

- 采用 svelte 开发，生产包文件小，访问速度快
- 采用 SSR 渲染，SEO 友好，首屏加载快
- 无服务部署，数据通过解析 md 文件生成
- 实现了 PWA 功能，支持导出应用和离线访问（本站点没开启 https ，所以无效）
- 接入 GitHub Actions 自动化部署
- 图片资源全部走七牛云的 CDN 加速通道

