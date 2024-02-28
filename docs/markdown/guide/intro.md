# 🚀️ Quick Start

## 1. 安装

- 首先，请确保你已经安装了 [Node.js](https://nodejs.org/en/) (>=18.0) 和 [npm](https://www.npmjs.com/)。
- 更加推荐使用 [pnpm](https://pnpm.js.org/) 作为包管理器。

```bash
# 创建目录，将 [demo] 替换成你的项目名称
git clone https://github.com/Albert26193/beaver-ssg.git [demo] &&
cd [demo] 

# 安装依赖，推荐使用 pnpm
pnpm install

# 构建项目
pnpm dev

# 启动项目, 默认端口 5173
npx beaver dev docs
```

## 2. 配置 

### 2.1 初始化
- 项目的文件存放目录为 `docs`，目录结构如下：

```text
./docs
├── .beaver   # 放置项目的配置文件
├── markdown  # 放置需要渲染的文档文件
└── public    # 放置图片等资源文件
```

### 2.2 配置文件

- 配置文件位置为 `[demo]/docs/.beaver/config.ts`，配置文件的格式如下：
- 你可以在配置文件中设置 `title`、`sidebar` 等选项。
```ts
export default defineConfig({
  title: "Beaver-SSG",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/使用说明" },
    ],
    sidebar: {
      '/guide': [
        {
          text: '教程',
          items: [
            {
              text: '使用说明',
              link: '/guide/使用说明'
            },
            {
              text: '技术选型',
              link: '/guide/技术选型'
            },
            {
              text: '功能特性',
              link: '/guide/功能特性'
            },
          ]
        }
      ]
    }
  },
});
```

## 3. 构建

- 项目的构建命令为 `npx beaver build docs`，构建后的文件存放在 `docs/build` 目录下。

```bash
# 构建内容站点
npx beaver build docs
```

- 构建出来的内容就是文档站点，可以用 `nginx` 或者 `github pages` 等静态服务器进行部署。
