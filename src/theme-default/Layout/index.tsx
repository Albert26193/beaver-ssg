import { usePageData, Content } from '../../runtime';
import { Nav } from '../components/Nav';
import '../styles/base.css';
import '../styles/vars.css';
import 'uno.css';
import { HomeLayout } from './HomeLayout/index';
import { DocLayout } from './DocLayout';

export function Layout() {
  const pageData = usePageData();
  const { pageType } = pageData;
  const getContent = () => {
    // return <Content />;
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return <DocLayout />;
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div>
      <Nav />
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
