# Server x Edge Library Example

[`@cross-platform-tools/vite-plugin`](https://www.npmjs.com/package/@cross-platform-tools/vite-plugin) example of server + edge library setup

[Open in Stackblitz](https://stackblitz.com/~/github.com/saurabhdaware/server-edge-library?view=editor)

## Run Example

```sh
cd packages/server-edge-app
pnpm server # Runs the run.js with server bundle of library
pnpm edge # Runs the run.js with edge bundle of library
```

## Build Library

```sh
cd packages/server-edge-library
pnpm build # Builds server, edge, and types
```

## Run Library Tests

```sh
cd packages/server-edge-library
pnpm test
```

