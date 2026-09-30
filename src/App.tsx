import { KcPage } from './keycloak-theme/kc.gen';

export default function App() {
  const kcContext = window.kcContext;

  if (!kcContext) {
    return (
      <main className="flex min-h-dvh items-center justify-center p-6">
        <p>This page must be opened through Keycloak.</p>
      </main>
    );
  }

  return <KcPage kcContext={kcContext} />;
}
