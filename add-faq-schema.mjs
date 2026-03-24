import fs from 'fs';

const faqData = {
  'dify-vs-n8n': {
    en: [
      { q: 'What is the main difference between Dify and n8n?', a: 'Dify is purpose-built for LLM-powered apps — chatbots, RAG pipelines, and AI agents. n8n is a general-purpose workflow automation tool. Dify excels at AI app building; n8n excels at connecting APIs and automating business processes.' },
      { q: 'Can I use Dify and n8n together?', a: 'Yes — many teams use both. Dify handles the AI layer (chatbots, LLM chains, RAG) while n8n handles the automation layer (triggering workflows, syncing data, sending emails). They integrate via Dify REST API.' },
      { q: 'Is Dify or n8n cheaper to self-host?', a: 'Both are free to self-host. Dify requires at least 4 GB RAM (€3.79/mo on Hetzner CX22). n8n is lighter and runs on a 1 GB VPS. Dify Cloud starts at $0 (limited) vs n8n Cloud at $20/mo.' },
      { q: 'Which is better for building AI chatbots?', a: 'Dify is significantly better for AI chatbots. It has a native chat UI, RAG knowledge bases, model provider integrations, and conversation memory built in. n8n can trigger LLM calls but lacks a native chat interface.' },
    ],
    de: [
      { q: 'Was ist der Hauptunterschied zwischen Dify und n8n?', a: 'Dify wurde speziell für LLM-gestützte Apps entwickelt — Chatbots, RAG-Pipelines und KI-Agenten. n8n ist ein allgemeines Workflow-Automatisierungstool. Dify glänzt beim KI-App-Aufbau; n8n beim Verbinden von APIs.' },
      { q: 'Kann ich Dify und n8n zusammen verwenden?', a: 'Ja — viele Teams nutzen beide. Dify übernimmt die KI-Schicht, während n8n die Automatisierungsschicht übernimmt. Sie integrieren sich über Difys REST-API.' },
      { q: 'Ist Dify oder n8n günstiger zum Selbsthosten?', a: 'Beide sind kostenlos zum Selbsthosten. Dify benötigt mindestens 4 GB RAM (€3,79/Mo auf Hetzner CX22). n8n ist leichter und läuft auf einem 1-GB-VPS.' },
      { q: 'Was ist besser für KI-Chatbots?', a: 'Dify ist deutlich besser für KI-Chatbots. Es hat eine native Chat-UI, RAG-Wissensdatenbanken und eingebautes Konversationsgedächtnis.' },
    ],
    fr: [
      { q: 'Quelle est la principale difference entre Dify et n8n ?', a: 'Dify est concu pour les apps alimentees par LLM — chatbots, pipelines RAG et agents IA. n8n est un outil d automatisation de workflows generaliste. Dify excelle dans la creation d apps IA ; n8n dans la connexion d APIs.' },
      { q: 'Puis-je utiliser Dify et n8n ensemble ?', a: 'Oui — beaucoup d equipes utilisent les deux. Dify gere la couche IA tandis que n8n gere la couche automatisation. Ils s integrent via l API REST de Dify.' },
      { q: 'Lequel est moins cher a auto-heberger ?', a: 'Les deux sont gratuits a auto-heberger. Dify necessite au minimum 4 Go de RAM (€3,79/mo sur Hetzner CX22). n8n est plus leger.' },
      { q: 'Lequel est meilleur pour les chatbots IA ?', a: 'Dify est nettement meilleur pour les chatbots IA. Il dispose d une interface de chat native, de bases de connaissances RAG et d une memoire de conversation integree.' },
    ],
    es: [
      { q: 'Cual es la diferencia principal entre Dify y n8n?', a: 'Dify esta disenado para apps impulsadas por LLM — chatbots, pipelines RAG y agentes IA. n8n es una herramienta de automatizacion de flujos de trabajo generalista.' },
      { q: 'Puedo usar Dify y n8n juntos?', a: 'Si — muchos equipos usan ambos. Dify maneja la capa IA mientras que n8n maneja la capa de automatizacion. Se integran mediante la API REST de Dify.' },
      { q: 'Cual es mas barato para autohospedar?', a: 'Ambos son gratuitos para autohospedar. Dify necesita al menos 4 GB de RAM (€3,79/mes en Hetzner CX22). n8n es mas ligero.' },
      { q: 'Cual es mejor para chatbots de IA?', a: 'Dify es significativamente mejor para chatbots de IA. Tiene una UI de chat nativa, bases de conocimiento RAG y memoria de conversacion integrada.' },
    ],
    it: [
      { q: 'Qual e la differenza principale tra Dify e n8n?', a: 'Dify e progettato per app alimentate da LLM — chatbot, pipeline RAG e agenti IA. n8n e uno strumento di automazione workflow generalista.' },
      { q: 'Posso usare Dify e n8n insieme?', a: 'Si — molti team li usano entrambi. Dify gestisce il livello IA mentre n8n gestisce il livello di automazione. Si integrano tramite la REST API di Dify.' },
      { q: 'Quale costa meno da auto-ospitare?', a: 'Entrambi sono gratuiti da auto-ospitare. Dify richiede almeno 4 GB di RAM (€3,79/mese su Hetzner CX22). n8n e piu leggero.' },
      { q: 'Quale e migliore per i chatbot IA?', a: 'Dify e significativamente migliore per i chatbot IA. Ha una UI di chat nativa, basi di conoscenza RAG e memoria di conversazione integrata.' },
    ],
  },
  'dify-alternatives': {
    en: [
      { q: 'What is the best open-source alternative to Dify?', a: 'Flowise is the closest alternative — both are visual LLM app builders with RAG support. Flowise is simpler but less feature-rich. For workflow automation, n8n is excellent. For local AI chat, OpenWebUI is the top choice.' },
      { q: 'Is Flowise better than Dify?', a: 'Flowise is simpler and lighter. Dify has more features: multi-model support, built-in RAG, workflow orchestration, and a production-ready API. For serious projects, Dify wins.' },
      { q: 'Can Dify alternatives be self-hosted?', a: 'Yes — Flowise, LangFlow, n8n, and OpenWebUI are all fully open-source and self-hostable via Docker. Most run well on a 2 GB VPS. Dify requires 4 GB minimum.' },
      { q: 'What is the difference between Dify and LangFlow?', a: 'Both use a visual node-based editor for LLM pipelines. LangFlow is more code-oriented; Dify is more product-focused with a built-in chat UI and knowledge base management.' },
    ],
    de: [
      { q: 'Was ist die beste Open-Source-Alternative zu Dify?', a: 'Flowise ist die naechste Alternative — beide sind visuelle LLM-App-Builder mit RAG-Unterstuetzung. Flowise ist einfacher, aber weniger funktionsreich.' },
      { q: 'Ist Flowise besser als Dify?', a: 'Flowise ist einfacher und leichter, aber Dify hat mehr Funktionen: Multi-Modell-Unterstuetzung, eingebautes RAG, Workflow-Orchestrierung und eine produktionsreife API.' },
      { q: 'Koennen Dify-Alternativen selbst gehostet werden?', a: 'Ja — Flowise, LangFlow, n8n und OpenWebUI sind alle vollstaendig Open-Source und ueber Docker selbst hostbar.' },
      { q: 'Was ist der Unterschied zwischen Dify und LangFlow?', a: 'Beide verwenden einen visuellen knotenbasierten Editor. LangFlow ist codeorientierter; Dify ist produktfokussierter mit einer eingebauten Chat-UI.' },
    ],
    fr: [
      { q: 'Quelle est la meilleure alternative open-source a Dify ?', a: 'Flowise est l alternative la plus proche. Pour l automatisation de workflows, n8n est excellent. Pour le chat IA local, OpenWebUI est le meilleur choix.' },
      { q: 'Flowise est-il meilleur que Dify ?', a: 'Flowise est plus simple mais Dify a plus de fonctionnalites : support multi-modeles, RAG integre, orchestration de workflows et une API prete pour la production.' },
      { q: 'Les alternatives a Dify peuvent-elles etre auto-hebergees ?', a: 'Oui — Flowise, LangFlow, n8n et OpenWebUI sont tous open-source et hebergeables via Docker.' },
      { q: 'Quelle est la difference entre Dify et LangFlow ?', a: 'Les deux utilisent un editeur visuel base sur des noeuds. LangFlow est plus oriente code ; Dify est plus oriente produit avec une interface de chat native.' },
    ],
    es: [
      { q: 'Cual es la mejor alternativa open-source a Dify?', a: 'Flowise es la alternativa mas cercana. Para automatizacion de flujos de trabajo, n8n es excelente. Para chat IA local, OpenWebUI es la mejor opcion.' },
      { q: 'Es Flowise mejor que Dify?', a: 'Flowise es mas simple pero Dify tiene mas caracteristicas: soporte multi-modelo, RAG integrado, orquestacion de flujos de trabajo y una API lista para produccion.' },
      { q: 'Se pueden autohospedar las alternativas a Dify?', a: 'Si — Flowise, LangFlow, n8n y OpenWebUI son todos open-source y se pueden hospedar mediante Docker.' },
      { q: 'Cual es la diferencia entre Dify y LangFlow?', a: 'Ambos usan un editor visual basado en nodos. LangFlow esta mas orientado al codigo; Dify esta mas orientado al producto con una UI de chat nativa.' },
    ],
    it: [
      { q: 'Qual e la migliore alternativa open-source a Dify?', a: 'Flowise e l alternativa piu vicina. Per l automazione dei workflow, n8n e eccellente. Per la chat IA locale, OpenWebUI e la scelta migliore.' },
      { q: 'Flowise e migliore di Dify?', a: 'Flowise e piu semplice ma Dify ha piu funzionalita: supporto multi-modello, RAG integrato, orchestrazione workflow e una API pronta per la produzione.' },
      { q: 'Le alternative a Dify possono essere auto-ospitate?', a: 'Si — Flowise, LangFlow, n8n e OpenWebUI sono tutti open-source e ospitabili tramite Docker.' },
      { q: 'Qual e la differenza tra Dify e LangFlow?', a: 'Entrambi usano un editor visuale basato su nodi. LangFlow e piu orientato al codice; Dify e piu orientato al prodotto con una UI di chat nativa.' },
    ],
  },
  'dify-tutorial': {
    en: [
      { q: 'How long does it take to set up Dify?', a: 'Dify Cloud takes 2 minutes — just sign up at cloud.dify.ai. Self-hosting on a VPS takes 15-30 minutes. The fastest managed option is Elestio — fully running in under 5 minutes.' },
      { q: 'Do I need coding skills to use Dify?', a: 'No. Dify is designed for non-developers. You can build chatbots, RAG apps, and workflows entirely through the visual interface. Coding is optional for advanced custom nodes.' },
      { q: 'Which LLM works best with Dify?', a: 'Any major LLM works. GPT-4o is the most capable. Claude 3.5 Sonnet excels at following instructions. Gemini Flash is the cheapest for high volume. Ollama with Llama 3 works for free local use.' },
      { q: 'Is Dify free to use?', a: 'Dify is open-source (Apache 2.0) — free to self-host with no credit limits. Dify Cloud has a free tier with 200 message credits/month. Self-hosting on Hetzner costs €3.79/month for unlimited usage.' },
    ],
    de: [
      { q: 'Wie lange dauert die Einrichtung von Dify?', a: 'Dify Cloud dauert 2 Minuten. Selbsthosting auf einem VPS dauert 15-30 Minuten. Die schnellste verwaltete Option ist Elestio — in unter 5 Minuten vollstaendig betriebsbereit.' },
      { q: 'Brauche ich Programmierkenntnisse fuer Dify?', a: 'Nein. Dify ist fuer Nicht-Entwickler konzipiert. Sie koennen Chatbots, RAG-Apps und Workflows vollstaendig ueber die visuelle Oberflaeche erstellen.' },
      { q: 'Welches LLM funktioniert am besten mit Dify?', a: 'Jedes grosse LLM funktioniert. GPT-4o ist am leistungsfaehigsten. Claude 3.5 Sonnet ist ausgezeichnet beim Befolgen von Anweisungen. Gemini Flash ist am guenstigsten.' },
      { q: 'Ist Dify kostenlos?', a: 'Dify ist Open-Source — kostenlos zum Selbsthosten ohne Kreditlimits. Dify Cloud hat ein kostenloses Tier mit 200 Nachrichtenguthaben/Monat.' },
    ],
    fr: [
      { q: 'Combien de temps faut-il pour configurer Dify ?', a: 'Dify Cloud prend 2 minutes. L auto-hebergement sur un VPS prend 15 a 30 minutes. L option la plus rapide est Elestio — entierement operationnel en moins de 5 minutes.' },
      { q: 'Ai-je besoin de competences en codage pour utiliser Dify ?', a: 'Non. Dify est concu pour les non-developpeurs. Vous pouvez creer des chatbots, des apps RAG et des workflows via l interface visuelle.' },
      { q: 'Quel LLM fonctionne le mieux avec Dify ?', a: 'N importe quel LLM majeur fonctionne. GPT-4o est le plus capable. Claude 3.5 Sonnet excelle a suivre les instructions. Gemini Flash est le moins cher.' },
      { q: 'Dify est-il gratuit ?', a: 'Dify est open-source — gratuit a auto-heberger sans limites de credits. Dify Cloud a un niveau gratuit avec 200 credits de messages/mois.' },
    ],
    es: [
      { q: 'Cuanto tiempo lleva configurar Dify?', a: 'Dify Cloud tarda 2 minutos. El autohospedaje en un VPS tarda 15-30 minutos. La opcion mas rapida es Elestio — completamente operativo en menos de 5 minutos.' },
      { q: 'Necesito habilidades de programacion para usar Dify?', a: 'No. Dify esta disenado para no desarrolladores. Puedes crear chatbots, apps RAG y flujos de trabajo completamente a traves de la interfaz visual.' },
      { q: 'Que LLM funciona mejor con Dify?', a: 'Cualquier LLM principal funciona. GPT-4o es el mas capaz. Claude 3.5 Sonnet destaca siguiendo instrucciones. Gemini Flash es el mas barato para altos volumenes.' },
      { q: 'Es Dify gratuito?', a: 'Dify es open-source — gratuito para autohospedar sin limites de creditos. Dify Cloud tiene un nivel gratuito con 200 creditos de mensajes/mes.' },
    ],
    it: [
      { q: 'Quanto tempo ci vuole per configurare Dify?', a: 'Dify Cloud richiede 2 minuti. Il self-hosting su un VPS richiede 15-30 minuti. L opzione gestita piu rapida e Elestio — completamente operativo in meno di 5 minuti.' },
      { q: 'Ho bisogno di competenze di codifica per usare Dify?', a: 'No. Dify e progettato per i non sviluppatori. Puoi creare chatbot, app RAG e workflow tramite l interfaccia visuale.' },
      { q: 'Quale LLM funziona meglio con Dify?', a: 'Qualsiasi LLM principale funziona. GPT-4o e il piu capace. Claude 3.5 Sonnet eccelle nel seguire le istruzioni. Gemini Flash e il piu economico per alti volumi.' },
      { q: 'Dify e gratuito?', a: 'Dify e open-source — gratuito da auto-ospitare senza limiti di crediti. Dify Cloud ha un livello gratuito con 200 crediti di messaggi/mese.' },
    ],
  },
};

const langs = ['en','de','fr','es','it'];
const guides = ['dify-vs-n8n','dify-alternatives','dify-tutorial'];
let updated = 0;

for (const guide of guides) {
  for (const lang of langs) {
    const filePath = 'src/pages/' + lang + '/guides/' + guide + '/index.astro';
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf8');
    const faqs = faqData[guide][lang];
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    };
    const faqJson = JSON.stringify(faqSchema);
    // Replace schema={schema} with schema={[schema, faqSchemaObj]}
    if (content.includes('schema={schema}')) {
      content = content.replace('schema={schema}', 'schema={[schema, ' + faqJson + ']}');
      fs.writeFileSync(filePath, content);
      console.log('FAQ schema added: ' + lang + '/' + guide);
      updated++;
    } else {
      console.log('SKIP (already updated?): ' + lang + '/' + guide);
    }
  }
}
console.log('Done:', updated, 'files updated');
