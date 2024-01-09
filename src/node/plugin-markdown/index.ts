import { Plugin } from 'vite';
import { pluginMdxRollup } from './pluginMdxRollup';
import { pluginMdxHMR } from './pluginMdxHmr';

export async function createPluginMdx(): Promise<Plugin[]> {
  return [await pluginMdxRollup(), pluginMdxHMR()];
}
