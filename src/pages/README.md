# README

> Why this structure?

Treat each page like a standalone application, applying the idea of turbo repo.

> Structure proposal

- page-name.tsx
- index.ts: expose index page of this folder
- components: components used for the current folder only
- utils: utils used for the current folder only
- services: HTTP request related services for this folder only
- queries: react query-related hooks for this folder only
