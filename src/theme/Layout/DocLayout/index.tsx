import { usePageData, Content } from '@render';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/index';
import styles from './index.module.scss';
import { DocFooter } from '../../components/DocFooter/index';
import { Aside } from '../../components/Aside/index';
import classnames from 'classnames';

export function DocLayout() {
  const { siteData, toc } = usePageData();
  const sidebarData = siteData.themeConfig?.sidebar || {};
  const { pathname } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  const matchedSidebar = sidebarData[matchedSidebarKey] || [];

  return (
    <div>
      <Sidebar
        sidebarData={matchedSidebar}
        pathname={pathname}
      />
      <div className={styles.content}>
        <div className={styles.docContent}>
          <div className="beaver-doc break-words">
            <Content />
          </div>
          <DocFooter />
        </div>
        <div className={styles.asideContainer}>
          <Aside headers={toc} />
        </div>
      </div>
    </div>
  );
}
