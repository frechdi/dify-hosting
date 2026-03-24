import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';

const DIST = './dist';

// Get all HTML files
function getAllHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...getAllHtmlFiles(full));
    else if (entry.endsWith('.html')) files.push(full);
  }
  return files;
}

// Extract all href links from HTML
function extractLinks(html) {
  const links = [];
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.push(m[1]);
  }
  return links;
}

// Check if internal link resolves to a file in dist
function resolveLink(href, distRoot) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('//')) return null;
  // Remove trailing slash, then check for index.html
  let path = href.split('#')[0].split('?')[0];
  if (path === '/') path = '/index.html';

  // Try direct file
  const direct = join(distRoot, path);
  if (existsSync(direct)) return true;

  // Try as directory with index.html
  const withIndex = join(distRoot, path, 'index.html');
  if (existsSync(withIndex)) return true;

  // Try with .html extension
  const withExt = join(distRoot, path + '.html');
  if (existsSync(withExt)) return true;

  return false;
}

const htmlFiles = getAllHtmlFiles(DIST);
console.log(`\n=== LINK CHECK REPORT ===`);
console.log(`Total HTML files: ${htmlFiles.length}\n`);

// Pages per language
const byLang = {};
for (const f of htmlFiles) {
  const rel = f.replace(DIST + '/', '').replace(DIST + '\\', '');
  const lang = rel.split(/[/\\]/)[0];
  byLang[lang] = (byLang[lang] || 0) + 1;
}
console.log('Pages per language:');
for (const [lang, count] of Object.entries(byLang)) {
  console.log(`  ${lang}: ${count}`);
}

// Check all links
const broken = [];
let totalLinks = 0;
let internalLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf-8');
  const links = extractLinks(html);
  const rel = file.replace(DIST + '/', '').replace(DIST + '\\', '').replace(/\\/g, '/');

  for (const href of links) {
    totalLinks++;
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('//')) continue;
    internalLinks++;

    const resolved = resolveLink(href, DIST);
    if (resolved === false) {
      broken.push({ source: '/' + rel, target: href });
    }
  }
}

console.log(`\nTotal links: ${totalLinks}`);
console.log(`Internal links checked: ${internalLinks}`);
console.log(`Broken internal links: ${broken.length}\n`);

// Group broken links by target
const byTarget = {};
for (const b of broken) {
  if (!byTarget[b.target]) byTarget[b.target] = [];
  byTarget[b.target].push(b.source);
}

console.log('=== BROKEN LINKS (grouped by target) ===');
for (const [target, sources] of Object.entries(byTarget).sort()) {
  console.log(`\nBROKEN: ${target}`);
  console.log(`  Found on ${sources.length} page(s):`);
  // Show unique sources, max 5
  const unique = [...new Set(sources)].slice(0, 5);
  for (const s of unique) console.log(`    - ${s}`);
  if (sources.length > 5) console.log(`    ... and ${sources.length - 5} more`);
}

// Missing language variants
console.log('\n=== MISSING LANGUAGE VARIANTS ===');
const enPages = htmlFiles
  .filter(f => f.includes('/en/') || f.includes('\\en\\'))
  .map(f => f.replace(DIST, '').replace(/\\/g, '/').replace('/en/', '/'));

const langs = ['de', 'fr', 'es', 'it'];
for (const lang of langs) {
  const missing = [];
  for (const p of enPages) {
    const langPath = join(DIST, lang + p);
    const langPathWithIndex = langPath.endsWith('index.html') ? langPath : join(langPath, 'index.html');
    if (!existsSync(langPath) && !existsSync(langPathWithIndex)) {
      missing.push('/' + lang + p);
    }
  }
  if (missing.length > 0) {
    console.log(`\n${lang.toUpperCase()} missing ${missing.length} pages:`);
    for (const m of missing) console.log(`  - ${m}`);
  } else {
    console.log(`\n${lang.toUpperCase()}: all EN pages exist ✓`);
  }
}
