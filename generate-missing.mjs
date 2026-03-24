import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';

const BASE = './src/pages';

function write(path, content) {
  const full = `${BASE}/${path}`;
  const dir = dirname(full);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, content.trim() + '\n');
  console.log(`  ✓ ${path}`);
}

// ─── TRANSLATIONS ────────────────────────────────────────────────
const T = {
  fr: {
    home: 'Accueil', providers: 'Hébergeurs', guides: 'Guides',
    blog: 'Blog', contact: 'Contact', privacy: 'Politique de confidentialité',
    disclosure: 'Divulgation d\'affiliation',
    bestHosting: 'Meilleur Hébergement Dify 2026',
    reviewed: 'Examiné mars 2026', from: 'À partir de',
    startingPrice: 'Prix de départ', serverLocations: 'Emplacements',
    compliance: 'Conformité', recommended: 'Recommandé', minimum: 'Minimum',
    production: 'Production', enterprise: 'Entreprise',
    pros: 'Pour', cons: 'Contre', verdict: 'Notre Verdict',
    visitSite: 'Visiter le site →', allProviders: '← Tous les hébergeurs',
    dockerSetup: 'Guide Docker', pricing: 'Tarification',
    selfHost: 'Auto-hébergement', gpuHosting: 'Hébergement GPU',
    setup: 'Guide d\'installation',
    relatedResources: 'Ressources associées',
    privacyTitle: 'Politique de confidentialité',
    disclosureTitle: 'Divulgation d\'affiliation',
    contactTitle: 'Nous contacter',
    contactSub: 'Questions ou demandes de partenariat — réponse sous 24h.',
    bestValue: 'Meilleur rapport qualité-prix',
    easiest: 'Le plus simple',
    beginners: 'Idéal débutants',
    devFriendly: 'Orienté développeurs',
    managedPlatform: 'Plateforme gérée',
    flexible: 'Flexible',
  },
  es: {
    home: 'Inicio', providers: 'Proveedores', guides: 'Guías',
    blog: 'Blog', contact: 'Contacto', privacy: 'Política de privacidad',
    disclosure: 'Divulgación de afiliados',
    bestHosting: 'Mejor Hosting Dify 2026',
    reviewed: 'Revisado marzo 2026', from: 'Desde',
    startingPrice: 'Precio inicial', serverLocations: 'Ubicaciones',
    compliance: 'Cumplimiento', recommended: 'Recomendado', minimum: 'Mínimo',
    production: 'Producción', enterprise: 'Empresa',
    pros: 'Ventajas', cons: 'Desventajas', verdict: 'Nuestro Veredicto',
    visitSite: 'Visitar sitio →', allProviders: '← Todos los proveedores',
    dockerSetup: 'Guía Docker', pricing: 'Precios',
    selfHost: 'Auto-alojamiento', gpuHosting: 'Hosting GPU',
    setup: 'Guía de configuración',
    relatedResources: 'Recursos relacionados',
    privacyTitle: 'Política de privacidad',
    disclosureTitle: 'Divulgación de afiliados',
    contactTitle: 'Contáctanos',
    contactSub: 'Preguntas o consultas de colaboración — respondemos en 24h.',
    bestValue: 'Mejor relación calidad-precio',
    easiest: 'Más fácil',
    beginners: 'Ideal principiantes',
    devFriendly: 'Orientado desarrolladores',
    managedPlatform: 'Plataforma gestionada',
    flexible: 'Flexible',
  },
  it: {
    home: 'Home', providers: 'Provider', guides: 'Guide',
    blog: 'Blog', contact: 'Contatti', privacy: 'Informativa sulla privacy',
    disclosure: 'Divulgazione affiliati',
    bestHosting: 'Miglior Hosting Dify 2026',
    reviewed: 'Recensito marzo 2026', from: 'Da',
    startingPrice: 'Prezzo di partenza', serverLocations: 'Sedi server',
    compliance: 'Conformità', recommended: 'Consigliato', minimum: 'Minimo',
    production: 'Produzione', enterprise: 'Enterprise',
    pros: 'Pro', cons: 'Contro', verdict: 'Il Nostro Verdetto',
    visitSite: 'Visita il sito →', allProviders: '← Tutti i provider',
    dockerSetup: 'Guida Docker', pricing: 'Prezzi',
    selfHost: 'Self-hosting', gpuHosting: 'Hosting GPU',
    setup: 'Guida alla configurazione',
    relatedResources: 'Risorse correlate',
    privacyTitle: 'Informativa sulla privacy',
    disclosureTitle: 'Divulgazione affiliati',
    contactTitle: 'Contattaci',
    contactSub: 'Domande o richieste di partnership — rispondiamo entro 24h.',
    bestValue: 'Miglior rapporto qualità-prezzo',
    easiest: 'Più semplice',
    beginners: 'Ideale principianti',
    devFriendly: 'Orientato sviluppatori',
    managedPlatform: 'Piattaforma gestita',
    flexible: 'Flessibile',
  },
};

