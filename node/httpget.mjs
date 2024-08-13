// Based on official example: https://github.com/sebastianwessel/quickjs/blob/v1.3.0/example/basic/index.ts
import { quickJS } from '@sebastianwessel/quickjs'

const { createRuntime } = await quickJS();

const { evalCode } = await createRuntime({
    allowFetch: true
});

const result = await evalCode(`
const fn = async () => {
  const res = await fetch('https://httpbin.org/anything');

  return res.text();
}

export default await fn();
`);

console.log(result);
