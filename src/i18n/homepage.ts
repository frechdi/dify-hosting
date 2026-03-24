export interface HomepageContent {
  meta: { title: string; description: string; };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string; }[];
  };
  trustBar: { items: { icon: string; text: string; }[]; };
  providersSection: { badge: string; h2: string; subtitle: string; };
  howItWorks: {
    badge: string; h2: string; subtitle: string;
    steps: { title: string; desc: string; }[];
  };
  comparisonSection: { badge: string; h2: string; subtitle: string; };
  faqSection: { badge: string; h2: string; items: { q: string; a: string; }[]; };
  ctaSection: { h2: string; subtitle: string; btnPrimary: string; btnSecondary: string; };
}

const homepage: Record<string, HomepageContent> = {
  en: {
    meta: {
      title: 'Best Dify Hosting 2026 — Expert Reviews & VPS Comparison',
      description: 'Compare the 8 best Dify hosting providers in 2026. Independent expert reviews, real pricing, setup guides, and affiliate-free rankings. Find the perfect host for your Dify deployment.',
    },
    hero: {
      badge: 'Updated March 2026 · Expert Reviewed',
      h1: 'Best Dify Hosting in 2026 — Expert Reviews & Comparison',
      subtitle: 'We tested 8 VPS and cloud providers so you don\'t have to. Find the cheapest, fastest, and most reliable way to self-host Dify — from $3.99/month.',
      ctaPrimary: 'See Top Providers',
      ctaSecondary: 'How to Self-Host Dify',
      stats: [
        { value: '134k+', label: 'GitHub Stars' },
        { value: '8', label: 'Providers Reviewed' },
        { value: '5', label: 'Languages' },
        { value: 'Free', label: 'To Use' },
      ],
    },
    trustBar: {
      items: [
        { icon: '✓', text: 'Independent Reviews' },
        { icon: '✓', text: 'No Sponsored Rankings' },
        { icon: '✓', text: 'Updated March 2026' },
        { icon: '✓', text: 'GDPR Compliant' },
        { icon: '✓', text: 'Expert Tested' },
      ],
    },
    providersSection: {
      badge: 'Top Picks for 2026',
      h2: 'Best Dify Hosting Providers',
      subtitle: 'All providers tested with real Dify deployments. Rankings based on price, performance, ease of setup, and support quality.',
    },
    howItWorks: {
      badge: 'Simple Process',
      h2: 'Get Dify Running in 3 Steps',
      subtitle: 'From zero to a fully working Dify instance in under 30 minutes.',
      steps: [
        { title: 'Choose a Provider', desc: 'Pick the hosting provider that matches your budget, region, and technical requirements from our curated list.' },
        { title: 'Follow Our Guide', desc: 'Use our step-by-step installation guides with exact commands, config files, and troubleshooting tips.' },
        { title: 'Deploy Dify in Minutes', desc: 'Your Dify instance is live with SSL, backups configured, and ready to build AI workflows.' },
      ],
    },
    comparisonSection: {
      badge: 'Side-by-Side Comparison',
      h2: 'Full Provider Comparison Table',
      subtitle: 'Compare price, RAM, storage, managed options and free trials across all 8 providers at a glance.',
    },
    faqSection: {
      badge: 'Frequently Asked Questions',
      h2: 'Dify Hosting FAQ',
      items: [
        { q: 'What is the minimum server spec to run Dify?', a: 'Dify requires at minimum 2 vCPU and 4GB RAM to run comfortably in production. For development or testing, 2GB RAM may suffice, but you\'ll likely experience performance bottlenecks. We recommend at least 4GB RAM and 2 vCPU for a smooth experience with multiple users.' },
        { q: 'Can I host Dify for free?', a: 'Yes, partially. Railway offers $5 free credit per month which can cover basic Dify usage. Render has a free tier, but it comes with cold starts that make it unsuitable for production. For serious use, budget $4–$10/month for a VPS from Hostinger, Hetzner, or DigitalOcean.' },
        { q: 'Is it better to self-host Dify or use Dify Cloud?', a: 'Self-hosting gives you full data control, no usage limits, and lower long-term costs. Dify Cloud is easier to start with but can get expensive as you scale. If you handle sensitive data or need custom integrations, self-hosting is the better choice. Our guides make it straightforward even for non-developers.' },
        { q: 'Which Dify hosting provider is best for Europe?', a: 'Hetzner is the top choice for European users. Based in Germany, it\'s GDPR-compliant by default, offers the best price-to-performance ratio in the EU, and has data centers in Nuremberg, Falkenstein, and Helsinki. Hostinger also has EU data centers and is cheaper if GDPR compliance is not a primary concern.' },
        { q: 'How do I install Dify on a VPS?', a: 'The standard method is Docker Compose. You\'ll need Docker and Docker Compose installed, then clone the Dify repo, copy the .env.example to .env, set your API keys and domain, and run docker compose up -d. The full step-by-step guide is in our How to Self-Host Dify guide.' },
        { q: 'Does Dify support GPU hosting?', a: 'Dify itself is CPU-based and doesn\'t require a GPU. However, if you\'re running local LLMs like Ollama or LM Studio alongside Dify, you\'ll benefit from GPU resources. Kamatera and Vultr offer GPU-enabled instances. For most users, connecting Dify to external APIs (OpenAI, Anthropic, etc.) is more cost-effective than GPU hosting.' },
      ],
    },
    ctaSection: {
      h2: 'Ready to Host Your Own Dify?',
      subtitle: 'Join thousands of developers and businesses running Dify on their own infrastructure. Start with our top-rated provider from $3.99/month.',
      btnPrimary: 'Get Started with Hostinger',
      btnSecondary: 'Read the Setup Guide',
    },
  },

  de: {
    meta: {
      title: 'Bestes Dify Hosting 2026 — Experten-Reviews & VPS-Vergleich',
      description: 'Vergleiche die 8 besten Dify-Hosting-Anbieter 2026. Unabhängige Experten-Reviews, echte Preise und Setup-Anleitungen. Finde den perfekten Host für Dify.',
    },
    hero: {
      badge: 'Aktualisiert März 2026 · Von Experten geprüft',
      h1: 'Bestes Dify Hosting 2026 — Experten-Reviews & Vergleich',
      subtitle: 'Wir haben 8 VPS- und Cloud-Anbieter getestet, damit du es nicht musst. Finde den günstigsten, schnellsten und zuverlässigsten Weg, Dify selbst zu hosten — ab 3,99 $/Monat.',
      ctaPrimary: 'Top-Anbieter ansehen',
      ctaSecondary: 'Wie man Dify selbst hostet',
      stats: [
        { value: '134k+', label: 'GitHub-Sterne' },
        { value: '8', label: 'Anbieter getestet' },
        { value: '5', label: 'Sprachen' },
        { value: 'Kostenlos', label: 'Nutzung' },
      ],
    },
    trustBar: {
      items: [
        { icon: '✓', text: 'Unabhängige Reviews' },
        { icon: '✓', text: 'Keine gesponserten Rankings' },
        { icon: '✓', text: 'Aktualisiert März 2026' },
        { icon: '✓', text: 'DSGVO-konform' },
        { icon: '✓', text: 'Von Experten getestet' },
      ],
    },
    providersSection: {
      badge: 'Top-Picks für 2026',
      h2: 'Beste Dify-Hosting-Anbieter',
      subtitle: 'Alle Anbieter mit echten Dify-Deployments getestet. Rankings basieren auf Preis, Leistung, Einrichtungsaufwand und Support-Qualität.',
    },
    howItWorks: {
      badge: 'Einfacher Prozess',
      h2: 'Dify in 3 Schritten zum Laufen bringen',
      subtitle: 'Von null zu einer voll funktionsfähigen Dify-Instanz in unter 30 Minuten.',
      steps: [
        { title: 'Anbieter wählen', desc: 'Wähle den Hosting-Anbieter, der zu deinem Budget, deiner Region und deinen technischen Anforderungen passt.' },
        { title: 'Unserer Anleitung folgen', desc: 'Nutze unsere Schritt-für-Schritt-Installationsanleitungen mit genauen Befehlen, Konfigurationsdateien und Tipps zur Fehlerbehebung.' },
        { title: 'Dify in Minuten deployen', desc: 'Deine Dify-Instanz ist live mit SSL, konfigurierten Backups und bereit, KI-Workflows zu erstellen.' },
      ],
    },
    comparisonSection: {
      badge: 'Direkter Vergleich',
      h2: 'Vollständige Anbieter-Vergleichstabelle',
      subtitle: 'Vergleiche Preis, RAM, Speicher, verwaltete Optionen und kostenlose Testversionen aller 8 Anbieter auf einen Blick.',
    },
    faqSection: {
      badge: 'Häufig gestellte Fragen',
      h2: 'Dify Hosting FAQ',
      items: [
        { q: 'Welche Mindestserver-Spezifikationen sind für Dify erforderlich?', a: 'Dify benötigt mindestens 2 vCPU und 4 GB RAM, um in der Produktion komfortabel zu laufen. Für Entwicklung oder Tests können 2 GB RAM ausreichen, aber du wirst wahrscheinlich Performance-Engpässe erleben. Wir empfehlen mindestens 4 GB RAM und 2 vCPU für eine reibungslose Erfahrung mit mehreren Nutzern.' },
        { q: 'Kann ich Dify kostenlos hosten?', a: 'Ja, teilweise. Railway bietet monatlich 5 $ kostenloses Guthaben, das eine grundlegende Dify-Nutzung abdecken kann. Render hat ein kostenloses Kontingent, aber mit Cold Starts, die es für die Produktion ungeeignet machen. Für den ernsthaften Einsatz plane 4–10 $/Monat für einen VPS von Hostinger, Hetzner oder DigitalOcean ein.' },
        { q: 'Ist es besser, Dify selbst zu hosten oder Dify Cloud zu nutzen?', a: 'Selbst-Hosting gibt dir vollständige Datenkontrolle, keine Nutzungsbeschränkungen und niedrigere Langzeitkosten. Dify Cloud ist einfacher zu starten, kann aber beim Skalieren teuer werden. Wenn du sensible Daten verarbeitest oder benutzerdefinierte Integrationen benötigst, ist Selbst-Hosting die bessere Wahl.' },
        { q: 'Welcher Dify-Hosting-Anbieter ist am besten für Europa?', a: 'Hetzner ist die Top-Wahl für europäische Nutzer. Mit Sitz in Deutschland ist es standardmäßig DSGVO-konform, bietet das beste Preis-Leistungs-Verhältnis in der EU und hat Rechenzentren in Nürnberg, Falkenstein und Helsinki.' },
        { q: 'Wie installiere ich Dify auf einem VPS?', a: 'Die Standardmethode ist Docker Compose. Du benötigst Docker und Docker Compose, klonst dann das Dify-Repository, kopierst .env.example nach .env, setzt deine API-Schlüssel und Domain, und führst docker compose up -d aus. Die vollständige Schritt-für-Schritt-Anleitung findest du in unserem Selbst-Hosting-Guide.' },
        { q: 'Unterstützt Dify GPU-Hosting?', a: 'Dify selbst ist CPU-basiert und benötigt keine GPU. Wenn du jedoch lokale LLMs wie Ollama oder LM Studio neben Dify betreibst, profitierst du von GPU-Ressourcen. Kamatera und Vultr bieten GPU-fähige Instanzen an. Für die meisten Nutzer ist die Verbindung von Dify zu externen APIs kostengünstiger als GPU-Hosting.' },
      ],
    },
    ctaSection: {
      h2: 'Bereit, dein eigenes Dify zu hosten?',
      subtitle: 'Schließe dich Tausenden von Entwicklern und Unternehmen an, die Dify auf ihrer eigenen Infrastruktur betreiben. Starte mit unserem Top-Anbieter ab 3,99 $/Monat.',
      btnPrimary: 'Mit Hostinger starten',
      btnSecondary: 'Setup-Anleitung lesen',
    },
  },

  fr: {
    meta: {
      title: 'Meilleur Hébergement Dify 2026 — Avis Experts & Comparatif VPS',
      description: 'Comparez les 8 meilleurs hébergeurs Dify en 2026. Avis experts indépendants, prix réels et guides d\'installation. Trouvez l\'hébergeur parfait pour votre déploiement Dify.',
    },
    hero: {
      badge: 'Mis à jour mars 2026 · Vérifié par des experts',
      h1: 'Meilleur Hébergement Dify en 2026 — Avis Experts & Comparatif',
      subtitle: 'Nous avons testé 8 fournisseurs VPS et cloud pour vous. Trouvez le moyen le moins cher, le plus rapide et le plus fiable d\'auto-héberger Dify — à partir de 3,99 $/mois.',
      ctaPrimary: 'Voir les meilleurs fournisseurs',
      ctaSecondary: 'Comment auto-héberger Dify',
      stats: [
        { value: '134k+', label: 'Étoiles GitHub' },
        { value: '8', label: 'Fournisseurs testés' },
        { value: '5', label: 'Langues' },
        { value: 'Gratuit', label: 'À utiliser' },
      ],
    },
    trustBar: {
      items: [
        { icon: '✓', text: 'Avis indépendants' },
        { icon: '✓', text: 'Aucun classement sponsorisé' },
        { icon: '✓', text: 'Mis à jour mars 2026' },
        { icon: '✓', text: 'Conforme RGPD' },
        { icon: '✓', text: 'Testé par des experts' },
      ],
    },
    providersSection: {
      badge: 'Meilleurs choix 2026',
      h2: 'Meilleurs fournisseurs d\'hébergement Dify',
      subtitle: 'Tous les fournisseurs testés avec de vrais déploiements Dify. Classements basés sur le prix, les performances, la facilité d\'installation et la qualité du support.',
    },
    howItWorks: {
      badge: 'Processus simple',
      h2: 'Lancez Dify en 3 étapes',
      subtitle: 'De zéro à une instance Dify entièrement fonctionnelle en moins de 30 minutes.',
      steps: [
        { title: 'Choisir un fournisseur', desc: 'Sélectionnez le fournisseur d\'hébergement qui correspond à votre budget, votre région et vos exigences techniques.' },
        { title: 'Suivre notre guide', desc: 'Utilisez nos guides d\'installation étape par étape avec des commandes exactes, des fichiers de configuration et des conseils de dépannage.' },
        { title: 'Déployer Dify en minutes', desc: 'Votre instance Dify est en ligne avec SSL, des sauvegardes configurées et prête à construire des workflows IA.' },
      ],
    },
    comparisonSection: {
      badge: 'Comparaison côte à côte',
      h2: 'Tableau comparatif complet des fournisseurs',
      subtitle: 'Comparez le prix, la RAM, le stockage, les options gérées et les essais gratuits de tous les 8 fournisseurs en un coup d\'œil.',
    },
    faqSection: {
      badge: 'Questions fréquemment posées',
      h2: 'FAQ Hébergement Dify',
      items: [
        { q: 'Quelles sont les spécifications minimales du serveur pour faire tourner Dify ?', a: 'Dify nécessite au minimum 2 vCPU et 4 Go de RAM pour fonctionner confortablement en production. Pour le développement ou les tests, 2 Go de RAM peuvent suffire, mais vous rencontrerez probablement des goulots d\'étranglement. Nous recommandons au moins 4 Go de RAM et 2 vCPU pour une expérience fluide avec plusieurs utilisateurs.' },
        { q: 'Puis-je héberger Dify gratuitement ?', a: 'Oui, partiellement. Railway offre 5 $ de crédit gratuit par mois qui peut couvrir une utilisation basique de Dify. Render a un niveau gratuit, mais avec des démarrages à froid qui le rendent inadapté à la production. Pour un usage sérieux, prévoyez 4 à 10 $/mois pour un VPS chez Hostinger, Hetzner ou DigitalOcean.' },
        { q: 'Vaut-il mieux auto-héberger Dify ou utiliser Dify Cloud ?', a: 'L\'auto-hébergement vous donne un contrôle total des données, aucune limite d\'utilisation et des coûts à long terme inférieurs. Dify Cloud est plus facile à démarrer mais peut devenir coûteux à l\'échelle. Si vous traitez des données sensibles ou avez besoin d\'intégrations personnalisées, l\'auto-hébergement est le meilleur choix.' },
        { q: 'Quel hébergeur Dify est le meilleur pour l\'Europe ?', a: 'Hetzner est le premier choix pour les utilisateurs européens. Basé en Allemagne, il est conforme au RGPD par défaut, offre le meilleur rapport qualité-prix dans l\'UE, et dispose de centres de données à Nuremberg, Falkenstein et Helsinki.' },
        { q: 'Comment installer Dify sur un VPS ?', a: 'La méthode standard est Docker Compose. Vous aurez besoin de Docker et Docker Compose, puis clonez le dépôt Dify, copiez .env.example en .env, définissez vos clés API et votre domaine, et exécutez docker compose up -d. Le guide complet étape par étape se trouve dans notre guide d\'auto-hébergement.' },
        { q: 'Dify supporte-t-il l\'hébergement GPU ?', a: 'Dify lui-même est basé sur le CPU et ne nécessite pas de GPU. Cependant, si vous exécutez des LLM locaux comme Ollama ou LM Studio aux côtés de Dify, vous bénéficierez de ressources GPU. Kamatera et Vultr proposent des instances compatibles GPU. Pour la plupart des utilisateurs, connecter Dify à des API externes est plus rentable.' },
      ],
    },
    ctaSection: {
      h2: 'Prêt à héberger votre propre Dify ?',
      subtitle: 'Rejoignez des milliers de développeurs et d\'entreprises qui font tourner Dify sur leur propre infrastructure. Commencez avec notre fournisseur le mieux noté à partir de 3,99 $/mois.',
      btnPrimary: 'Commencer avec Hostinger',
      btnSecondary: 'Lire le guide d\'installation',
    },
  },

  es: {
    meta: {
      title: 'Mejor Hosting Dify 2026 — Reseñas de Expertos y Comparativa VPS',
      description: 'Compara los 8 mejores proveedores de hosting para Dify en 2026. Reseñas expertas independientes, precios reales y guías de configuración. Encuentra el host perfecto para tu Dify.',
    },
    hero: {
      badge: 'Actualizado marzo 2026 · Revisado por expertos',
      h1: 'Mejor Hosting Dify en 2026 — Reseñas de Expertos y Comparativa',
      subtitle: 'Hemos probado 8 proveedores VPS y cloud para que no tengas que hacerlo. Encuentra la forma más barata, rápida y fiable de auto-alojar Dify — desde 3,99 $/mes.',
      ctaPrimary: 'Ver los mejores proveedores',
      ctaSecondary: 'Cómo auto-alojar Dify',
      stats: [
        { value: '134k+', label: 'Estrellas en GitHub' },
        { value: '8', label: 'Proveedores analizados' },
        { value: '5', label: 'Idiomas' },
        { value: 'Gratis', label: 'De usar' },
      ],
    },
    trustBar: {
      items: [
        { icon: '✓', text: 'Reseñas independientes' },
        { icon: '✓', text: 'Sin clasificaciones patrocinadas' },
        { icon: '✓', text: 'Actualizado marzo 2026' },
        { icon: '✓', text: 'Conforme con RGPD' },
        { icon: '✓', text: 'Probado por expertos' },
      ],
    },
    providersSection: {
      badge: 'Mejores opciones para 2026',
      h2: 'Mejores proveedores de hosting para Dify',
      subtitle: 'Todos los proveedores probados con despliegues reales de Dify. Rankings basados en precio, rendimiento, facilidad de configuración y calidad del soporte.',
    },
    howItWorks: {
      badge: 'Proceso sencillo',
      h2: 'Pon en marcha Dify en 3 pasos',
      subtitle: 'De cero a una instancia de Dify completamente funcional en menos de 30 minutos.',
      steps: [
        { title: 'Elegir un proveedor', desc: 'Selecciona el proveedor de hosting que se adapte a tu presupuesto, región y requisitos técnicos de nuestra lista curada.' },
        { title: 'Seguir nuestra guía', desc: 'Utiliza nuestras guías de instalación paso a paso con comandos exactos, archivos de configuración y consejos para solucionar problemas.' },
        { title: 'Desplegar Dify en minutos', desc: 'Tu instancia de Dify está en línea con SSL, copias de seguridad configuradas y lista para crear flujos de trabajo de IA.' },
      ],
    },
    comparisonSection: {
      badge: 'Comparación lado a lado',
      h2: 'Tabla comparativa completa de proveedores',
      subtitle: 'Compara precio, RAM, almacenamiento, opciones gestionadas y pruebas gratuitas de los 8 proveedores de un vistazo.',
    },
    faqSection: {
      badge: 'Preguntas frecuentes',
      h2: 'Preguntas frecuentes sobre hosting Dify',
      items: [
        { q: '¿Cuál es la especificación mínima del servidor para ejecutar Dify?', a: 'Dify requiere como mínimo 2 vCPU y 4 GB de RAM para funcionar cómodamente en producción. Para desarrollo o pruebas, 2 GB de RAM pueden ser suficientes, pero probablemente experimentarás cuellos de botella en el rendimiento. Recomendamos al menos 4 GB de RAM y 2 vCPU para una experiencia fluida con múltiples usuarios.' },
        { q: '¿Puedo alojar Dify de forma gratuita?', a: 'Sí, parcialmente. Railway ofrece 5 $ de crédito gratuito al mes que puede cubrir el uso básico de Dify. Render tiene un nivel gratuito, pero con arranques en frío que lo hacen inadecuado para producción. Para un uso serio, presupuesta 4–10 $/mes para un VPS de Hostinger, Hetzner o DigitalOcean.' },
        { q: '¿Es mejor auto-alojar Dify o usar Dify Cloud?', a: 'El auto-alojamiento te da control total de los datos, sin límites de uso y costes a largo plazo más bajos. Dify Cloud es más fácil de empezar pero puede volverse caro a escala. Si manejas datos sensibles o necesitas integraciones personalizadas, el auto-alojamiento es la mejor opción.' },
        { q: '¿Qué proveedor de hosting para Dify es mejor para Europa?', a: 'Hetzner es la mejor opción para usuarios europeos. Con sede en Alemania, cumple con el RGPD por defecto, ofrece la mejor relación calidad-precio en la UE y tiene centros de datos en Núremberg, Falkenstein y Helsinki.' },
        { q: '¿Cómo instalo Dify en un VPS?', a: 'El método estándar es Docker Compose. Necesitarás Docker y Docker Compose instalados, luego clona el repositorio de Dify, copia .env.example a .env, configura tus claves API y dominio, y ejecuta docker compose up -d. La guía completa paso a paso está en nuestra guía de auto-alojamiento.' },
        { q: '¿Dify admite hosting con GPU?', a: 'Dify en sí está basado en CPU y no requiere GPU. Sin embargo, si ejecutas LLMs locales como Ollama o LM Studio junto a Dify, te beneficiarás de recursos GPU. Kamatera y Vultr ofrecen instancias con GPU. Para la mayoría de los usuarios, conectar Dify a APIs externas es más rentable que el hosting con GPU.' },
      ],
    },
    ctaSection: {
      h2: '¿Listo para alojar tu propio Dify?',
      subtitle: 'Únete a miles de desarrolladores y empresas que ejecutan Dify en su propia infraestructura. Empieza con nuestro proveedor mejor valorado desde 3,99 $/mes.',
      btnPrimary: 'Comenzar con Hostinger',
      btnSecondary: 'Leer la guía de configuración',
    },
  },

  it: {
    meta: {
      title: 'Miglior Hosting Dify 2026 — Recensioni Esperti e Confronto VPS',
      description: 'Confronta i migliori 8 provider di hosting per Dify nel 2026. Recensioni indipendenti di esperti, prezzi reali e guide di configurazione. Trova l\'host perfetto per il tuo Dify.',
    },
    hero: {
      badge: 'Aggiornato marzo 2026 · Verificato da esperti',
      h1: 'Miglior Hosting Dify nel 2026 — Recensioni Esperti e Confronto',
      subtitle: 'Abbiamo testato 8 provider VPS e cloud al posto tuo. Trova il modo più economico, veloce e affidabile per auto-ospitare Dify — a partire da 3,99 $/mese.',
      ctaPrimary: 'Vedi i migliori provider',
      ctaSecondary: 'Come auto-ospitare Dify',
      stats: [
        { value: '134k+', label: 'Stelle GitHub' },
        { value: '8', label: 'Provider recensiti' },
        { value: '5', label: 'Lingue' },
        { value: 'Gratis', label: 'Da usare' },
      ],
    },
    trustBar: {
      items: [
        { icon: '✓', text: 'Recensioni indipendenti' },
        { icon: '✓', text: 'Nessun ranking sponsorizzato' },
        { icon: '✓', text: 'Aggiornato marzo 2026' },
        { icon: '✓', text: 'Conforme al GDPR' },
        { icon: '✓', text: 'Testato da esperti' },
      ],
    },
    providersSection: {
      badge: 'Le migliori scelte per il 2026',
      h2: 'Migliori provider di hosting per Dify',
      subtitle: 'Tutti i provider testati con veri deployment di Dify. Classifiche basate su prezzo, prestazioni, facilità di configurazione e qualità del supporto.',
    },
    howItWorks: {
      badge: 'Processo semplice',
      h2: 'Avvia Dify in 3 passaggi',
      subtitle: 'Da zero a un\'istanza Dify completamente funzionante in meno di 30 minuti.',
      steps: [
        { title: 'Scegli un provider', desc: 'Seleziona il provider di hosting che corrisponde al tuo budget, alla tua regione e ai tuoi requisiti tecnici dalla nostra lista curata.' },
        { title: 'Segui la nostra guida', desc: 'Usa le nostre guide di installazione passo dopo passo con comandi esatti, file di configurazione e suggerimenti per la risoluzione dei problemi.' },
        { title: 'Distribuisci Dify in minuti', desc: 'La tua istanza Dify è live con SSL, backup configurati e pronta per costruire flussi di lavoro AI.' },
      ],
    },
    comparisonSection: {
      badge: 'Confronto fianco a fianco',
      h2: 'Tabella di confronto completa dei provider',
      subtitle: 'Confronta prezzo, RAM, archiviazione, opzioni gestite e prove gratuite di tutti gli 8 provider in un colpo d\'occhio.',
    },
    faqSection: {
      badge: 'Domande frequenti',
      h2: 'FAQ sull\'hosting Dify',
      items: [
        { q: 'Quali sono le specifiche minime del server per eseguire Dify?', a: 'Dify richiede come minimo 2 vCPU e 4 GB di RAM per funzionare comodamente in produzione. Per sviluppo o test, 2 GB di RAM potrebbero essere sufficienti, ma probabilmente si verificheranno colli di bottiglia. Raccomandiamo almeno 4 GB di RAM e 2 vCPU per un\'esperienza fluida con più utenti.' },
        { q: 'Posso ospitare Dify gratuitamente?', a: 'Sì, parzialmente. Railway offre 5 $ di credito gratuito al mese che può coprire l\'uso base di Dify. Render ha un piano gratuito, ma con cold start che lo rendono inadatto alla produzione. Per un uso serio, prevedi 4–10 $/mese per un VPS da Hostinger, Hetzner o DigitalOcean.' },
        { q: 'È meglio auto-ospitare Dify o usare Dify Cloud?', a: 'L\'auto-hosting ti dà pieno controllo dei dati, nessun limite di utilizzo e costi a lungo termine inferiori. Dify Cloud è più facile da iniziare ma può diventare costoso con la scalabilità. Se gestisci dati sensibili o hai bisogno di integrazioni personalizzate, l\'auto-hosting è la scelta migliore.' },
        { q: 'Quale provider di hosting per Dify è il migliore per l\'Europa?', a: 'Hetzner è la scelta migliore per gli utenti europei. Con sede in Germania, è conforme al GDPR per impostazione predefinita, offre il miglior rapporto qualità-prezzo nell\'UE e ha data center a Norimberga, Falkenstein e Helsinki.' },
        { q: 'Come installo Dify su un VPS?', a: 'Il metodo standard è Docker Compose. Avrai bisogno di Docker e Docker Compose installati, poi clona il repository Dify, copia .env.example in .env, imposta le tue chiavi API e il dominio, ed esegui docker compose up -d. La guida completa passo dopo passo si trova nella nostra guida all\'auto-hosting.' },
        { q: 'Dify supporta l\'hosting GPU?', a: 'Dify stesso è basato su CPU e non richiede GPU. Tuttavia, se esegui LLM locali come Ollama o LM Studio insieme a Dify, beneficerai delle risorse GPU. Kamatera e Vultr offrono istanze con GPU. Per la maggior parte degli utenti, connettere Dify ad API esterne è più conveniente del GPU hosting.' },
      ],
    },
    ctaSection: {
      h2: 'Pronto ad ospitare il tuo Dify?',
      subtitle: 'Unisciti a migliaia di sviluppatori e aziende che eseguono Dify sulla propria infrastruttura. Inizia con il nostro provider meglio valutato a partire da 3,99 $/mese.',
      btnPrimary: 'Inizia con Hostinger',
      btnSecondary: 'Leggi la guida di configurazione',
    },
  },
};

export function getHomepageContent(lang: string): HomepageContent {
  return homepage[lang] || homepage['en'];
}
