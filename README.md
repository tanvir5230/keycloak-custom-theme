# Keycloak custom theme

- React + TypeScript + Tailwind CSS v4, built with Keycloakify. The theme name is
  `serious-dev`. This project customizes the login theme: login, signup, forgotten password, and choosing a new password.
- The account console and email templates are separate theme types and are not implemented here.

## Where to make changes

| Change                                      | File                                                               |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Brand colors, typography etc.               | `src/styles/tokens.css`                                            |
| Shared card, fields, buttons, errors, links | `src/keycloak-theme/login/styles/auth.css`                         |
| Logo                                        | `src/assets/logo.png` and `src/keycloak-theme/components/Logo.tsx` |
| Shared heading/branding layout              | `src/keycloak-theme/login/Template.tsx`                            |
| Login form markup                           | `src/keycloak-theme/login/pages/Login.tsx`                         |
| UI copy and translations                    | `src/keycloak-theme/login/i18n.ts`                                 |
| Add a custom screen                         | `src/keycloak-theme/login/pages/` and `KcPage.tsx`                 |

`Register` re-exports Keycloakify's maintained registration page.
`LoginResetPassword`, `LoginUpdatePassword`, and `UserProfileFormFields` are local copies of the upstream components with localized placeholders. They use the shared custom Template and styles. This preserves profile attributes, password policy errors,
terms, CAPTCHA, and action cancellation without duplicating the form logic.

When you need to change one of those pages' JSX, run:

```sh
pnpm exec keycloakify eject-page
```

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm storybook
```

The Vite preview defaults to login. Open these URLs to preview other screens:

- `http://localhost:5173/?page=register.ftl`
- `http://localhost:5173/?page=login-reset-password.ftl`
- `http://localhost:5173/?page=login-update-password.ftl`

Preview selection only runs in development, and it never replaces an existing
server-provided context. These mock screens do not perform real authentication.
Storybook includes login with invalid credentials, social providers, registration,
and a hidden username, plus the other three pages. Use its viewport controls to
check narrow screens, scrolling, and keyboard focus.

## Validation and packaging

```sh
pnpm lint
pnpm build
pnpm exec storybook build
pnpm build-keycloak-theme
```

- Theme packaging requires Java and Apache Maven (`mvn` available on PATH). Generated JARs go into `dist_keycloak/`.
- Choose the JAR compatible with your Keycloak version, install it in the server's `providers/` directory, rebuild/restart Keycloak as your deployment requires, then select `serious-dev` under the realm's Login Theme setting.
- Do not edit `kc.gen.tsx` or `public/keycloakify-dev-resources/`; these are generated or managed by Keycloakify. Commit the lockfile and use frozen installs in CI.
