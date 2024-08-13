# Use sebastianwessel/quickjs to send HTTP(s) requests from inside WASM

## Instructions for this devcontainer

Tested with Node 20.15.1, Bun 1.1.22, Deno 1.45.5, sebastianwessel/quickjs [v1.3.0](https://github.com/sebastianwessel/quickjs/tree/v1.3.0/).

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

### Installation

1. `cd` into the folder of this example:

```sh
cd node
```

2. Install sebastianwessel/quickjs library:

```sh
yarn add @sebastianwessel/quickjs
```

### Test with browser

Impossible yet due to [bug](https://github.com/sebastianwessel/quickjs/issues/37).
Browser support is expected to work in near future.

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
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Run with Deno:

```sh
 ~/.deno/bin/deno run --allow-read --allow-net --allow-sys httpget.mjs
```

The sebastianwessel/quickjs library requires access to host's UID functionality for some reason, so
`--allow-sys` is mandatory here.

### Finish

Perform your own experiments if desired.
