const fs = require('fs');
const c = fs.readFileSync('original-bundle.js', 'utf8');

// Find the main page component (Home)
// Look for the function that returns the home page layout
// Search for "Hero" or "Cancello" or "FeaturedProjects" or large component definitions
const idx = c.indexOf('function HomePage');
console.log('HomePage function:', idx);

const idx2 = c.indexOf('Eurofabbro Digital Atelier');
console.log('Site name ref:', idx2);

// Look for the order of sections in the home page
const sectionOrder = [
  'Badge', 'Hero', 'Products', 'Turnkey', 'Authority', 'Process',
  'Featured', 'Deduction', 'Testimonial', 'CTA', 'Footer', 'Header', 'Nav',
  'Eurofabbro Digital', 'Tailored', 'Custom metalwork', 'Istituto'
];
sectionOrder.forEach(s => {
  const i = c.indexOf(s);
  if (i > 0) console.log(`  ${s}: ${i}`);
});

// Look for font-family declarations
const fontIdx = c.indexOf('Playfair') >= 0 ? c.indexOf('Playfair') : c.indexOf('playfair');
console.log('Playfair font:', fontIdx);
const interIdx = c.indexOf('Inter') >= 0 ? c.indexOf('Inter') : c.indexOf('inter');
console.log('Inter font:', interIdx);

// Find the color tokens used in tailwind classes
const efAccent = c.indexOf('ef-accent');
const efBg = c.indexOf('ef-bg');
const efText = c.indexOf('ef-text');
console.log('ef-accent class:', efAccent, 'ef-bg class:', efBg, 'ef-text class:', efText);
