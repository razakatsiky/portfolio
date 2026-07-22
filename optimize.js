const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');


html = html.replace(/loading="lazy"(?! decoding="async")/g, 'loading="lazy" decoding="async"');

fs.writeFileSync('index.html', html);
console.log('Optimized HTML decoding');
