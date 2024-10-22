# 技术选型

## CSR & SSR

- `CSR`: `Client Side Render`, 客户端渲染。这种方法通过客户端的JavaScript来动态渲染页面内容。执行 `npx beaver dev docs` 启动项目后, 客户端（通常是浏览器）会下载 `docs` 目录下的 `markdown` 文件，然后使用JavaScript将其渲染成HTML页面并展示给用户。这种方式的优点在于用户交互体验好，因为页面的更新不需要重新加载整个页面，但可能对SEO不友好，因为搜索引擎抓取工具可能无法执行JavaScript来获取完整的页面内容。

- `SSR`: `Server Side Render`, 服务端渲染。这种方法在服务器上将页面渲染成HTML，然后直接发送到客户端。执行 `npx beaver build docs` 构建项目后, 会在 `docs/.beaver/dist` 目录下生成静态HTML文件，这些文件可以直接被浏览器加载。服务端渲染的优点是有利于SEO，因为搜索引擎抓取工具可以直接获取到渲染后的页面内容，同时也可以提升首屏加载速度。

- 同构渲染：结合了CSR和SSR的优点，在开发阶段使用 `CSR` 提升开发效率，构建阶段使用 `SSR` 以提升页面加载速度和SEO效果。同构渲染意味着无论在服务器还是客户端，渲染的原理都是相同的，即将 `Markdown` 文件转换成 `HTML` 页面，只是运行的环境不同。

## Vite

- `Vite`: 一个由 `Evan You` 发起的现代前端构建工具，特别设计用于提升前端开发体验。`Vite` 利用浏览器原生ES模块导入特性，实现了快速的冷启动和热更新，无需打包操作就可以直接运行代码。在本项目中，`Vite` 被用于快速构建 `Markdown` 文件，并支持热更新，让开发者能即时预览其更改效果。
- 在开发阶段，`Vite` 作为 `Web Server` 提供服务，允许开发者以极快的速度预览其工作成果。在构建阶段，`Vite` 则负责将项目资源优化打包，支持 `SSR` 功能，以生成用于生产环境的高效代码。

## MDX

- `MDX`: 结合了 `Markdown` 和 `JSX` 的文件格式，允许开发者在Markdown文件中直接使用JSX。这意味着你可以在Markdown文档中嵌入React组件，从而创建出丰富的交互式用户界面。这在编写技术文档或是构建带有交互式示例的教程时特别有用。
- 在本项目中，`MDX` 提供了一种灵活的方式来编写文档，使得文档不仅仅局限于静态内容，还可以包含动态交互元素，极大地提升了文档的表现力和用户体验。

## GitHub Flavored Markdown

- `GFM`: `GitHub Flavored Markdown`，是对传统Markdown的扩展，添加了一些GitHub特有的功能，如代码块语法高亮、任务列表、表格等。这些扩展功能使得Markdown文档能更好地用于项目说明、技术文档等场景。
- 在本项目中，`GFM` 的支持意味着开发者可以在 `docs/markdown` 目录下创建具有高级格式和功能的文档，提升阅读和编写文档的体验。

## Thanks

感谢以下项目对本项目技术选型的启发和帮助：

> - [island.js](https://islandjs.dev/zh/)：一个基于 `Vite` 和 `React` 的现代化静态站点生成器，其设计理念在于提供高效的开发体验和优秀的用户体验。
> - [vitepress](https://vitepress.vuejs.org/zh/)：`Vite` 与 `VuePress` 的结合体，旨在为 `Vite` 社区提供一个轻量级、快速的静态站点生成器。
> - [vite](https://cn.vitejs.dev/)：现代前端构建工具，以其快速的HMR（热模块替换）和按需加载而闻名，大幅提升开发效率。

本项目在设计和实现过程中，汲取了上述项目的精髓，并结合自身特色进行了创新和优化，旨在提供一个高效、易用的文档构建和展示方案。