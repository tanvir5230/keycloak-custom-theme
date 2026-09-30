import { Suspense, lazy } from 'react';
import DefaultPage from 'keycloakify/login/DefaultPage';
import DefaultTemplate from 'keycloakify/login/Template';
import type { KcContext } from './KcContext';
import { useI18n } from './i18n';
import Template from './Template';
import { classes } from './classes';
import '../../App.css';

const UserProfileFormFields = lazy(() => import('./UserProfileFormFields'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const LoginResetPassword = lazy(() => import('./pages/LoginResetPassword'));
const LoginUpdatePassword = lazy(() => import('./pages/LoginUpdatePassword'));

const doMakeUserConfirmPassword = true;

export default function KcPage({ kcContext }: { kcContext: KcContext }) {
  const { i18n } = useI18n({ kcContext });
  const sharedProps = { i18n, classes, Template, doUseDefaultCss: false };

  return (
    <Suspense fallback={<p role="status">{i18n.msg('loadingTheme')}</p>}>
      {(() => {
        switch (kcContext.pageId) {
          case 'login.ftl':
            return <Login {...sharedProps} kcContext={kcContext} />;
          case 'register.ftl':
            return (
              <Register
                {...sharedProps}
                kcContext={kcContext}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
              />
            );
          case 'login-reset-password.ftl':
            return <LoginResetPassword {...sharedProps} kcContext={kcContext} />;
          case 'login-update-password.ftl':
            return <LoginUpdatePassword {...sharedProps} kcContext={kcContext} />;
          default:
            // Preserve working OTP, passkey, verification, and other flows as pages are customized incrementally.
            return (
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                Template={DefaultTemplate}
                doUseDefaultCss={true}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
              />
            );
        }
      })()}
    </Suspense>
  );
}
