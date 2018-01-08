// "import" is not supported in NodeJS yet.  (TypeScript helps with that.)
// import add from 'export.js';
let add = require('./export.js');
let a = 1;
let b = 2;
let c = add(a, b);
console.log(c);