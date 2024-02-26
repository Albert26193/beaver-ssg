import { pluginIndexHtml } from './plugin-beaver/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { pluginConfig } from './plugin-beaver/config';
import { pluginRoutes } from './plugin-routes';
import { SiteConfig } from 'types';
import { createPluginMdx } from './plugin-markdown';
import pluginUnocss from 'unocss/vite';
import options from './unocssOptions';

export function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginUnocss(options),
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic'
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
      isSSR
    }),
    createPluginMdx()
  ];
}
