import type { JSX } from 'keycloakify/tools/JSX';
import type { KcClsx } from 'keycloakify/login/lib/kcClsx';
import { useIsPasswordRevealed } from 'keycloakify/tools/useIsPasswordRevealed';
import type { I18n } from '../i18n';

export default function PasswordField(props: {
  kcClsx: KcClsx;
  i18n: I18n;
  passwordInputId: string;
  children: JSX.Element;
}) {
  const { kcClsx, i18n, passwordInputId, children } = props;

  const { msgStr } = i18n;

  const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({
    passwordInputId
  });

  return (
    <div className={kcClsx('kcInputGroup')}>
      {children}
      <button
        type="button"
        className={kcClsx('kcFormPasswordVisibilityButtonClass')}
        aria-label={msgStr(isPasswordRevealed ? 'hidePassword' : 'showPassword')}
        aria-controls={passwordInputId}
        aria-pressed={isPasswordRevealed}
        onClick={toggleIsPasswordRevealed}
      >
        <svg
          className={kcClsx(
            isPasswordRevealed
              ? 'kcFormPasswordVisibilityIconHide'
              : 'kcFormPasswordVisibilityIconShow'
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      </button>
    </div>
  );
}
