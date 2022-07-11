const { createHash } = await import('node:crypto');


for (let i = 0; i < 65536; i++) {
    const hash = createHash('sha256');
    hash.update(`${i.toString()} some data to hashA`);
    const res = hash.digest('hex');
    if (res.match(/^00/)) console.log(i, res);
 };

