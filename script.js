// CV URLs for different languages
const cvUrls = {
    en: 'assets/CV_NOURDDINE_Othmane(english).pdf',
    fr: 'assets/CV_NOURDDINE_Othmane(french).pdf'
};

// Updated Project data with AtlasCare and improved descriptions
const projectsData = {
    en: [
        {
            id: 'atlascare',
            title: 'AtlasCare - AI Hospital Management System',
            description: 'AI-powered hospital management system developed during Code ESI Hackathon with 4 ML models for patient optimization',
            longDescription: 'AtlasCare is a comprehensive AI-powered hospital management system that revolutionizes healthcare operations through intelligent automation. Developed during the prestigious Code ESI Hackathon, this project ensures delivering innovative solutions to critical healthcare challenges using cutting-edge machine learning technologies.',
            tech: ['Python', 'scikit-learn', 'prophet', 'Flask'],
            features: [
                'Patient volume prediction using advanced time series analysis and seasonal forecasting',
                'Dynamic priority scoring system for emergency triage and patient classification',
                'Interactive dashboard for hospital administrators with real-time analytics',
                'Integration capabilities with existing Hospital Information Systems (HIS)',
                'Predictive analytics for capacity planning and long-term strategic decisions',
                'Automated alert system for critical resource shortages and emergencies'
            ],
            screenshots: [
                'screenshots/atlascare-1.png',
                'screenshots/atlascare-2.png',
                'screenshots/atlascare-3.png',
                'screenshots/atlascare-4.png'
            ],
            github: null, // Team project repository
            demo: null,
            category: 'Healthcare AI',
        },
        {
            id: 'pdf-sage',
            title: 'PDF Sage - Production RAG Chatbot',
            description: 'A production-ready RAG (Retrieval-Augmented Generation) chatbot with agentic reasoning capabilities, vector embeddings, and Docker deployment.',
            longDescription: 'PDF Sage is a sophisticated conversational AI system that combines the power of large language models with retrieval-augmented generation. The system can intelligently answer questions based on uploaded PDF documents, providing accurate and contextual responses with complete backend and frontend implementation.',
            tech: ['FastAPI', 'React', 'PostgreSQL', 'FAISS', 'Docker', 'LangChain', 'Ollama'],
            features: [
                'Advanced RAG pipeline with vector embeddings using FAISS',
                'Agentic reasoning for complex multi-step workflows',
                'Real-time document processing and PDF parsing',
                'Scalable FastAPI backend architecture with PostgreSQL',
                'Interactive React frontend with real-time reasoning traces',
                'Free LLM stack integration with Ollama and Sentence Transformers',
                'Docker containerization for easy deployment',
                'Security middleware and conversation history management'
            ],
            screenshots: [
                'screenshots/pdf-sage-1.png',
                'screenshots/pdf-sage-2.png',
                'screenshots/pdf-sage-3.png'
            ],
            github: 'https://github.com/Othamane/Agentic-PDF-Sage',
            demo: null,
            category: 'AI/ML'
        },
        {
            id: 'smartscope',
            title: 'SmartScope - AI Flutter Mobile App',
            description: 'A comprehensive AI mobile application featuring computer vision, voice assistant, and AI image generation capabilities built with Flutter and Firebase.',
            longDescription: 'SmartScope is a cutting-edge cross-platform mobile application that demonstrates the integration of multiple AI technologies in a single platform. The app combines real-time object detection, intelligent voice interactions, and creative AI image generation, optimized for mobile devices with responsive design.',
            tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'YOLO v5', 'Google TTS', 'Dart'],
            features: [
                'Real-time object detection using YOLO v5 with TensorFlow Lite optimized for mobile',
                'AI image generator with text-to-image generation capabilities',
                'Intelligent voice assistant with speech-to-text and NLP processing',
                'Cross-platform compatibility (iOS and Android) with native performance',
                'Firebase backend with authentication and real-time database synchronization',
                'Cloud storage integration for user-generated content and model caching',
                'Offline mode for basic computer vision functionality when disconnected',
                'Modern Material Design UI with smooth animations and mobile-optimized layouts',
                'Camera integration with real-time processing and image capture',
                'Responsive design ensuring proper display on all mobile screen sizes'
            ],
            screenshots: [
                'screenshots/smartscope-1.png',
                'screenshots/smartscope-2.png',
                'screenshots/smartscope-3.png',
                'screenshots/smartscope-4.png'
            ],
            github: null, // Private repository
            demo: null,
            category: 'Mobile/AI'
        },
        {
            id: 'projetconnect',
            title: 'ProjetConnect - Project Management Platform',
            description: 'A comprehensive project management application developed during VPI INFO internship using MEVN stack with real-time collaborative features and intelligent task prioritization.',
            longDescription: 'ProjetConnect is a sophisticated project management platform designed to streamline team collaboration and project workflows. Developed during my internship at VPI INFO, this application integrates modern web technologies with intelligent algorithms for optimal project management.',
            tech: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'WebSocket', 'JWT'],
            features: [
                'Real-time collaborative project editing and updates',
                'User behavior analysis and activity tracking',
                'Intelligent task prioritization using recommendation algorithms',
                'RESTful API architecture for seamless data management',
                'Role-based access control and user authentication',
                'Interactive dashboard with project analytics',
                'Real-time notifications and messaging system',
                'Responsive design for desktop and mobile access'
            ],
            screenshots: [
                'screenshots/projetconnect-1.png',
                'screenshots/projetconnect-2.png',
                'screenshots/projetconnect-3.png',
                'screenshots/projetconnect-4.png',
                'screenshots/projetconnect-5.png'
            ],
            github: null, // Company private repository
            demo: null,
            category: 'Web Application'
        },
        {
            id: 'chatify',
            title: 'Chatify - Real-time Communication Platform',
            description: 'A real-time communication platform developed during Terabyte Software internship using PHP WebSockets and Ratchet framework for seamless messaging.',
            longDescription: 'Chatify is a robust real-time communication platform built to facilitate instant messaging and collaboration. Developed during my internship at Terabyte Software, this platform leverages WebSocket technology for low-latency communication.',
            tech: ['PHP', 'WebSocket', 'Ratchet', 'MySQL', 'JavaScript', 'HTML/CSS'],
            features: [
                'Real-time messaging with WebSocket technology',
                'Group chat and private messaging capabilities',
                'User presence indicators and typing notifications',
                'Message history and conversation management',
                'File sharing and media upload functionality',
                'User authentication and session management',
                'Responsive web interface for all devices',
                'Scalable architecture for multiple concurrent users'
            ],
            screenshots: [
                'screenshots/chatify-1.png',
                'screenshots/chatify-2.png',
                'screenshots/chatify-3.png',
                'screenshots/chatify-4.png'
            ],
            github: null, // Company private repository
            demo: null,
            category: 'Web Application'
        },
        {
            id: 'customer-analytics',
            title: 'Intelligent Customer Analytics Platform',
            description: 'Complete NLP pipeline for sentiment analysis with PostgreSQL data warehouse, automated ETL with Apache Airflow, and Looker Studio dashboards for the Moroccan banking sector.',
            longDescription: 'A comprehensive data analytics platform designed specifically for the Moroccan banking sector. The system processes customer feedback, analyzes sentiment patterns, and provides actionable insights through automated dashboards and intelligent reporting.',
            tech: ['Python', 'PostgreSQL', 'Apache Airflow', 'Looker Studio', 'NLTK', 'scikit-learn', 'Selenium'],
            features: [
                'Advanced sentiment analysis using NLP techniques for Arabic, French, and English',
                'Automated web scraping using Selenium and BeautifulSoup',
                'Data warehouse architecture with PostgreSQL for scalable storage',
                'Automated ETL pipelines with Apache Airflow for data processing',
                'Interactive business intelligence dashboards with Looker Studio',
                'Custom Arabic text processing for Moroccan banking context',
                'Real-time analytics and automated reporting system',
                'Multi-language support and cross-cultural sentiment analysis'
            ],
            screenshots: [
                'screenshots/analytics-1.png',
                'screenshots/analytics-2.png',
                'screenshots/analytics-3.png'
            ],
            github: 'https://github.com/Othamane/bank-reviews-morocco-dwh', // Private repository
            demo: null,
            category: 'Data Science'
        },
        {
            id: 'voxease',
            title: 'VoxEase: AI Educational Assistant',
            description: 'An intelligent audio generation system using Google TTS with conversational interface and voice command recognition, built with Flutter and FastAPI.',
            longDescription: 'VoxEase is an innovative educational assistant that leverages AI to provide personalized learning experiences through voice interactions. The system combines advanced text-to-speech synthesis, speech recognition, and intelligent conversation management for enhanced educational outcomes.',
            tech: ['Flutter', 'FastAPI', 'MongoDB', 'Google TTS', 'Speech Recognition', 'AudioLDM2'],
            features: [
                'Intelligent voice-based educational interactions',
                'Multi-language text-to-speech synthesis with Google TTS',
                'Advanced AI audio generation using AudioLDM2 models',
                'Real-time speech recognition and natural language processing',
                'Personalized learning recommendations and progress tracking',
                'Cross-platform mobile application for iOS and Android',
                'Cloud-based backend architecture with FastAPI and MongoDB',
                'Contextual PDF processing with intelligent content understanding'
            ],
            screenshots: [
                'screenshots/voxease-1.png',
                'screenshots/voxease-2.png',
                'screenshots/voxease-3.png',
                'screenshots/voxease-4.png'
            ],
            github: null, // Private repository
            demo: null,
            category: 'Education/AI'
        }
    ],
    fr: [
        {
            id: 'atlascare',
            title: 'AtlasCare - Système de Gestion Hospitalière IA',
            description: 'Système de gestion hospitalière IA primé développé lors du Hackathon Code ESI avec 4 modèles ML pour l\'optimisation des patients, remportant la première place parmi 50+ équipes.',
            longDescription: 'AtlasCare est un système complet de gestion hospitalière alimenté par l\'IA qui révolutionne les opérations de santé grâce à l\'automatisation intelligente. Développé lors du prestigieux Hackathon Code ESI, ce projet a remporté la première place parmi 50+ équipes concurrentes en livrant des solutions innovantes aux défis critiques de la santé.',
            tech: ['Python', 'scikit-learn', 'prophet', 'Flask'],
            features: [
                'Prédiction du volume de patients utilisant analyse de séries temporelles avancée et prévisions saisonnières',
                'Prédiction d\'absence du personnel avec 92% de précision pour planification optimale et allocation des ressources',
                'Système de scoring de priorité dynamique pour triage d\'urgence et classification des patients',
                'Estimation du temps d\'attente en temps réel avec algorithmes d\'optimisation de file',
                'Optimisation de l\'utilisation des ressources pour lits, équipements et personnel médical',
                'Tableau de bord interactif pour administrateurs hospitaliers avec analytiques temps réel',
                'Capacités d\'intégration avec systèmes d\'information hospitaliers existants (SIH)',
                'Analytiques prédictives pour planification de capacité et décisions stratégiques long terme',
                'Système d\'alerte automatisé pour pénuries critiques de ressources et urgences'
            ],
            screenshots: [
                'screenshots/atlascare-1.png',
                'screenshots/atlascare-2.png',
                'screenshots/atlascare-3.png',
                'screenshots/atlascare-4.png'
            ],
            github: null,
            demo: null,
            category: 'IA Santé',
        },
        {
            id: 'pdf-sage',
            title: 'PDF Sage - Chatbot RAG de Production',
            description: 'Un chatbot RAG (Génération Augmentée par Récupération) prêt pour la production avec des capacités de raisonnement agentique, des embeddings vectoriels et un déploiement Docker.',
            longDescription: 'PDF Sage est un système d\'IA conversationnelle sophistiqué qui combine la puissance des grands modèles de langage avec la génération augmentée par récupération. Le système peut répondre intelligemment aux questions basées sur des documents PDF téléchargés avec une implémentation complète backend et frontend.',
            tech: ['FastAPI', 'React', 'PostgreSQL', 'FAISS', 'Docker', 'LangChain', 'Ollama'],
            features: [
                'Pipeline RAG avancé avec embeddings vectoriels utilisant FAISS',
                'Raisonnement agentique pour des workflows multi-étapes complexes',
                'Traitement de documents en temps réel et analyse PDF',
                'Architecture backend FastAPI évolutive avec PostgreSQL',
                'Interface React interactive avec traces de raisonnement temps réel',
                'Intégration stack LLM gratuite avec Ollama et Sentence Transformers',
                'Conteneurisation Docker pour un déploiement facile',
                'Middleware de sécurité et gestion de l\'historique des conversations'
            ],
            screenshots: [
                'screenshots/pdf-sage-1.png',
                'screenshots/pdf-sage-2.png',
                'screenshots/pdf-sage-3.png'
            ],
            github: 'https://github.com/Othamane/Agentic-PDF-Sage',
            demo: null,
            category: 'IA/ML'
        },
        {
            id: 'smartscope',
            title: 'SmartScope - App Mobile IA Flutter',
            description: 'Une application mobile IA complète intégrant vision par ordinateur, assistant vocal et génération d\'images IA construite avec Flutter et Firebase.',
            longDescription: 'SmartScope est une application mobile multiplateforme de pointe qui démontre l\'intégration de multiples technologies IA dans une seule plateforme. L\'app combine détection d\'objets en temps réel, interactions vocales intelligentes et génération créative d\'images IA, optimisée pour appareils mobiles avec design responsive.',
            tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'YOLO v5', 'Google TTS', 'Dart'],
            features: [
                'Détection d\'objets en temps réel utilisant YOLO v5 avec TensorFlow Lite optimisé pour mobile',
                'Générateur d\'images IA avec capacités de génération texte-vers-image',
                'Assistant vocal intelligent avec reconnaissance vocale et traitement NLP',
                'Compatibilité multiplateforme (iOS et Android) avec performance native',
                'Backend Firebase avec authentification et synchronisation base de données temps réel',
                'Intégration stockage cloud pour contenu généré par utilisateurs et cache de modèles',
                'Mode hors ligne pour fonctionnalités de vision par ordinateur de base quand déconnecté',
                'UI Material Design moderne avec animations fluides et layouts optimisés mobile',
                'Intégration caméra avec traitement temps réel et capture d\'image',
                'Design responsive assurant affichage correct sur toutes tailles d\'écran mobile'
            ],
            screenshots: [
                'screenshots/smartscope-1.png',
                'screenshots/smartscope-2.png',
                'screenshots/smartscope-3.png',
                'screenshots/smartscope-4.png'
            ],
            github: null,
            demo: null,
            category: 'Mobile/IA'
        },
        {
            id: 'projetconnect',
            title: 'ProjetConnect - Plateforme de Gestion de Projets',
            description: 'Une application complète de gestion de projets développée pendant le stage VPI INFO utilisant la stack MEVN avec des fonctionnalités collaboratives temps réel et priorisation intelligente des tâches.',
            longDescription: 'ProjetConnect est une plateforme sophistiquée de gestion de projets conçue pour rationaliser la collaboration d\'équipe et les workflows de projets. Développée pendant mon stage chez VPI INFO, cette application intègre les technologies web modernes avec des algorithmes intelligents.',
            tech: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'WebSocket', 'JWT'],
            features: [
                'Édition collaborative de projets en temps réel et mises à jour',
                'Analyse du comportement utilisateur et suivi d\'activité',
                'Priorisation intelligente des tâches utilisant des algorithmes de recommandation',
                'Architecture API RESTful pour gestion de données transparente',
                'Contrôle d\'accès basé sur les rôles et authentification utilisateur',
                'Tableau de bord interactif avec analytiques de projets',
                'Système de notifications et messagerie temps réel',
                'Design responsive pour accès desktop et mobile'
            ],
            screenshots: [
                'screenshots/projetconnect-1.png',
                'screenshots/projetconnect-2.png',
                'screenshots/projetconnect-3.png',
                'screenshots/projetconnect-4.png',
                'screenshots/projetconnect-5.png'
            ],
            github: null,
            demo: null,
            category: 'Application Web'
        },
        {
            id: 'chatify',
            title: 'Chatify - Plateforme de Communication Temps Réel',
            description: 'Une plateforme de communication temps réel développée pendant le stage Terabyte Software utilisant PHP WebSockets et le framework Ratchet pour messagerie fluide.',
            longDescription: 'Chatify est une plateforme de communication temps réel robuste construite pour faciliter la messagerie instantanée et la collaboration. Développée pendant mon stage chez Terabyte Software, cette plateforme exploite la technologie WebSocket.',
            tech: ['PHP', 'WebSocket', 'Ratchet', 'MySQL', 'JavaScript', 'HTML/CSS'],
            features: [
                'Messagerie temps réel avec technologie WebSocket',
                'Capacités de chat de groupe et messagerie privée',
                'Indicateurs de présence utilisateur et notifications de frappe',
                'Historique des messages et gestion des conversations',
                'Partage de fichiers et fonctionnalité d\'upload média',
                'Authentification utilisateur et gestion de session',
                'Interface web responsive pour tous appareils',
                'Architecture évolutive pour multiples utilisateurs simultanés'
            ],
            screenshots: [
                'screenshots/chatify-1.png',
                'screenshots/chatify-2.png',
                'screenshots/chatify-3.png',
                'screenshots/chatify-4.png'
            ],
            github: null,
            demo: null,
            category: 'Application Web'
        },
        {
            id: 'customer-analytics',
            title: 'Plateforme d\'Analyse Client Intelligente',
            description: 'Pipeline NLP complet pour l\'analyse de sentiment avec entrepôt de données PostgreSQL, ETL automatisé avec Apache Airflow, et tableaux de bord Looker Studio pour le secteur bancaire marocain.',
            longDescription: 'Une plateforme d\'analyse de données complète conçue spécialement pour le secteur bancaire marocain. Le système traite les retours clients, analyse les tendances de sentiment et fournit des insights actionnables via des tableaux de bord automatisés.',
            tech: ['Python', 'PostgreSQL', 'Apache Airflow', 'Looker Studio', 'NLTK', 'scikit-learn', 'Selenium'],
            features: [
                'Analyse de sentiment avancée utilisant techniques NLP pour Arabe, Français et Anglais',
                'Web scraping automatisé utilisant Selenium et BeautifulSoup',
                'Architecture d\'entrepôt de données avec PostgreSQL pour stockage évolutif',
                'Pipelines ETL automatisés avec Apache Airflow pour traitement de données',
                'Tableaux de bord business intelligence interactifs avec Looker Studio',
                'Traitement de texte arabe personnalisé pour contexte bancaire marocain',
                'Système d\'analytiques temps réel et reporting automatisé',
                'Support multi-langue et analyse de sentiment interculturelle'
            ],
            screenshots: [
                'screenshots/analytics-1.png',
                'screenshots/analytics-2.png',
                'screenshots/analytics-3.png'
            ],
            github: 'https://github.com/Othamane/bank-reviews-morocco-dwh',
            demo: null,
            category: 'Data Science'
        },
        {
            id: 'voxease',
            title: 'VoxEase: Assistant Éducatif IA',
            description: 'Système intelligent de génération audio utilisant Google TTS avec interface conversationnelle et reconnaissance vocale, construit avec Flutter et FastAPI.',
            longDescription: 'VoxEase est un assistant éducatif innovant qui utilise l\'IA pour fournir des expériences d\'apprentissage personnalisées à travers des interactions vocales. Le système combine synthèse vocale avancée, reconnaissance vocale et gestion intelligente des conversations.',
            tech: ['Flutter', 'FastAPI', 'MongoDB', 'Google TTS', 'Reconnaissance Vocale', 'AudioLDM2'],
            features: [
                'Interactions éducatives vocales intelligentes',
                'Synthèse vocale multi-langue avec Google TTS',
                'Génération audio IA avancée utilisant modèles AudioLDM2',
                'Reconnaissance vocale temps réel et traitement langage naturel',
                'Recommandations d\'apprentissage personnalisées et suivi des progrès',
                'Application mobile multiplateforme pour iOS et Android',
                'Architecture backend cloud avec FastAPI et MongoDB',
                'Traitement PDF contextuel avec compréhension intelligente du contenu'
            ],
            screenshots: [
                'screenshots/voxease-1.png',
                'screenshots/voxease-2.png',
                'screenshots/voxease-3.png',
                'screenshots/voxease-4.png'
            ],
            github: null,
            demo: null,
            category: 'Éducation/IA'
        }
    ]
};

