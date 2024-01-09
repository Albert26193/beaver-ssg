import { relative, join } from 'path';
import { Plugin } from 'vite';
import { SiteConfig } from 'shared/types/index';
import { PACKAGE_ROOT } from '../../node/constants';
import sirv from 'sirv';

const SITE_DATA_ID = 'beaver:site-data';

export function pluginConfig(config: SiteConfig, restartServer?: () => Promise<void>): Plugin {
  // let server: ViteDevServer | null = null;
  return {
    name: 'beaver:config',
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            '@runtime': join(PACKAGE_ROOT, 'src', 'runtime', 'index.ts')
          }
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly'
          }
        }
      };
    },
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    configureServer(server) {
      const publicDir = join(config.root, 'markdown/public');
      server.middlewares.use(sirv(publicDir));
    },

    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath];
      const include = (id: string) => customWatchedFiles.some((file) => id.includes(file));

      if (include(ctx.file)) {
        console.log(`\n${relative(config.root, ctx.file)} changed, restarting server...`);
        await restartServer!();
      }
    }
  };
}
