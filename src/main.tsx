import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Dynamic import keeps preview contexts out of production and never replaces a server context.
if (import.meta.env.DEV && !window.kcContext) {
  const { getKcContextMock } = await import('./keycloak-theme/login/dev/kcContextMock');
  const pageIds = [
    'login.ftl',
    'register.ftl',
    'login-reset-password.ftl',
    'login-update-password.ftl'
  ] as const;
  const requestedPage = new URLSearchParams(window.location.search).get('page');
  const pageId = pageIds.find(id => id === requestedPage) ?? 'login.ftl';
  window.kcContext = getKcContextMock({ pageId, overrides: {} });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
