Fast pseudo-random bytes generation without dependencies

### Example
Math.random will be used as a seed

```js
let {randomBytes} = require("lcg-bytes")
randomBytes(5);
// > randomBytes(5)
// Uint8Array(5) [ 226, 134, 254, 127, 62 ]
```

### With custom seed
```js
// rnd_uint32 is a Math.random()-based seed
let {lcg_parkmiller, rnd_uint32} = require("lcg-bytes")
let rnd = lcg_parkmiller(rnd_uint32());
> rnd.randomBytes(5)
Uint8Array(5) [ 200, 24, 194, 39, 184 ]

```

### Benchmark
```js
const benchmark = require("lcg-bytes/benchmark");
benchmark();
```

