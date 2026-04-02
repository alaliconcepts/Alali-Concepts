(function() {
    // --- 1. FULL TRANSLATION DATA ---
    const translations = {
        en: {
            dir: "ltr",
            hero_title: "Your Trusted Business Partner in<br> <span class='accent-color'>Luxem</span><span class='accent-color2'>bourg</span>",
            nav_home: "HOME", nav_shop: "SHOP", nav_about: "ABOUT", nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "BOOK NOW",
            hero_title: "Your Trusted Business Partner in<br> <span class='accent-color'>Luxem</span><span class='accent-color2'>bourg</span>",
            hero_subtitle: "Expert Legal Consultation • Premium Products • Professional Services",
            btn_get_started: "Get Started", btn_about: "About",
            services_title: "Our Services", services_subtitle: "Professional solutions tailored to your business needs in Luxembourg and beyond.",
            legal_title: "Legal Consultation", legal_desc: "Expert legal consultation and document services for Luxembourg businesses and individuals.",
            prod_title: "Premium Products", prod_desc: "Curated selection of quality perfumes and specialty products for the Luxembourg market.",
            serv_title: "Professional Services", serv_desc: "Translation, IT solutions, and business consulting services for Luxembourg.",
            why_title: "Why Choose ALALI Concepts?",
            why_1_h: "Local Expertise", why_1_p: "Based in Luxembourg with deep understanding of local business needs.",
            why_2_h: "Multilingual Team", why_2_p: "Native speakers in French, German, English, and Luxembourgish.",
            why_3_h: "Innovation First", why_3_p: "Cutting-edge technology and modern methodologies.",
            trusted_tag: "Trusted By", trusted_desc: "We collaborate with trusted partners to deliver excellence to our clients across Luxembourg.",
            inst_partners: "Institutional Partners",
            ital_agent_title: "Official Ital Agents",
            ital_agent_p: "Authorized Agents for Luxembourg. We are proud to be official agents for Ital fragrances.",
            ital_btn: "Explore Collection",
            req_call: "Request a Call",
            footer_copy: "© 2026 ALALI Concepts. All rights reserved.",

                    nav_home: "HOME", nav_shop: "SHOP", nav_about: "ABOUT", 
        nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "BOOK NOW",
        about_title: "About ALALI Concepts",
        about_sub: "Established 2024",
        about_lead: "Professional services company based in Luxembourg, specializing in legal consultation, confidential translation, IT solutions, and premium products.",
        bio_1: "ALALI Concepts is a professional services company founded in 2024, specializing in legal consultation, confidential translation, and premium product offerings in Luxembourg.",
        bio_2: "We provide expert legal consultation and document services, confidential translation for legal institutions and courts, premium perfume products, and comprehensive IT solutions.",
        sworn_tag: "✓ Sworn Translators: Certified \"traducteurs assermentés\"",
        values_header: "Our Core Values",
        val_conf_h: "Confidentiality", val_conf_p: "Absolute discretion in all client interactions and translations",
        val_ex_h: "Excellence", val_ex_p: "High-quality standards in every service we provide",
        val_rapid_h: "Rapid Service", val_rapid_p: "Fast turnaround without compromising quality",
        exp_h: "Languages & Expertise", exp_p: "Professional translation services in multiple languages",
        lang_euro: "European", lang_mid: "Mid-East & Africa", lang_spec: "Specializations",
        lang_spec_p: "Legal Documents, Court Interpretation, Official Documents",
        sol_h: "Complete Business Solutions",
        sol_1_h: "Translation Services", sol_1_p: "Professional translation in 10+ languages",
        sol_2_h: "IT Solutions", sol_2_p: "Custom software & system development",
        sol_3_h: "Legal Consultation", sol_3_p: "Expert legal advice & document services",
        sol_4_h: "Premium Products", sol_4_p: "Luxury items & specialty products",
        footer_p1: "Your trusted partner in Luxembourg.",
        footer_pages: "Pages", footer_contact: "Contact",
                nav_sub: "Premium Consultancy",
        nav_home: "HOME", nav_shop: "SHOP", nav_about: "ABOUT", nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "BOOK NOW",
        shop_hero_title: "Premium Products",
        shop_hero_sub: "Discover our curated collection of luxury items",
        sort_label: "Sort by:", sort_featured: "Featured", sort_low: "Price: Low to High", sort_high: "Price: High to Low",
        tag_perfume: "Perfume", tag_diffuseur: "Diffuseur", btn_contact: "Contact for Details",
        gender_m: "Men", gender_f: "Women", gender_u: "Unisex", // <--- NEW GENDER KEYS
        p1_desc: "The essence of refined Italian perfumery.",
        p2_desc: "Niche from ITAL - Pure individuality.",
        p3_desc: "Distinct, luxurious, and timeless essence.",
        p4_desc: "Velvety elegance and luxurious charm.",
        p5_desc: "Refined, chic fragrance in dark elegance.",
        p6_desc: "Opulent fragrance radiating sophistication.",
        p7_desc: "Luxury perfume exuding chic mystery.",
        p8_desc: "Fiery elegance and velvety allure.",
        p9_desc: "For the confident, stylish woman.",
        p10_desc: "Intrigue, glamour, and chic sophistication.",
        p11_desc: "Warm, velvety, irresistible allure.",
        p12_desc: "Timeless elegance and refined femininity.",
        p13_desc: "Refinement, confidence, and timeless beauty.",
        p14_desc: "Seductive fragrance igniting confidence.",
        p15_desc: "Playful romance—youthful and elegant.",
        p16_desc: "Luxury, passion, and modern femininity.",
        p17_desc: "Italian power, confidence, and class.",
        p18_desc: "Inspired by Italy's beauty and grace.",
        p19_desc: "Elegant Rose scent for your space.",
        p20_desc: "Inspired by Milan's refined sophistication.",
        p21_desc: "A fresh, continuous floral aroma.",
        p22_desc: "Fraîcheur tropicale pour toute pièce.",
        p23_desc: "Soft, enchanting and flutters with elegance.",
        p24_desc: "Calming sanctuary of style and comfort.",
        p25_desc: "Luxurious, velvety fragrance collection.",
        p26_desc: "Blending warmth, mystery, and modern allure.",
        agent_title: "Official Ital Agents",
        agent_desc: "We are proud authorized agents for Ital fragrances in Luxembourg.",
        footer_copy: "© 2024 ALALI Concepts. All rights reserved.",
                nav_home: "HOME", nav_shop: "SHOP", nav_about: "ABOUT", 
        nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "BOOK NOW",
        con_h1: "Contact Us", con_p1: "Ready to start your project? Get in touch with our team for a free consultation.",
        card_lead: "Leadership", card_ceo: "Chief Executive Officer", 
        label_email: "Email:", label_phone: "Phone:",
        card_addr: "Office Address", lux_name: "Luxembourg", btn_map: "View on Map",
        direct_h: "Get in Touch Directly", call_h: "Call Us Now", call_sub: "Click to call directly",
        email_ceo_h: "Email the CEO", direct_sub: "Direct access",
        email_team_h: "Email Our Team", gen_inq: "General inquiries",
        inq_h: "Quick Service Inquiries", sol_it: "IT Solutions:", sol_it_sub: "Software & Systems",
        sol_tr: "Translation:", sol_tr_sub: "10+ Languages",
        sol_leg: "Legal:", sol_leg_sub: "Consultation",
        time_24: "We respond within 24 hours", res_h: "Additional Resources",
        visit_h: "Visit Our Office", visit_p: "Located in the heart of Luxembourg City.",
        mon_fri: "Mon-Fri: 9:00 - 18:00",
        footer_p1: "Your trusted partner for IT solutions, translation, and legal consultation in Luxembourg.",
        footer_pages: "Pages", footer_contact: "Contact",
                nav_home: "HOME",
        nav_shop: "SHOP",
        nav_about: "ABOUT",
        nav_services: "SERVICES",
        nav_contact: "CONTACT",
        nav_book: "BOOK NOW",
        ser_title: "Our Services",
        ser_sub: "Expert legal consultation, premium products, and professional services designed for Luxembourg businesses and individuals.",
        tr_h: "Professional Translation Services",
        tr_p: "Expert translation services in 10+ languages by certified native speakers. We specialize in legal, court, and official document translation with absolute confidentiality.",
        lang_euro: "European Languages",
        l_fr: "French", l_de: "German", l_lu: "Luxembourgish", l_en: "English", l_es: "Spanish",
        lang_other: "Other Languages",
        l_ar: "Arabic", l_tr: "Turkish", l_er: "Eritrean", l_am: "Amharic", l_ti: "Tigrinya",
        tr_spec: "Specialized Services",
        s_doc: "Document Translation", s_oral: "Oral Translation", s_leg: "Legal Documents", s_court: "Court Interpretation", s_sworn: "Sworn Translators",
        it_h: "IT Solutions & Development",
        it_p: "Comprehensive technology solutions to streamline your business operations and drive digital transformation.",
        it_web: "Website Development", it_web_p: "Performance-optimized, visually appealing websites",
        it_app: "Mobile Apps", it_app_p: "User-friendly mobile and desktop applications",
        it_crm: "CRM & ERP", it_crm_p: "Custom customer relationship management",
        it_digi: "Digital Transformation", it_digi_p: "Process digitization and tailored software support",
        leg_h: "Legal Consultation", leg_p: "Expert legal consultation and document preparation services.",
        leg_1: "Legal consultation", leg_2: "Document preparation", leg_3: "Compliance support", leg_4: "Administrative services",
        prem_h: "Premium Products", prem_p: "Curated selection of luxury perfumes and specialty products.",
        prem_1: "Premium perfumes", prem_2: "Luxury fragrances", prem_3: "Specialty products", prem_4: "Expert consultation",
        bus_h: "Business Services", bus_p: "Complete support for business formation and registration in Luxembourg.",
        bus_1: "Company formation", bus_2: "Business registration", bus_3: "Compliance assistance", bus_4: "Ongoing support",
        ready_h: "Ready to Get Started?",
        ready_p: "Contact us today to discuss your specific needs.",
        ready_btn: "Contact Us Today",
        footer_p1: "Your trusted partner for IT, Translation, and Legal services.",
        footer_pages: "Pages", footer_contact: "Contact", lux_name: "Luxembourg",
                    dir: "ltr",
            nav_home: "HOME", nav_shop: "SHOP", nav_about: "ABOUT",
            nav_team: "OUR TEAM", nav_services: "SERVICES",
            nav_contact: "CONTACT", nav_book: "BOOK NOW",

            team_title: "Meet Our Team",
            team_subtitle: "Professionals dedicated to excellence and innovation.",


        },

        fr: {
            dir: "ltr",
            hero_title: "Votre Partenaire Commercial de Confiance au<br> <span class='accent-color'>Luxem</span><span class='accent-color2'>bourg</span>",
            nav_home: "ACCUEIL", nav_shop: "BOUTIQUE", nav_about: "À PROPOS", nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "RÉSERVER",
            hero_title: "Votre Partenaire Commercial de Confiance au<br> <span class='accent-color'>Luxem</span><span class='accent-color2'>bourg</span>",
            hero_subtitle: "Consultation Juridique • Produits Premium • Services Professionnels",
            btn_get_started: "Commencer", btn_about: "À Propos",
            services_title: "Nos Services", services_subtitle: "Des solutions professionnelles adaptées à vos besoins au Luxembourg et au-delà.",
            legal_title: "Consultation Juridique", legal_desc: "Services de consultation juridique pour entreprises et particuliers au Luxembourg.",
            prod_title: "Produits Premium", prod_desc: "Une sélection de parfums de qualité et de produits spécialisés.",
            serv_title: "Services Professionnels", serv_desc: "Traduction, solutions informatiques et conseil aux entreprises.",
            why_title: "Pourquoi Choisir ALALI Concepts ?",
            why_1_h: "Expertise Locale", why_1_p: "Basé au Luxembourg avec une compréhension profonde des besoins locaux.",
            why_2_h: "Équipe Multilingue", why_2_p: "Locuteurs natifs en français, allemand, anglais et luxembourgeois.",
            why_3_h: "Innovation d'Abord", why_3_p: "Technologie de pointe et méthodologies modernes.",
            trusted_tag: "Approuvé par", trusted_desc: "Nous collaborons avec des partenaires de confiance pour offrir l'excellence.",
            inst_partners: "Partenaires Institutionnels",
            ital_agent_title: "Agents Officiels Ital",
            ital_agent_p: "Agents autorisés pour le Luxembourg. Nous sommes fiers d'être les agents officiels des parfums Ital.",
            ital_btn: "Explorer la Collection",
            req_call: "Demander un Appel",
            footer_copy: "© 2026 ALALI Concepts. Tous droits réservés.",

                    nav_home: "ACCUEIL", nav_shop: "BOUTIQUE", nav_about: "À PROPOS", 
        nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "RÉSERVER",
        about_title: "À Propos d'ALALI Concepts",
        about_sub: "Établi en 2024",
        about_lead: "Entreprise de services professionnels au Luxembourg, spécialisée en conseil juridique, traduction, informatique et produits premium.",
        bio_1: "ALALI Concepts est une société de services professionnels fondée en 2024 au Luxembourg.",
        bio_2: "Nous fournissons des conseils juridiques, des traductions confidentielles pour les tribunaux, des parfums et des solutions informatiques.",
        sworn_tag: "✓ Traducteurs Assermentés",
        values_header: "Nos Valeurs",
        val_conf_h: "Confidentialité", val_conf_p: "Discrétion absolue dans toutes les traductions",
        val_ex_h: "Excellence", val_ex_p: "Des standards de haute qualité",
        val_rapid_h: "Service Rapide", val_rapid_p: "Délai d'exécution rapide",
        exp_h: "Langues & Expertise", exp_p: "Services de traduction professionnelle",
        lang_euro: "Européen", lang_mid: "Moyen-Orient & Afrique", lang_spec: "Spécialisations",
        lang_spec_p: "Documents juridiques, interprétation judiciaire",
        sol_h: "Solutions Complètes",
        sol_1_h: "Traduction", sol_1_p: "Traduction en plus de 10 langues",
        sol_2_h: "Informatique", sol_2_p: "Développement de logiciels sur mesure",
        sol_3_h: "Conseil Juridique", sol_3_p: "Conseils d'experts",
        sol_4_h: "Produits Premium", sol_4_p: "Articles de luxe",
        footer_p1: "Votre partenaire de confiance au Luxembourg.",
        footer_pages: "Pages", footer_contact: "Contact",
                nav_sub: "Conseil Premium",
        nav_home: "ACCUEIL", nav_shop: "BOUTIQUE", nav_about: "À PROPOS", nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "RÉSERVER",
        shop_hero_title: "Produits Premium",
        shop_hero_sub: "Découvrez notre collection d'articles de luxe",
        sort_label: "Trier par :", sort_featured: "Vedettes", sort_low: "Prix : Croissant", sort_high: "Prix : Décroissant",
        tag_perfume: "Parfum", tag_diffuseur: "Diffuseur", btn_contact: "Contactez-nous",
        gender_m: "Hommes", gender_f: "Femmes", gender_u: "Unisexe", // <--- NEW GENDER KEYS
        p1_desc: "L'essence de la parfumerie italienne raffinée.",
        p2_desc: "Niche d'ITAL - Pure individualité.",
        p3_desc: "Essence distincte, luxueuse et intemporelle.",
        p4_desc: "Élégance veloutée et charme luxueux.",
        p5_desc: "Parfum raffiné et chic dans une élégance sombre.",
        p6_desc: "Parfum opulent rayonnant de sophistication.",
        p7_desc: "Parfum de luxe exhalant un mystère chic.",
        p8_desc: "Élégance ardente et allure veloutée.",
        p9_desc: "Pour la femme confiante et stylée.",
        p10_desc: "Intrigue, glamour et sophistication chic.",
        p11_desc: "Allure chaleureuse, veloutée et irrésistible.",
        p12_desc: "Élégance intemporelle et féminité raffinée.",
        p13_desc: "Raffinement, confiance et beauté intemporelle.",
        p14_desc: "Parfum séduisant qui éveille la confiance.",
        p15_desc: "Romance ludique — jeune et élégante.",
        p16_desc: "Luxe, passion et féminité moderne.",
        p17_desc: "Puissance italienne, confiance et classe.",
        p18_desc: "Inspiré par la beauté et la grâce de l'Italie.",
        p19_desc: "Parfum de rose élégant pour votre espace.",
        p20_desc: "Inspiré par la sophistication raffinée de Milan.",
        p21_desc: "Un arôme floral frais et continu.",
        p22_desc: "Fraîcheur tropicale pour toute pièce.",
        p23_desc: "Doux, enchanteur et virevolte avec élégance.",
        p24_desc: "Sanctuaire apaisant de style et de confort.",
        p25_desc: "Collection de parfums luxueux et veloutés.",
        p26_desc: "Mélange de chaleur, de mystère et d'allure moderne.",
        agent_title: "Agents Officiels Ital",
        agent_desc: "Nous sommes fiers d'être agents agréés pour les parfums Ital au Luxembourg.",
        footer_copy: "© 2024 ALALI Concepts. Tous droits réservés.",
                nav_home: "ACCUEIL", nav_shop: "BOUTIQUE", nav_about: "À PROPOS", 
        nav_services: "SERVICES", nav_contact: "CONTACT", nav_book: "RÉSERVER",
        con_h1: "Contactez-nous", con_p1: "Prêt à démarrer votre projet ? Contactez notre équipe pour une consultation gratuite.",
        card_lead: "Direction", card_ceo: "Directeur Général", 
        label_email: "E-mail :", label_phone: "Téléphone :",
        card_addr: "Adresse du bureau", lux_name: "Luxembourg", btn_map: "Voir sur la carte",
        direct_h: "Contact Direct", call_h: "Appelez-nous", call_sub: "Cliquez pour appeler",
        email_ceo_h: "E-mail au CEO", direct_sub: "Accès direct",
        email_team_h: "Notre équipe", gen_inq: "Demandes générales",
        inq_h: "Demandes de service rapides", sol_it: "Solutions IT :", sol_it_sub: "Logiciels & Systèmes",
        sol_tr: "Traduction :", sol_tr_sub: "Plus de 10 langues",
        sol_leg: "Juridique :", sol_leg_sub: "Consultation",
        time_24: "Réponse sous 24 heures", res_h: "Ressources supplémentaires",
        visit_h: "Visitez notre bureau", visit_p: "Situé au cœur de la ville de Luxembourg.",
        mon_fri: "Lun-Ven : 9h00 - 18h00",
        footer_p1: "Votre partenaire de confiance pour les solutions IT, la traduction et le conseil juridique au Luxembourg.",
        footer_pages: "Pages", footer_contact: "Contact",
                nav_home: "ACCUEIL",
        nav_shop: "BOUTIQUE",
        nav_about: "À PROPOS",
        nav_services: "SERVICES",
        nav_contact: "CONTACT",
        nav_book: "RÉSERVER",
        ser_title: "Nos Services",
        ser_sub: "Consultation juridique experte, produits haut de gamme et services professionnels conçus pour les entreprises et les particuliers au Luxembourg.",
        tr_h: "Services de Traduction Professionnelle",
        tr_p: "Services de traduction experts dans plus de 10 langues par des locuteurs natifs certifiés. Nous sommes spécialisés dans la traduction juridique, judiciaire et officielle.",
        lang_euro: "Langues Européennes",
        l_fr: "Français", l_de: "Allemand", l_lu: "Luxembourgeois", l_en: "Anglais", l_es: "Espagnol",
        lang_other: "Autres Langues",
        l_ar: "Arabe", l_tr: "Turc", l_er: "Érythréen", l_am: "Amharique", l_ti: "Tigrinya",
        tr_spec: "Services Spécialisés",
        s_doc: "Traduction de documents", s_oral: "Traduction orale", s_leg: "Documents juridiques", s_court: "Interprétation judiciaire", s_sworn: "Traducteurs assermentés",
        it_h: "Solutions Informatiques & Développement",
        it_p: "Solutions technologiques complètes pour optimiser vos opérations commerciales et stimuler votre transformation numérique.",
        it_web: "Développement Web", it_web_p: "Sites web performants et visuellement attrayants",
        it_app: "Applications Mobiles", it_app_p: "Applications conviviales pour mobiles et ordinateurs",
        it_crm: "CRM & ERP", it_crm_p: "Gestion de la relation client personnalisée",
        it_digi: "Transformation Numérique", it_digi_p: "Numérisation des processus et support logiciel sur mesure",
        leg_h: "Consultation Juridique", leg_p: "Services de consultation juridique experte et de préparation de documents.",
        leg_1: "Consultation juridique", leg_2: "Préparation de documents", leg_3: "Support de conformité", leg_4: "Services administratifs",
        prem_h: "Produits Premium", prem_p: "Sélection de parfums de luxe et de produits spécialisés.",
        prem_1: "Parfums de luxe", prem_2: "Fragrances haut de gamme", prem_3: "Produits spécialisés", prem_4: "Consultation experte",
        bus_h: "Services aux Entreprises", bus_p: "Accompagnement complet pour la création et l'enregistrement de sociétés au Luxembourg.",
        bus_1: "Formation de société", bus_2: "Enregistrement d'entreprise", bus_3: "Aide à la conformité", bus_4: "Soutien continu",
        ready_h: "Prêt à commencer ?",
        ready_p: "Contactez-nous aujourd'hui pour discuter de vos besoins spécifiques.",
        ready_btn: "Contactez-nous aujourd'hui",
        footer_p1: "Votre partenaire de confiance pour l'informatique, la traduction et les services juridiques.",
        footer_pages: "Pages", footer_contact: "Contact", lux_name: "Luxembourg",
                    dir: "ltr",
            nav_home: "ACCUEIL", nav_shop: "BOUTIQUE", nav_about: "À PROPOS",
            nav_team: "NOTRE ÉQUIPE", nav_services: "SERVICES",
            nav_contact: "CONTACT", nav_book: "RÉSERVER",

        },

        ar: {
            dir: "rtl",
            hero_title: "شريكك التجاري الموثوق في<br> <span class='accent-color'>لوكسم</span><span class='accent-color2'>بورغ</span>",
            nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
            nav_team: "فريقنا", nav_services: "خدماتنا",
            nav_contact: "اتصل بنا", nav_book: "احجز الآن",            
            hero_title: "شريكك التجاري الموثوق في<br> <span class='accent-color'>لوكسم</span><span class='accent-color2'>بورغ</span>",
            hero_subtitle: "استشارات قانونية خبيرة • منتجات فاخرة • خدمات مهنية",
            btn_get_started: "ابدأ الآن", btn_about: "من نحن",
            services_title: "خدماتنا", services_subtitle: "حلول احترافية مصممة خصيصًا لاحتياجات عملك في لوكسمبورغ.",
            legal_title: "استشارات قانونية", legal_desc: "استشارات قانونية خبيرة وخدمات وثائق للشركات والأفراد.",
            prod_title: "منتجات فاخرة", prod_desc: "مجموعة مختارة من العطور عالية الجودة والمنتجات المتخصصة.",
            serv_title: "خدمات مهنية", serv_desc: "ترجمة، حلول تقنية، واستشارات تجارية لـ لوكسمبورغ.",
            why_title: "لماذا تختار ALALI Concepts؟",
            why_1_h: "خبرة محلية", why_1_p: "مقرنا في لوكسمبورغ مع فهم عميق لاحتياجات العمل المحلية.",
            why_2_h: "فريق متعدد اللغات", why_2_p: "متحدثون أصليون بالفرنسية والألمانية والإنجليزية واللوكسمبورغية.",
            why_3_h: "الابتكار أولاً", why_3_p: "تقنيات متطورة ومنهجيات حديثة.",
            trusted_tag: "موثوق به من قبل", trusted_desc: "نحن نتعاون مع شركاء موثوقين لتقديم التميز لعملائنا.",
            inst_partners: "الشركاء المؤسسيون",
            ital_agent_title: "وكلاء Ital الرسميون",
            ital_agent_p: "وكلاء معتمدون في لوكسمبورغ. نحن فخورون بأن نكون الوكلاء الرسميين لعطور Ital.",
            ital_btn: "استكشف المجموعة",
            req_call: "اطلب اتصالاً",
            footer_copy: "© 2026 ALALI Concepts. جميع الحقوق محفوظة.",
                        dir: "rtl",
            nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
            nav_team: "فريقنا", nav_services: "خدماتنا",
            nav_contact: "اتصل بنا", nav_book: "احجز الآن",
        about_title: "حول ALALI Concepts",
        about_sub: "تأسست عام 2024",
        about_lead: "شركة خدمات مهنية مقرها لوكسمبورغ، متخصصة في الاستشارات القانونية والترجمة وحلول التكنولوجيا.",
        bio_1: "ALALI Concepts هي شركة خدمات مهنية تأسست في عام 2024 في لوكسمبورغ.",
        bio_2: "نقدم استشارات قانونية، وترجمة معتمدة للمحاكم، ومنتجات عطور فاخرة، وحلول تقنية شاملة.",
        sworn_tag: "✓ مترجمون محلفون معتمدون",
        values_header: "قيمنا الأساسية",
        val_conf_h: "السرية", val_conf_p: "السرية المطلقة في جميع التعاملات",
        val_ex_h: "التميز", val_ex_p: "معايير جودة عالية في كل خدمة",
        val_rapid_h: "خدمة سريعة", val_rapid_p: "إنجاز سريع دون المساومة على الجودة",
        exp_h: "اللغات والخبرة", exp_p: "خدمات ترجمة احترافية بلغات متعددة",
        lang_euro: "أوروبي", lang_mid: "الشرق الأوسط وأفريقيا", lang_spec: "التخصصات",
        lang_spec_p: "الوثائق القانونية، الترجمة الفورية للمحاكم",
        sol_h: "حلول أعمال متكاملة",
        sol_1_h: "خدمات الترجمة", sol_1_p: "ترجمة احترافية بأكثر من 10 لغات",
        sol_2_h: "حلول تكنولوجيا المعلومات", sol_2_p: "تطوير الأنظمة المخصصة",
        sol_3_h: "الاستشارات القانونية", sol_3_p: "مشورة قانونية خبيرة",
        sol_4_h: "منتجات فاخرة", sol_4_p: "سلع فاخرة ومنتجات متخصصة",
        footer_p1: "شريكك الموثوق في لوكسمبورغ.",
        footer_pages: "الصفحات", footer_contact: "اتصل بنا",

                dir: "rtl",
        nav_sub: "استشارات متميزة",
        nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
        nav_team: "فريقنا", nav_services: "خدماتنا",
        nav_contact: "اتصل بنا", nav_book: "احجز الآن",
        shop_hero_title: "منتجات فاخرة",
        shop_hero_sub: "اكتشف مجموعتنا المختارة من القطع الفاخرة",
        sort_label: "ترتيب حسب:", sort_featured: "المميز", sort_low: "السعر: من الأقل للأعلى", sort_high: "السعر: من الأعلى للأقل",
        tag_perfume: "عطر", tag_diffuseur: "فواحة", btn_contact: "اتصل للتفاصيل",
        gender_m: "للرجال", gender_f: "للنساء", gender_u: "للجنسين", // <--- NEW GENDER KEYS
        p1_desc: "جوهر العطور الإيطالية الراقية",
        p2_desc: "نيش من إيتال - فردية نقية",
        p3_desc: "جوهر متميز وفاخر وخالد",
        p4_desc: "أناقة مخملية وسحر فاخر",
        p5_desc: "عطر راقٍ وأنيق في أناقة داكنة",
        p6_desc: "عطر فخم يشع بالرقي",
        p7_desc: "عطر فاخر يفيض بالغموض الأنيق",
        p8_desc: "أناقة نارية وجاذبية مخملية",
        p9_desc: "للمرأة الواثقة والأنيقة",
        p10_desc: "غموض وجاذبية ورقي أنيق",
        p11_desc: "جاذبية دافئة ومخملية لا تقاوم",
        p12_desc: "أناقة خالدة وأنوثة راقية",
        p13_desc: "رقي وثقة وجمال خالد",
        p14_desc: "عطر مغرٍ يبعث على الثقة",
        p15_desc: "رومانسية مرحة - شبابية وأنيقة",
        p16_desc: "فخامة وشغف وأنوثة عصرية.",
        p17_desc: "قوة إيطالية وثقة وفخامة",
        p18_desc: "مستوحى من جمال ورشاقة إيطاليا",
        p19_desc: "رائحة الورد الأنيقة لمساحتك الخاصة",
        p20_desc: "مستوحى من رقي مدينة ميلانو",
        p21_desc: "رائحة زهور منعشة ومستمرة",
        p22_desc: "انتعاش استوائي لأي غرفة",
        p23_desc: "ناعم وساحر يرفرف بالأناقة",
        p24_desc: "ملاذ هادئ من الأناقة والراحة",
        p25_desc: "مجموعة عطور فاخرة ومخملية.",
        p26_desc: "مزيج من الدفء والغموض والجاذبية العصرية",
        agent_title: "وكلاء إيتال الرسميون",
        agent_desc: "نحن وكلاء معتمدون لعطور إيتال في لوكسمبورغ.",
        footer_copy: "© 2024 ALALI Concepts. جميع الحقوق محفوظة.",
                    dir: "rtl",
            nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
            nav_team: "فريقنا", nav_services: "خدماتنا",
            nav_contact: "اتصل بنا", nav_book: "احجز الآن",
        con_h1: "اتصل بنا", con_p1: "هل أنت جاهز لبدء مشروعك؟ تواصل مع فريقنا للحصول على استشارة مجانية.",
        card_lead: "القيادة", card_ceo: "الرئيس التنفيذي", 
        label_email: "البريد الإلكتروني:", label_phone: "الهاتف:",
        card_addr: "عنوان المكتب", lux_name: "لوكسمبورغ", btn_map: "عرض على الخريطة",
        direct_h: "تواصل معنا مباشرة", call_h: "اتصل بنا الآن", call_sub: "اضغط للاتصال مباشرة",
        email_ceo_h: "مراسلة الرئيس التنفيذي", direct_sub: "وصول مباشر",
        email_team_h: "مراسلة فريقنا", gen_inq: "استفسارات عامة",
        inq_h: "استفسارات سريعة عن الخدمات", sol_it: "حلول تقنية:", sol_it_sub: "البرمجيات والأنظمة",
        sol_tr: "الترجمة:", sol_tr_sub: "+10 لغات",
        sol_leg: "القانونية:", sol_leg_sub: "استشارات",
        time_24: "نرد خلال 24 ساعة", res_h: "موارد إضافية",
        visit_h: "قم بزيارة مكتبنا", visit_p: "يقع في قلب مدينة لوكسمبورغ.",
        mon_fri: "الاثنين-الجمعة: 9:00 - 18:00",
        footer_p1: "شريكك الموثوق لحلول التكنولوجيا والترجمة والاستشارات القانونية في لوكسمبورغ.",
        footer_pages: "الصفحات", footer_contact: "اتصل بنا",
                    dir: "rtl",
            nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
            nav_team: "فريقنا", nav_services: "خدماتنا",
            nav_contact: "اتصل بنا", nav_book: "احجز الآن",
        ser_sub: "استشارات قانونية خبيرة، منتجات فاخرة، وخدمات مهنية مصممة للشركات والأفراد في لوكسمبورغ.",
        tr_h: "خدمات الترجمة الاحترافية",
        tr_p: "خدمات ترجمة خبيرة بأكثر من 10 لغات من قبل متحدثين أصليين معتمدين. نحن متخصصون في الترجمة القانونية والقضائية والرسمية.",
        lang_euro: "اللغات الأوروبية",
        l_fr: "الفرنسية", l_de: "الألمانية", l_lu: "اللوكسمبورغية", l_en: "الإنجليزية", l_es: "الإسبانية",
        lang_other: "لغات أخرى",
        l_ar: "العربية", l_tr: "التركية", l_er: "الإريترية", l_am: "الأمهرية", l_ti: "التغرينية",
        tr_spec: "خدمات متخصصة",
        s_doc: "ترجمة المستندات", s_oral: "الترجمة الشفهية", s_leg: "الوثائق القانونية", s_court: "الترجمة القضائية", s_sworn: "مترجمون محلفون",
        it_h: "حلول تقنية المعلومات والتطوير",
        it_p: "حلول تكنولوجية شاملة لتبسيط عمليات عملك وتعزيز الإنتاجية.",
        it_web: "تطوير المواقع", it_web_p: "مواقع إلكترونية جذابة ومحسنة الأداء",
        it_app: "تطبيقات الجوال", it_app_p: "تطبيقات سهلة الاستخدام للجوال والسطح المكتب",
        it_crm: "أنظمة CRM & ERP", it_crm_p: "إدارة علاقات العملاء وتخطيط المشاريع",
        it_digi: "التحول الرقمي", it_digi_p: "رقمنة العمليات ودعم البرمجيات المخصصة",
        leg_h: "الاستشارات القانونية", leg_p: "خدمات استشارية خبيرة وإعداد الوثائق القانونية.",
        leg_1: "استشارات قانونية", leg_2: "إعداد الوثائق", leg_3: "دعم الامتثال", leg_4: "خدمات إدارية",
        prem_h: "منتجات فاخرة", prem_p: "مجموعة مختارة من العطور الفاخرة والمنتجات المتخصصة.",
        prem_1: "عطور ممتازة", prem_2: "روائح فاخرة", prem_3: "منتجات متخصصة", prem_4: "استشارة خبيرة",
        bus_h: "خدمات الأعمال", bus_p: "دعم كامل لتأسيس الشركات وتسجيلها في لوكسمبورغ.",
        bus_1: "تأسيس الشركات", bus_2: "تسجيل الأعمال", bus_3: "مساعدة الامتثال", bus_4: "دعم مستمر",
        ready_h: "هل أنت مستعد للبدء؟",
        ready_p: "اتصل بنا اليوم لمناقشة احتياجاتك الخاصة.",
        ready_btn: "اتصل بنا اليوم",
        footer_p1: "شريكك الموثوق لحلول تكنولوجيا المعلومات والترجمة والاستشارات القانونية.",
        footer_pages: "الصفحات", footer_contact: "اتصل بنا", lux_name: "لوكسمبورغ",
                    dir: "rtl",
            nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن",
            nav_team: "فريقنا", nav_services: "خدماتنا",
            nav_contact: "اتصل بنا", nav_book: "احجز الآن",


        }

        
    };

/**
     * 2. THE MAGIC LOCK FUNCTION
     * Ensures the Navbar stays LTR even when the rest of the site is Arabic (RTL)
     */
    function lockNavbarLTR() {
        const navbar = document.querySelector('.navbar');
        const navContainer = document.querySelector('.navbar-container');
        if (navbar && navContainer) {
            navbar.style.setProperty('direction', 'ltr', 'important');
            navContainer.style.setProperty('direction', 'ltr', 'important');
            navContainer.style.setProperty('flex-direction', 'row', 'important');
            navContainer.style.setProperty('justify-content', 'space-between', 'important');
        }
    }

    /**
     * 3. TRANSLATION & UI LOGIC
     */
function setLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.documentElement.dir = data.dir;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
            // Check if it's the hero title to allow the HTML spans/colors
            if (key === 'hero_title') {
                el.innerHTML = data[key];
            } else {
                // For other buttons, check for <i> icons
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = ''; 
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(" " + data[key]));
                } else {
                    el.textContent = data[key];
                }
            }
        }
    });
    
    lockNavbarLTR();
    localStorage.setItem('preferredLang', lang);
}

    /**
     * 4. SHOP SORTING LOGIC (No Reload)
     */
    let originalCardsOrder = []; 

    window.sortProducts = function() {
        const grid = document.querySelector('.product-grid');
        const sortValue = document.getElementById('sortPrice')?.value;
        if (!grid || !sortValue) return;

        // Save original state once
        if (originalCardsOrder.length === 0) {
            originalCardsOrder = Array.from(grid.querySelectorAll('.product-card'));
        }

        let cards = Array.from(grid.querySelectorAll('.product-card'));

        if (sortValue === 'default') {
            grid.innerHTML = '';
            originalCardsOrder.forEach(card => grid.appendChild(card));
            return;
        }

        cards.sort((a, b) => {
            const getPrice = (el) => {
                const text = el.querySelector('.price').innerText;
                const match = text.match(/\d+/);
                return match ? parseFloat(match[0]) : 0;
            };
            const priceA = getPrice(a);
            const priceB = getPrice(b);
            return sortValue === 'low-high' ? priceA - priceB : priceB - priceA;
        });

        grid.innerHTML = '';
        cards.forEach(card => grid.appendChild(card));
    };

    /**
     * 5. INITIALIZATION & EVENT LISTENERS
     */
    window.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('preferredLang') || 'en';
        const langSelect = document.getElementById('language-select');

        // Set up Dropdown
        if (langSelect) {
            langSelect.value = savedLang;
            langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
        }
        
        // Initial Language Run
        setLanguage(savedLang);

        // Mobile Menu Logic
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                const isOpen = navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
                lockNavbarLTR(); // Ensure lock stays on during menu toggle
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });
        }

        // Navbar Scroll Effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (navbar) {
                window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
            }
            lockNavbarLTR(); // Keep it locked while scrolling
        });
    });

})();

