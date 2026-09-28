# Working in Pausa

Pausa is a Nuxt authentication starter using Supabase Auth. It runs Nuxt 3.17.3 with the version-4 directory compatibility option and Nuxt UI 3.

- Read [README.md](README.md), then [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md). Follow the relevant form, composable and callback rather than loading the whole project.
- Code questions request an explanation, not edits. Answer in the user's language and cite paths/symbols. Separate source behavior from unverified provider/dashboard configuration.
- `useAuthActions` handles password/email actions; `Auth/Providers.vue` initiates OAuth separately. The Pinia auth store contains form state, not the authoritative session.
- Preserve visible copy and UI unless a change is requested. Do not silently fix auth behavior during documentation or SEO work.
- Keep `bun.lock` and use the existing scripts through Bun. There is no package test/lint/typecheck script; see the guide before claiming checks exist.
- Document only environment names and purpose. Never print credentials, tokens, user metadata or private project identifiers. Supabase configuration changes are outside a code-explanation task.
- Keep `/auth/**` and `/app/**` outside public indexing. Route middleware and `noindex` are not substitutes for server authorization or database policies in future features.

## Documentation upkeep

When commands, routes, storage or important flows change, update the affected section of `docs/REPOSITORY_GUIDE.md` in the same change. Keep this entry short and the Claude/Gemini wrappers importing it.
