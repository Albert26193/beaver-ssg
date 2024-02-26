import { RouteService } from './RouteService';
import { describe, expect, test } from 'vitest';
import path from 'path';

describe('RouteService', async () => {
  const testDir = path.join(__dirname, 'demo');
  const routeService = new RouteService(testDir);
  await routeService.init();

  test('conventional route by file structure', async () => {
    const routeMeta = routeService.getRouteMeta().map((item) => ({
      ...item,
      absolutePath: item.absolutePath.replace(testDir, 'TEST_DIR')
    }));
    expect(routeMeta).toMatchInlineSnapshot(`
      [
        {
          "absolutePath": "TEST_DIR/markdown/a.mdx",
          "routePath": "/a",
        },
        {
          "absolutePath": "TEST_DIR/markdown/guide/b.mdx",
          "routePath": "/guide/b",
        },
      ]
    `);
  });
});
