import { KcPage, type KcContext } from './keycloak-theme/kc.gen';
import './App.css';

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase

import { getKcContextMock } from './keycloak-theme/login/KcPageStory';

if (import.meta.env.DEV) {
  window.kcContext = getKcContextMock({
    pageId: 'login.ftl',
    overrides: {}
  });
}

const App = () => {
  if (!window.kcContext) {
    return (
      <div className="bg-amber-50 h-screen w-screen overflow-hidden flex justify-center items-center">
        <h1 className="text-2xl">No Keycloak Context</h1>
      </div>
    );
  } else {
    return <KcPage kcContext={window.kcContext} />;
  }
};

export default App;

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}
