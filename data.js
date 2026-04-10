// ════════════════════════════════════════════════════════════
//  SITE CONFIGURATION
//  Single source of truth for all personal & site-wide data.
//  To update your portfolio, edit the objects below.
// ════════════════════════════════════════════════════════════

const SITE = {
    name:           'Surumya Sharma',
    title:          'Associate Product Manager',
    certifications: ['CSPO® Certified'],
    email:          'sharmasurumya@gmail.com',
    location:       'Pune, India',
    linkedin:       'https://www.linkedin.com/in/surumyas/',
    resumeUrl:      'resume.pdf',

    bio: 'Product-focused professional with 5+ years of experience leveraging data-driven insights and cross-functional agility to drive product vision and delivery.',

    heroPrefix:         'Building data-backed',
    heroTypingPhrases:  ['product solutions.', 'growth strategy.', 'user experiences.', 'strategic roadmaps.'],
    footerTagline:      'Transforming insights into product value.',

    navLinks: [
        { label: 'About',      section: 'hero' },
        { label: 'Writing',    section: 'writing' },
        { label: 'Experience', section: 'experience' }
    ],

    socialLinks: [
        { icon: 'fas fa-envelope', url: 'mailto:sharmasurumya@gmail.com' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/surumyas/', external: true }
    ]
};

// ────────────────────────────────────────────────────────────
//  METRICS — Key numbers displayed below the hero
// ────────────────────────────────────────────────────────────

const METRICS = [
    { value: '5+',    label: 'Years Experience' },
    { value: '15%',   label: 'Efficiency Gain' },
    { value: '8+',    label: 'Case Studies' },
    { value: 'Agile', label: 'Practitioner' }
];

// ────────────────────────────────────────────────────────────
//  EXPERIENCE — Professional timeline entries (newest first)
// ────────────────────────────────────────────────────────────

const EXPERIENCE = [
    {
        period:      'Jul 2024 — Present',
        role:        'Business Analyst',
        company:     'V2Solutions (Digital Transformation)',
        description: 'Spearheading requirements discovery and backlog management for high-impact software products. Implementing automation workflows to streamline delivery cycles.',
        icon:        'fa-rocket',
        isCurrent:   true
    },
    {
        period:      '2016 — 2020',
        role:        'Senior Engineer',
        company:     'Honeywell Automation India Ltd',
        description: 'Led engineering initiatives that boosted plant reliability by 15%. Navigated complex stakeholder environments to deliver reliable industrial software solutions.',
        icon:        'fa-code',
        isCurrent:   false
    }
];

// ────────────────────────────────────────────────────────────
//  POSTS — Card metadata for all writing
//
//  To add a new post:
//    1. Create a Markdown file in the posts/ folder
//    2. Add a metadata entry below
//
//  category:  "Case Study" | "Write-up" | "Update"
//  links:     { "Display Text": "https://url" }
// ────────────────────────────────────────────────────────────

const POSTS = [
    {
        id:        'vitafit',
        category:  'Case Study',
        date:      '2026-03',
        icon:      'fa-solid fa-dumbbell',
        iconColor: 'text-orange-500',
        badge:     'PRD',
        title:     'VitaFit: StayFit+ Gamification & Community PRD',
        summary:   'Authored a full PRD for gamified streaks and accountability squads to transform VitaFit from a passive workout library into a community fitness ecosystem. Prioritized via RICE, designed A/B rollout plan.',
        links:     {}
    },
    {
        id:        'mealplan',
        category:  'Case Study',
        date:      '2026-02',
        icon:      'fa-solid fa-bowl-food',
        iconColor: 'text-amber-600',
        badge:     'Product Strategy',
        title:     'Meal Planning Tool: Decision Logistics Strategy',
        summary:   'Designed a pantry-first, time-adaptive meal planning tool for busy professionals using JTBD, 5 Whys root cause analysis, RICE prioritization, and prototype-validated user testing.',
        links:     {}
    },
    {
        id:        'whatsapp',
        category:  'Case Study',
        date:      '2026-02',
        icon:      'fa-brands fa-whatsapp',
        iconColor: 'text-emerald-500',
        badge:     'Market Research',
        title:     'WhatsApp: Community Service Discovery',
        summary:   'Evaluated WhatsApp\'s opportunity in local service discovery through TAM/SAM/SOM market sizing, Porter\'s Five Forces, user surveys, and prototype-validated interviews.',
        links:     {}
    },
    {
        id:        'zepto',
        category:  'Case Study',
        date:      '2025-12',
        icon:      'fa-solid fa-cart-shopping',
        iconColor: 'text-purple-600',
        badge:     'Strategic Growth',
        title:     'Zepto AOV Strategy: Optimizing Unit Economics',
        summary:   'Investigated low Average Order Value (AOV) issues relative to competitors (~₹500 vs ₹650+). Prioritized solutions via RICE framework to drive profitability.',
        links:     {}
    },
    {
        id:        'twitter',
        category:  'Case Study',
        date:      '2025-11',
        icon:      'fa-brands fa-x-twitter',
        iconColor: 'text-slate-900 dark:text-white',
        badge:     'Growth',
        title:     'Twitter (X): Funnel Optimization',
        summary:   'Mapped the AARRR funnel to identify discovery friction. Proposed Guest Mode and Interest Graph features to improve activation.',
        links:     {}
    },
    {
        id:        'spotify',
        category:  'Case Study',
        date:      '2025-10',
        icon:      'fa-brands fa-spotify',
        iconColor: 'text-green-500',
        badge:     'Strategy',
        title:     'Spotify: Daylist Optimization',
        summary:   'Utilized JTBD and "5 Whys" to solve Daylist churn. Proposed a mood-driven personalization model to improve repeat usage.',
        links:     {}
    },
    {
        id:        'zomato',
        category:  'Case Study',
        date:      '2025-09',
        icon:      'fa-solid fa-utensils',
        iconColor: 'text-red-600',
        badge:     'KPI & Retention',
        title:     'Zomato: KPI Framework & Tier-1 Retention Strategy',
        summary:   'Defined MATU as North Star metric, built OKRs from KPI baselines, and designed a phased roadmap with funnel and cohort analysis to drive Tier-1 order frequency and retention.',
        links:     {}
    },
    {
        id:        'lms',
        category:  'Case Study',
        date:      '2025-08',
        icon:      'fa-solid fa-graduation-cap',
        iconColor: 'text-blue-500',
        badge:     'System Design',
        title:     'Personalized Learning Recommendation System',
        summary:   'Designed a career-aligned recommendation engine with user stories, functional/non-functional requirements, layered system architecture, and a privacy-first trade-off analysis.',
        links:     {}
    }
];
