const fs = require('fs');
const c = fs.readFileSync('original-bundle.js', 'utf8');

function extractObject(source, startIdx) {
  let depth = 0;
  let end = startIdx;
  let inString = false;
  let stringChar = '';
  let escape = false;
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (!inString && (ch === '"' || ch === "'" || ch === '`')) {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (inString && ch === stringChar) {
      inString = false;
      continue;
    }
    if (inString) continue;
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  return source.substring(startIdx, end);
}

// Extract uD (Italian) and dD (English)
const uDStart = c.indexOf('uD={');
const dDStart = c.indexOf('dD={');
console.log('uD:', uDStart, 'dD:', dDStart);

const uD = extractObject(c, uDStart);
const dD = extractObject(c, dDStart);

console.log('uD length:', uD.length, 'dD length:', dD.length);

fs.writeFileSync('uD-extracted.js', uD);
fs.writeFileSync('dD-extracted.js', dD);
console.log('Saved');
