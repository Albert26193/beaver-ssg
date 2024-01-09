import fs from 'fs-extra';
import path from 'path';
import fastGlob from 'fast-glob';
import { normalizePath } from 'vite';

async function getMarkdownFiles(markdownDirectory) {
  return fastGlob.sync(['**/*.{md,mdx,jsx,tsx,js,ts}'], {
    cwd: markdownDirectory,
    absolute: true,
    ignore: ['**/node_modules/**', '**/build/**', 'config.ts', '**/public/**']
  }).sort();
}

async function generateItems(filePath, markdownFiles, markdownDirectory) {
  let items = '';
  for (const file of markdownFiles) {
    if (path.dirname(file) === filePath) {
      const parsedPath = path.parse(file);
      const name = parsedPath.name;
      // 使用从 markdownDirectory 到文件的完整相对路径
      const fileRelativePath = normalizePath(path.relative(markdownDirectory, file));
      items += `
            {
              text: '${name}',
              link: '/${fileRelativePath.replace(parsedPath.ext, '')}'
            },`;
    }
  }

  const directories = await fs.readdir(filePath, { withFileTypes: true });
  
  for (const dirent of directories) {
    if (dirent.name === 'public') {
      continue;
    }

    if (dirent.isDirectory()) {
      items += await generateItems(path.join(filePath, dirent.name), markdownFiles, markdownDirectory);
    }
  }

  return items;
}

async function generateConfig() {
  const projectRoot = process.cwd();
  const markdownDirectory = path.join(projectRoot, 'markdown');
  const markdownFiles = await getMarkdownFiles(markdownDirectory);
  let sidebarConfig = '';

  const directories = await fs.readdir(markdownDirectory, { withFileTypes: true });
  for (const dirent of directories) {
    if (dirent.name === 'public') {
      continue;
    }
    
    if (dirent.isDirectory()) {
      const directoryPath = path.join(markdownDirectory, dirent.name);
      const items = await generateItems(directoryPath, markdownFiles, markdownDirectory);
      sidebarConfig += `
      '/${dirent.name}/': [
        {
          text: '${dirent.name}',
          items: [${items}
          ]
        }
      ],`;
    }
  }

  const configContent = `// docs/config.ts
import { defineConfig } from '../../dist';

export default defineConfig({
  title: "xxx",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
    ],
    sidebar: {${sidebarConfig}
    }
  },
});`;

  await fs.writeFile('.beaver/default-config.ts', configContent);

  // console.log(configContent);
}

generateConfig().catch(err => console.error(err));