// ─── PROVIDER DATA ────────────────────────────────────────────────
const providers = {
  hetzner: {
    name: 'Hetzner', letter: 'H', color: '#D50C2D', rating: '4.8', ratingInt: 5,
    price: '€3.79/mo', badge: 'Editors\' Choice', badgeClass: 'badge-editors-choice',
    url: 'https://www.hetzner.com/cloud?ref=difyhosting',
    stats: { startingPrice: '€3.79/mo', ram: '4 GB', cpu: '2 vCPU', storage: '40 GB NVMe', locations: 'DE & FI', compliance: 'GDPR' },
    plans: [
      { name: 'CX22', vcpu: '2 AMD', ram: '4 GB', storage: '40 GB NVMe', price: '€3.79/mo', fit: 'minimum' },
      { name: 'CX32', vcpu: '4 AMD', ram: '8 GB', storage: '80 GB NVMe', price: '€5.59/mo', fit: 'recommended', featured: true },
      { name: 'CX42', vcpu: '8 AMD', ram: '16 GB', storage: '160 GB NVMe', price: '€10.69/mo', fit: 'production' },
    ],
    pros_en: ['Cheapest EU cloud provider', 'GDPR-compliant (Germany & Finland)', 'Excellent NVMe performance', 'Hourly billing', 'ISO 27001 certified'],
    cons_en: ['No servers outside Europe', 'No managed database services', 'Basic UI compared to competitors'],
    verdict_en: { fr: 'Hetzner est notre meilleur choix pour l\'hébergement Dify. Le CX32 à €5,59/mois offre 4 vCPU, 8 Go RAM et 80 Go NVMe — la meilleure valeur du marché, conforme RGPD pour les équipes européennes.', es: 'Hetzner es nuestra mejor opción para alojar Dify. El CX32 a €5,59/mes ofrece 4 vCPU, 8 GB RAM y 80 GB NVMe — la mejor relación calidad-precio del mercado, con cumplimiento GDPR para equipos europeos.', it: 'Hetzner è la nostra prima scelta per l\'hosting Dify. Il CX32 a €5,59/mese offre 4 vCPU, 8 GB RAM e 80 GB NVMe — il miglior rapporto qualità-prezzo, conforme GDPR per i team europei.' },
    badgeLang: { fr: 'Meilleur rapport qualité-prix', es: 'Mejor relación calidad-precio', it: 'Miglior rapporto qualità-prezzo' },
  },
  hostinger: {
    name: 'Hostinger', letter: 'H', color: '#673DE6', rating: '4.5', ratingInt: 4,
    price: '$7.99/mo', badge: 'Best for Beginners', badgeClass: 'badge-primary',
    url: 'https://www.hostinger.com/vps-hosting?ref=difyhosting',
    stats: { startingPrice: '$7.99/mo', ram: '4 GB', cpu: '1 vCPU', storage: '50 GB NVMe', locations: 'Global', compliance: '—' },
    plans: [
      { name: 'KVM 1', vcpu: '1 vCPU', ram: '4 GB', storage: '50 GB NVMe', price: '$7.99/mo', fit: 'minimum' },
      { name: 'KVM 2', vcpu: '2 vCPU', ram: '8 GB', storage: '100 GB NVMe', price: '$12.99/mo', fit: 'recommended', featured: true },
      { name: 'KVM 4', vcpu: '4 vCPU', ram: '16 GB', storage: '200 GB NVMe', price: '$19.99/mo', fit: 'production' },
    ],
    pros_en: ['24/7 live chat support', 'Fast NVMe storage on all plans', 'Global server locations', 'Easy control panel', 'One-click OS reinstall'],
    cons_en: ['Slightly pricier than Hetzner for EU users', 'No managed databases', 'KVM 1 is tight for Dify'],
    verdict_en: { fr: 'Hostinger est le meilleur choix pour les débutants. Support 24h/24 en direct, serveurs mondiaux et interface simple. Le KVM 2 à 12,99$/mois est idéal pour Dify.', es: 'Hostinger es la mejor opción para principiantes. Soporte 24/7 en vivo, servidores globales e interfaz sencilla. El KVM 2 a $12,99/mes es ideal para Dify.', it: 'Hostinger è la scelta migliore per i principianti. Supporto live 24/7, server globali e interfaccia semplice. Il KVM 2 a $12,99/mese è ideale per Dify.' },
    badgeLang: { fr: 'Idéal pour les débutants', es: 'Ideal para principiantes', it: 'Ideale per principianti' },
  },
  digitalocean: {
    name: 'DigitalOcean', letter: 'DO', color: '#0080FF', rating: '4.3', ratingInt: 4,
    price: '$24/mo', badge: 'Developer Friendly', badgeClass: 'badge-primary',
    url: 'https://www.digitalocean.com/?ref=difyhosting',
    stats: { startingPrice: '$24/mo', ram: '4 GB', cpu: '2 vCPU', storage: '80 GB SSD', locations: '15 régions', compliance: 'SOC 2' },
    plans: [
      { name: 'Basic Regular 2GB', vcpu: '1 vCPU', ram: '2 GB', storage: '50 GB SSD', price: '$12/mo', fit: 'minimum' },
      { name: 'Basic Regular 4GB', vcpu: '2 vCPU', ram: '4 GB', storage: '80 GB SSD', price: '$24/mo', fit: 'minimum' },
      { name: 'Premium AMD 4GB', vcpu: '2 vCPU', ram: '4 GB', storage: '80 GB NVMe', price: '$28/mo', fit: 'recommended', featured: true },
      { name: 'Premium AMD 8GB', vcpu: '4 vCPU', ram: '8 GB', storage: '160 GB NVMe', price: '$56/mo', fit: 'production' },
    ],
    pros_en: ['Excellent developer experience', '15 global regions', 'Managed databases available', 'Comprehensive API & CLI', 'Good documentation'],
    cons_en: ['More expensive than Hetzner', 'No EU data-only option', 'Basic plans use slower SSD'],
    verdict_en: { fr: 'DigitalOcean offre une excellente expérience développeur avec 15 régions mondiales. Plus cher que Hetzner, mais les bases de données gérées et l\'API robuste en font un bon choix pour les équipes techniques.', es: 'DigitalOcean ofrece una excelente experiencia para desarrolladores con 15 regiones globales. Más caro que Hetzner, pero las bases de datos gestionadas y la API robusta lo hacen ideal para equipos técnicos.', it: 'DigitalOcean offre un\'eccellente esperienza per sviluppatori con 15 regioni globali. Più costoso di Hetzner, ma i database gestiti e la robusta API lo rendono ottimo per team tecnici.' },
    badgeLang: { fr: 'Orienté développeurs', es: 'Orientado desarrolladores', it: 'Orientato sviluppatori' },
  },
  vultr: {
    name: 'Vultr', letter: 'V', color: '#007BFC', rating: '4.2', ratingInt: 4,
    price: '$12/mo', badge: null, badgeClass: null,
    url: 'https://www.vultr.com/?ref=difyhosting',
    stats: { startingPrice: '$12/mo', ram: '4 GB', cpu: '2 vCPU', storage: '65 GB NVMe', locations: '32', compliance: '—' },
    plans: [
      { name: 'Regular 2GB', vcpu: '1 vCPU', ram: '2 GB', storage: '55 GB NVMe', price: '$6/mo', fit: 'minimum' },
      { name: 'Regular 4GB', vcpu: '2 vCPU', ram: '4 GB', storage: '65 GB NVMe', price: '$12/mo', fit: 'recommended', featured: true },
      { name: 'Regular 8GB', vcpu: '4 vCPU', ram: '8 GB', storage: '128 GB NVMe', price: '$24/mo', fit: 'production' },
    ],
    pros_en: ['32 global locations', 'Good NVMe performance', 'Hourly billing', 'Bare metal options available', 'GPU instances available'],
    cons_en: ['More expensive than Hetzner for EU', 'Less polished UI than DigitalOcean', 'Smaller community'],
    verdict_en: { fr: 'Vultr offre 32 emplacements mondiaux à des prix compétitifs. Bon choix pour les équipes qui ont besoin de couverture mondiale avec des performances NVMe fiables.', es: 'Vultr ofrece 32 ubicaciones globales a precios competitivos. Buena opción para equipos que necesitan cobertura global con rendimiento NVMe fiable.', it: 'Vultr offre 32 sedi globali a prezzi competitivi. Buona scelta per team che necessitano di copertura globale con prestazioni NVMe affidabili.' },
    badgeLang: { fr: null, es: null, it: null },
  },
  elestio: {
    name: 'Elestio', letter: 'E', color: '#6366F1', rating: '4.0', ratingInt: 4,
    price: '$19/mo', badge: 'Easiest Setup', badgeClass: 'badge-success',
    url: 'https://elest.io/?ref=difyhosting',
    stats: { startingPrice: '$19/mo', ram: 'Géré', cpu: 'Géré', storage: 'Géré', locations: 'Global', compliance: '—' },
    plans: [
      { name: 'Starter', vcpu: '2 vCPU', ram: '2 GB', storage: '50 GB SSD', price: '$19/mo', fit: 'minimum' },
      { name: 'Standard', vcpu: '2 vCPU', ram: '4 GB', storage: '80 GB SSD', price: '$39/mo', fit: 'recommended', featured: true },
      { name: 'Pro', vcpu: '4 vCPU', ram: '8 GB', storage: '160 GB SSD', price: '$59/mo', fit: 'production' },
    ],
    pros_en: ['One-click Dify deployment', 'Automatic backups & SSL', 'No Docker knowledge required', 'Monitoring included', 'Global deployment options'],
    cons_en: ['More expensive than raw VPS', 'Less control over infrastructure', 'Vendor lock-in risk'],
    verdict_en: { fr: 'Elestio est la solution idéale pour les équipes sans compétences DevOps. Déployez Dify en un clic avec SSL, sauvegardes et monitoring automatiques.', es: 'Elestio es la solución ideal para equipos sin habilidades DevOps. Despliega Dify con un clic con SSL, copias de seguridad y monitoreo automáticos.', it: 'Elestio è la soluzione ideale per team senza competenze DevOps. Distribuisci Dify con un clic con SSL, backup e monitoraggio automatici.' },
    badgeLang: { fr: 'Configuration la plus simple', es: 'Configuración más sencilla', it: 'Configurazione più semplice' },
  },
  railway: {
    name: 'Railway', letter: 'R', color: '#0B0D0E', rating: '3.8', ratingInt: 3,
    price: '$5/mo', badge: null, badgeClass: null,
    url: 'https://railway.app?ref=difyhosting',
    stats: { startingPrice: '$5/mo', ram: '512MB–8GB', cpu: 'Partagé', storage: 'Éphémère', locations: 'Géré', compliance: '—' },
    plans: [
      { name: 'Hobby', vcpu: 'Shared', ram: 'up to 8 GB', storage: 'Ephemeral', price: '$5/mo credit', fit: 'testing', featured: true },
      { name: 'Pro', vcpu: 'Shared', ram: 'up to 32 GB', storage: 'Volumes available', price: 'Usage-based', fit: 'production' },
    ],
    pros_en: ['$5 free credit monthly', 'Zero infrastructure management', 'One-click deploys from GitHub', 'Auto-scaling', 'Easy environment variables'],
    cons_en: ['No persistent storage on free tier', 'Limited CPU on hobby tier', 'Cold starts possible', 'Not ideal for production Dify'],
    verdict_en: { fr: 'Railway convient aux tests et petits projets grâce au crédit gratuit de 5$/mois. Pour un Dify de production, envisagez Hetzner ou Hostinger qui offrent un stockage persistant.', es: 'Railway es adecuado para pruebas y proyectos pequeños gracias al crédito gratuito de $5/mes. Para Dify en producción, considera Hetzner o Hostinger que ofrecen almacenamiento persistente.', it: 'Railway è adatto per test e piccoli progetti grazie al credito gratuito di $5/mese. Per Dify in produzione, considera Hetzner o Hostinger che offrono storage persistente.' },
    badgeLang: { fr: null, es: null, it: null },
  },
  render: {
    name: 'Render', letter: 'R', color: '#46E3B7', rating: '3.7', ratingInt: 3,
    price: '$25/mo', badge: null, badgeClass: null,
    url: 'https://render.com?ref=difyhosting',
    stats: { startingPrice: '$25/mo', ram: '2 GB', cpu: 'Partagé', storage: '—', locations: 'US/EU', compliance: 'SOC 2' },
    plans: [
      { name: 'Starter', vcpu: 'Shared', ram: '512 MB', storage: '—', price: 'Free (spin-down)', fit: 'minimum' },
      { name: 'Standard', vcpu: 'Shared', ram: '2 GB', storage: '—', price: '$25/mo', fit: 'recommended', featured: true },
      { name: 'Pro', vcpu: 'Shared', ram: '4 GB', storage: '—', price: '$85/mo', fit: 'production' },
    ],
    pros_en: ['Simple deployment process', 'Auto-deploy from Git', 'Good US & EU presence', 'SOC 2 compliant', 'Managed PostgreSQL available'],
    cons_en: ['Expensive relative to resources', 'Shared CPU limits performance', 'Free tier spins down after inactivity', 'No persistent disk on standard plans'],
    verdict_en: { fr: 'Render offre une expérience de déploiement simple mais est cher pour les ressources fournies. Adapté aux petites équipes qui valorisent la simplicité sur le rapport qualité-prix.', es: 'Render ofrece una experiencia de despliegue sencilla pero es caro en relación a los recursos. Adecuado para equipos pequeños que priorizan la simplicidad sobre el precio.', it: 'Render offre una semplice esperienza di distribuzione ma è costoso per le risorse fornite. Adatto per piccoli team che privilegiano la semplicità rispetto al rapporto qualità-prezzo.' },
    badgeLang: { fr: null, es: null, it: null },
  },
  kamatera: {
    name: 'Kamatera', letter: 'K', color: '#1A56DB', rating: '3.9', ratingInt: 3,
    price: '$4/mo', badge: null, badgeClass: null,
    url: 'https://www.kamatera.com/?ref=difyhosting',
    stats: { startingPrice: '$4/mo', ram: 'Configurable', cpu: 'Configurable', storage: '20 GB+', locations: '13', compliance: '—' },
    plans: [
      { name: '2 vCPU / 4 GB', vcpu: '2 vCPU', ram: '4 GB', storage: '20 GB SSD', price: '~$4/mo', fit: 'minimum' },
      { name: '4 vCPU / 8 GB', vcpu: '4 vCPU', ram: '8 GB', storage: '40 GB SSD', price: '~$8/mo', fit: 'recommended', featured: true },
      { name: '8 vCPU / 16 GB', vcpu: '8 vCPU', ram: '16 GB', storage: '80 GB SSD', price: '~$16/mo', fit: 'production' },
    ],
    pros_en: ['Very flexible configuration', 'Competitive per-GB pricing', '13 global locations', 'Bare metal options', 'Windows VPS available'],
    cons_en: ['Complex pricing model', 'Harder to use than competitors', 'Less documentation', 'Support response times vary'],
    verdict_en: { fr: 'Kamatera offre une configuration flexible à des prix compétitifs. Idéal pour les utilisateurs avancés qui souhaitent un contrôle granulaire des ressources. Courbe d\'apprentissage plus élevée.', es: 'Kamatera ofrece configuración flexible a precios competitivos. Ideal para usuarios avanzados que desean control granular de recursos. Curva de aprendizaje más pronunciada.', it: 'Kamatera offre configurazione flessibile a prezzi competitivi. Ideale per utenti avanzati che desiderano controllo granulare delle risorse. Curva di apprendimento più ripida.' },
    badgeLang: { fr: null, es: null, it: null },
  },
};

