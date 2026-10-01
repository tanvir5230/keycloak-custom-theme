/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from 'keycloakify/login';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      signInDescription: 'Enter your credentials to sign in to your account.',
      loadingTheme: 'Loading…',
      usernamePlaceholder: 'Enter your username',
      usernameOrEmailPlaceholder: 'Enter your username or email',
      emailPlaceholder: 'Enter your email address',
      passwordPlaceholder: 'Enter your password',
      newPasswordPlaceholder: 'Enter your new password',
      confirmPasswordPlaceholder: 'Confirm your new password',
      firstNamePlaceholder: 'Enter your first name',
      lastNamePlaceholder: 'Enter your last name'
    },
    tr: {
      signInDescription: 'Hesabınıza giriş yapmak için bilgilerinizi girin.',
      loadingTheme: 'Yükleniyor…',
      usernamePlaceholder: 'Kullanıcı adınızı girin',
      usernameOrEmailPlaceholder: 'Kullanıcı adınızı veya e-posta adresinizi girin',
      emailPlaceholder: 'E-posta adresinizi girin',
      passwordPlaceholder: 'Şifrenizi girin',
      newPasswordPlaceholder: 'Yeni şifrenizi girin',
      confirmPasswordPlaceholder: 'Yeni şifrenizi tekrar girin',
      firstNamePlaceholder: 'Adınızı girin',
      lastNamePlaceholder: 'Soyadınızı girin'
    }
  })
  .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
