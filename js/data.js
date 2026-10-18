/**
 * Elsharkawy Farm Products - Data & Configuration
 * الشرقاوي لمنتجات الفلاحي - ملف البيانات والإعدادات
 */

const DATA = {
  // 1. أرقام وروابط التواصل
  PHONE_DISPLAY: "01036262135",
  PHONE_NUMBER: "01036262135",
  PHONE_TEL: "tel:01036262135",
  WHATSAPP_DISPLAY: "01147771880",
  WHATSAPP_NUMBER: "201147771880",
  WHATSAPP_BASE_URL: "https://wa.me/201147771880",
  FORMSPREE_URL: "https://formspree.io/f/xbjnkyrq", // استبدل برابط Formspree الخاص بك

  // 2. وسائط الهيرو
  HERO_VIDEO: "./videos/hero-video.mp4",
  HERO_POSTER: "./images/hero-main.jpg",

  // 3. بيانات المتجر
  STORE: {
    name: {
      ar: "الشرقاوي للمنتجات الفلاحي",
      en: "Elsharkawy Farm Products"
    },
    tagline: {
      ar: "طعم فلاحي أصيل",
      en: "Authentic Farm Flavor"
    },
    subtitle: {
      ar: "زبدة ومنتجات ألبان للبيت والجملة",
      en: "Butter and dairy products for home and wholesale"
    },
    shippingNote: {
      ar: "الشحن حسب المنطقة",
      en: "Shipping according to area"
    },
    storageNote: {
      ar: "منتجات الألبان والسمن تُحفظ حسب تعليمات الحفظ على العبوة.",
      en: "Dairy and ghee products must be stored according to on-package instructions."
    },
    weightDisclaimer: {
      ar: "الأوزان والأصناف تتأكد عند الطلب",
      en: "Weights and items are confirmed upon ordering"
    },
    priceOnDemand: {
      ar: "السعر عند الطلب",
      en: "Price upon request"
    },
    governorate: {
      ar: "القاهرة والجيزة والإسكندرية (ومناطق أخرى)",
      en: "Cairo, Giza, Alexandria (& other areas)"
    },
    workingHours: {
      ar: "يوميًا من 10 صباحًا حتى 10 مساءً",
      en: "Daily from 10:00 AM to 10:00 PM"
    }
  },

  // 5. الأقسام
  CATEGORIES: [
    {
      id: "butter-ghee",
      name: {
        ar: "الزبدة والسمن",
        en: "Butter & Ghee"
      },
      image: "./images/cat-butter-ghee.jpg",
      description: {
        ar: "زبدة وسمن بطابع فلاحي أصيل للطبخ والحلويات",
        en: "Authentic butter and ghee for cooking and pastries"
      }
    },
    {
      id: "cheese-dairy",
      name: {
        ar: "الجبن والألبان",
        en: "Cheese & Dairy"
      },
      image: "./images/cat-cheese-dairy.jpg",
      description: {
        ar: "جبنة قريش وبيضاء فلاحي طازجة على المائدة",
        en: "Fresh traditional qarish and white cheeses"
      }
    },
    {
      id: "home-packages",
      name: {
        ar: "باكدجات البيت",
        en: "Home Packages"
      },
      image: "./images/cat-home-packages.jpg",
      description: {
        ar: "تشكيلة من الأصناف المتاحة تتحدد عند الطلب",
        en: "Assorted bundles tailored upon order"
      }
    },
    {
      id: "wholesale",
      name: {
        ar: "طلبات الجملة",
        en: "Wholesale Orders"
      },
      image: "./images/cat-wholesale.jpg",
      description: {
        ar: "كميات مخصصة للمطاعم والحلوانية والمحلات",
        en: "Dedicated quantities for food service and retail"
      }
    }
  ],

  // 6. المنتجات
  PRODUCTS: [
    {
      id: "butter",
      name: {
        ar: "زبدة الشرقية بيور",
        en: "Elsharkawy Pure Butter"
      },
      categoryId: "butter-ghee",
      image: "./images/product-butter.jpg",
      description: {
        ar: "زبدة بطابع فلاحي أصيل للاستخدام اليومي والطبخ. اختار الوزن المناسب وتواصل معنا لمعرفة السعر والتوفر الحالي.",
        en: "Butter with authentic farm character for daily cooking. Choose desired weight and reach out for current price and availability."
      },
      badge: {
        ar: "الأكثر طلبًا",
        en: "Most Popular"
      },
      featured: true,
      weights: {
        ar: ["250 جم", "500 جم", "1 كجم"],
        en: ["250g", "500g", "1kg"]
      },
      price: "" // فارغ حتى يظهر "السعر عند الطلب"
    },
    {
      id: "ghee",
      name: {
        ar: "سمن بلدي",
        en: "Baladi Ghee"
      },
      categoryId: "butter-ghee",
      image: "./images/product-ghee.jpg",
      description: {
        ar: "سمن بلدي برائحة وطعم فلاحي أصيل للطبخ اليومي والحلويات. تواصل معنا لمعرفة السعر والتوفر.",
        en: "Baladi ghee with traditional aroma and authentic taste for daily cooking and pastries. Contact us for price and availability."
      },
      badge: {
        ar: "",
        en: ""
      },
      featured: true,
      weights: {
        ar: ["500 جم", "1 كجم", "2 كجم"],
        en: ["500g", "1kg", "2kg"]
      },
      price: ""
    },
    {
      id: "qarish",
      name: {
        ar: "جبنة قريش",
        en: "Qarish Cheese"
      },
      categoryId: "cheese-dairy",
      image: "./images/product-qarish-cheese.jpg",
      description: {
        ar: "جبنة قريش فلاحي متماسكة قليلة الملح، خيار عملي وخفيف للإفطار والعشاء العائلي.",
        en: "Fresh traditional low-salt qarish cheese, a light and nutritious staple for daily breakfast and dinner."
      },
      badge: {
        ar: "",
        en: ""
      },
      featured: true,
      weights: {
        ar: ["500 جم", "1 كجم", "2 كجم"],
        en: ["500g", "1kg", "2kg"]
      },
      price: ""
    },
    {
      id: "white-cheese",
      name: {
        ar: "جبنة بيضاء",
        en: "White Cheese"
      },
      categoryId: "cheese-dairy",
      image: "./images/product-white-cheese.jpg",
      description: {
        ar: "جبنة بيضاء بطعم فلاحي أصيل وقوام متماسك للسندوتشات والسفرة اليومية.",
        en: "White cheese with authentic traditional character and balanced texture for sandwiches and family meals."
      },
      badge: {
        ar: "",
        en: ""
      },
      featured: false,
      weights: {
        ar: ["500 جم", "1 كجم", "2 كجم"],
        en: ["500g", "1kg", "2kg"]
      },
      price: ""
    },
    {
      id: "home-package",
      name: {
        ar: "باكدج البيت",
        en: "Home Package"
      },
      categoryId: "home-packages",
      image: "./images/product-home-package.jpg",
      description: {
        ar: "تشكيلة من الأصناف المتاحة تتحدد عند الطلب لتناسب استهلاك الأسرة للأسبوع أو الشهر.",
        en: "An assorted combination of available items tailored to household needs upon ordering."
      },
      badge: {
        ar: "تشكيلة مخصصة",
        en: "Custom Bundle"
      },
      featured: false,
      weights: {
        ar: ["باكدج صغير", "باكدج عائلي"],
        en: ["Small Pack", "Family Pack"]
      },
      price: ""
    }
  ],

  // 7. قاموس الترجمة الموحد
  I18N: {
    ar: {
      navHome: "الرئيسية",
      navProducts: "المنتجات",
      navWholesale: "الجملة",
      navAbout: "من نحن",
      navContact: "تواصل معنا",
      searchPlaceholder: "ابحث عن منتج...",
      searchNoResults: "لا توجد منتجات مطابقة للبحث",
      heroTitle: "الشرقاوي للمنتجات الفلاحي",
      heroSubtitle: "زبدة ومنتجات ألبان للبيت والجملة بطعم فلاحي أصيل",
      browseProducts: "تصفح المنتجات",
      orderWhatsApp: "اطلب عبر واتساب",
      featureWhatsApp: "اطلب عبر واتساب",
      featureWhatsAppDesc: "تواصل مباشر لسرعة الرد وتأكيد طلبك",
      featureWholesale: "توفر الكميات للبيت والجملة",
      featureWholesaleDesc: "أوزان تناسب استخدام البيت وطلبات الجملة",
      featureShipping: "الشحن حسب المنطقة",
      featureShippingDesc: "تأكيد تكلفة وموعد التوصيل حسب موقعك",
      featuredTitle: "منتجات مختارة",
      featuredSubtitle: "أصناف فلاحي أساسية على سفرتك",
      viewAll: "عرض كل المنتجات",
      categoriesTitle: "أقسام المنتجات",
      categoriesSubtitle: "تصفح حسب النوع المناسب لاحتياجك",
      wholesaleBannerTitle: "طلبات الجملة والتوريدات",
      wholesaleBannerDesc: "نوفر كميات للمطاعم والحلوانية والمحلات مع تنسيق مباشر للمواعيد والأوزان.",
      wholesaleButton: "تفاصيل طلبات الجملة",
      aboutBriefTitle: "من نحن باختصار",
      aboutBriefText: "الشرقاوي للمنتجات الفلاحي متجر متخصص في توفير الزبدة والسمن ومنتجات الألبان بطابع فلاحي أصيل للبيوت والمطاعم. نسعى لتسهيل الطلب المباشر عبر واتساب وتوصيل طلبك لمكانك.",
      aboutMore: "اقرأ المزيد عنا",
      ctaTitle: "محتاج تسأل عن صنف أو توفر وزن؟",
      ctaSubtitle: "تواصل معنا مباشرة عبر واتساب للرد على استفسارك في أقرب وقت.",
      allCategories: "كل الأقسام",
      filterBy: "تصفية المنتجات:",
      selectWeight: "اختار الوزن:",
      quantity: "الكمية:",
      deliveryArea: "منطقة التوصيل (اختياري):",
      deliveryAreaPlaceholder: "مثلاً: مصر الجديدة، المعادي، سموحة...",
      relatedProducts: "منتجات أخرى قد تعجبك",
      wholesaleNeedsTitle: "اللي نحتاج نعرفه منك لطلبات الجملة",
      wholesaleNeed1Title: "الأصناف المطلوبة",
      wholesaleNeed1Desc: "حدد الأصناف (زبدة، سمن، جبنة، أو باكدجات)",
      wholesaleNeed2Title: "الكمية التقريبية",
      wholesaleNeed2Desc: "الكمية أو الوزن المطلوب وتكرار الطلب",
      wholesaleNeed3Title: "المنطقة والمكان",
      wholesaleNeed3Desc: "عنوان أو منطقة التوصيل لترتيب الشحن",
      wholesaleNote: "الحد الأدنى للكميات والأسعار والتوصيل يتأكد عند التواصل المباشر.",
      aboutTitle: "عن الشرقاوي للمنتجات الفلاحي",
      aboutTagline: "طعم فلاحي أصيل يوصل لحد باب بيتك",
      aboutStory: "انطلق متجر الشرقاوي لتقديم الزبدة الفلاحي والسمن البلدي والأجبان بطابعها التقليدي الأصيل. نحرص على الشفافية مع عملائنا؛ لذلك نؤكد الأوزان والأسعار وقت الطلب ونرتب التوصيل حسب منطقتك بكل مرونة ووضوح.",
      locationLabel: "مناطق الخدمة الحالية:",
      hoursLabel: "مواعيد الرد والتواصل:",
      paymentMethodLabel: "طريقة السداد:",
      paymentMethodVal: "الدفع عند الاستلام (كاش عند الاستلام)",
      contactTitle: "تواصل معنا",
      contactSubtitle: "يسعدنا الرد على استفساراتكم ومتابعة طلباتكم",
      formName: "الاسم بالكامل",
      formPhone: "رقم الموبايل / واتساب",
      formMessage: "رسالتك أو استفسارك",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكرًا لتواصلك! سيتم الرد عليك قريبًا.",
      directWhatsAppCardTitle: "الطلب السريع عبر واتساب",
      directWhatsAppCardDesc: "الطريقة الأسرع والأسهل للاستفسار والطلب مباشرة بدون انتظار.",
      footerQuickLinks: "روابط سريعة",
      footerContact: "معلومات التواصل",
      footerPaymentNotice: "طرق الدفع: الدفع عند الاستلام (كاش)",
      rightsReserved: "جميع الحقوق محفوظة",
      craftedBy: "صنع بواسطة Webstak | 01205798302",
      langSwitch: "EN"
    },
    en: {
      navHome: "Home",
      navProducts: "Products",
      navWholesale: "Wholesale",
      navAbout: "About Us",
      navContact: "Contact",
      searchPlaceholder: "Search products...",
      searchNoResults: "No matching products found",
      heroTitle: "Authentic Farm Flavor",
      heroSubtitle: "Butter and dairy products for home and wholesale",
      browseProducts: "Browse Products",
      orderWhatsApp: "Order via WhatsApp",
      featureWhatsApp: "Order via WhatsApp",
      featureWhatsAppDesc: "Direct chat for fast response and quick order confirmation",
      featureWholesale: "Available for Home & Bulk",
      featureWholesaleDesc: "Weights suited for household use and business supply",
      featureShipping: "Shipping by Area",
      featureShippingDesc: "Delivery cost and schedule confirmed based on your location",
      featuredTitle: "Featured Products",
      featuredSubtitle: "Essential traditional farm staples for your table",
      viewAll: "View All Products",
      categoriesTitle: "Product Categories",
      categoriesSubtitle: "Explore by category to find exactly what you need",
      wholesaleBannerTitle: "Wholesale & Business Supply",
      wholesaleBannerDesc: "We supply restaurants, bakeries, and retail with direct scheduling and tailored quantities.",
      wholesaleButton: "Wholesale Details",
      aboutBriefTitle: "About Us",
      aboutBriefText: "Elsharkawy Farm Products provides authentic traditional butter, ghee, and dairy for homes and commercial kitchens. We facilitate direct WhatsApp ordering delivered to your address.",
      aboutMore: "Read More About Us",
      ctaTitle: "Have questions about items or availability?",
      ctaSubtitle: "Reach out directly on WhatsApp to get all details promptly.",
      allCategories: "All Categories",
      filterBy: "Filter Products:",
      selectWeight: "Select Weight:",
      quantity: "Quantity:",
      deliveryArea: "Delivery Area (optional):",
      deliveryAreaPlaceholder: "e.g., Heliopolis, Maadi, Smouha...",
      relatedProducts: "You May Also Like",
      wholesaleNeedsTitle: "What We Need to Know from You",
      wholesaleNeed1Title: "Required Items",
      wholesaleNeed1Desc: "Specify the items needed (butter, ghee, cheese, or bundles)",
      wholesaleNeed2Title: "Approximate Quantity",
      wholesaleNeed2Desc: "Required weight or quantity and order frequency",
      wholesaleNeed3Title: "Location & Address",
      wholesaleNeed3Desc: "Destination area to arrange proper delivery logistics",
      wholesaleNote: "Minimum order quantities, pricing, and dispatch are confirmed during direct consultation.",
      aboutTitle: "About Elsharkawy Farm Products",
      aboutTagline: "Authentic farm flavor delivered right to your door",
      aboutStory: "Elsharkawy Farm Products was established to bring traditional butter, baladi ghee, and artisan cheeses back to everyday dining. We believe in clear and honest communication: prices and weights are confirmed at the time of order, with shipping coordinated by area.",
      locationLabel: "Service Areas:",
      hoursLabel: "Working Hours:",
      paymentMethodLabel: "Payment Method:",
      paymentMethodVal: "Cash on Delivery",
      contactTitle: "Contact Us",
      contactSubtitle: "We are pleased to answer questions and fulfill your orders",
      formName: "Full Name",
      formPhone: "Mobile / WhatsApp",
      formMessage: "Your Message or Inquiry",
      formSubmit: "Send Message",
      formSuccess: "Thank you! We will get back to you soon.",
      directWhatsAppCardTitle: "Quick WhatsApp Order",
      directWhatsAppCardDesc: "The fastest way to ask about items and place orders directly.",
      footerQuickLinks: "Quick Links",
      footerContact: "Contact Info",
      footerPaymentNotice: "Payment: Cash on Delivery",
      rightsReserved: "All Rights Reserved",
      craftedBy: "Crafted by Webstak | 01205798302",
      langSwitch: "ع"
    }
  }
};

// Make DATA accessible globally
if (typeof window !== "undefined") {
  window.DATA = DATA;
}