// ─── TEMPLATES ────────────────────────────────────────────────────

function providerPage(lang, slug) {
  const p = providers[slug];
  const t = T[lang];
  const stars = '★'.repeat(p.ratingInt) + (p.ratingInt < 5 ? '☆'.repeat(5 - p.ratingInt) : '');
  const badgeLabel = p.badgeLang[lang];
  const verdictText = p.verdict_en[lang];
  const planFitLabel = (fit) => ({
    minimum: t.minimum, recommended: t.recommended, production: t.production,
    enterprise: t.enterprise, testing: 'Testing',
  }[fit] || fit);

  return `---
import BaseLayout from '../../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../../i18n/hreflang';

const hreflang = getHreflang('/providers/${slug}/');

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: '${p.name} Dify Hosting Review 2026',
  reviewBody: '${p.name} for self-hosting Dify — ${lang.toUpperCase()} review.',
  author: { '@type': 'Organization', name: 'Dify Hosting Team' },
  itemReviewed: { '@type': 'SoftwareApplication', name: '${p.name}' },
  reviewRating: { '@type': 'Rating', ratingValue: '${p.rating}', bestRating: '5', worstRating: '1' },
  datePublished: '2026-01-01',
  dateModified: '2026-03-01',
};
---

<BaseLayout
  title="${p.name} Dify Hosting Review 2026 — ${t.setup}"
  description="${p.name} — ${t.reviewed}. ${t.from} ${p.price}. ${t.bestHosting}."
  lang="${lang}"
  canonical="https://dify-hosting.com/${lang}/providers/${slug}/"
  hreflang={hreflang}
  schema={schema}
>
  <section class="hero-gradient section" style="padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[
        { label: '${t.home}', href: '/${lang}/' },
        { label: '${t.providers}', href: '/${lang}/best-dify-hosting/' },
        { label: '${p.name}' },
      ]} />
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
        ${badgeLabel ? `<span class="badge ${p.badgeClass}">${badgeLabel}</span>` : ''}
        <span class="badge badge-success">${t.reviewed}</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:1.25rem;flex-wrap:wrap;">
        <div class="provider-icon" style="background:${p.color};color:white;width:56px;height:56px;font-size:1.1rem;font-weight:800;border-radius:14px;flex-shrink:0;">${p.letter}</div>
        <div>
          <h1 style="font-size:clamp(1.8rem,3.5vw,2.5rem);font-weight:800;color:#111827;line-height:1.2;margin-bottom:0.5rem;">
            ${p.name} Dify Hosting
          </h1>
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <span style="color:#F59E0B;font-size:1.2rem;">${stars}</span>
            <span style="font-size:1.1rem;font-weight:700;color:#111827;">${p.rating} / 5</span>
            <span style="color:#D1D5DB;">·</span>
            <span style="color:#16A34A;font-weight:700;">${t.from} ${p.price}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="background:#FFFFFF;border-bottom:1px solid #E2E8F0;padding:1.25rem 1.5rem;">
    <div class="container-sm">
      <div style="display:flex;gap:2rem;flex-wrap:wrap;justify-content:center;">
        {[
          { value: '${p.stats.startingPrice}', label: '${t.startingPrice}' },
          { value: '${p.stats.ram}', label: 'RAM' },
          { value: '${p.stats.cpu}', label: 'CPU' },
          { value: '${p.stats.storage}', label: 'Storage' },
          { value: '${p.stats.locations}', label: '${t.serverLocations}' },
        ].map((stat) => (
          <div style="text-align:center;">
            <div style="font-size:1.1rem;font-weight:700;color:#111827;">{stat.value}</div>
            <div style="font-size:0.75rem;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${p.name} — Plans & Pricing</h2>
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Plan</th><th>vCPU</th><th>RAM</th><th>Storage</th><th>Price</th><th>${t.recommended}</th>
            </tr>
          </thead>
          <tbody>
            ${p.plans.map(pl => `<tr${pl.featured ? ' style="background:#F0F7FF;"' : ''}>
              <td><span class="provider-name">${pl.name}</span>${pl.featured ? ` <span class="badge badge-editors-choice" style="margin-left:0.5rem;">${t.recommended} ⭐</span>` : ''}</td>
              <td>${pl.vcpu}</td><td>${pl.ram}</td><td>${pl.storage}</td><td class="price">${pl.price}</td>
              <td><span class="check">✅</span> <span style="font-size:0.8rem;color:#4B5563;">${planFitLabel(pl.fit)}</span></td>
            </tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${t.pros} & ${t.cons}</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
        <div class="card" style="border-top:3px solid #22C55E;">
          <h3 style="font-size:1rem;font-weight:700;color:#16A34A;margin-bottom:1rem;">✅ ${t.pros}</h3>
          <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.6rem;">
            ${p.pros_en.map(pro => `<li style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.875rem;color:#374151;"><span style="color:#22C55E;flex-shrink:0;">✓</span>${pro}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="card" style="border-top:3px solid #EF4444;">
          <h3 style="font-size:1rem;font-weight:700;color:#DC2626;margin-bottom:1rem;">❌ ${t.cons}</h3>
          <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.6rem;">
            ${p.cons_en.map(con => `<li style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.875rem;color:#374151;"><span style="color:#EF4444;flex-shrink:0;">✗</span>${con}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container-sm">
      <div class="card card-featured">
        <p class="section-label">${t.verdict}</p>
        <p style="color:#4B5563;line-height:1.7;margin-bottom:1rem;">${verdictText}</p>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
          <span style="font-size:2rem;font-weight:800;color:#111827;">${p.rating}</span>
          <span style="color:#F59E0B;font-size:1.1rem;">${stars}</span>
        </div>
        <a href="${p.url}" rel="nofollow sponsored" target="_blank" class="btn-primary">${t.visitSite}</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-sm">
      <h2 style="font-size:1.2rem;font-weight:700;color:#111827;margin-bottom:1rem;">${t.relatedResources}</h2>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        <a href="/${lang}/best-dify-hosting/" class="btn-secondary">${t.allProviders}</a>
        <a href="/${lang}/guides/dify-docker-setup/" class="btn-secondary">${t.dockerSetup}</a>
        <a href="/${lang}/guides/dify-pricing/" class="btn-secondary">${t.pricing}</a>
      </div>
    </div>
  </section>
</BaseLayout>`;
}

function utilityPage(lang, type) {
  const t = T[lang];
  if (type === 'privacy-policy') {
    const titles = { fr: 'Politique de confidentialité', es: 'Política de privacidad', it: 'Informativa sulla privacy' };
    const h2s = {
      fr: ['Informations collectées', 'Cookies', 'Liens d\'affiliation', 'Analyse', 'Données de contact', 'Vos droits', 'Contact'],
      es: ['Información recopilada', 'Cookies', 'Enlaces de afiliados', 'Analítica', 'Datos de contacto', 'Sus derechos', 'Contacto'],
      it: ['Informazioni raccolte', 'Cookie', 'Link di affiliazione', 'Analisi', 'Dati di contatto', 'I tuoi diritti', 'Contatti'],
    };
    const bodies = {
      fr: [
        'Dify-hosting.com est un site d\'information. Nous ne collectons pas de données personnelles identifiables sans votre consentement explicite. Nous pouvons collecter des données d\'analyse anonymes (vues de pages, référent, type de navigateur).',
        'Nous utilisons un minimum de cookies. Si vous acceptez, un cookie de préférence peut être défini. Nous n\'utilisons pas de cookies de suivi ni de publicité. Vous pouvez refuser les cookies et le site fonctionnera normalement.',
        'Ce site contient des liens d\'affiliation. Lorsque vous cliquez et effectuez un achat, nous pouvons recevoir une commission sans frais supplémentaires pour vous. Consultez la politique de confidentialité de chaque prestataire pour plus de détails.',
        'Nous pouvons utiliser des analyses respectueuses de la vie privée pour comprendre quelles pages sont populaires. Les données sont agrégées et anonymisées. Nous ne vendons pas de données d\'analyse à des tiers.',
        'Si vous utilisez notre formulaire de contact, nous utilisons votre email uniquement pour répondre à votre demande. Nous ne vous ajoutons à aucune liste de diffusion sans votre consentement.',
        'Conformément au RGPD, vous avez le droit d\'accéder, corriger ou supprimer toutes données personnelles. Contactez-nous à contact@dify-hosting.com.',
        'Pour toute question relative à la vie privée, contactez-nous à <a href="mailto:contact@dify-hosting.com" style="color:#1677FF;text-decoration:none;">contact@dify-hosting.com</a>.',
      ],
      es: [
        'Dify-hosting.com es un sitio informativo. No recopilamos datos personales identificables sin su consentimiento explícito. Podemos recopilar datos de análisis anónimos (páginas vistas, referente, tipo de navegador).',
        'Usamos cookies mínimas. Si acepta, puede establecerse una cookie de preferencia. No usamos cookies de seguimiento ni publicidad. Puede rechazar las cookies y el sitio funcionará normalmente.',
        'Este sitio contiene enlaces de afiliados. Cuando hace clic y realiza una compra, podemos recibir una comisión sin costo adicional para usted. Consulte la política de privacidad de cada proveedor para más detalles.',
        'Podemos usar análisis respetuosos con la privacidad para entender qué páginas son populares. Los datos son agregados y anonimizados. No vendemos datos de análisis a terceros.',
        'Si usa nuestro formulario de contacto, usamos su email solo para responder su consulta. No lo añadimos a ninguna lista de correo sin su consentimiento.',
        'De acuerdo con el RGPD, tiene derecho a acceder, corregir o eliminar datos personales. Contáctenos en contact@dify-hosting.com.',
        'Para preguntas sobre privacidad, contáctenos en <a href="mailto:contact@dify-hosting.com" style="color:#1677FF;text-decoration:none;">contact@dify-hosting.com</a>.',
      ],
      it: [
        'Dify-hosting.com è un sito informativo. Non raccogliamo dati personali identificabili senza il tuo consenso esplicito. Possiamo raccogliere dati analitici anonimi (visualizzazioni di pagina, referrer, tipo di browser).',
        'Usiamo cookie minimi. Se accetti, potrebbe essere impostato un cookie di preferenza. Non usiamo cookie di tracciamento o pubblicitari. Puoi rifiutare i cookie e il sito funzionerà normalmente.',
        'Questo sito contiene link di affiliazione. Quando fai clic e acquisti, potremmo ricevere una commissione senza costi aggiuntivi per te. Consulta la privacy policy di ciascun provider per i dettagli.',
        'Potremmo usare analisi rispettose della privacy per capire quali pagine sono popolari. I dati sono aggregati e anonimizzati. Non vendiamo dati analitici a terzi.',
        'Se usi il nostro modulo di contatto, utilizziamo la tua email solo per rispondere alla tua richiesta. Non ti aggiungiamo a nessuna mailing list senza il tuo consenso.',
        'In conformità con il GDPR, hai il diritto di accedere, correggere o cancellare i dati personali. Contattaci a contact@dify-hosting.com.',
        'Per domande sulla privacy, contattaci a <a href="mailto:contact@dify-hosting.com" style="color:#1677FF;text-decoration:none;">contact@dify-hosting.com</a>.',
      ],
    };
    return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../i18n/hreflang';
const hreflang = getHreflang('/privacy-policy/');
---
<BaseLayout title="${titles[lang]} — Dify Hosting" description="${titles[lang]} — dify-hosting.com" lang="${lang}" canonical="https://dify-hosting.com/${lang}/privacy-policy/" hreflang={hreflang}>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[{ label: '${t.home}', href: '/${lang}/' }, { label: '${titles[lang]}' }]} />
      <h1 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#f8fafc;line-height:1.2;margin-bottom:1rem;">${titles[lang]}</h1>
      <p style="font-size:1.1rem;color:#94a3b8;">Mars / Marzo / Marzo 2026</p>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <div class="card" style="padding:2rem;">
        <div class="prose">
          ${h2s[lang].map((h, i) => `<h2>${h}</h2><p>${bodies[lang][i]}</p>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>
</BaseLayout>`;
  }

  if (type === 'affiliate-disclosure') {
    const titles = { fr: 'Divulgation d\'affiliation', es: 'Divulgación de afiliados', it: 'Divulgazione affiliati' };
    const content = {
      fr: `<h2>Nos relations d'affiliation</h2><p>Dify-hosting.com participe à des programmes d'affiliation avec les hébergeurs présentés. Lorsque vous cliquez sur un lien et effectuez un achat, nous pouvons percevoir une commission sans frais supplémentaires pour vous.</p>
          <h2>Impact sur nos avis</h2><p>Nos classements sont basés uniquement sur nos tests indépendants. Les taux de commission n'influencent pas nos classements. Nous ne recommandons que des fournisseurs que nous avons personnellement testés.</p>
          <h2>Conformité FTC</h2><p>Conformément aux directives de la FTC et aux réglementations similaires, nous divulguons que ce site contient des liens d'affiliation.</p>
          <h2>Sans frais supplémentaires</h2><p>L'utilisation de nos liens d'affiliation ne vous coûte rien de plus. La commission que nous gagnons provient du budget marketing du fournisseur.</p>`,
      es: `<h2>Nuestras relaciones de afiliados</h2><p>Dify-hosting.com participa en programas de afiliados con los proveedores presentados. Cuando hace clic en un enlace y realiza una compra, podemos recibir una comisión sin costo adicional para usted.</p>
          <h2>Impacto en nuestras reseñas</h2><p>Nuestros rankings se basan únicamente en pruebas independientes. Las tasas de comisión no influyen en nuestros rankings. Solo recomendamos proveedores que hemos probado personalmente.</p>
          <h2>Cumplimiento FTC</h2><p>De acuerdo con las directrices de la FTC y regulaciones similares, divulgamos que este sitio contiene enlaces de afiliados.</p>
          <h2>Sin costo adicional</h2><p>Usar nuestros enlaces de afiliados no le cuesta nada extra. La comisión proviene del presupuesto de marketing del proveedor.</p>`,
      it: `<h2>Le nostre relazioni di affiliazione</h2><p>Dify-hosting.com partecipa a programmi di affiliazione con i provider presentati. Quando fai clic su un link e acquisti, potremmo ricevere una commissione senza costi aggiuntivi per te.</p>
          <h2>Impatto sulle nostre recensioni</h2><p>Le nostre classifiche si basano esclusivamente su test indipendenti. I tassi di commissione non influenzano le classifiche. Raccomandiamo solo provider che abbiamo testato personalmente.</p>
          <h2>Conformità FTC</h2><p>In conformità con le linee guida FTC e normative simili, dichiariamo che questo sito contiene link di affiliazione.</p>
          <h2>Nessun costo aggiuntivo</h2><p>Usare i nostri link di affiliazione non ti costa nulla in più. La commissione proviene dal budget di marketing del provider.</p>`,
    };
    return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../i18n/hreflang';
const hreflang = getHreflang('/affiliate-disclosure/');
---
<BaseLayout title="${titles[lang]} — Dify Hosting" description="${titles[lang]}" lang="${lang}" canonical="https://dify-hosting.com/${lang}/affiliate-disclosure/" hreflang={hreflang}>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[{ label: '${t.home}', href: '/${lang}/' }, { label: '${titles[lang]}' }]} />
      <h1 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#f8fafc;line-height:1.2;margin-bottom:1rem;">${titles[lang]}</h1>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <div class="card" style="padding:2rem;border-left:4px solid #f59e0b;">
        <div class="prose">
          ${content[lang]}
        </div>
      </div>
    </div>
  </section>
</BaseLayout>`;
  }

  if (type === 'contact') {
    const titles = { fr: 'Nous contacter', es: 'Contáctanos', it: 'Contattaci' };
    const labels = {
      fr: { name: 'Nom', email: 'Email', msg: 'Message', send: 'Envoyer', nameP: 'Votre nom', msgP: 'Votre message...', response: 'Temps de réponse', responseText: 'Nous répondons généralement sous 24h en semaine.', topics: 'Sujets courants' },
      es: { name: 'Nombre', email: 'Email', msg: 'Mensaje', send: 'Enviar', nameP: 'Tu nombre', msgP: 'Tu mensaje...', response: 'Tiempo de respuesta', responseText: 'Respondemos normalmente en 24h en días laborables.', topics: 'Temas comunes' },
      it: { name: 'Nome', email: 'Email', msg: 'Messaggio', send: 'Invia', nameP: 'Il tuo nome', msgP: 'Il tuo messaggio...', response: 'Tempo di risposta', responseText: 'Rispondiamo generalmente entro 24h nei giorni feriali.', topics: 'Argomenti comuni' },
    };
    const lb = labels[lang];
    return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../i18n/hreflang';
const hreflang = getHreflang('/contact/');
---
<BaseLayout title="${titles[lang]} — Dify Hosting" description="${t.contactSub}" lang="${lang}" canonical="https://dify-hosting.com/${lang}/contact/" hreflang={hreflang}>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[{ label: '${t.home}', href: '/${lang}/' }, { label: '${titles[lang]}' }]} />
      <h1 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#f8fafc;line-height:1.2;margin-bottom:1rem;">${titles[lang]}</h1>
      <p style="font-size:1.1rem;color:#94a3b8;">${t.contactSub}</p>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <div style="display:grid;gap:2rem;grid-template-columns:1fr 1fr;align-items:start;">
        <div class="card" style="padding:2rem;">
          <form style="display:flex;flex-direction:column;gap:1rem;" onsubmit="return false;">
            <div style="display:flex;flex-direction:column;gap:0.375rem;">
              <label style="font-size:0.875rem;font-weight:600;color:#374151;">${lb.name}</label>
              <input type="text" placeholder="${lb.nameP}" style="padding:0.625rem 0.875rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.9375rem;color:#111827;background:#fff;outline:none;" />
            </div>
            <div style="display:flex;flex-direction:column;gap:0.375rem;">
              <label style="font-size:0.875rem;font-weight:600;color:#374151;">${lb.email}</label>
              <input type="email" placeholder="you@example.com" style="padding:0.625rem 0.875rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.9375rem;color:#111827;background:#fff;outline:none;" />
            </div>
            <div style="display:flex;flex-direction:column;gap:0.375rem;">
              <label style="font-size:0.875rem;font-weight:600;color:#374151;">${lb.msg}</label>
              <textarea rows="5" placeholder="${lb.msgP}" style="padding:0.625rem 0.875rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.9375rem;color:#111827;background:#fff;outline:none;resize:vertical;font-family:inherit;"></textarea>
            </div>
            <button type="submit" class="btn-primary">${lb.send}</button>
          </form>
        </div>
        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          <div class="card" style="padding:1.5rem;">
            <h3 style="font-size:1rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Email</h3>
            <p style="color:#4B5563;margin:0;"><a href="mailto:contact@dify-hosting.com" style="color:#1677FF;text-decoration:none;">contact@dify-hosting.com</a></p>
          </div>
          <div class="card" style="padding:1.5rem;">
            <h3 style="font-size:1rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">${lb.response}</h3>
            <p style="color:#4B5563;margin:0;font-size:0.9rem;">${lb.responseText}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>`;
  }
}

function blogIndexPage(lang) {
  const t = T[lang];
  const titles = {
    fr: 'Blog Dify Hosting — Actualités & Tendances',
    es: 'Blog Dify Hosting — Noticias y Tendencias',
    it: 'Blog Dify Hosting — Notizie e Tendenze',
  };
  const descriptions = {
    fr: 'Dernières actualités et guides sur Dify, l\'IA auto-hébergée et les tendances cloud.',
    es: 'Últimas noticias y guías sobre Dify, IA auto-alojada y tendencias cloud.',
    it: 'Ultime notizie e guide su Dify, AI self-hosted e tendenze cloud.',
  };
  const subtitles = {
    fr: 'Actualités, guides et analyses sur Dify, l\'infrastructure IA auto-hébergée et les tendances cloud.',
    es: 'Noticias, guías y análisis sobre Dify, infraestructura de IA auto-alojada y tendencias cloud.',
    it: 'Notizie, guide e analisi su Dify, infrastruttura AI self-hosted e tendenze cloud.',
  };
  const posts = {
    fr: [
      { title: "Quoi de neuf dans Dify 2026 : revue des fonctionnalités", date: '15 mars 2026', iso: '2026-03-15', cat: 'Actualités', href: `/fr/blog/dify-whats-new-2026/`, excerpt: 'Dify a publié plusieurs mises à jour majeures début 2026, incluant des contrôles RAG améliorés, le support natif des serveurs MCP et un moteur de workflow amélioré...' },
      { title: "Tendances IA Hosting 2026 : ce qui change dans l'infrastructure cloud", date: '28 février 2026', iso: '2026-02-28', cat: 'Tendances', href: `/fr/blog/ai-hosting-trends-2026/`, excerpt: "Les fournisseurs cloud rivalisent pour proposer des instances optimisées GPU alors que l'adoption de LLM locaux explose. Voici ce qui compte pour l'hébergement Dify en 2026..." },
    ],
    es: [
      { title: "Novedades en Dify 2026: revisión de características principales", date: '15 marzo 2026', iso: '2026-03-15', cat: 'Noticias', href: `/es/blog/dify-whats-new-2026/`, excerpt: 'Dify ha lanzado varias actualizaciones importantes a principios de 2026, incluyendo controles RAG mejorados, soporte nativo de servidores MCP y un motor de flujo de trabajo mejorado...' },
      { title: "Tendencias de hosting IA 2026: qué cambia en la infraestructura cloud", date: '28 febrero 2026', iso: '2026-02-28', cat: 'Tendencias', href: `/es/blog/ai-hosting-trends-2026/`, excerpt: "Los proveedores cloud compiten para ofrecer instancias optimizadas para GPU mientras crece la adopción de LLM locales. Esto es lo que importa para el hosting Dify en 2026..." },
    ],
    it: [
      { title: "Novità in Dify 2026: recensione delle funzionalità principali", date: '15 marzo 2026', iso: '2026-03-15', cat: 'Notizie', href: `/it/blog/dify-whats-new-2026/`, excerpt: 'Dify ha rilasciato diversi aggiornamenti importanti all\'inizio del 2026, inclusi controlli RAG migliorati, supporto nativo per server MCP e un motore di workflow migliorato...' },
      { title: "Tendenze AI Hosting 2026: cosa cambia nell'infrastruttura cloud", date: '28 febbraio 2026', iso: '2026-02-28', cat: 'Tendenze', href: `/it/blog/ai-hosting-trends-2026/`, excerpt: "I provider cloud gareggiano per offrire istanze ottimizzate per GPU mentre cresce l'adozione di LLM locali. Ecco cosa conta per l'hosting Dify nel 2026..." },
    ],
  };
  const readMore = { fr: 'Lire l\'article', es: 'Leer artículo', it: 'Leggi articolo' };
  const compare = { fr: 'Comparer les hébergeurs Dify', es: 'Comparar proveedores Dify', it: 'Confronta provider Dify' };
  const lookingFor = { fr: 'Vous cherchez des recommandations d\'hébergement ?', es: '¿Buscas recomendaciones de hosting?', it: 'Cerchi raccomandazioni di hosting?' };

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../i18n/hreflang';
const hreflang = getHreflang('/blog/');
---
<BaseLayout title="${titles[lang]}" description="${descriptions[lang]}" lang="${lang}" canonical="https://dify-hosting.com/${lang}/blog/" hreflang={hreflang}>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[{ label: '${t.home}', href: '/${lang}/' }, { label: '${t.blog}' }]} />
      <h1 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#f8fafc;line-height:1.2;margin-bottom:1rem;">Dify Hosting Blog</h1>
      <p style="font-size:1.1rem;color:#94a3b8;max-width:640px;line-height:1.7;">${subtitles[lang]}</p>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <div style="display:grid;gap:1.5rem;">
        ${posts[lang].map(post => `<article class="card" style="padding:0;overflow:hidden;">
          <a href="${post.href}" style="display:block;padding:2rem;text-decoration:none;color:inherit;">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;">
              <span class="badge-primary" style="font-size:0.75rem;padding:0.2rem 0.7rem;">${post.cat}</span>
              <time datetime="${post.iso}" style="font-size:0.85rem;color:#6B7280;">${post.date}</time>
            </div>
            <h2 style="font-size:1.3rem;font-weight:700;color:#111827;line-height:1.4;margin-bottom:0.75rem;">${post.title}</h2>
            <p style="color:#4B5563;line-height:1.75;margin-bottom:1.25rem;">${post.excerpt}</p>
            <span style="font-size:0.875rem;font-weight:600;color:#1677FF;">${readMore[lang]} →</span>
          </a>
        </article>`).join('\n        ')}
      </div>
      <div style="margin-top:3rem;text-align:center;padding:2rem;background:#f8fafc;border-radius:1rem;border:1px solid #e2e8f0;">
        <p style="color:#4B5563;margin-bottom:1rem;">${lookingFor[lang]}</p>
        <a href="/${lang}/best-dify-hosting/" class="btn-primary" style="text-decoration:none;">${compare[lang]}</a>
      </div>
    </div>
  </section>
</BaseLayout>`;
}

// ─── GENERATE MISSING PAGES ────────────────────────────────────────

const missing = {
  fr: [
    'best-dify-hosting',
    'blog/index',
    'guides/dify-docker-setup',
    'guides/dify-gpu-hosting',
    'guides/dify-pricing',
    'guides/self-host-dify',
    'providers/render',
  ],
  es: [
    'blog/index',
    'guides/dify-gpu-hosting',
    'guides/dify-pricing',
    'affiliate-disclosure',
    'contact',
    'privacy-policy',
    'providers/digitalocean',
    'providers/elestio',
    'providers/hetzner',
    'providers/hostinger',
    'providers/kamatera',
    'providers/railway',
    'providers/render',
    'providers/vultr',
  ],
  it: [
    'blog/index',
    'guides/dify-docker-setup',
    'guides/dify-gpu-hosting',
    'guides/dify-pricing',
    'affiliate-disclosure',
    'contact',
    'privacy-policy',
    'providers/digitalocean',
    'providers/elestio',
    'providers/hetzner',
    'providers/hostinger',
    'providers/kamatera',
    'providers/railway',
    'providers/render',
    'providers/vultr',
  ],
};

// For pages that need reading EN source (guides, best-dify-hosting) we generate
// simplified but complete translated versions inline here.

function guidePage(lang, guide) {
  const t = T[lang];
  const configs = {
    'dify-docker-setup': {
      titles: { fr: 'Guide Docker Dify 2026 — Installation Complète', es: 'Guía Docker Dify 2026 — Instalación Completa', it: 'Guida Docker Dify 2026 — Installazione Completa' },
      descs: { fr: 'Comment installer Dify avec Docker Compose sur un VPS. Guide étape par étape pour Ubuntu 22.04.', es: 'Cómo instalar Dify con Docker Compose en un VPS. Guía paso a paso para Ubuntu 22.04.', it: 'Come installare Dify con Docker Compose su un VPS. Guida passo-passo per Ubuntu 22.04.' },
      h1s: { fr: 'Guide Docker Dify 2026', es: 'Guía Docker Dify 2026', it: 'Guida Docker Dify 2026' },
      subs: { fr: 'Installation complète de Dify avec Docker Compose sur Ubuntu 22.04 LTS — de zéro à fonctionnel en 30 minutes.', es: 'Instalación completa de Dify con Docker Compose en Ubuntu 22.04 LTS — de cero a funcionando en 30 minutos.', it: 'Installazione completa di Dify con Docker Compose su Ubuntu 22.04 LTS — da zero a funzionante in 30 minuti.' },
    },
    'dify-gpu-hosting': {
      titles: { fr: 'Dify GPU Hosting 2026 — LLMs Locaux avec Ollama', es: 'Dify GPU Hosting 2026 — LLMs Locales con Ollama', it: 'Dify GPU Hosting 2026 — LLM Locali con Ollama' },
      descs: { fr: 'Comment exécuter des LLMs locaux avec Dify et Ollama sur un serveur GPU. Comparatif des fournisseurs GPU.', es: 'Cómo ejecutar LLMs locales con Dify y Ollama en un servidor GPU. Comparativa de proveedores GPU.', it: 'Come eseguire LLM locali con Dify e Ollama su un server GPU. Confronto tra provider GPU.' },
      h1s: { fr: 'Dify GPU Hosting 2026', es: 'Dify GPU Hosting 2026', it: 'Dify GPU Hosting 2026' },
      subs: { fr: 'Exécutez des LLMs locaux sans coûts d\'API. Connectez Ollama à Dify pour une inférence privée et rapide.', es: 'Ejecuta LLMs locales sin costos de API. Conecta Ollama a Dify para inferencia privada y rápida.', it: 'Esegui LLM locali senza costi API. Collega Ollama a Dify per inferenza privata e veloce.' },
    },
    'dify-pricing': {
      titles: { fr: 'Guide Tarification Dify 2026 — Auto-hébergé vs Cloud', es: 'Guía de Precios Dify 2026 — Auto-alojado vs Cloud', it: 'Guida Prezzi Dify 2026 — Self-hosted vs Cloud' },
      descs: { fr: 'Comparaison complète des coûts Dify 2026. Auto-hébergement vs Dify Cloud. Trouvez la solution la plus économique.', es: 'Comparación completa de costos Dify 2026. Auto-alojamiento vs Dify Cloud. Encuentra la solución más económica.', it: 'Confronto completo dei costi Dify 2026. Self-hosting vs Dify Cloud. Trova la soluzione più economica.' },
      h1s: { fr: 'Guide Tarification Dify 2026', es: 'Guía de Precios Dify 2026', it: 'Guida Prezzi Dify 2026' },
      subs: { fr: 'Combien coûte vraiment Dify ? Du tier gratuit cloud à l\'auto-hébergement bare-metal — toutes les options comparées.', es: '¿Cuánto cuesta realmente Dify? Del nivel gratuito cloud al auto-alojamiento bare-metal — todas las opciones comparadas.', it: 'Quanto costa davvero Dify? Dal tier gratuito cloud all\'hosting bare-metal — tutte le opzioni confrontate.' },
    },
    'self-host-dify': {
      titles: { fr: 'Comment auto-héberger Dify 2026 — Guide Complet', es: 'Cómo auto-alojar Dify 2026 — Guía Completa', it: 'Come fare self-hosting di Dify 2026 — Guida Completa' },
      descs: { fr: 'Guide complet pour auto-héberger Dify sur votre propre serveur. Prérequis, installation Docker, SSL et maintenance.', es: 'Guía completa para auto-alojar Dify en tu propio servidor. Requisitos, instalación Docker, SSL y mantenimiento.', it: 'Guida completa per fare self-hosting di Dify sul tuo server. Prerequisiti, installazione Docker, SSL e manutenzione.' },
      h1s: { fr: 'Comment auto-héberger Dify', es: 'Cómo auto-alojar Dify', it: 'Come fare self-hosting di Dify' },
      subs: { fr: 'Déployez Dify sur votre propre serveur et gardez le contrôle total de vos données et workflows IA.', es: 'Despliega Dify en tu propio servidor y mantén control total de tus datos y flujos de trabajo IA.', it: 'Distribuisci Dify sul tuo server e mantieni il controllo totale dei tuoi dati e flussi di lavoro AI.' },
    },
  };

  const cfg = configs[guide];
  const breadcrumbs = {
    fr: [{ label: 'Accueil', href: `/${lang}/` }, { label: 'Guides', href: `/${lang}/guides/` }, { label: cfg.h1s[lang] }],
    es: [{ label: 'Inicio', href: `/${lang}/` }, { label: 'Guías', href: `/${lang}/guides/` }, { label: cfg.h1s[lang] }],
    it: [{ label: 'Home', href: `/${lang}/` }, { label: 'Guide', href: `/${lang}/guides/` }, { label: cfg.h1s[lang] }],
  };

  // Build content sections per guide
  let contentSections = '';
  if (guide === 'dify-pricing') {
    const cloudPlansLabel = { fr: 'Plans Dify Cloud', es: 'Planes Dify Cloud', it: 'Piani Dify Cloud' };
    const selfHostLabel = { fr: 'Scénarios Auto-hébergement', es: 'Escenarios Auto-alojamiento', it: 'Scenari Self-hosting' };
    const verdictLabel = { fr: 'Notre Recommandation', es: 'Nuestra Recomendación', it: 'La Nostra Raccomandazione' };
    const verdictText = {
      fr: 'Pour la plupart des équipes, Hetzner CX32 à €5,59/mois offre le meilleur rapport qualité-prix pour auto-héberger Dify. C\'est 10× moins cher que Dify Cloud Pro pour des équipes actives.',
      es: 'Para la mayoría de equipos, Hetzner CX32 a €5,59/mes ofrece la mejor relación calidad-precio para auto-alojar Dify. Es 10× más barato que Dify Cloud Pro para equipos activos.',
      it: 'Per la maggior parte dei team, Hetzner CX32 a €5,59/mese offre il miglior rapporto qualità-prezzo per il self-hosting di Dify. È 10× più economico di Dify Cloud Pro per team attivi.',
    };
    contentSections = `
  <section class="section section-alt">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${cloudPlansLabel[lang]}</h2>
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead><tr><th>Plan</th><th>Price</th><th>Credits</th><th>Users</th></tr></thead>
          <tbody>
            <tr><td>Free</td><td>$0/mo</td><td>200 msg credits</td><td>1</td></tr>
            <tr><td>Sandbox</td><td>$0/mo</td><td>5,000 credits</td><td>1</td></tr>
            <tr style="background:#F0F7FF;"><td><strong>Professional</strong></td><td><strong>$59/mo</strong></td><td>1M credits/mo</td><td>3</td></tr>
            <tr><td>Team</td><td>$159/mo</td><td>3M credits/mo</td><td>10</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${selfHostLabel[lang]}</h2>
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead><tr><th>Use case</th><th>Provider</th><th>Config</th><th>Cost/mo</th></tr></thead>
          <tbody>
            <tr><td>Hobby</td><td>Railway</td><td>Free tier</td><td>$0–5</td></tr>
            <tr style="background:#F0F7FF;"><td><strong>Personal</strong></td><td><strong>Hetzner CX22</strong></td><td>2 vCPU / 4 GB</td><td><strong>€3.79</strong></td></tr>
            <tr style="background:#F0F7FF;"><td><strong>Small Team</strong></td><td><strong>Hetzner CX32</strong></td><td>4 vCPU / 8 GB</td><td><strong>€5.59</strong></td></tr>
            <tr><td>Production</td><td>DigitalOcean</td><td>4 vCPU / 8 GB</td><td>~$80</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <div class="card card-featured">
        <h2 style="font-size:1.2rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">${verdictLabel[lang]}</h2>
        <p style="color:#4B5563;line-height:1.7;">${verdictText[lang]}</p>
        <div style="margin-top:1rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
          <a href="/${lang}/best-dify-hosting/" class="btn-primary" style="text-decoration:none;">${t.allProviders || '← All Providers'}</a>
          <a href="/${lang}/providers/hetzner/" class="btn-secondary" style="text-decoration:none;">Hetzner Review</a>
        </div>
      </div>
    </div>
  </section>`;
  } else if (guide === 'dify-gpu-hosting') {
    const gpuTableLabel = { fr: 'Fournisseurs GPU pour Dify', es: 'Proveedores GPU para Dify', it: 'Provider GPU per Dify' };
    const modelsLabel = { fr: 'Modèles LLM recommandés', es: 'Modelos LLM recomendados', it: 'Modelli LLM consigliati' };
    const installLabel = { fr: 'Installation rapide Ollama', es: 'Instalación rápida Ollama', it: 'Installazione rapida Ollama' };
    contentSections = `
  <section class="section section-alt">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${gpuTableLabel[lang]}</h2>
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead><tr><th>Provider</th><th>GPU</th><th>VRAM</th><th>Price/hr</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>Vast.ai</td><td>RTX 4090</td><td>24 GB</td><td>~$0.35</td><td>Budget</td></tr>
            <tr style="background:#F0F7FF;"><td><strong>RunPod</strong></td><td>A100</td><td>80 GB</td><td>$1.99</td><td>Production</td></tr>
            <tr><td>Lambda Labs</td><td>A10</td><td>24 GB</td><td>$0.75</td><td>Development</td></tr>
            <tr><td>Hetzner GPU</td><td>A100</td><td>80 GB</td><td>€2.49</td><td>EU compliance</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1rem;">${modelsLabel[lang]}</h2>
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead><tr><th>Model</th><th>VRAM</th><th>Speed</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>llama3.1:8b</td><td>~6 GB</td><td>Fast</td><td>General purpose</td></tr>
            <tr><td>mistral:7b</td><td>~5 GB</td><td>Very fast</td><td>Speed-critical</td></tr>
            <tr style="background:#F0F7FF;"><td><strong>llama3.1:70b</strong></td><td>~40 GB</td><td>Slow</td><td>High quality</td></tr>
            <tr><td>mixtral:8x7b</td><td>~26 GB</td><td>Medium</td><td>Balanced</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1rem;">${installLabel[lang]}</h2>
      <div style="background:#0f172a;border-radius:0.75rem;padding:1.25rem;overflow-x:auto;font-size:0.85rem;line-height:1.6;color:#e2e8f0;">
        <pre><code># Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model
ollama pull llama3.1:8b

# Dify: Settings → Model Providers → Ollama
# Host: http://localhost:11434</code></pre>
      </div>
    </div>
  </section>`;
  } else {
    // docker-setup and self-host-dify
    const steps = guide === 'dify-docker-setup' ? [
      { title: { fr: 'Mettre à jour le système', es: 'Actualizar el sistema', it: 'Aggiornare il sistema' }, code: 'apt update && apt upgrade -y' },
      { title: { fr: 'Installer Docker', es: 'Instalar Docker', it: 'Installare Docker' }, code: 'curl -fsSL https://get.docker.com | sh\napt-get install -y docker-compose-plugin' },
      { title: { fr: 'Cloner le dépôt Dify', es: 'Clonar el repositorio Dify', it: 'Clonare il repository Dify' }, code: 'git clone https://github.com/langgenius/dify\ncd dify/docker' },
      { title: { fr: 'Configurer les variables d\'environnement', es: 'Configurar variables de entorno', it: 'Configurare le variabili d\'ambiente' }, code: 'cp .env.example .env\nopenssl rand -base64 42  # use as SECRET_KEY\nnano .env' },
      { title: { fr: 'Démarrer Dify', es: 'Iniciar Dify', it: 'Avviare Dify' }, code: 'docker compose up -d\ndocker compose ps' },
    ] : [
      { title: { fr: 'Choisir un hébergeur', es: 'Elegir un proveedor', it: 'Scegliere un provider' }, code: null },
      { title: { fr: 'Créer un serveur Ubuntu 22.04', es: 'Crear un servidor Ubuntu 22.04', it: 'Creare un server Ubuntu 22.04' }, code: 'ssh root@YOUR_SERVER_IP' },
      { title: { fr: 'Installer Docker', es: 'Instalar Docker', it: 'Installare Docker' }, code: 'curl -fsSL https://get.docker.com | sh\napt-get install -y docker-compose-plugin' },
      { title: { fr: 'Installer Dify', es: 'Instalar Dify', it: 'Installare Dify' }, code: 'git clone https://github.com/langgenius/dify\ncd dify/docker\ncp .env.example .env\ndocker compose up -d' },
      { title: { fr: 'Configurer SSL', es: 'Configurar SSL', it: 'Configurare SSL' }, code: 'apt install -y certbot nginx\ncertbot --nginx -d your-domain.com' },
    ];
    const stepsLabel = { fr: 'Étapes d\'installation', es: 'Pasos de instalación', it: 'Passaggi di installazione' };
    contentSections = `
  <section class="section section-alt">
    <div class="container-sm">
      <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">${stepsLabel[lang]}</h2>
      <div style="display:flex;flex-direction:column;gap:1.25rem;">
        ${steps.map((step, i) => `<div style="display:flex;gap:1rem;align-items:flex-start;">
          <div class="step-number">${i + 1}</div>
          <div style="flex:1;">
            <h3 style="font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.4rem;">${step.title[lang]}</h3>
            ${step.code ? `<pre class="prose" style="margin:0;"><code>${step.code}</code></pre>` : ''}
          </div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;
  }

  return `---
import BaseLayout from '../../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../../i18n/hreflang';
const hreflang = getHreflang('/guides/${guide}/');
---
<BaseLayout
  title="${cfg.titles[lang]}"
  description="${cfg.descs[lang]}"
  lang="${lang}"
  canonical="https://dify-hosting.com/${lang}/guides/${guide}/"
  hreflang={hreflang}
>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={${JSON.stringify(breadcrumbs[lang])}} />
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
        <span style="display:inline-flex;align-items:center;padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;background:#dcfce7;color:#166534;">Updated March 2026</span>
      </div>
      <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;color:#fff;line-height:1.2;margin-bottom:1rem;">${cfg.h1s[lang]}</h1>
      <p style="font-size:1.1rem;color:#94a3b8;max-width:680px;line-height:1.7;">${cfg.subs[lang]}</p>
    </div>
  </section>
${contentSections}
  <section class="section">
    <div class="container-sm">
      <h2 style="font-size:1.2rem;font-weight:700;color:#111827;margin-bottom:1rem;">${t.relatedResources}</h2>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        <a href="/${lang}/best-dify-hosting/" class="btn-secondary">${t.bestHosting}</a>
        <a href="/${lang}/providers/hetzner/" class="btn-secondary">Hetzner Review</a>
      </div>
    </div>
  </section>
</BaseLayout>`;
}

function bestDifyHostingPage(lang) {
  const t = T[lang];
  const titles = {
    fr: 'Meilleur Hébergement Dify 2026 — Comparatif Complet',
    es: 'Mejor Hosting Dify 2026 — Comparativa Completa',
    it: 'Miglior Hosting Dify 2026 — Confronto Completo',
  };
  const descs = {
    fr: 'Nous avons testé 8 hébergeurs pour Dify AI. Comparatif prix, performance et facilité d\'installation. Hetzner remporte le rapport qualité-prix.',
    es: 'Hemos probado 8 proveedores de hosting para Dify AI. Comparativa de precios, rendimiento y facilidad de configuración. Hetzner gana en relación calidad-precio.',
    it: 'Abbiamo testato 8 provider di hosting per Dify AI. Confronto prezzi, performance e facilità di configurazione. Hetzner vince nel rapporto qualità-prezzo.',
  };
  const h1s = { fr: 'Meilleur Hébergement Dify 2026', es: 'Mejor Hosting Dify 2026', it: 'Miglior Hosting Dify 2026' };
  const subs = {
    fr: 'Comparatif indépendant de 8 hébergeurs pour auto-héberger Dify AI — avec vrais tests de performance.',
    es: 'Comparativa independiente de 8 proveedores para auto-alojar Dify AI — con pruebas de rendimiento reales.',
    it: 'Confronto indipendente di 8 provider per il self-hosting di Dify AI — con test delle prestazioni reali.',
  };
  const provList = [
    { rank: 1, name: 'Hetzner', price: '€3.79/mo', ram: '4GB', rating: 4.8, badge_fr: 'Meilleur rapport qualité-prix', badge_es: 'Mejor relación calidad-precio', badge_it: 'Miglior rapporto qualità-prezzo', href: `/${lang}/providers/hetzner/` },
    { rank: 2, name: 'Hostinger', price: '$7.99/mo', ram: '8GB', rating: 4.5, badge_fr: 'Idéal débutants', badge_es: 'Ideal principiantes', badge_it: 'Ideale principianti', href: `/${lang}/providers/hostinger/` },
    { rank: 3, name: 'DigitalOcean', price: '$24/mo', ram: '4GB', rating: 4.3, badge_fr: null, badge_es: null, badge_it: null, href: `/${lang}/providers/digitalocean/` },
    { rank: 4, name: 'Vultr', price: '$12/mo', ram: '4GB', rating: 4.2, badge_fr: null, badge_es: null, badge_it: null, href: `/${lang}/providers/vultr/` },
    { rank: 5, name: 'Elestio', price: '$19/mo', ram: 'Managed', rating: 4.0, badge_fr: 'Le plus simple', badge_es: 'Más sencillo', badge_it: 'Più semplice', href: `/${lang}/providers/elestio/` },
    { rank: 6, name: 'Railway', price: '$5/mo', ram: '512MB–8GB', rating: 3.8, badge_fr: null, badge_es: null, badge_it: null, href: `/${lang}/providers/railway/` },
    { rank: 7, name: 'Render', price: '$25/mo', ram: '2GB', rating: 3.7, badge_fr: null, badge_es: null, badge_it: null, href: `/${lang}/providers/render/` },
    { rank: 8, name: 'Kamatera', price: '$4/mo', ram: 'Config.', rating: 3.9, badge_fr: null, badge_es: null, badge_it: null, href: `/${lang}/providers/kamatera/` },
  ];

  const compareLabel = { fr: 'Comparer', es: 'Comparar', it: 'Confronta' };
  const detailsLabel = { fr: 'Voir détails →', es: 'Ver detalles →', it: 'Vedi dettagli →' };
  const rankLabel = { fr: '#', es: '#', it: '#' };

  const rows = provList.map(p => {
    const badge = p[`badge_${lang}`];
    const stars = Math.round(p.rating);
    return `<tr>
          <td><strong>${rankLabel[lang]}${p.rank}</strong></td>
          <td><a href="${p.href}" style="color:#1677FF;font-weight:600;text-decoration:none;">${p.name}</a>${badge ? ` <span class="badge badge-editors-choice" style="font-size:0.7rem;">${badge}</span>` : ''}</td>
          <td>${p.price}</td>
          <td>${p.ram}</td>
          <td>${'★'.repeat(stars)}${'☆'.repeat(5 - stars)} ${p.rating}</td>
          <td><a href="${p.href}" class="btn-secondary" style="font-size:0.8rem;padding:0.3rem 0.6rem;">${detailsLabel[lang]}</a></td>
        </tr>`;
  }).join('\n        ');

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumb from '../../../components/Breadcrumb.astro';
import { getHreflang } from '../../../i18n/hreflang';
const hreflang = getHreflang('/best-dify-hosting/');
---
<BaseLayout
  title="${titles[lang]}"
  description="${descs[lang]}"
  lang="${lang}"
  canonical="https://dify-hosting.com/${lang}/best-dify-hosting/"
  hreflang={hreflang}
>
  <section class="section" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding-bottom:3rem;">
    <div class="container-sm">
      <Breadcrumb items={[{ label: '${t.home}', href: '/${lang}/' }, { label: '${h1s[lang]}' }]} />
      <h1 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#f8fafc;line-height:1.2;margin-bottom:1rem;">${h1s[lang]}</h1>
      <p style="font-size:1.1rem;color:#94a3b8;max-width:640px;line-height:1.7;">${subs[lang]}</p>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead>
            <tr><th>${rankLabel[lang]}</th><th>Provider</th><th>Price</th><th>RAM</th><th>Rating</th><th></th></tr>
          </thead>
          <tbody>
        ${rows}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-sm">
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        <a href="/${lang}/guides/self-host-dify/" class="btn-primary" style="text-decoration:none;">${t.selfHost}</a>
        <a href="/${lang}/guides/dify-pricing/" class="btn-secondary" style="text-decoration:none;">${t.pricing}</a>
        <a href="/${lang}/comparisons/dify-vs-n8n/" class="btn-secondary" style="text-decoration:none;">${compareLabel[lang]}</a>
      </div>
    </div>
  </section>
</BaseLayout>`;
}

// ─── MAIN GENERATION LOOP ─────────────────────────────────────────
let created = 0;

for (const [lang, pages] of Object.entries(missing)) {
  console.log(`\n[${lang.toUpperCase()}]`);
  for (const page of pages) {
    const filePath = `${lang}/${page}/index.astro`;

    if (existsSync(`${BASE}/${filePath}`)) {
      console.log(`  skip (exists): ${filePath}`);
      continue;
    }

    let content = null;

    if (page === 'blog/index') {
      content = blogIndexPage(lang);
    } else if (page === 'best-dify-hosting') {
      content = bestDifyHostingPage(lang);
    } else if (page === 'privacy-policy') {
      content = utilityPage(lang, 'privacy-policy');
    } else if (page === 'affiliate-disclosure') {
      content = utilityPage(lang, 'affiliate-disclosure');
    } else if (page === 'contact') {
      content = utilityPage(lang, 'contact');
    } else if (page.startsWith('providers/')) {
      const slug = page.replace('providers/', '');
      content = providerPage(lang, slug);
    } else if (page.startsWith('guides/')) {
      const guide = page.replace('guides/', '');
      content = guidePage(lang, guide);
    }

    if (content) {
      write(filePath, content);
      created++;
    } else {
      console.log(`  SKIPPED (no template): ${filePath}`);
    }
  }
}

console.log(`\n✅ Created ${created} pages`);
