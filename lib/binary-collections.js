function binLog(x) {
 const div = x.match(/^(0*)([01]*)/);
 const e = div[1].length, m = div[2].padEnd(32, '0');
 const n = parseInt(m, 2);
 let l = Math.log2(n);
 return (x.length - e + l - 32);
};

export {binLog};
