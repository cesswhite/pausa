# Pausa repository guide

## Purpose and reading order

Pausa is a minimal authentication starter with email/password, magic-link, recovery and Google/GitHub provider entry points. It demonstrates a landing page, auth forms and guarded dashboard/settings pages. It is not a complete business backend or an admin-role system.

Read the [README](../README.md), then follow one flow below. Answers should cite file paths and symbols in the user's language, distinguish source behavior from external configuration and leave code unchanged when the request is only a question. No separate product-marketing context is checked in.

## Code map

| Entry | Responsibility |
| --- | --- |
| [nuxt.config.ts](../nuxt.config.ts) | Supabase/Pinia/UI modules, public site URL, compatibility mode, type checking and private-route robots headers. |
| [app/app.vue](../app/app.vue) | Nuxt/UI shell, favicon behavior, public-home canonical/schema and auth/app robots metadata. |
| [app/pages/index.vue](../app/pages/index.vue) and [app/components/Landing/](../app/components/Landing/) | Public presentation; an existing access-token session triggers dashboard navigation. |
| [app/composables/useAuthActions.ts](../app/composables/useAuthActions.ts) | `signInWithPassword`, `signUpWithEmail`, `sendMagicLink`, `sendPasswordReset`, `updatePassword`, `signOut`. |
| [app/components/Auth/](../app/components/Auth/) | Form components; `Providers.vue` calls `signInWithOAuth` independently for Google/GitHub. |
| [app/pages/auth/confirm.vue](../app/pages/auth/confirm.vue) and [app/pages/auth/reset-password.vue](../app/pages/auth/reset-password.vue) | OTP confirmation and recovery landing behavior. |
| [app/stores/auth.ts](../app/stores/auth.ts) and [app/composables/useFormValidation.ts](../app/composables/useFormValidation.ts) | Transient nested form `state`, `resetState` and field validation. |
| [app/middleware/auth.ts](../app/middleware/auth.ts) and [app/pages/app/](../app/pages/app/) | Dashboard/settings route guard based on `useSupabaseUser`. |
| [app/components/Settings/ResetPassword.vue](../app/components/Settings/ResetPassword.vue) | Password update followed by sign-out. |
| [app/layouts/](../app/layouts/) and [app/components/Dashboard/Sidebar/](../app/components/Dashboard/Sidebar/) | Default/auth/dashboard composition, navigation and Supabase user display. |
| [package.json](../package.json), [bun.lock](../bun.lock) and [tsconfig.json](../tsconfig.json) | Pinned Nuxt/UI versions, dependencies, scripts and generated Nuxt type configuration. |
| [public/robots.txt](../public/robots.txt), [public/sitemap.xml](../public/sitemap.xml) and [public/llms.txt](../public/llms.txt) | Crawler policy, public homepage discovery and optional product context. |

## Authentication and data flow

Forms hold input in the Pinia store's nested `state` object and delegate to `useAuthActions`. Supabase manages the session; the form store does not. Password sign-in shows feedback and then navigates to `/app/dashboard`. Sign-up and magic-link requests build a confirmation URL using runtime `public.siteUrl`; recovery targets `/auth/reset-password/`. `sendMagicLink` defaults to not creating a new user.

`auth/confirm.vue` explicitly calls `verifyOtp` only when both `token_hash` and `type` are present. Successful recovery goes to settings; other supported confirmations go to the dashboard. Do not describe this page as a universal handler for all possible callback formats.

Google/GitHub buttons call `signInWithOAuth` with the literal relative `redirectTo: '/app/dashboard'`. That is distinct from the absolute URLs assembled by `useAuthActions`. Actual provider success depends on the external Supabase/OAuth configuration and must be tested when auth work is requested; this guide does not change that implementation.

The named `auth` middleware redirects unauthenticated dashboard/settings navigation to `/`. It is a route guard, not a database policy. No application database tables, migrations, server API, role management or cloud profile editor are implemented here; `server/tsconfig.json` is only configuration.

## Setup and exact scripts

The project uses Nuxt `3.17.3`, Nuxt UI `3.1.2`, `@nuxtjs/supabase` `1.5.1` and Pinia. `future.compatibilityVersion: 4` enables the `app/` directory convention; it does not change the installed Nuxt major version. Use Node 22 or a compatible supported runtime, Bun and the committed `bun.lock`. `package.json` does not pin a Bun version. Install with `bun install --frozen-lockfile`.

| Command | Exact package script |
| --- | --- |
| `bun run dev` | `nuxt dev` |
| `bun run build` | `nuxt build` |
| `bun run preview` | `nuxt preview` |
| `bun run generate` | `nuxt generate` |
| `bun run postinstall` | `nuxt prepare` |

There are no package scripts named `test`, `lint` or `typecheck`, and no checked-in GitHub Actions workflows. `typescript.typeCheck: true` enables Nuxt's type checking during build; `bunx nuxt typecheck` is also a direct CLI command, not a package script. Documentation-only edits need link/script/diff inspection, not an auth transaction or new build.

Build output depends on Nitro's deployment preset. For the Node server preset it is `.output/`, started with `node .output/server/index.mjs`; static generation is a separate choice and requires checking auth redirects on the target host. Do not deploy an assumed `dist/` folder.

## Environment and external configuration

| Name | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project endpoint consumed by the module. |
| `SUPABASE_KEY` | Browser-compatible project key for Auth, never a privileged server key. |
| `NUXT_SITE_URL` | Origin used by `useAuthActions` to build email/recovery redirects. |

Only names and purpose belong in repository guidance. Configure provider credentials and allowed redirect URLs through the provider/Supabase settings without copying account IDs, keys or tokens into docs. Use Supabase's current [Google](https://supabase.com/docs/guides/auth/social-login/auth-google) and [GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github) guides; the repository cannot prove those settings are correct.

`nuxt.config.ts` references `./types/database.types`, but that generated file is not checked in. Do not claim the app contains a generated, verified database schema. If future database work needs types, first define and inspect that scope rather than inventing a schema in this documentation task.

## SEO, privacy and limitations

Only `/` is included in the sitemap and receives public schema/canonical at `https://pausa.ecostudios.dev/`. Auth and application routes have `noindex` metadata/headers. Never add login callbacks, token-bearing URLs, user data or app routes to public discovery files. `noindex` is not authentication.

`llms.txt` summarizes the public product, not its internal implementation. It is optional context and does not guarantee rankings, indexing or AI citations. Form validation in source is not a general-purpose sanitization layer. A passing build does not verify email delivery, OAuth settings, callback formats or all recovery flows. Preserve UI and visible copy during documentation/SEO changes.

## Four example questions

- **What happens when someone signs in with a password?** Follow `Auth/SignIn.vue`, `useFormValidation`, `useAuthActions.signInWithPassword` and `app/middleware/auth.ts`.
- **Why do OAuth and email links return to different paths?** Compare `Auth/Providers.vue`, `useAuthActions` and `pages/auth/confirm.vue`; identify provider settings that cannot be inferred locally.
- **Where is user state stored?** Compare `stores/auth.ts` form fields, `useSupabaseUser` in the middleware and `Dashboard/Sidebar/HandleUser.vue`.
- **Which pages may appear in search?** Read `app/app.vue`, the route rules in `nuxt.config.ts` and `public/sitemap.xml`; keep indexing separate from access control.
