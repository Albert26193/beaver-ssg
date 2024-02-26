import { createRoot } from 'react-dom/client';
import { App, initPageData } from './app';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from './hooks';
import { setupCopy } from '../theme/logic';
import { HelmetProvider } from 'react-helmet-async';

async function renderInBrowser() {
  const containerEl = document.getElementById('root');
  if (!containerEl) {
    throw new Error('#root element not found');
  }

  const pageData = await initPageData(location.pathname);

  createRoot(containerEl).render(
    <HelmetProvider>
      <DataContext.Provider value={pageData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContext.Provider>
    </HelmetProvider>
  );
}

renderInBrowser().then(() => {
  setTimeout(() => {
    setupCopy();
  });
});