// Translation object
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Experience': 'Experience',
        'Projects': 'Projects',
        'Skills': 'Skills',
        'Contact': 'Contact',

        // Buttons
        'View Details': 'View Details',
        'View Demo': 'View Demo',
        'View Code': 'View Code',
        'Screenshots': 'Screenshots',
        'Key Features': 'Key Features',
        'Technologies Used': 'Technologies Used',
        'Download CV': 'Download CV',
        'Menu': 'Menu',
        'Verify Certificate': 'Verify Certificate',

        // General
        'Loading...': 'Loading...',
        'Close': 'Close',
        'Read More': 'Read More'
    },
    fr: {
        // Navigation
        'Home': 'Accueil',
        'About': 'À propos',
        'Experience': 'Expérience',
        'Projects': 'Projets',
        'Skills': 'Compétences',
        'Contact': 'Contact',

        // Buttons
        'View Details': 'Voir Détails',
        'View Demo': 'Voir Démo',
        'View Code': 'Voir Code',
        'Screenshots': 'Captures d\'écran',
        'Key Features': 'Fonctionnalités Clés',
        'Technologies Used': 'Technologies Utilisées',
        'Download CV': 'Télécharger CV',
        'Menu': 'Menu',
        'Verify Certificate': 'Vérifier Certificat',

        // General
        'Loading...': 'Chargement...',
        'Close': 'Fermer',
        'Read More': 'Lire Plus'
    }
};

