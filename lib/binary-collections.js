function binLog(x) {
    const div = x.match(/^(0*)([01]*)/);
    const e = div[1].length, m = div[2].padEnd(32, '0');
    const n = parseInt(m, 2);
    let l = Math.log2(n);
    return (x.length - e + l - 32);
};

function addCode(code, val, res) {
    if (typeof res !== 'object') res = {};
    const aux = { [code]: val };
    while (true) {
        const wz = Object.keys(aux).filter(key => key.match(/0/));
        if (wz.length == 0) break;
        wz.forEach(el => {
            const el1 = el.replace('0', '1');
            const el3 = el.replace('0', '3');
            const v = aux[el];
            delete aux[el];
            aux[el3] = aux[el3] ? aux[el3] + v : v;
            aux[el1] = aux[el1] ? aux[el1] - v : -v;
        })
    }
    // now generate new terms
    Object.keys(aux).forEach(el => {
        let term = '';
        let i = 0;
        el.split('').forEach((l, idx) => {
            if (l != '3') term += `x${idx} `;
        });
        term = term.trim();
        res[term] = res[term] ? res[term] + aux[el] : aux[el];
    });
    Object.keys(res).forEach(item => { if (!res[item]) delete res[item] });
    return res;
};
// examples from https://developer.mozilla.org
// Returns true if the passed BigInt value is a prime number
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true
}

// Takes a BigInt value as an argument, returns nth prime number as a BigInt value
function nthPrime(nth) {
  let maybePrime = 2n
  let prime = 0n

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--
      prime = maybePrime
    }
    maybePrime++
  }

  return prime
}

nthPrime(20n)
// ↪ 73n

export { binLog, addCode, isPrime, nthPrime };
