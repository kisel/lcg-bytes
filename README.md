Fast pseudo-random bytes generation without dependencies

### Example

```js
let {randomBytes} = require("lcg-bytes")
randomBytes(5);
// > randomBytes(5)
// Uint8Array(5) [ 226, 134, 254, 127, 62 ]
```