// Global variables
let currentLanguage = 'en';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguage();
    initializeLanguageTooltip();
    initializeNavigation();
    initializeMobileMenu();
    initializeProjects();
    initializeModal();
    initializeAnimations();
    initializeScrollEffects();

    // Force check mobile navigation on load
    forceMobileNavCheck();
});

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update language display button
    const langDisplay = document.getElementById('lang-display');
    if (langDisplay) {
        langDisplay.textContent = lang.toUpperCase();
    }

    // Update all translatable elements
    updateTranslations();

    // Update CV URLs
    updateCVUrls();

    // Update projects
    renderProjects();

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);

    // Close language tooltip
    closeLanguageTooltip();
}

// Language tooltip functionality
function initializeLanguageTooltip() {
    const langTrigger = document.getElementById('lang-trigger');
    const langOverlay = document.getElementById('lang-overlay');
    const languageToggle = document.getElementById('language-toggle');

    if (!langTrigger || !langOverlay || !languageToggle) return;

    // Show language tooltip
    langTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        showLanguageTooltip();
    });

    // Hide when clicking overlay
    langOverlay.addEventListener('click', function () {
        closeLanguageTooltip();
    });

    // Hide with escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && languageToggle.classList.contains('active')) {
            closeLanguageTooltip();
        }
    });

    // Prevent tooltip from closing when clicking inside
    languageToggle.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

