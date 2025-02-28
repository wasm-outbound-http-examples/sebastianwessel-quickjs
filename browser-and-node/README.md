# Use sebastianwessel/quickjs to send HTTP(s) requests from inside WASM

## Instructions for this devcontainer

Tested with Node 22.14.0, Bun 1.2.4, Deno 2.2.2, sebastianwessel/quickjs [v2.0.1](https://github.com/sebastianwessel/quickjs/tree/v2.0.1/).

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

### Installation

1. `cd` into the folder of this example:

```sh
cd browser-and-node
```

2. Install `sebastianwessel/quickjs` library and its required dependency, `quickjs-ng-wasmfile-release-sync` :

```sh
yarn add @sebastianwessel/quickjs
yarn add @jitl/quickjs-ng-wasmfile-release-sync
```

### Test with browser

1. Run simple HTTP server to temporarily publish project to Web:

```sh
python3 -m http.server
```

Codespace will show you "Open in Browser" button. Just click that button or
obtain web address from "Forwarded Ports" tab.

2. As `index.html` and wasm files (about 1M) are loaded into browser, refer to browser developer console
   to see the results.


### Test with Node.js

1. Run with Node:

```sh
node httpget.mjs
```

### Test with Bun

1. Install Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

2. Run with Bun:

```sh
~/.bun/bin/bun httpget.mjs
```

### Test with Deno

1. Install Deno:

```sh
curl -fsSL https://deno.land/install.sh | bash -s -- --yes
```

2. Run with Deno:

```sh
~/.deno/bin/deno run --allow-read --allow-net --allow-sys httpget.mjs
```

The sebastianwessel/quickjs library requires access to host's UID and GID functionality for some reason, so
`--allow-sys` is mandatory here.

### Finish

Perform your own experiments if desired.
