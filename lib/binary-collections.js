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

export { binLog, addCode };
