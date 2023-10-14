import { createServer } from 'vite';
import { pluginIndexHtml } from './plugin-beaver/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { PACKAGE_ROOT } from './constants';
import { resolveConfig } from './config';
import { pluginConfig } from './plugin-beaver/config';
import { pluginRoutes } from './plugin-routes';

export async function createDevServer(root: string, restartServer: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development');
  return createServer({
    root,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer),
      pluginRoutes({ root: config.root })
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      },
      host: '0.0.0.0'
    }
  });
}
