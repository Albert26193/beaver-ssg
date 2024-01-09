import fs from 'fs-extra';
import path from 'path';
import fastGlob from 'fast-glob';
import { normalizePath } from 'vite';

async function getMarkdownFiles(root: string, markdownDirectory: string) {
  return fastGlob
    .sync(['**/*.{md,mdx,jsx,tsx,js,ts}'], {
      cwd: markdownDirectory,
      absolute: true,
      ignore: ['**/node_modules/**', '**/build/**', 'config.ts', '**/public/**']
    })
    .map((file) => path.relative(path.join(root, 'markdown'), file))
    .sort();
}

async function generateItems(filePath, markdownFiles, markdownDirectory) {
  let items = '';

  for (const file of markdownFiles) {
    if (file.startsWith(path.relative(markdownDirectory, filePath))) {
      const parsedPath = path.parse(file);
      const name = parsedPath.name;
      const targetLink = file.replace(parsedPath.ext, '');
      items += `
            {
              text: '${name}',
              link: '${targetLink}'
            },`;
    }
  }

  const directories = await fs.readdir(filePath, { withFileTypes: true });

  for (const dirent of directories) {
    if (dirent.name === 'public') {
      continue;
    }

    if (dirent.isDirectory()) {
      items += await generateItems(
        path.join(filePath, dirent.name),
        markdownFiles,
        markdownDirectory
      );
    }
  }

  return items;
}

export async function generateConfig(root: string) {
  const markdownDirectory = path.join(root, 'markdown');
  const markdownFiles = await getMarkdownFiles(root, markdownDirectory);
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
      { text: "Homepage", link: "/" },
    ],
    sidebar: {${sidebarConfig}
    }
  },
});`;

  await fs.writeFile(path.join(root, '.beaver/default-config.ts'), configContent);
}

// generateConfig().catch((err) => console.error(err));
