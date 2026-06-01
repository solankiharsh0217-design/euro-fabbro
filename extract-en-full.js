const fs = require('fs');
const c = fs.readFileSync('original-bundle.js', 'utf8');

// Extract dD object fully - find the end of the dD object
// dD starts at "Custom metalwork" but actually before that
const dDStart = c.lastIndexOf('dD={', c.indexOf('Custom metalwork'));
console.log('dD start:', dDStart);

// Find the end - look for matching close brace
let depth = 0;
let dDEnd = dDStart;
let inString = false;
let escape = false;
for (let i = dDStart; i < c.length; i++) {
  const ch = c[i];
  if (escape) { escape = false; continue; }
  if (ch === '\\') { escape = true; continue; }
  if (ch === '"' || ch === "'" || ch === '`') { inString = !inString; continue; }
  if (inString) continue;
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { dDEnd = i + 1; break; } }
}
console.log('dD end:', dDEnd, 'length:', dDEnd - dDStart);

const dD = c.substring(dDStart, dDEnd);
fs.writeFileSync('en-content.txt', dD);
console.log('EN content saved');

// Also extract the dD content formatted as a JS file so we can use it
const formatted = '// Auto-generated from original bundle\n// Default language: en\nexport const dD = ' + dD + ';\n';
fs.writeFileSync('en-content.ts', formatted);
