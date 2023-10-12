import { createServer as createViteDevServer } from 'vite';
import { pluginIndexHtml } from './plugin-beaver/indexHtml';
import pluginReact from '@vitejs/plugin-react';

export async function createDevServer(root: string) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      host: '0.0.0.0'
    }
  });
}