const SUPA_URL = 'https://frnomwyygnaldhdfdkmd.supabase.co';
const SUPA_KEY = 'sb_publishable_iGj0UaExKTiAuwaL8vcBqw_vnXFEWSJ';

const headers = {
  'apikey': SUPA_KEY,
  'Authorization': `Bearer ${SUPA_KEY}`
};

async function loadProducts() {
  const res = await fetch(`${SUPA_URL}/rest/v1/products?active=eq.true&order=id.asc`, { headers });
  const products = await res.json();

  const grid = document.querySelector('.product-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const loop = document.querySelector('.loop-images');
  if (loop) loop.innerHTML = '';

  products.forEach(p => {
    const genderIcon = p.gender === 'men' ? 'fa-mars' :
                       p.gender === 'women' ? 'fa-venus' : 'fa-venus-mars';
    const genderTag = p.gender !== 'none' ? `
      <span class="gender-tag">
        <i class="fas ${genderIcon}"></i>
        <span data-key="gender_${p.gender === 'men' ? 'm' : p.gender === 'women' ? 'f' : 'u'}">${p.gender}</span>
      </span>` : '';

    grid.innerHTML += `
      <div class="product-card" data-price="${p.price_sort || 0}">
        <div class="product-img"><img src="${p.image_url}" alt="${p.name}" loading="lazy"></div>
        <div class="product-tag">
          <span data-key="tag_${p.tag_key.toLowerCase()}">${p.tag_key}</span>${genderTag}
        </div>
        <h3>${p.name}</h3>
        <p>${p.description_key}</p>
        <div class="price">${p.price}</div>
        <a href="contact_page.html" class="btn-buy" data-key="btn_contact">Contact for Details</a>
      </div>`;

    if (loop) {
      loop.innerHTML += `<img src="${p.image_url}" alt="${p.name}" loading="lazy">`;
    }
  });

  const savedLang = localStorage.getItem('preferredLang') || 'en';
  if (typeof setLanguage === 'function') setLanguage(savedLang);
}

loadProducts();

async function loadTeam() {
  const res = await fetch(`${SUPA_URL}/rest/v1/team?order=display_order.asc`, {
    headers: { 'apikey': SUPA_KEY, 'Authorization': `Bearer ${SUPA_KEY}` }
  });
  const members = await res.json();

  const grid = document.querySelector('.team-grid');
  if (!grid) return;
  grid.innerHTML = '';

  members.forEach(m => {
    grid.innerHTML += `
      <div class="pro-card team-card">
        <img src="${m.image_url}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p>${m.role}</p>
      </div>`;
  });
}

loadTeam();