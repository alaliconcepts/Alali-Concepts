/**
 * 1. TRANSLATION DATA
 */
const translations = {
    en: {
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
        footer_copy: "© 2024 ALALI Concepts. All rights reserved."
    },
    fr: {
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
        footer_copy: "© 2024 ALALI Concepts. Tous droits réservés."
    },
    ar: {
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
        footer_copy: "© 2024 ALALI Concepts. جميع الحقوق محفوظة."
    }
};

/**
 * 2. LANGUAGE LOGIC
 */
function changeLanguage(lang) {
    const htmlTag = document.documentElement;
    
    // Force Left-to-Right (LTR) for EVERY language to keep luxury layout stable
    htmlTag.setAttribute('dir', 'ltr'); 
    htmlTag.setAttribute('lang', lang);
    document.body.dir = 'ltr'; 

    // Update the text based on the translations object
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update Active Button UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Save language preference
    localStorage.setItem('preferredLang', lang);
}

// Ensure settings apply on load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    // Update dropdown if it exists
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = savedLang;
    
    changeLanguage(savedLang);
});

/**
 * 3. UI & SORTING LOGIC
 */

// Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
    }
});

// Price Sorting
function sortProducts() {
    const grid = document.querySelector('.product-grid');
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    const sortValue = document.getElementById('sortPrice').value;

if (sortValue === 'default') {
    loadProducts(); 
    return;
}

    cards.sort((a, b) => {
        const getPrice = (el) => {
            const priceText = el.querySelector('.price').innerText;
            // Handle ranges like 220€-229€ by taking the first number
            const match = priceText.match(/\d+/);
            return match ? parseFloat(match[0]) : 0;
        };
        const priceA = getPrice(a);
        const priceB = getPrice(b);
        return sortValue === 'low-high' ? priceA - priceB : priceB - priceA;
    });

    grid.innerHTML = '';
    cards.forEach(card => grid.appendChild(card));
}

// Ensure settings apply on load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    // 1. Hook up the dropdown logic
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = savedLang;
        // This makes the button actually DO something when clicked
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    
    // 2. Run the initial language set
    changeLanguage(savedLang);
});

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
    <p>${p.description}</p>
    <div class="price">${p.price}</div>
    <a href="contact_page.html" class="btn-buy" data-key="btn_contact">Contact for Details</a>
  </div>`;

    if (loop) {
      loop.innerHTML += `<img src="${p.image_url}" alt="${p.name}" loading="lazy">`;
    }
  });

  // Re-apply current language to new cards
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  if (typeof changeLanguage === 'function') changeLanguage(savedLang);
}

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
        <p>${p.description}</p>
        <div class="price">${p.price}</div>
        <a href="contact_page.html" class="btn-buy" data-key="btn_contact">Contact for Details</a>
      </div>`;

    if (loop) {
      loop.innerHTML += `<img src="${p.image_url}" alt="${p.name}" loading="lazy">`;
    }
  });

  const savedLang = localStorage.getItem('preferredLang') || 'en';
  if (typeof changeLanguage === 'function') changeLanguage(savedLang);

  // Attach modal tap listener to each card AFTER they exist in the DOM
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('.btn-buy')) return;

      const img   = card.querySelector('.product-img').innerHTML;
      const tag   = card.querySelector('.product-tag').outerHTML;
      const name  = card.querySelector('h3').outerHTML;
      const desc  = card.querySelector('p').outerHTML;
      const price = card.querySelector('.price').outerHTML;
      const btn   = card.querySelector('.btn-buy').outerHTML;

      document.getElementById('cardOverlayContent').innerHTML =
        `<div class="product-img" style="height:220px; margin-bottom:15px;">${img}</div>
         ${tag}${name}${desc}${price}${btn}`;

      document.getElementById('cardOverlay').classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

loadProducts();

function closeCardModal() {
  document.getElementById('cardOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when tapping the dark background
document.getElementById('cardOverlay').addEventListener('click', function(e) {
  if (!e.target.closest('.card-overlay-inner')) closeCardModal();
});