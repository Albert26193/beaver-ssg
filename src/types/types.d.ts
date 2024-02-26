/// <reference types="vite/client" />

declare module 'beaver:site-data' {
  import type { UserConfig } from 'types';
  const siteData: UserConfig;
  export default siteData;
}

declare module 'beaver:routes' {
  import type { Route } from 'engine/plugin-routes';
  export const routes: Route[];
}