function showLanguageTooltip() {
    const langOverlay = document.getElementById('lang-overlay');
    const languageToggle = document.getElementById('language-toggle');

    langOverlay.classList.add('active');
    languageToggle.classList.add('active');
    languageToggle.classList.remove('inactive');
}

function closeLanguageTooltip() {
    const langOverlay = document.getElementById('lang-overlay');
    const languageToggle = document.getElementById('language-toggle');

    languageToggle.classList.add('inactive');
    setTimeout(() => {
        langOverlay.classList.remove('active');
        languageToggle.classList.remove('active', 'inactive');
    }, 150);
}

// Update CV URLs based on selected language
function updateCVUrls() {
    const cvLinks = document.querySelectorAll('a[href*="CV_Othmane_Nourddine"]');
    const newUrl = cvUrls[currentLanguage];

    cvLinks.forEach(link => {
        link.setAttribute('href', newUrl);
        // Ensure all CV links open in new tab
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

function initializeLanguage() {
    // Get saved language preference or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';

    // Set initial language button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${savedLang}`).classList.add('active');

    // Update language display button
    const langDisplay = document.getElementById('lang-display');
    if (langDisplay) {
        langDisplay.textContent = savedLang.toUpperCase();
    }

    currentLanguage = savedLang;
    updateTranslations();
    updateCVUrls();
}

function updateTranslations() {
    // Update elements with data-en and data-fr attributes
    document.querySelectorAll('[data-en][data-fr]').forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-fr');
        element.textContent = text;
    });

    // Update document title
    const titleText = currentLanguage === 'en'
        ? 'Othmane Nourddine - Data Scientist & ML Engineer'
        : 'Othmane Nourddine - Data Scientist & Ingénieur ML';
    document.title = titleText;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        const descText = currentLanguage === 'en'
            ? 'Portfolio of Othmane Nourddine, Data Scientist and Machine Learning Engineer specializing in AI, NLP, and Computer Vision'
            : 'Portfolio d\'Othmane Nourddine, Data Scientist et Ingénieur Machine Learning spécialisé en IA, NLP et Vision par Ordinateur';
        metaDesc.setAttribute('content', descText);
    }
}

