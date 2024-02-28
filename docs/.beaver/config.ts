// docs/config.ts
import { defineConfig } from '../../dist';

export default defineConfig({
  title: "Beaver-SSG",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/intro" },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '教程',
          items: [
            {
              text: '使用说明',
              link: '/guide/intro'
            },
            {
              text: '技术选型',
              link: '/guide/tech'
            },
            {
              text: '功能特性',
              link: '/guide/feature'
            },
          ]
        }
      ]
    }
  },
});
