import { usePageData } from '@render';
import { useLocation } from 'react-router-dom';
import { SidebarItem } from 'types';

export function usePrevNextPage() {
  const { pathname } = useLocation();
  const { siteData } = usePageData();
  const sidebar = siteData.themeConfig?.sidebar || {};
  const flattenTitles: SidebarItem[] = [];

  Object.keys(sidebar).forEach((key) => {
    const groups = sidebar[key] || [];
    groups.forEach((group) => {
      group.items.forEach((item) => {
        flattenTitles.push(item);
      });
    });
  });

  const pageIndex = flattenTitles.findIndex((item) => item.link === pathname);

  const prevPage = flattenTitles[pageIndex - 1] || null;
  const nextPage = flattenTitles[pageIndex + 1] || null;

  return {
    prevPage,
    nextPage
  };
}
