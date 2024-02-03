# fizzbuzzjs

Tiny app showcasing a collection of tools wired up.

## Bootstrap for Development
* Install runtime manager with `proto`: https://moonrepo.dev/docs/proto/install
* Install node: `proto install node lts`
* Install bun: `proto install bun`
* Install dependencies in the project root with `bun install`

Backend: [Hono](https://hono.dev/) + [tsx](https://github.com/privatenumber/tsx)
Frontend: [React](https://react.dev/) + [Vite](https://vitejs.dev/)

Wishlist:

* [node-config](https://github.com/node-config/node-config) + Zod for configuration validation
* [Drizzle](https://orm.drizzle.team/docs/overview) + Postgresql 
* SSR? [Remix SSR](https://remix.run/)
* SPA? Remix [SPA mode](https://remix.run/docs/en/main/future/spa-mode)
* [Hono RPC Mode + Zod OpenAPI](https://hono.dev/snippets/zod-openapi)
* [Readme.com developer hub](https://readme.com/)
* GCP [Cloudrun](https://cloud.google.com/run?hl=en)

Next Steps:

* [ ] Prettier
* [ ] Implement fizzbuzz endpoint on backend
* [ ] Connect frontend to backend with Hono RPC
* [ ] Container to ship backend and frontend to Cloudrun
* [ ] CI/CD pipeline
