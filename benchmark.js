let {randomBytes} = require(".");

function bench(sz, n) {
    const d1=new Date();
    for(let i=0; i<n; i++) {
        randomBytes(sz);
    }
    const d2=new Date();
    const mbps = (sz * n / mb) / ((d2-d1) / 1000);
    console.log(`${mbps|0} MB/s (block size ${(sz/mb)|0} MB)`);
}

function run_benchmark() {
    const mb = 1 << 20;
    bench(4 * mb, 10);
    bench(64 * mb, 10);
}

run_benchmark();
module.exports = run_benchmark;

