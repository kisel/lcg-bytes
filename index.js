function rnd_uint32(seed) {
    return (Math.random * 4294967296) >>> 0;
}

function lcg_parkmiller(seed) {
    function _seed(s) {
	if ((seed = (s|0) % 2147483647) <= 0) {
	    seed += 2147483646;
	}
    }

    function _nextInt() {
	return seed = seed * 48271 % 2147483647;
    }

    function _nextFloat() {
	return (_nextInt() - 1) / 2147483646;
    }

    function _randomBytes(sz) {
        const lchunks = Math.ceil(sz / 4);
        let buf = new Uint32Array(lchunks);
        for(i = 0; i < lchunks; i++) {
            buf[i] =  seed = (seed * 48271) & 2147483647;
        }
        return new Uint8Array(buf.buffer, 0, sz);
    }

    if (seed === undefined) {
	seed = rnd_uint32();
    }

    _seed(seed);

    return {
	seed: _seed,
	nextInt: _nextInt,
	nextFloat: _nextFloat,
	randomBytes: _randomBytes
    };
}

const rnd = lcg_parkmiller();

module.exports = {
    lcg_parkmiller: lcg_parkmiller,
    nextInt: rnd.nextInt,
    nextFloat: rnd.nextFloat,
    randomBytes: rnd.randomBytes
}

