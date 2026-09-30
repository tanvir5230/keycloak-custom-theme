import DefaultTemplate from 'keycloakify/login/Template';
import type { TemplateProps } from 'keycloakify/login/TemplateProps';
import type { KcContext } from './KcContext';
import type { I18n } from './i18n';
import { Logo } from '../components/Logo';

/** Shared branding; preserve upstream server messages and alternate authentication. */
export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { headerNode, kcContext, i18n } = props;

  return (
    <div className="auth-theme relative min-h-dvh bg-surface" data-page-id={kcContext.pageId}>
      {i18n.enabledLanguages.length > 1 && (
        <nav className="absolute top-4 right-4 z-10" aria-label={i18n.msgStr('languages')}>
          <label htmlFor="auth-locale" className="sr-only">
            {i18n.msg('languages')}
          </label>
          <select
            id="auth-locale"
            className="cursor-pointer rounded-sm border border-stroke bg-surface px-3 py-2 text-body-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            value={i18n.currentLanguage.languageTag}
            onChange={event => {
              const language = i18n.enabledLanguages.find(language => language.languageTag === event.target.value);
              if (language) window.location.assign(language.href);
            }}
          >
            {i18n.enabledLanguages.map(language => (
              <option key={language.languageTag} value={language.languageTag}>
                {language.label}
              </option>
            ))}
          </select>
        </nav>
      )}
      <DefaultTemplate
        {...props}
        bodyClassName="bg-surface"
        i18n={{ ...i18n, enabledLanguages: [] }}
        headerNode={
          <>
            <Logo />
            {headerNode}
            {kcContext.pageId === 'login.ftl' && (
              <span className="mt-2 block text-body-1 font-regular text-foreground-secondary">{i18n.msg('signInDescription')}</span>
            )}
          </>
        }
      />
    </div>
  );
}
