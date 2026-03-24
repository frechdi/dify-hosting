import fs from 'fs';
import path from 'path';

function getFrom(filePath) {
  const p = filePath.replace(/\\/g, '/').replace(/.*src\/pages\//, '');
  const parts = p.replace('/index.astro', '').split('/');
  const lang = parts[0];
  const slug = parts[parts.length - 1];
  const section = parts[1];
  if (parts.length === 1) return 'home-' + lang;
  if (section === 'providers') return slug + '-review';
  if (section === 'guides') {
    return slug.replace('dify-', '').replace('self-host', 'selfhost').replace('gpu-hosting','gpu').replace('docker-setup','docker');
  }
  if (slug === 'best-dify-hosting') return 'compare-' + lang;
  return slug + '-' + lang;
}

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (f.endsWith('.astro')) files.push(full);
  }
  return files;
}

const files = walk('src/pages');
let totalReplaced = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const from = getFrom(file);
  const before = content;
  // Replace href="/go/provider" with href="/go/provider?from=tag"
  // Only if not already has ?
  content = content.replace(/href="(\/go\/[a-z0-9-]+)"/g, (match, url) => {
    if (url.includes('?')) return match;
    return `href="${url}?from=${from}"`;
  });
  if (content !== before) {
    fs.writeFileSync(file, content);
    const count = (before.match(/href="\/go\//g) || []).length;
    console.log(`Updated ${count} links in: ${file.replace(/.*src.pages./, '')}`);
    totalReplaced += count;
  }
}
console.log(`\nTotal links updated: ${totalReplaced}`);
