// Based on official example: https://github.com/sebastianwessel/quickjs/blob/v2.0.1/example/basic/index.ts
import { loadQuickJs } from '@sebastianwessel/quickjs';

const { runSandboxed } = await loadQuickJs();

const sandboxOptions = {
    allowFetch: true,
}

const result = await runSandboxed(async ({ evalCode }) => {
    return evalCode(`
const fn = async () => {
  const res = await fetch('https://httpbin.org/anything');

  return res.text();
}

export default await fn();
`)
}, sandboxOptions);

console.log(result.data);
