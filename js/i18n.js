/*
 * CONTENU DU SITE : c'est ici que tu modifies tes textes.
 *  - SITE.ui        : textes de l'interface, dans les 4 langues (fr, en, ar, zh)
 *  - SITE.services  : tes services
 *  - SITE.skills    : tes compétences   (section masquée si la liste est vide)
 *  - SITE.projects  : tes projets       (section masquée si la liste est vide)
 *  - SITE.journey   : ton parcours      (section masquée si la liste est vide)
 * Chaque texte traduisible s'écrit { fr: "...", en: "...", ar: "...", zh: "..." }.
 */
window.SITE = {
  languages: ["fr", "en", "ar", "zh"],
  rtl: ["ar"],

  ui: {
    fr: {
      "meta.title": "Hamadou Abdourazak | Portfolio",
      "nav.skip": "Aller au contenu",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.journey": "Parcours",
      "nav.contact": "Contact",
      "ui.language": "Langue",
      "ui.theme": "Changer de thème",
      "ui.menu": "Menu",
      "hero.status": "Disponible pour de nouveaux projets",
      "hero.hello": "Bonjour, je suis",
      "hero.role": "Développeur web & mobile · Import depuis la Chine",
      "hero.lead": "Diplômé d'une licence en informatique (mention Très bien) d'ESGIS Togo, je conçois des sites et des applications web et mobiles, et j'accompagne particuliers et entreprises dans l'importation de marchandises depuis la Chine.",
      "hero.cta": "Me contacter",
      "hero.cv": "Télécharger mon CV",
      "about.kicker": "À propos",
      "about.title": "Un partenaire fiable, du digital à la logistique",
      "about.p1": "Je suis Hamadou Abdourazak, développeur web et mobile basé à Lomé. Formé à l'analyse et au développement d'applications, je conçois des solutions fiables et adaptées au mobile, de la base de données jusqu'à l'interface, en passant par les API.",
      "about.p2": "En parallèle, j'accompagne particuliers et commerçants dans l'importation de marchandises depuis la Chine : recherche de fournisseurs, négociation, contrôle et suivi de l'expédition jusqu'à la livraison.",
      "about.locationLabel": "Basé à",
      "about.location": "Agoè-Zongo, Lomé, Togo",
      "about.langsLabel": "Langues",
      "about.langs": "Français (courant), Anglais (technique)",
      "about.workLabel": "Travail",
      "about.qualities": "Qualités",
      "about.work": "Freelance, à distance ou sur place",
      "services.kicker": "Services",
      "services.title": "Ce que je peux faire pour vous",
      "process.kicker": "Méthode",
      "process.title": "Comment je travaille",
      "process.lead": "Des étapes claires, un interlocuteur unique et des nouvelles régulières, du premier message à la livraison.",
      "process.web": "Site ou application",
      "process.import": "Import depuis la Chine",
      "services.lead": "Du site web à la livraison de vos marchandises : je relie le digital et le commerce entre la Chine et l'Afrique de l'Ouest.",
      "globe.caption": "Route d'import Chine → Lomé",
      "globe.lome": "Lomé",
      "globe.china": "Guangzhou",
      "hero.badge": "Lomé · Togo",
      "skills.kicker": "Compétences",
      "skills.title": "Mes outils et savoir-faire",
      "projects.kicker": "Projets",
      "projects.title": "Réalisations importantes",
      "projects.demo": "Voir le projet",
      "projects.code": "Code source",
      "journey.kicker": "Parcours",
      "journey.work": "Expériences",
      "journey.edu": "Formation & certifications",
      "skills.learning": "En apprentissage :",
      "journey.title": "Expériences, formation et certifications",
      "contact.kicker": "Contact",
      "contact.title": "Parlons de votre projet",
      "contact.lead": "Un site à créer, une commande à importer de Chine ou une simple question ? Écrivez-moi, je réponds rapidement.",
      "contact.whatsapp": "Écrire sur WhatsApp",
      "fab.text": "Bonjour Abdourazak, je viens de votre portfolio. ",
      "form.name": "Votre nom",
      "form.subject": "Sujet",
      "form.subjectWeb": "Création de site web",
      "form.subjectImport": "Import depuis la Chine",
      "form.subjectOther": "Autre demande",
      "form.message": "Votre message",
      "form.error": "Merci de remplir votre nom et votre message.",
      "form.sendWhatsapp": "Envoyer via WhatsApp",
      "form.sendEmail": "Envoyer par email",
      "form.greeting": "Bonjour Abdourazak, je suis",
      "footer.rights": "Tous droits réservés.",
      "footer.top": "Retour en haut ↑"
    },

    en: {
      "meta.title": "Hamadou Abdourazak | Portfolio",
      "nav.skip": "Skip to content",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.journey": "Journey",
      "nav.contact": "Contact",
      "ui.language": "Language",
      "ui.theme": "Toggle theme",
      "ui.menu": "Menu",
      "hero.status": "Available for new projects",
      "hero.hello": "Hi, I'm",
      "hero.role": "Web & mobile developer · Import from China",
      "hero.lead": "Holder of a Bachelor's in Computer Science with highest honours from ESGIS Togo, I build websites and web and mobile apps, and I help individuals and businesses import goods from China.",
      "hero.cta": "Contact me",
      "hero.cv": "Download my CV",
      "about.kicker": "About",
      "about.title": "A reliable partner, from digital to logistics",
      "about.p1": "I'm Hamadou Abdourazak, a web and mobile developer based in Lomé. Trained in application analysis and development, I build reliable, mobile-friendly solutions, from the database and APIs to the interface.",
      "about.p2": "I also help individuals and traders import goods from China: finding suppliers, negotiating, checking quality and tracking shipments all the way to delivery.",
      "about.locationLabel": "Based in",
      "about.location": "Agoè-Zongo, Lomé, Togo",
      "about.langsLabel": "Languages",
      "about.langs": "French (fluent), English (technical)",
      "about.workLabel": "Work",
      "about.qualities": "Strengths",
      "about.work": "Freelance, remote or on-site",
      "services.kicker": "Services",
      "services.title": "What I can do for you",
      "process.kicker": "Method",
      "process.title": "How I work",
      "process.lead": "Clear steps, a single point of contact and regular updates, from the first message to delivery.",
      "process.web": "Website or app",
      "process.import": "Import from China",
      "services.lead": "From your website to the delivery of your goods: I connect digital and trade between China and West Africa.",
      "globe.caption": "Import route China → Lomé",
      "globe.lome": "Lomé",
      "globe.china": "Guangzhou",
      "hero.badge": "Lomé · Togo",
      "skills.kicker": "Skills",
      "skills.title": "My tools and expertise",
      "projects.kicker": "Projects",
      "projects.title": "Key projects",
      "projects.demo": "View project",
      "projects.code": "Source code",
      "journey.kicker": "Journey",
      "journey.work": "Experience",
      "journey.edu": "Education & certifications",
      "skills.learning": "Currently learning:",
      "journey.title": "Experience, education and certifications",
      "contact.kicker": "Contact",
      "contact.title": "Let's talk about your project",
      "contact.lead": "A website to build, an order to import from China, or just a question? Write to me and I'll reply quickly.",
      "contact.whatsapp": "Message me on WhatsApp",
      "fab.text": "Hello Abdourazak, I found you through your portfolio. ",
      "form.name": "Your name",
      "form.subject": "Subject",
      "form.subjectWeb": "Website development",
      "form.subjectImport": "Import from China",
      "form.subjectOther": "Other request",
      "form.message": "Your message",
      "form.error": "Please fill in your name and message.",
      "form.sendWhatsapp": "Send via WhatsApp",
      "form.sendEmail": "Send by email",
      "form.greeting": "Hello Abdourazak, I'm",
      "footer.rights": "All rights reserved.",
      "footer.top": "Back to top ↑"
    },

    ar: {
      "meta.title": "حمادو عبد الرزاق | معرض الأعمال",
      "nav.skip": "انتقل إلى المحتوى",
      "nav.about": "من أنا",
      "nav.services": "الخدمات",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.journey": "المسيرة",
      "nav.contact": "تواصل",
      "ui.language": "اللغة",
      "ui.theme": "تغيير المظهر",
      "ui.menu": "القائمة",
      "hero.status": "متاح لمشاريع جديدة",
      "hero.hello": "مرحبًا، أنا",
      "hero.role": "مطوّر ويب وتطبيقات جوال · الاستيراد من الصين",
      "hero.lead": "حاصل على إجازة في المعلوميات بميزة حسن جدًا من مدرسة ESGIS توغو، أصمّم مواقع وتطبيقات ويب وجوال، وأرافق الأفراد والشركات في استيراد البضائع من الصين.",
      "hero.cta": "تواصل معي",
      "hero.cv": "تحميل سيرتي الذاتية",
      "about.kicker": "من أنا",
      "about.title": "شريك موثوق، من الرقمنة إلى الخدمات اللوجستية",
      "about.p1": "أنا حمادو عبد الرزاق، مطوّر ويب وتطبيقات جوال مقيم في لومي. تكوّنت في تحليل التطبيقات وتطويرها، وأصمّم حلولًا موثوقة ومتوافقة مع الهاتف، من قاعدة البيانات والواجهات البرمجية حتى واجهة المستخدم.",
      "about.p2": "كما أرافق الأفراد والتجار في استيراد البضائع من الصين: البحث عن الموردين، والتفاوض، ومراقبة الجودة، ومتابعة الشحن حتى التسليم.",
      "about.locationLabel": "المقر",
      "about.location": "أغوي-زونغو، لومي, توغو",
      "about.langsLabel": "اللغات",
      "about.langs": "الفرنسية (بطلاقة)، الإنجليزية (تقنية)",
      "about.workLabel": "العمل",
      "about.qualities": "صفاتي",
      "about.work": "مستقل، عن بُعد أو حضوريًا",
      "services.kicker": "الخدمات",
      "services.title": "ما يمكنني تقديمه لك",
      "process.kicker": "المنهجية",
      "process.title": "كيف أعمل",
      "process.lead": "مراحل واضحة، ومخاطَب واحد، ومتابعة منتظمة، من أول رسالة حتى التسليم.",
      "process.web": "موقع أو تطبيق",
      "process.import": "الاستيراد من الصين",
      "services.lead": "من موقعك الإلكتروني إلى تسليم بضائعك: أربط بين الرقمنة والتجارة بين الصين وغرب إفريقيا.",
      "globe.caption": "طريق الاستيراد الصين ← لومي",
      "globe.lome": "لومي",
      "globe.china": "قوانغتشو",
      "hero.badge": "لومي · توغو",
      "skills.kicker": "المهارات",
      "skills.title": "أدواتي وخبراتي",
      "projects.kicker": "المشاريع",
      "projects.title": "أهم الإنجازات",
      "projects.demo": "عرض المشروع",
      "projects.code": "الشيفرة المصدرية",
      "journey.kicker": "المسيرة",
      "journey.work": "الخبرات",
      "journey.edu": "التكوين والشهادات",
      "skills.learning": "قيد التعلّم:",
      "journey.title": "الخبرات والتكوين والشهادات",
      "contact.kicker": "تواصل",
      "contact.title": "لنتحدث عن مشروعك",
      "contact.lead": "موقع تريد إنشاءه، أو طلبية تريد استيرادها من الصين، أو مجرد سؤال؟ راسلني وسأرد بسرعة.",
      "contact.whatsapp": "راسلني على واتساب",
      "fab.text": "مرحبًا عبد الرزاق، وصلت إليك عبر موقعك. ",
      "form.name": "اسمك",
      "form.subject": "الموضوع",
      "form.subjectWeb": "إنشاء موقع ويب",
      "form.subjectImport": "الاستيراد من الصين",
      "form.subjectOther": "طلب آخر",
      "form.message": "رسالتك",
      "form.error": "يرجى إدخال اسمك ورسالتك.",
      "form.sendWhatsapp": "إرسال عبر واتساب",
      "form.sendEmail": "إرسال بالبريد",
      "form.greeting": "مرحبًا عبد الرزاق، أنا",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.top": "العودة إلى الأعلى ↑"
    },

    zh: {
      "meta.title": "Hamadou Abdourazak | 个人作品集",
      "nav.skip": "跳到正文",
      "nav.about": "关于我",
      "nav.services": "服务",
      "nav.skills": "技能",
      "nav.projects": "项目",
      "nav.journey": "经历",
      "nav.contact": "联系",
      "ui.language": "语言",
      "ui.theme": "切换主题",
      "ui.menu": "菜单",
      "hero.status": "可承接新项目",
      "hero.hello": "你好，我是",
      "hero.role": "网页与移动开发者 · 中国进口代理",
      "hero.lead": "我以优异成绩毕业于多哥 ESGIS 学院计算机专业（学士），开发网站以及网页和移动应用，并帮助个人和企业从中国进口商品。",
      "hero.cta": "联系我",
      "hero.cv": "下载我的简历",
      "about.kicker": "关于我",
      "about.title": "从数字化到物流，值得信赖的合作伙伴",
      "about.p1": "我是 Hamadou Abdourazak，常驻洛美的网页与移动开发者。我接受过应用分析与开发的专业训练，能够从数据库、API 到用户界面，打造可靠且适配手机的解决方案。",
      "about.p2": "同时，我协助个人和商家从中国进口商品：寻找供应商、谈判、质量检查，并全程跟踪物流直至交付。",
      "about.locationLabel": "所在地",
      "about.location": "多哥 洛美 Agoè-Zongo",
      "about.langsLabel": "语言",
      "about.langs": "法语（流利）、英语（技术）",
      "about.workLabel": "工作方式",
      "about.qualities": "个人优势",
      "about.work": "自由职业，远程或现场",
      "services.kicker": "服务",
      "services.title": "我能为您做什么",
      "process.kicker": "工作方式",
      "process.title": "我的工作流程",
      "process.lead": "步骤清晰、单一对接人、定期汇报进度，从第一条消息到最终交付。",
      "process.web": "网站或应用",
      "process.import": "中国进口",
      "services.lead": "从网站建设到货物交付：我连接中国与西非之间的数字化与贸易。",
      "globe.caption": "进口路线：中国 → 洛美",
      "globe.lome": "洛美",
      "globe.china": "广州",
      "hero.badge": "多哥 · 洛美",
      "skills.kicker": "技能",
      "skills.title": "我的工具与专长",
      "projects.kicker": "项目",
      "projects.title": "重要项目",
      "projects.demo": "查看项目",
      "projects.code": "源代码",
      "journey.kicker": "经历",
      "journey.work": "工作经历",
      "journey.edu": "教育与证书",
      "skills.learning": "正在学习：",
      "journey.title": "工作经历、教育与证书",
      "contact.kicker": "联系",
      "contact.title": "聊聊您的项目",
      "contact.lead": "想建网站、从中国进口货物，或者只是有个问题？欢迎联系我，我会尽快回复。",
      "contact.whatsapp": "通过 WhatsApp 联系",
      "fab.text": "你好 Abdourazak，我是通过你的作品集网站找到你的。",
      "form.name": "您的姓名",
      "form.subject": "主题",
      "form.subjectWeb": "网站开发",
      "form.subjectImport": "从中国进口",
      "form.subjectOther": "其他需求",
      "form.message": "您的留言",
      "form.error": "请填写您的姓名和留言。",
      "form.sendWhatsapp": "通过 WhatsApp 发送",
      "form.sendEmail": "通过邮件发送",
      "form.greeting": "你好 Abdourazak，我是",
      "footer.rights": "版权所有。",
      "footer.top": "返回顶部 ↑"
    }
  },

  // ---------- SERVICES ----------
  services: [
    {
      icon: "code",
      title: { fr: "Développement web & mobile", en: "Web & mobile development", ar: "تطوير الويب والجوال", zh: "网页与移动开发" },
      text: {
        fr: "Des sites et applications modernes, rapides et adaptés au mobile pour présenter votre activité, gérer votre entreprise et vendre en ligne.",
        en: "Modern, fast, mobile-friendly websites and apps to showcase your business, run your operations and sell online.",
        ar: "مواقع وتطبيقات حديثة وسريعة ومتوافقة مع الهاتف لعرض نشاطك وإدارة مؤسستك والبيع عبر الإنترنت.",
        zh: "现代、快速、适配手机的网站和应用，用于展示业务、管理企业和在线销售。"
      },
      points: {
        fr: ["Sites vitrines, e-commerce et WordPress", "Applications web (Laravel, React, Node.js)", "Applications mobiles (Flutter, Kotlin)", "API REST et bases de données"],
        en: ["Business sites, e-commerce and WordPress", "Web apps (Laravel, React, Node.js)", "Mobile apps (Flutter, Kotlin)", "REST APIs and databases"],
        ar: ["مواقع تعريفية ومتاجر إلكترونية وووردبريس", "تطبيقات ويب (Laravel، React، Node.js)", "تطبيقات جوال (Flutter، Kotlin)", "واجهات REST وقواعد البيانات"],
        zh: ["企业官网、电商网站与 WordPress", "网页应用（Laravel、React、Node.js）", "移动应用（Flutter、Kotlin）", "REST API 与数据库"]
      }
    },
    {
      icon: "ship",
      title: { fr: "Import depuis la Chine", en: "Import from China", ar: "الاستيراد من الصين", zh: "中国进口代理" },
      text: {
        fr: "Je vous aide à acheter en Chine en toute sécurité, du choix du fournisseur jusqu'à la réception de votre marchandise.",
        en: "I help you buy from China safely, from choosing the supplier to receiving your goods.",
        ar: "أساعدك على الشراء من الصين بأمان، من اختيار المورّد حتى استلام بضاعتك.",
        zh: "帮助您安全地从中国采购，从选择供应商到收到货物全程协助。"
      },
      points: {
        fr: ["Recherche de fournisseurs fiables", "Négociation des prix", "Contrôle des produits", "Suivi de l'expédition et de la livraison"],
        en: ["Finding reliable suppliers", "Price negotiation", "Product checks", "Shipping and delivery tracking"],
        ar: ["البحث عن موردين موثوقين", "التفاوض على الأسعار", "فحص المنتجات", "متابعة الشحن والتسليم"],
        zh: ["寻找可靠供应商", "价格谈判", "产品检验", "物流与交付跟踪"]
      }
    },
    {
      icon: "users",
      title: { fr: "Formation en informatique", en: "IT training", ar: "التكوين في المعلوميات", zh: "计算机培训" },
      text: {
        fr: "J'anime des sessions de formation en informatique, claires et pratiques, adaptées au niveau de chacun.",
        en: "I run clear, hands-on IT training sessions adapted to each learner's level.",
        ar: "أنشّط دورات تكوينية في المعلوميات، واضحة وتطبيقية، تتلاءم مع مستوى كل متعلّم.",
        zh: "我主持清晰实用的计算机培训课程，根据每位学员的水平量身调整。"
      },
      points: {
        fr: ["Bases de l'informatique et des réseaux", "Initiation au développement web", "Outils de travail numériques", "Accompagnement personnalisé"],
        en: ["Computer and networking basics", "Introduction to web development", "Digital work tools", "One-to-one support"],
        ar: ["أساسيات المعلوميات والشبكات", "مدخل إلى تطوير الويب", "أدوات العمل الرقمية", "مرافقة شخصية"],
        zh: ["计算机与网络基础", "网页开发入门", "数字办公工具", "一对一辅导"]
      }
    }
  ],

  // ---------- MÉTHODE DE TRAVAIL ----------
  process: {
    web: [
      { title: { fr: "Échange", en: "Discovery", ar: "التواصل", zh: "沟通需求" },
        text: { fr: "On définit ensemble vos objectifs, votre public et votre budget.", en: "Together we define your goals, audience and budget.", ar: "نحدد معًا أهدافك وجمهورك وميزانيتك.", zh: "一起明确您的目标、受众和预算。" } },
      { title: { fr: "Maquette", en: "Mock-up", ar: "النموذج", zh: "设计原型" },
        text: { fr: "Je vous présente la structure et le design avant d'écrire la moindre ligne de code.", en: "I show you the structure and design before writing any code.", ar: "أعرض عليك الهيكل والتصميم قبل كتابة أي سطر برمجي.", zh: "在编写代码之前，先向您展示结构和设计。" } },
      { title: { fr: "Développement", en: "Development", ar: "التطوير", zh: "开发实现" },
        text: { fr: "Un site rapide, adapté au mobile et testé sur plusieurs appareils.", en: "A fast, mobile-friendly site, tested on several devices.", ar: "موقع سريع ومتوافق مع الهاتف ومجرَّب على عدة أجهزة.", zh: "快速、适配手机，并在多种设备上测试。" } },
      { title: { fr: "Mise en ligne et suivi", en: "Launch and support", ar: "الإطلاق والمتابعة", zh: "上线与维护" },
        text: { fr: "Publication, prise en main expliquée et maintenance si besoin.", en: "Go-live, a walkthrough of how to use it, and maintenance if needed.", ar: "النشر، وشرح طريقة الاستخدام، والصيانة عند الحاجة.", zh: "正式上线、使用培训，并按需提供维护。" } }
    ],
    import: [
      { title: { fr: "Votre besoin", en: "Your request", ar: "طلبك", zh: "您的需求" },
        text: { fr: "Produit, quantité, budget et délai souhaité.", en: "Product, quantity, budget and timeline.", ar: "المنتج والكمية والميزانية والمدة المطلوبة.", zh: "产品、数量、预算和期望时间。" } },
      { title: { fr: "Sourcing", en: "Sourcing", ar: "البحث عن المورّد", zh: "寻找货源" },
        text: { fr: "Recherche et comparaison de fournisseurs fiables en Chine.", en: "Finding and comparing reliable suppliers in China.", ar: "البحث عن موردين موثوقين في الصين ومقارنتهم.", zh: "在中国寻找并比较可靠的供应商。" } },
      { title: { fr: "Contrôle", en: "Checks", ar: "المراقبة", zh: "质量把控" },
        text: { fr: "Vérification des produits et de la commande avant l'expédition.", en: "Checking products and the order before shipping.", ar: "فحص المنتجات والطلبية قبل الشحن.", zh: "发货前检查产品和订单。" } },
      { title: { fr: "Livraison", en: "Delivery", ar: "التسليم", zh: "交付" },
        text: { fr: "Suivi de l'expédition jusqu'à la réception à Lomé.", en: "Tracking the shipment until it arrives in Lomé.", ar: "متابعة الشحنة حتى وصولها إلى لومي.", zh: "全程跟踪物流，直至货物抵达洛美。" } }
    ]
  },

  // ---------- QUALITÉS (section À propos) ----------
  qualities: [
    { fr: "Esprit d'équipe", en: "Team player", ar: "روح الفريق", zh: "团队合作" },
    { fr: "Organisé et méthodique", en: "Organised and methodical", ar: "منظّم ومنهجي", zh: "有条理、讲方法" },
    { fr: "Esprit d'initiative", en: "Initiative", ar: "روح المبادرة", zh: "积极主动" },
    { fr: "Sens des responsabilités", en: "Sense of responsibility", ar: "حسّ المسؤولية", zh: "责任心强" },
    { fr: "Qualités rédactionnelles", en: "Strong writing skills", ar: "مهارات تحريرية", zh: "文字表达能力" },
    { fr: "Discrétion et confidentialité", en: "Discretion and confidentiality", ar: "الكتمان والسرية", zh: "严守保密" },
    { fr: "Bon relationnel", en: "Strong people skills", ar: "حسن التواصل", zh: "善于沟通" }
  ],

  // ---------- COMPÉTENCES ----------
  skills: [
    {
      icon: "code",
      title: { fr: "Langages", en: "Languages", ar: "لغات البرمجة", zh: "编程语言" },
      tags: ["C", "C++", "Java", "Kotlin", "Python", "PHP", "JavaScript", "Dart", "XML"],
      learning: "C#, ASP.NET MVC, .NET Core"
    },
    {
      icon: "layers",
      title: { fr: "Frameworks web & mobile", en: "Web & mobile frameworks", ar: "أطر الويب والجوال", zh: "网页与移动框架" },
      tags: ["Laravel", "React", "Angular", "Node.js", "Prisma", "MERN", "Flutter", "Spring Boot", "Django", "JavaFX"]
    },
    {
      icon: "box",
      title: { fr: "Données & architecture", en: "Data & architecture", ar: "البيانات والهندسة", zh: "数据与架构" },
      tags: ["PostgreSQL", "MySQL", "SQL Server", "Firebase", "API REST", "CRUD", "Merise / UML"]
    },
    {
      icon: "chart",
      title: { fr: "Réseaux & systèmes", en: "Networks & systems", ar: "الشبكات والأنظمة", zh: "网络与系统" },
      tags: [
        { fr: "Administration réseau", en: "Network administration", ar: "إدارة الشبكات", zh: "网络管理" },
        "Cisco IT Essentials", "Linux", "Docker"
      ]
    },
    {
      icon: "tool",
      title: { fr: "Outils & méthodes", en: "Tools & methods", ar: "الأدوات والمنهجيات", zh: "工具与方法" },
      tags: [
        "Git / GitHub", "VS Code", "IntelliJ IDEA", "Android Studio", "WordPress", "Figma", "Draw.io", "PowerAMC", "Notion", "Trello",
        { fr: "Méthode Agile", en: "Agile", ar: "منهجية Agile", zh: "敏捷开发" },
        { fr: "Intelligence artificielle", en: "Artificial intelligence", ar: "الذكاء الاصطناعي", zh: "人工智能" }
      ]
    },
    {
      icon: "ship",
      title: { fr: "Import & gestion", en: "Import & management", ar: "الاستيراد والتسيير", zh: "进口与管理" },
      tags: [
        { fr: "Sourcing en Chine", en: "Sourcing in China", ar: "التوريد من الصين", zh: "中国采购" },
        { fr: "Négociation", en: "Negotiation", ar: "التفاوض", zh: "商务谈判" },
        { fr: "Contrôle qualité", en: "Quality control", ar: "مراقبة الجودة", zh: "质量检验" },
        { fr: "Suivi logistique", en: "Shipment tracking", ar: "متابعة الشحن", zh: "物流跟踪" },
        { fr: "Gestion des stocks", en: "Stock management", ar: "تسيير المخزون", zh: "库存管理" }
      ]
    }
  ],

  // ---------- PROJETS ----------
  // Champs : title, text, tags, points (liste), image, demo, code, wide (carte pleine largeur)
  projects: [
    {
      title: { fr: "SaaSIB : Plateforme multiservice", en: "SaaSIB: Multi-service platform", ar: "SaaSIB: منصة متعددة الخدمات", zh: "SaaSIB：综合服务平台" },
      text: {
        fr: "Stage professionnel : participation à l'évolution et à l'amélioration de cette plateforme qui réunit formations professionnelles certifiantes, catalogue immobilier et boutique en ligne avec vendeurs vérifiés et paiement en FCFA.",
        en: "Professional internship: helped evolve and improve this platform, which brings together certified professional training, a real-estate catalogue and an online shop with verified sellers and FCFA payments.",
        ar: "تدريب مهني: المساهمة في تطوير وتحسين هذه المنصة التي تجمع دورات تدريبية مهنية معتمدة، وكتالوجًا عقاريًا، ومتجرًا إلكترونيًا بباعة موثوقين والدفع بالفرنك الإفريقي.",
        zh: "专业实习：参与该平台的迭代与优化。平台集专业认证培训、房地产目录和拥有认证卖家的网上商店于一体，支持西非法郎支付。"
      },
      tags: ["Web", "E-learning", "E-commerce"],
      demo: "https://saasib.com",
      image: "assets/projets/saasib"
    },
    {
      title: { fr: "Vivre O TGO : Tout le Togo dans votre poche", en: "Vivre O TGO: All of Togo in your pocket", ar: "Vivre O TGO: كل توغو في جيبك", zh: "Vivre O TGO：口袋里的多哥" },
      text: {
        fr: "Application mobile multiservices pour le quotidien des Togolais, conçue lors de mon stage de fin d'études chez ROOK-IT et présentée en soutenance de licence. Pharmacies de garde géolocalisées sur carte, lignes de bus avec horaires et estimation d'arrivée (prototype), numéros d'urgence, mode hors-ligne, notifications et back-office d'administration.",
        en: "A multi-service mobile app for everyday life in Togo, designed during my final-year internship at ROOK-IT and presented for my bachelor's defence. On-duty pharmacies on a live map, bus lines with timetables and arrival estimates (prototype), emergency numbers, offline mode, notifications and an admin back-office.",
        ar: "تطبيق جوال متعدد الخدمات للحياة اليومية في توغو، صُمّم خلال تدريب نهاية الدراسة في شركة ROOK-IT وقُدّم في مناقشة الإجازة. صيدليات المناوبة على خريطة حسب الموقع، خطوط الحافلات مع المواعيد وتقدير وقت الوصول (نموذج أولي)، أرقام الطوارئ، وضع دون اتصال، إشعارات ولوحة إدارة.",
        zh: "为多哥日常生活打造的综合移动应用，在 ROOK-IT 毕业实习期间设计开发，并作为学士毕业答辩项目。在地图上查找值班药店，公交线路时刻表及到站预估（原型），紧急电话，离线模式，通知推送以及后台管理系统。"
      },
      tags: ["Flutter", "Dart", "Firebase", "Riverpod", "OpenStreetMap", "GPS"]
    },
    {
      title: { fr: "Studio Galaxy 7 : Gestion de matériel audiovisuel", en: "Studio Galaxy 7: Audiovisual equipment management", ar: "Studio Galaxy 7: إدارة المعدات السمعية البصرية", zh: "Studio Galaxy 7：影音设备管理系统" },
      text: {
        fr: "Système complet pour un studio audiovisuel : location, vente, tournages, achats et emprunts de matériel. API REST sécurisée (JWT, rôles Admin, Secrétaire, Logistique), application de bureau Flutter, site vitrine avec demande client, tableau de bord, alertes, reçus PDF et export CSV. Plus de 450 tests automatisés.",
        en: "A complete system for an audiovisual studio: equipment rental, sales, shoots, purchases and loans. Secure REST API (JWT, Admin / Secretary / Logistics roles), Flutter desktop app, showcase website with client requests, dashboard, alerts, PDF receipts and CSV export. Over 450 automated tests.",
        ar: "نظام متكامل لاستوديو سمعي بصري: تأجير المعدات وبيعها والتصوير والمشتريات والإعارة. واجهة REST آمنة (JWT، أدوار المدير والسكرتيرة واللوجستيك)، تطبيق مكتبي بـ Flutter، موقع تعريفي لطلبات العملاء، لوحة تحكم، تنبيهات، إيصالات PDF وتصدير CSV. أكثر من 450 اختبارًا آليًا.",
        zh: "为影音工作室打造的完整系统：设备租赁、销售、拍摄、采购与借用管理。安全的 REST API（JWT，管理员 / 秘书 / 物流角色），Flutter 桌面应用，带客户询价的展示网站，数据看板、提醒、PDF 收据和 CSV 导出。超过 450 个自动化测试。"
      },
      tags: ["Spring Boot", "Java", "PostgreSQL", "Flutter", "Django", "Docker"]
    },
    {
      title: { fr: "Goul Community : Communautés universitaires", en: "Goul Community: University communities", ar: "Goul Community: المجتمعات الجامعية", zh: "Goul Community：高校社区平台" },
      text: {
        fr: "Plateforme mobile des communautés universitaires du Togo : annuaire des universités avec fiches détaillées, fil d'actualité du campus, clubs étudiants et profils d'étudiants.",
        en: "A mobile platform for Togo's university communities: university directory with detailed pages, campus news feed, student clubs and student profiles.",
        ar: "منصة جوالة للمجتمعات الجامعية في توغو: دليل الجامعات مع صفحات مفصلة، آخر أخبار الحرم الجامعي، النوادي الطلابية وملفات الطلاب.",
        zh: "面向多哥高校社区的移动平台：高校名录及详细介绍、校园动态、学生社团和学生个人主页。"
      },
      tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
      demo: "https://goulcommunity-tg.web.app",
      image: "assets/projets/goul"
    },
    {
      wide: true,
      title: { fr: "Autres projets académiques", en: "Other academic projects", ar: "مشاريع أكاديمية أخرى", zh: "其他学术项目" },
      points: {
        fr: [
          "Plateforme intelligente de gestion de bons (React, Node.js, Prisma, PostgreSQL)",
          "Plateforme de tutorat entre étudiants et tuteurs (MERN)",
          "Évaluation des enseignants (React, Node.js, MySQL)",
          "Gestion d'hôtel (JavaScript, Node.js)",
          "Location de cassettes (Java EE, JavaFX)",
          "Application Android de gestion des mesures",
          "Site e-commerce (HTML, CSS, JavaScript)",
          "Conception de système d'information (Merise, UML)"
        ],
        en: [
          "Smart voucher management platform (React, Node.js, Prisma, PostgreSQL)",
          "Student-tutor tutoring platform (MERN)",
          "Teacher evaluation system (React, Node.js, MySQL)",
          "Hotel management (JavaScript, Node.js)",
          "Cassette rental (Java EE, JavaFX)",
          "Android app for managing measurements",
          "E-commerce website (HTML, CSS, JavaScript)",
          "Information system design (Merise, UML)"
        ],
        ar: [
          "منصة ذكية لتسيير القسائم (React، Node.js، Prisma، PostgreSQL)",
          "منصة للدروس الخصوصية بين الطلاب والمؤطّرين (MERN)",
          "تقييم الأساتذة (React، Node.js، MySQL)",
          "تسيير فندق (JavaScript، Node.js)",
          "كراء الأشرطة (Java EE، JavaFX)",
          "تطبيق Android لتسيير القياسات",
          "موقع تجارة إلكترونية (HTML، CSS، JavaScript)",
          "تصميم نظام معلومات (Merise، UML)"
        ],
        zh: [
          "智能票券管理平台（React、Node.js、Prisma、PostgreSQL）",
          "学生与导师辅导平台（MERN）",
          "教师评价系统（React、Node.js、MySQL）",
          "酒店管理系统（JavaScript、Node.js）",
          "录像带租赁系统（Java EE、JavaFX）",
          "测量数据管理 Android 应用",
          "电商网站（HTML、CSS、JavaScript）",
          "信息系统设计（Merise、UML）"
        ]
      }
    }
  ],

  // ---------- PARCOURS ----------
  // group : "work" (expériences) ou "edu" (formation & certifications)
  journey: [
    {
      group: "work",
      date: { fr: "Stage de fin d'études", en: "Final-year internship", ar: "تدريب نهاية الدراسة", zh: "毕业实习" },
      title: { fr: "Stagiaire en développement mobile & web", en: "Mobile & web development intern", ar: "متدرّب في تطوير الجوال والويب", zh: "移动与网页开发实习生" },
      place: { fr: "ROOK-IT, Lomé", en: "ROOK-IT, Lomé", ar: "ROOK-IT, لومي", zh: "ROOK-IT, 洛美" },
      text: {
        fr: "Conception de « Vivre O TGO », application mobile multiservices pour le quotidien des Togolais.",
        en: "Designed \"Vivre O TGO\", a multi-service mobile app for everyday life in Togo.",
        ar: "تصميم «Vivre O TGO»، تطبيق جوال متعدد الخدمات للحياة اليومية في توغو.",
        zh: "设计开发「Vivre O TGO」，一款服务多哥日常生活的综合移动应用。"
      }
    },
    {
      group: "work",
      date: { fr: "Stage professionnel", en: "Professional internship", ar: "تدريب مهني", zh: "专业实习" },
      title: { fr: "Stagiaire en informatique", en: "IT intern", ar: "متدرّب في المعلوميات", zh: "IT 实习生" },
      place: { fr: "SaaSIB", en: "SaaSIB", ar: "SaaSIB", zh: "SaaSIB" },
      text: {
        fr: "Développement de site web avec le framework PHP Laravel, animation de sessions de formation en informatique, appui à l'organisation et au suivi des projets, en lien avec des équipes techniques et non techniques.",
        en: "Built a website with the PHP Laravel framework, ran IT training sessions, supported project organisation and task tracking, working with both technical and non-technical teams.",
        ar: "تطوير موقع ويب بإطار PHP Laravel، وتنشيط دورات تكوينية في المعلوميات، ودعم تنظيم المشاريع ومتابعة المهام، بالتعاون مع فرق تقنية وغير تقنية.",
        zh: "使用 PHP Laravel 框架开发网站，主持计算机培训课程，协助项目组织与任务跟踪，并与技术和非技术团队协作。"
      }
    },
    {
      group: "work",
      date: { fr: "Expérience professionnelle", en: "Work experience", ar: "خبرة مهنية", zh: "工作经历" },
      title: { fr: "Gestionnaire de boutique", en: "Shop manager", ar: "مسيّر متجر", zh: "店铺经理" },
      place: { fr: "RAZAKO MHD", en: "RAZAKO MHD", ar: "RAZAKO MHD", zh: "RAZAKO MHD" },
      text: {
        fr: "Supervision quotidienne des opérations avec un chiffre d'affaires moyen de 300 000 FCFA, gestion des stocks, suivi des approvisionnements, optimisation des ventes et fidélisation de la clientèle.",
        en: "Supervised daily operations with average revenue of 300,000 FCFA, managed stock and supplies, optimised sales and built customer loyalty strategies.",
        ar: "الإشراف اليومي على العمليات برقم أعمال متوسط قدره 300,000 فرنك إفريقي، وتسيير المخزون ومتابعة التموين، وتحسين المبيعات ووضع استراتيجيات لكسب وفاء الزبائن.",
        zh: "负责日常运营管理（平均营业额 300,000 西非法郎），管理库存与补货，优化销售并制定客户忠诚度策略。"
      }
    },
    {
      group: "edu",
      date: "2023-2026",
      title: { fr: "Licence en informatique : mention Très bien (17,5/20)", en: "Bachelor's in Computer Science: highest honours (17.5/20)", ar: "إجازة في المعلوميات: ميزة حسن جدًا (17.5/20)", zh: "计算机科学学士：优秀（17.5/20）" },
      place: { fr: "ESGIS Togo, Lomé", en: "ESGIS Togo, Lomé", ar: "ESGIS توغو, لومي", zh: "ESGIS 多哥, 洛美" },
      text: {
        fr: "Analyse et développement d'applications, systèmes bancaires et solutions digitales, gestion de projet et innovation technologique.",
        en: "Application analysis and development, banking systems and digital solutions, project management and technological innovation.",
        ar: "تحليل التطبيقات وتطويرها، الأنظمة البنكية والحلول الرقمية، تسيير المشاريع والابتكار التكنولوجي.",
        zh: "应用分析与开发、银行系统与数字化解决方案、项目管理与技术创新。"
      }
    },
    {
      group: "edu",
      date: "2026",
      title: { fr: "Certified Linux Foundations (CLF) : en cours, examen prévu", en: "Certified Linux Foundations (CLF): in progress, exam scheduled", ar: "Certified Linux Foundations (CLF): قيد التحضير، الامتحان مبرمج", zh: "Certified Linux Foundations (CLF)：备考中" },
      place: { fr: "PECB", en: "PECB", ar: "PECB", zh: "PECB" }
    },
    {
      group: "edu",
      date: "2026",
      title: { fr: "Certification IT Essentials 7.02", en: "IT Essentials 7.02 certification", ar: "شهادة IT Essentials 7.02", zh: "IT Essentials 7.02 证书" },
      place: { fr: "Cisco Networking Academy", en: "Cisco Networking Academy", ar: "Cisco Networking Academy", zh: "思科网络学院" }
    },
    {
      group: "edu",
      date: { fr: "2 mois", en: "2 months", ar: "شهران", zh: "2 个月" },
      title: { fr: "Certification en administration réseau", en: "Network administration certification", ar: "شهادة في إدارة الشبكات", zh: "网络管理证书" },
      place: { fr: "PSM, Lomé", en: "PSM, Lomé", ar: "PSM, لومي", zh: "PSM, 洛美" }
    }
  ]
};
