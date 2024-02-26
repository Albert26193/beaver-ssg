import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 500001,
  webServer: {
    url: 'http://0.0.0.0:5173',
    command: 'pnpm prepare:e2e'
  },
  use: {
    headless: true
  }
};

export default config;
