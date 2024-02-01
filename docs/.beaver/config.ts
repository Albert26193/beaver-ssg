// docs/config.ts
import { defineConfig } from '../../dist';

export default defineConfig({
  title: "xxx",
  themeConfig: {
    nav: [
      { text: "Homepage", link: "/" },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'guide',
          items: [
            {
              text: 'a',
              link: '/guide/a'
            },
            {
              text: 'b',
              link: '/guide/b'
            },
            {
              text: 'c',
              link: '/guide/c'
            },
            {
              text: 'd',
              link: 'guide/demo/d'
            },
            {
              text: 'e',
              link: 'guide/demo/demo2/e'
            },
            {
              text: 'm',
              link: 'guide/m'
            },
            {
              text: 'd',
              link: 'guide/demo/d'
            },
            {
              text: 'e',
              link: 'guide/demo/demo2/e'
            },
            {
              text: 'e',
              link: 'guide/demo/demo2/e'
            },
          ]
        }
      ],
      '/new/': [
        {
          text: 'new',
          items: [
            {
              text: '1',
              link: 'new/1'
            },
            {
              text: '2',
              link: 'new/2'
            },
          ]
        }
      ],
    }
  },
});