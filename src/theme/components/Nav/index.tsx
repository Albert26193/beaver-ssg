import styles from './index.module.scss';
import { NavItemWithLink, PageType } from 'types';
import { usePageData } from '@render';
import { SwitchAppearance } from '../SwitchAppearance';
import classnames from 'classnames';

type IProps = {
  pageType?: 'default' | PageType;
};

const pageTypes = {
  default: '',
  doc: styles.headerDoc
};

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

export function Nav(props?: IProps) {
  const { siteData } = usePageData();
  const nav = siteData.themeConfig.nav || [];
  const pageTypeClassname = pageTypes[props.pageType] ?? 'default';

  return (
    <header
      fixed="~"
      pos="t-0 l-0"
      w="full"
      z="10"
      className={classnames(styles.header, pageTypeClassname)}
    >
      <div
        flex="~"
        items="center"
        justify="between"
        className={classnames(styles.nav, 'h-14')}
      >
        <div
          className={classnames(
            'h-full',
            'flex',
            'items-center',
            'justify-center',
            styles.titleBlock
          )}
        >
          <a
            href="/"
            hover="opacity-60"
            className={classnames(
              styles.title,
              'flex',
              'items-center',
              'w-full',
              'h-full',
              'text-1rem',
              'font-semibold'
            )}
          >
            beaver.js
          </a>
        </div>
        <div
          flex="~"
          className={classnames(styles.menu, 'h-full', 'flex-1', 'items-center', 'justify-right')}
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
