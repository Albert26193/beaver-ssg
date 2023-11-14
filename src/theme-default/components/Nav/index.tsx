import styles from './index.module.scss';
import { NavItemWithLink } from 'shared/types';
import { usePageData } from '@runtime';
import { SwitchAppearance } from '../SwitchAppearance';

export function MenuItem(item: NavItemWithLink) {
  return (
    <div className="text-sm font-medium mx-3">
      <a
        href={item.link}
        className={styles.link}
      >
        {item.text}
      </a>
    </div>
  );
}

export function Nav() {
  const { siteData } = usePageData();
  const nav = siteData.themeConfig.nav || [];
  return (
    <header
      fixed="~"
      pos="t-0 l-0"
      w="full"
      z="10"
    >
      <div
        flex="~"
        items="center"
        justify="between"
        className={`h-14 divider-bottom ${styles.nav}`}
      >
        <div>
          <a
            href="/"
            hover="opacity-60"
            className="w-full h-full text-1rem font-semibold flex items-center"
          >
            beaver.js
          </a>
        </div>
        <div
          flex="~"
          className="mr-4"
        >
          {/* 普通菜单 */}
          <div
            flex="~"
            className="mr-8"
          >
            {nav.map((item) => (
              <MenuItem
                {...item}
                key={item.text}
              />
            ))}
          </div>
          <div
            flex="~"
            className="mr-4"
          >
            <SwitchAppearance />
          </div>
          <div
            className={styles.socialLinkIcon}
            ml="2"
          >
            <a href="https://www.github.com">
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
