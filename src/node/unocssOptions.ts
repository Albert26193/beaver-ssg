import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind, presetIcons } from 'unocss';

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--beaver-c-divider-light)'
      })
    ]
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  theme: {
    colors: {
      brandLight: 'var(--beaver-c-brand-light)',
      brandDark: 'var(--beaver-c-brand-dark)',
      brand: 'var(--beaver-c-brand)',
      text: {
        1: 'var(--beaver-c-text-1)',
        2: 'var(--beaver-c-text-2)',
        3: 'var(--beaver-c-text-3)',
        4: 'var(--beaver-c-text-4)'
      },
      divider: {
        default: 'var(--beaver-c-divider)',
        light: 'var(--beaver-c-divider-light)',
        dark: 'var(--beaver-c-divider-dark)'
      },
      gray: {
        light: {
          1: 'var(--beaver-c-gray-light-1)',
          2: 'var(--beaver-c-gray-light-2)',
          3: 'var(--beaver-c-gray-light-3)',
          4: 'var(--beaver-c-gray-light-4)'
        }
      },
      bg: {
        default: 'var(--beaver-c-bg)',
        soft: 'var(--beaver-c-bg-soft)',
        mute: 'var(--beaver-c-bg-mute)'
      }
    }
  }
};

export default options;
