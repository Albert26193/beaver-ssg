# 技术选型

## CSR & SSR

- `CSR`: `Client Side Render`, 客户端渲染, 执行 `npx beaver dev docs` 启动项目后, 会在浏览器中加载 `docs` 目录下的 `markdown` 文件, 并在浏览器中渲染成 HTML 页面。

- `SSR`: `Server Side Render`, 服务端渲染, 执行 `npx beaver build docs` 构建项目后, 会在 `docs/.beaver/dist` 目录下生成静态 HTML 文件, 并在浏览器中加载。

- 同构渲染：开发阶段使用 `CSR`, 构建阶段使用 `SSR`。二者运行的原理是一样的, 都是将 `Markdown` 文件渲染成 `HTML` 页面, 只是运行的环境不同。

## Vite

- `Vite`: `Vite` 是一个由 `Evan You` 发起的项目, 是一个基于 `ESM` 的前端构建工具, 用于构建 `Vue` 项目。
- 本项目使用 `Vite` 作为构建工具, 用于构建 `Markdown` 文件, 并在浏览器中加载。
- 在开发阶段，`Vite` 充当了 `Web Server` 的角色, 在构建阶段, `Vite` 充当了 `SSR` 的角色。
## MDX

- `MDX`: `Markdown + JSX`, 是一种支持 JSX 的 Markdown 文件格式, 可以在 Markdown 文件中直接编写 JSX 代码, 并在浏览器中渲染成 HTML 页面。
- 本项目支持 MDX 文件格式, 你可以在 `docs/markdown` 目录下编写 MDX 文件, 并在浏览器中加载。

##  GitHub Flavored Markdown

- `GFM`: `GitHub Flavored Markdown`, 是 GitHub 对 Markdown 的扩展, 支持代码高亮, 表格, 任务列表等功能。
- 本项目支持 GFM 文件格式, 你可以在 `docs/markdown` 目录下编写 GFM 文件, 并在浏览器中加载。

## Thanks

> - Thanks to: [island.js](https://islandjs.dev/zh/)
> - Thanks to: [vitepress](https://vitepress.vuejs.org/zh/)
> - Thanks to: [vite](https://cn.vitejs.dev/)