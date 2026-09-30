/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from 'keycloakify/login';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      signInDescription: 'Enter your credentials to access your account.',
      loadingTheme: 'Loading…',
      usernamePlaceholder: 'Enter your username',
      usernameOrEmailPlaceholder: 'Enter your username or email',
      emailPlaceholder: 'name@example.com',
      passwordPlaceholder: 'Enter your password',
      newPasswordPlaceholder: 'Enter a new password',
      confirmPasswordPlaceholder: 'Confirm your password',
      firstNamePlaceholder: 'Enter your first name',
      lastNamePlaceholder: 'Enter your last name'
    }
  })
  .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