function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(248, 250, 252, 0.98)';
        } else {
            navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        }
    });
}

// CRITICAL MOBILE NAVIGATION FIX
function forceMobileNavCheck() {
    function checkAndSetMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        if (window.innerWidth <= 768) {
            // FORCE show mobile toggle
            if (navToggle) {
                navToggle.style.display = 'flex';
                navToggle.style.visibility = 'visible';
                navToggle.style.opacity = '1';
            }

            // FORCE hide desktop menu
            if (navMenu) {
                navMenu.style.display = 'none';
            }

            // Enable mobile menu overlay
            if (mobileMenuOverlay) {
                mobileMenuOverlay.style.display = 'block';
            }
        } else {
            // Desktop view
            if (navToggle) {
                navToggle.style.display = 'none';
            }

            if (navMenu) {
                navMenu.style.display = 'flex';
            }

            if (mobileMenuOverlay) {
                mobileMenuOverlay.style.display = 'none';
            }
        }
    }

    // Check immediately
    checkAndSetMobileNav();

    // Check on resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkAndSetMobileNav, 100);
    });

    // Additional checks after DOM updates
    setTimeout(checkAndSetMobileNav, 100);
    setTimeout(checkAndSetMobileNav, 500);
}

// Mobile menu functionality - Enhanced
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (!navToggle || !mobileMenuOverlay || !mobileMenuClose) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Open mobile menu
    navToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mobile menu toggle clicked');

        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile menu function
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close button
    mobileMenuClose.addEventListener('click', function (e) {
        e.preventDefault();
        closeMobileMenu();
    });

    // Close when clicking overlay background
    mobileMenuOverlay.addEventListener('click', function (e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    // Close when clicking nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Prevent mobile menu from interfering with desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// Projects functionality
function initializeProjects() {
    renderProjects();
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    const projects = projectsData[currentLanguage];

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectModal('${project.id}')">
            <div class="project-image">
                ${project.award ? `<div class="project-award">${project.award}</div>` : ''}
                <i class="fas ${project.category === 'Healthcare AI' || project.category === 'IA Santé' ? 'fa-heartbeat' : 'fa-brain'}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.tech.length > 4 ? `<span class="tech-tag">+${project.tech.length - 4}</span>` : ''}
                </div>
                <div class="project-actions">
                    <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); openProjectModal('${project.id}')">
                        ${getTranslation('View Details')}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openProjectModal(projectId) {
    const project = projectsData[currentLanguage].find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            ${project.award ? `<div class="project-award-modal">${project.award}</div>` : ''}
            <div class="modal-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-description">
            <p>${project.longDescription}</p>
        </div>
        
        <div class="modal-features">
            <h4>${getTranslation('Key Features')}</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-screenshots">
            <h4>${getTranslation('Screenshots')}</h4>
            <div class="screenshot-grid ${project.id === 'smartscope' ? 'mobile-optimized' : ''}">
                ${project.screenshots.map(screenshot => `
                    <img src="${screenshot}" alt="Screenshot" class="screenshot" 
                         onerror="this.style.display='none'">
                `).join('')}
            </div>
            <p style="color: var(--text-muted); font-style: italic; margin-top: var(--spacing-md);">
                ${currentLanguage === 'en'
            ? 'Screenshots will be displayed when available. Some projects are from private repositories or company internships.'
            : 'Les captures d\'écran seront affichées lorsqu\'elles seront disponibles. Certains projets proviennent de dépôts privés ou de stages en entreprise.'}
            </p>
        </div>
        
        <div class="project-actions" style="margin-top: var(--spacing-xl);">
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="btn btn-primary">
                    ${getTranslation('View Demo')}
                </a>
            ` : ''}
            ${project.github ? `
                <a href="${project.github}" target="_blank" class="btn btn-secondary">
                    ${getTranslation('View Code')}
                </a>
            ` : ''}
            ${!project.demo && !project.github ? `
                <p style="color: var(--text-muted); font-style: italic;">
                    ${currentLanguage === 'en'
                ? 'This project is from a private repository or company internship and demo links are not publicly available.'
                : 'Ce projet provient d\'un dépôt privé ou d\'un stage en entreprise et les liens de démonstration ne sont pas publiquement disponibles.'}
                </p>
            ` : ''}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');

    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// Animation and scroll effects
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.experience-card, .skill-category, .project-card, .cert-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

function initializeScrollEffects() {
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;

            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const speed = scrolled * 0.1;
            hero.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('resize', debounce(function () {
    // Re-check mobile navigation on resize
    forceMobileNavCheck();
}, 100));

// Error handling for images
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.log('Image failed to load:', e.target.src);
    }
}, true);

// Loading states
function showLoading(element) {
    element.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">${getTranslation('Loading...')}</div>`;
}

// Export functions for global access
window.switchLanguage = switchLanguage;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.showLanguageTooltip = showLanguageTooltip;
window.closeLanguageTooltip = closeLanguageTooltip;

// Debug function for mobile navigation
window.debugMobileNav = function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    console.log('Screen width:', window.innerWidth);
    console.log('Nav toggle display:', navToggle ? getComputedStyle(navToggle).display : 'not found');
    console.log('Nav menu display:', navMenu ? getComputedStyle(navMenu).display : 'not found');
};