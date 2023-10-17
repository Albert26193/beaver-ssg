import { Plugin } from 'vite';
import { pluginMdxRollup } from './pluginMdxRollup';

export async function createPluginMdx(): Promise<Plugin[]> {
  return [await pluginMdxRollup()];
}
