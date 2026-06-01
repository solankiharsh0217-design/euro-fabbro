const fs = require('fs');
const c = fs.readFileSync('original-bundle.js', 'utf8');

// Find Italian (uD) and English (dD) content objects
// Look for the section between "Carpenteria metallica" (IT) and "Custom metalwork" (EN)
const itStart = c.indexOf('Carpenteria metallica');
const enStart = c.indexOf('Custom metalwork');
console.log('IT idx:', itStart, 'EN idx:', enStart);

// Find the start of the IT object (it will be before "Carpenteria metallica")
// We need to find "uD=" or similar
const uDIdx = c.lastIndexOf('uD', itStart);
const dDIdx = c.lastIndexOf('dD', enStart);
console.log('uD last ref:', uDIdx, 'dD last ref:', dDIdx);

// Find the start of the useState declarations
const useStateIdx = c.lastIndexOf('useState', itStart);
console.log('useState near IT:', useStateIdx);

// Extract from before "Carpenteria" to "Custom metalwork" + a bit
const blockStart = Math.max(0, itStart - 2000);
const blockEnd = enStart + 1000;
const block = c.substring(blockStart, blockEnd);

// Write raw
fs.writeFileSync('it-en-block.txt', block);
console.log('Block size:', block.length);
