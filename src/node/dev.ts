import { createServer } from 'vite';
import { pluginIndexHtml } from './plugin-beaver/indexHtml';
import { PACKAGE_ROOT } from './constants/index';
import pluginReact from '@vitejs/plugin-react';
import { resolveConfig } from './config';

export async function createDevServer(root: string) {
  const config = await resolveConfig(root, 'serve', 'development');
  return createServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      host: '0.0.0.0',
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
