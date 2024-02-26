import { usePageData, Content } from '@render';
import { Nav } from '../components/Nav';
import '../styles/base.css';
import '../styles/vars.css';
import '../styles/doc.css';
import 'uno.css';
import { HomeLayout } from './HomeLayout/index';
import { DocLayout } from './DocLayout';
import { NotFoundLayout } from './NotFoundLayout';
import { Helmet } from 'react-helmet-async';

export function Layout() {
  const pageData = usePageData();
  const { pageType, title } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return <DocLayout />;
    } else {
      return <NotFoundLayout />;
    }
  };
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav pageType={pageType} />
      <section
        style={{
          paddingTop: 'var(--beaver-nav-height)'
        }}
      >
        {getContent()}
      </section>
    </div>
  );
}
