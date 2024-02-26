import { join } from 'path';

export const PACKAGE_ROOT = join(__dirname, '..');

export const RENDER_PATH = join(PACKAGE_ROOT, 'src', 'render');

export const CLIENT_ENTRY_PATH = join(RENDER_PATH, 'renderClient.tsx');

export const SERVER_ENTRY_PATH = join(RENDER_PATH, 'renderServer.tsx');

export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, 'template.html');

export const MD_REGEX = /\.mdx?$/;
