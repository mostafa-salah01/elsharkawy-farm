/**
 * Elsharkawy Farm Products - Core JavaScript
 * الشرقاوي لمنتجات الفلاحي - المحرك البرمجي الرئيسي
 */

(function () {
  'use strict';

  // 1. Language State Management
  const STORAGE_KEY = 'elsharkawy_lang';
  
  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ar') return saved;
    } catch (e) {
      // localStorage may fail in restricted environments
    }
    return 'ar'; // Default language: Arabic
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  let currentLang = getSavedLanguage();

  function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'ar';
    saveLanguage(currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Apply translations across document
    translatePage();

    // Re-render Header and Footer
    renderHeader();
    renderFooter();

    // Notify page-specific hooks
    document.dispatchEvent(new CustomEvent('app:languageChanged', { detail: { lang: currentLang } }));
  }

  function toggleLanguage() {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  }

  function t(key) {
    if (!window.DATA || !window.DATA.I18N) return key;
    const dict = window.DATA.I18N[currentLang] || window.DATA.I18N.ar;
    return dict[key] || key;
  }

  function translatePage() {
    if (!window.DATA || !window.DATA.I18N) return;
    const dict = window.DATA.I18N[currentLang] || window.DATA.I18N.ar;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });
  }

  // 2. Active Page Helper
  function getActivePage() {
    const path = window.location.pathname;
    if (path.includes('products.html')) return 'products';
    if (path.includes('product.html')) return 'product';
    if (path.includes('wholesale.html')) return 'wholesale';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    return 'home';
  }

  // 3. Icons Library (Inline SVGs with explicit dimensions)
  const ICONS = {
    whatsapp: (size = 20) => `
      <svg class="icon-svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.19 8.19 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
      </svg>`,
    phone: (size = 16) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>`,
    truck: (size = 16) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>`,
    search: (size = 16) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>`,
    menu: (size = 24) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>`,
    close: (size = 24) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>`,
    package: (size = 24) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>`,
    shield: (size = 24) => `
      <svg class="icon-svg icon-${size}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`
  };

  // 4. Render Header
  function renderHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer || !window.DATA) return;

    const active = getActivePage();
    const data = window.DATA;
    const store = data.STORE;
    const langBtnText = currentLang === 'ar' ? 'EN' : 'ع';

    headerContainer.innerHTML = `
      <!-- Top Bar: height 36-40px, explicit 16x16 icons, single line, hidden on mobile -->
      <div class="top-bar">
        <div class="container top-bar-inner">
          <div class="top-bar-info">
            <a href="${data.PHONE_TEL}" class="top-bar-item" aria-label="الاتصال: ${data.PHONE_DISPLAY}">
              ${ICONS.phone(16)}
              <span>اتصال: ${data.PHONE_DISPLAY}</span>
            </a>
            <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="top-bar-item" aria-label="واتساب: ${data.WHATSAPP_DISPLAY}" style="color: inherit;">
              ${ICONS.whatsapp(16)}
              <span>واتساب: ${data.WHATSAPP_DISPLAY}</span>
            </a>
            <div class="top-bar-item">
              ${ICONS.truck(16)}
              <span>${store.shippingNote[currentLang]}</span>
            </div>
          </div>
          <div>
            <span style="font-size: 0.8rem; opacity: 0.85;">${store.tagline[currentLang]}</span>
          </div>
        </div>
      </div>

      <!-- Main Navigation Header -->
      <header class="site-header">
        <div class="container header-inner">
          <!-- Logo & Live Store Name -->
          <a href="./index.html" class="header-brand" aria-label="${store.name[currentLang]}">
            <img src="./images/logo-icon.png" alt="لوجو الشرقاوي" class="brand-logo" width="36" height="36" onerror="this.classList.add('img-fallback')">
            <div class="brand-text">
              <span class="brand-name">${store.name[currentLang]}</span>
              <span class="brand-tagline">${store.tagline[currentLang]}</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="header-nav" aria-label="التنقل الرئيسي">
            <a href="./index.html" class="nav-link ${active === 'home' ? 'active' : ''}">${t('navHome')}</a>
            <a href="./products.html" class="nav-link ${active === 'products' || active === 'product' ? 'active' : ''}">${t('navProducts')}</a>
            <a href="./wholesale.html" class="nav-link ${active === 'wholesale' ? 'active' : ''}">${t('navWholesale')}</a>
            <a href="./about.html" class="nav-link ${active === 'about' ? 'active' : ''}">${t('navAbout')}</a>
            <a href="./contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}">${t('navContact')}</a>
          </nav>

          <!-- Desktop Search -->
          <form class="header-search" onsubmit="event.preventDefault(); window.handleGlobalSearch(this.querySelector('input').value);">
            <span class="header-search-icon">${ICONS.search(16)}</span>
            <input type="search" placeholder="${t('searchPlaceholder')}" aria-label="${t('searchPlaceholder')}" value="${new URLSearchParams(window.location.search).get('q') || ''}">
          </form>

          <!-- Actions: Lang Toggle & Mobile Menu -->
          <div class="header-actions">
            <button type="button" class="btn-lang" id="btn-lang-toggle" aria-label="تغيير اللغة">${langBtnText}</button>
            <button type="button" class="btn-menu-toggle" id="btn-mobile-menu" aria-label="فتح القائمة">
              ${ICONS.menu(24)}
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div class="mobile-nav-drawer" id="mobile-drawer">
          <form class="mobile-search-wrapper" onsubmit="event.preventDefault(); window.handleGlobalSearch(this.querySelector('input').value);">
            <div class="header-search">
              <span class="header-search-icon">${ICONS.search(16)}</span>
              <input type="search" placeholder="${t('searchPlaceholder')}" aria-label="${t('searchPlaceholder')}">
            </div>
          </form>
          <div class="mobile-nav-links">
            <a href="./index.html" class="nav-link ${active === 'home' ? 'active' : ''}">${t('navHome')}</a>
            <a href="./products.html" class="nav-link ${active === 'products' || active === 'product' ? 'active' : ''}">${t('navProducts')}</a>
            <a href="./wholesale.html" class="nav-link ${active === 'wholesale' ? 'active' : ''}">${t('navWholesale')}</a>
            <a href="./about.html" class="nav-link ${active === 'about' ? 'active' : ''}">${t('navAbout')}</a>
            <a href="./contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}">${t('navContact')}</a>
          </div>
        </div>
      </header>
    `;

    // Hook events
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLanguage);
    }

    const menuBtn = document.getElementById('btn-mobile-menu');
    const drawer = document.getElementById('mobile-drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        menuBtn.innerHTML = isOpen ? ICONS.close(24) : ICONS.menu(24);
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }

  // 5. Render Footer
  function renderFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer || !window.DATA) return;

    const data = window.DATA;
    const store = data.STORE;
    const year = new Date().getFullYear();

    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <!-- Col 1: Store Intro -->
          <div class="footer-brand">
            <h3>${store.name[currentLang]}</h3>
            <p>${data.I18N[currentLang].aboutBriefText}</p>
            <div class="footer-notes">
              <p>${store.storageNote[currentLang]}</p>
            </div>
          </div>

          <!-- Col 2: Quick Links -->
          <div class="footer-col">
            <h4>${t('footerQuickLinks')}</h4>
            <ul class="footer-links">
              <li><a href="./index.html">${t('navHome')}</a></li>
              <li><a href="./products.html">${t('navProducts')}</a></li>
              <li><a href="./wholesale.html">${t('navWholesale')}</a></li>
              <li><a href="./about.html">${t('navAbout')}</a></li>
              <li><a href="./contact.html">${t('navContact')}</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact & Info -->
          <div class="footer-col">
            <h4>${t('footerContact')}</h4>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <a href="${data.PHONE_TEL}" style="display: inline-flex; align-items: center; gap: 0.5rem; color: inherit;">
                  ${ICONS.phone(16)}
                  <span>اتصال: ${data.PHONE_DISPLAY}</span>
                </a>
              </li>
              <li class="footer-contact-item">
                <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; color: inherit;">
                  ${ICONS.whatsapp(16)}
                  <span>واتساب: ${data.WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li class="footer-contact-item">
                ${ICONS.truck(16)}
                <span>${store.shippingNote[currentLang]}</span>
              </li>
            </ul>
            <div style="margin-top: 1rem;">
              <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; min-height: 40px; font-size: 0.88rem;">
                ${ICONS.whatsapp(18)}
                <span>${t('orderWhatsApp')}</span>
              </a>
            </div>
            <div class="footer-notes" style="margin-top: 0.75rem;">
              <p>${t('footerPaymentNotice')}</p>
            </div>
          </div>
        </div>

        <!-- Copyright & Credit -->
        <div class="footer-bottom">
          <div class="container footer-bottom-inner">
            <p>© ${year} ${store.name[currentLang]} - ${t('rightsReserved')}</p>
            <p class="footer-credit">
              ${currentLang === 'ar' ? 'صنع بواسطة' : 'Crafted by'} <a href="https://wa.me/201205798302" target="_blank" rel="noopener noreferrer" style="color: inherit; font-weight: 700; text-decoration: underline;">Webstak</a> | <a href="tel:01205798302" dir="ltr" style="color: inherit;">01205798302</a>
            </p>
          </div>
        </div>
      </footer>
    `;
  }

  // 6. Global Search Handler
  window.handleGlobalSearch = function (query) {
    const q = (query || '').trim();
    if (window.location.pathname.includes('products.html')) {
      if (typeof window.filterProductsBySearch === 'function') {
        window.filterProductsBySearch(q);
      }
    } else {
      window.location.href = `./products.html?q=${encodeURIComponent(q)}`;
    }
  };

  // 7. WhatsApp URL generator
  function getWhatsAppUrl(customText) {
    if (!window.DATA) return '#';
    const baseUrl = window.DATA.WHATSAPP_BASE_URL;
    if (!customText) {
      const defaultText = currentLang === 'ar' 
        ? "أهلاً، أود الاستفسار عن منتجات الفلاحي المتاحة."
        : "Hello, I would like to inquire about available farm products.";
      return `${baseUrl}?text=${encodeURIComponent(defaultText)}`;
    }
    return `${baseUrl}?text=${encodeURIComponent(customText)}`;
  }

  window.getWhatsAppUrl = getWhatsAppUrl;

  // 8. Product Card Template
  window.renderProductCard = function (product) {
    if (!product) return '';
    const lang = currentLang;
    const name = product.name[lang] || product.name.ar;
    const desc = product.description[lang] || product.description.ar;
    const priceText = product.price ? `${product.price} ج.م` : (window.DATA.STORE.priceOnDemand[lang] || 'السعر عند الطلب');
    const badge = product.badge && product.badge[lang] ? product.badge[lang] : '';
    
    const waMessage = lang === 'ar'
      ? `أهلاً، عايز استفسر عن ${name} والأسعار والأوزان المتاحة.`
      : `Hello, I'd like to ask about ${name}, available weights and pricing.`;
    const waUrl = getWhatsAppUrl(waMessage);

    return `
      <article class="product-card">
        <div class="product-img-wrap">
          ${badge ? `<div class="product-badge-pos"><span class="badge">${badge}</span></div>` : ''}
          <a href="./product.html?id=${product.id}" aria-label="${name}">
            <img src="${product.image}" alt="${name}" loading="lazy" onerror="this.classList.add('img-fallback')">
          </a>
        </div>
        <div class="product-body">
          <h3 class="product-name">
            <a href="./product.html?id=${product.id}">${name}</a>
          </h3>
          <p class="product-desc">${desc}</p>
          <div class="product-meta">
            <div class="product-price-label">${priceText}</div>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" aria-label="${t('orderWhatsApp')} - ${name}">
              ${ICONS.whatsapp(18)}
              <span>${t('orderWhatsApp')}</span>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // 9. Hero Video Handling (Fallback on errors / saveData / reduced motion)
  function setupHeroVideo() {
    const video = document.getElementById('hero-video');
    const posterFallback = document.getElementById('hero-poster-fallback');
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSaveData = navigator.connection && navigator.connection.saveData;

    if (prefersReducedMotion || isSaveData) {
      if (video) video.remove();
      if (posterFallback) posterFallback.style.display = 'block';
      return;
    }

    video.addEventListener('error', () => {
      video.remove();
      if (posterFallback) posterFallback.style.display = 'block';
    });
  }

  // 10. Initialization
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial lang & dir
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Render global components
    renderHeader();
    renderFooter();
    translatePage();
    setupHeroVideo();
  });

  // Export utilities to window
  window.APP = {
    getLang: () => currentLang,
    setLanguage: setLanguage,
    t: t,
    icons: ICONS,
    getWhatsAppUrl: getWhatsAppUrl
  };

})();
