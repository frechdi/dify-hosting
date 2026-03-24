import fs from 'fs';
import path from 'path';

// Map external URLs to /go/ slugs
const providerMap = [
  { pattern: /https:\/\/www\.hetzner\.com\/[^"']*/, slug: 'hetzner' },
  { pattern: /https:\/\/hostinger\.com\/[^"']*/, slug: 'hostinger' },
  { pattern: /https:\/\/www\.hostinger\.com\/[^"']*/, slug: 'hostinger' },
  { pattern: /https:\/\/www\.digitalocean\.com\/[^"']*/, slug: 'digitalocean' },
  { pattern: /https:\/\/www\.vultr\.com\/[^"']*/, slug: 'vultr' },
  { pattern: /https:\/\/railway\.app\/[^"']*/, slug: 'railway' },
  { pattern: /https:\/\/render\.com\/[^"']*/, slug: 'render' },
  { pattern: /https:\/\/elest\.io\/[^"']*/, slug: 'elestio' },
  { pattern: /https:\/\/www\.kamatera\.com\/[^"']*/, slug: 'kamatera' },
];

function getFrom(filePath) {
  const p = filePath.replace(/\\/g, '/').replace(/.*src\/pages\//, '');
  const parts = p.replace('/index.astro', '').split('/');
  const lang = parts[0];
  const slug = parts[parts.length - 1];
  const section = parts[1];
  if (parts.length === 1) return 'home-' + lang;
  if (section === 'providers') return slug + '-review';
  if (section === 'guides') {
    return slug
      .replace('dify-', '')
      .replace('self-host', 'selfhost')
      .replace('gpu-hosting', 'gpu')
      .replace('docker-setup', 'docker');
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
  // Skip EN files — already handled
  if (file.replace(/\\/g, '/').includes('/en/')) continue;

  let content = fs.readFileSync(file, 'utf8');
  const from = getFrom(file);
  const before = content;

  for (const { pattern, slug } of providerMap) {
    // Replace href="https://provider..." with href="/go/slug?from=..."
    const fullPattern = new RegExp('href="' + pattern.source + '"', 'g');
    content = content.replace(fullPattern, 'href="/go/' + slug + '?from=' + from + '"');
  }

  if (content !== before) {
    fs.writeFileSync(file, content);
    const count = (before.match(/href="https:\/\/(www\.)?(hetzner|hostinger|digitalocean|vultr|railway|render|elest|kamatera)/g) || []).length;
    console.log('Updated ' + count + ' links in: ' + file.replace(/.*src.pages./, ''));
    totalReplaced += count;
  }
}
console.log('\nTotal external links replaced with /go/ links: ' + totalReplaced);
