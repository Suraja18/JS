const path = require('node:path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('./person.json'));

console.log(path.join(__dirname,"F1","F2","index.html"));