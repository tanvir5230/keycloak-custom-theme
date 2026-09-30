import { Suspense, lazy } from 'react';
import type { ClassKey } from 'keycloakify/login';
import type { KcContext } from './KcContext';
import { useI18n } from './i18n';
import DefaultPage from 'keycloakify/login/DefaultPage';
import Template from 'keycloakify/login/Template';
const UserProfileFormFields = lazy(
  () => import('keycloakify/login/UserProfileFormFields')
);

const Login = lazy(() => import('./pages/Login'));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;

  const { i18n } = useI18n({ kcContext });

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case 'login.ftl':
            return (
              <Login
                {...{ kcContext, i18n, classes }}
                Template={Template}
                doUseDefaultCss={false}
              />
            );
          //   case 'register.ftl':
          default:
            return (
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                classes={classes}
                Template={Template}
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

const classes = {
  kcBodyClass: 'bg-surface',
  kcLoginClass:
    'h-screen w-screen overflow-hidden flex flex-col justify-center items-center',
  kcHeaderClass: 'hidden',
  kcFormHeaderClass: 'hidden'
} satisfies { [key in ClassKey]?: string };
