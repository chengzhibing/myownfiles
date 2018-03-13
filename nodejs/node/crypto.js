// const crypto=require('crypto');
// const hash=crypto.createHash('sha1');
// //可任意多期次调用update
// const helloWorld=hash.update('Hello word');
// console.log(helloWorld);
// const helloMen=hash.update('Hello every honey');
// console.log(helloMen);
// console.log(hash.digest('hes'));
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570...