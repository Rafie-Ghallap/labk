
// بيانات المنتجات
const products = {
  //الابتوبات اعمال
  "dell-latitude-5430": {
  name: "Dell Latitude 5430",
  description: "لابتوب أعمال أنيق وخفيف مثالي للاستخدام المكتبي والتنقل.",
  specs: [
    "المعالج: Intel Core i5-1235U",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD"
  ],
  price: "17500 جنيه",
  image: "images/dell-latitude-5430.webp"
},

"hp-probook-450-g9": {
  name:"HP ProBook 450 G9",
  description: "لابتوب عملي يقدم أداء مستقر للمستخدمين في بيئة الأعمال.",
  specs: [
    "المعالج: Intel Core i7-1255U",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 15.6 بوصة FHD"
  ],
  price: "18500 جنيه",
  image: "images/hp-probook-450-g9.jpg"
},
       

"lenovo-thinkpad-e14": {
  name: "Lenovo ThinkPad E14 Gen 4",
  "description": "أداء قوي وتصميم كلاسيكي من سلسلة ThinkPad الشهيرة للأعمال.",
  "specs": [
    "المعالج: Intel Core i5-1240P",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD"
  ],
  price: "17000 جنيه",
  image: "images/lenovo-thinkpad-e14.webp"
},

"lenovo-thinkpad-x1-carbon-gen10": {
  name: "Lenovo ThinkPad X1 Carbon Gen 10",
  "description": "الأعمال,لابتوب فائق الخفة والأداء، مثالي للتنقل والاستخدام الاحترافي.",
  specs: [
    "المعالج: Intel Core i7-1255U",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD+"
  ],
  price: "42000 جنيه",
  image: "images/lenovo-thinkpad-x1-carbon-gen10.webp"
},

"dell-xps-13-9315": {
  name: "Dell XPS 13 9315",
  description: "تصميم أنيق وأداء قوي في الأعمال هيكل مدمج وخفيف الوزن.",
  specs: [
    "المعالج: Intel Core i5-1230U",
    "الذاكرة: 8GB RAM",
    "التخزين: 256GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 13.4 بوصة FHD+"
  ],
  price: "38000 جنيه",
  image: "images/dell-xps-13-9315.webp"
},

"hp-elitebook-840-g9": {
  name: "HP EliteBook 840 G9",
  description: "أداء موثوق ومزايا أمان متقدمة لبيئة الأعمال.",
  specs: [
    "المعالج: Intel Core i7-1255U",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD"
  ],
  price: "40000 جنيه",
  image: "images/hp-elitebook-840-g9.jpg"
},

"asus-expertbook-b5": {
  name: "ASUS ExpertBook B5",
  description: "لابتوب للاعمال خفيف الوزن مع عمر بطارية طويل، مثالي للمحترفين المتنقلين.",
  specs: [
    "المعالج: Intel Core i7-1255U",
    "الذاكرة: 16GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD"
  ],
  price: "39000 جنيه",
  image: "images/asus-expertbook-b5.png"
},

"microsoft-surface-laptop-5": {
  name: "Microsoft Surface Laptop 5",
  description: "للاعمال تصميم أنيق وأداء سلس مع شاشة لمس عالية الدقة.",
  specs: [
    "المعالج: Intel Core i5-1235U",
    "الذاكرة: 8GB RAM",
    "التخزين: 256GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 13.5 بوصة PixelSense"
  ],
  price: "37000 جنيه",
  image: "images/microsoft-surface-laptop-5.jpg"
},

"acer-travelmate-p4": {
  name: "Acer TravelMate P4",
  description: "لابتوب متين وموثوق للاستخدام اليومي في بيئة الأعمال.",
  specs: [
    "المعالج: Intel Core i5-1235U",
    "الذاكرة: 8GB RAM",
    "التخزين: 512GB SSD",
    "كرت الشاشة: Intel Iris Xe",
    "الشاشة: 14 بوصة FHD"
  ],
  price: "36000 جنيه",
  image: "images/acer-travelmate-p4.jpg"
},

"dell-xps": {
  name: "Dell XPS 15",
  description: "لابتوب للأعمال مع شاشة مذهلة.",
  specs: [
    "المعالج: Intel Core i7-11800H",
    "الذاكرة: 16GB RAM",
    "التخزين: 1TB SSD",
    "الشاشة: 15.6 بوصة 4K UHD"
  ],
  price: "20000 جنيه",
  image: "images/dell-xps-15.png"
},
 
//الابتوبات العاب
  "acer-nitro-5": {
    name: "Acer Nitro 5",
    description: "لابتوب ألعاب قوي مع أداء ممتاز.",
    specs: [
      "المعالج: Intel Core i7-11800H",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3060",
      "الشاشة: 15.6 بوصة FHD 144Hz"
    ],
    price: "14000 جنيه",
    image: "images/acer-nitro-5.png"
  },
  "hp-omen-15": {
    name: "HP Omen 15",
    description: "لابتوب ألعاب متميز مع تصميم جذاب.",
    specs: [
      "المعالج: AMD Ryzen 7 5800H",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3060",
      "الشاشة: 15.6 بوصة FHD 144Hz"
    ],
    price: "16000 جنيه",
    image: "images/hp-omen-15.jpg"
  },
  "msi-gf65-thin": {
    name: "MSI GF65 Thin",
    description: "لابتوب ألعاب نحيف وخفيف الوزن مع أداء قوي.",
    specs: [
      "المعالج: Intel Core i7-10750H",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: NVIDIA GeForce GTX 1660 Ti",
      "الشاشة: 15.6 بوصة FHD 120Hz"
    ],
    price: "13000 جنيه",
    image: "images/msi-gf65-thin.jpeg"
  },
  "dell-g5-15": {
    name: "Dell G5 15",
    description: "لابتوب ألعاب قوي مع تصميم مميز.",
    specs: [
      "المعالج: Intel Core i7-10750H",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 2060",
      "الشاشة: 15.6 بوصة FHD 144Hz"
    ],
    price: "17000 جنيه",
    image: "images/dell-g5-15.jpg"
  },
  "razer-blade-15": {
    name: "Razer Blade 15",
    description: "لابتوب ألعاب فائق الأداء مع تصميم أنيق.",
    specs: [
      "المعالج: Intel Core i7-10875H",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3070",
      "الشاشة: 15.6 بوصة QHD 165Hz"
    ],
    price: "22000 جنيه",
    image: "images/razer-blade-15.jpg"
  },
  "gigabyte-aorus-15g": {
    name: "Gigabyte AORUS 15G",
    description: "لابتوب ألعاب احترافي مع أداء قوي.",
    specs: [
      "المعالج: Intel Core i7-10870H",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3070",
      "الشاشة: 15.6 بوصة FHD 240Hz"
    ],
    price: "23000 جنيه",
    image: "images/gigabyte-aorus-15g.png"
  },
  "lenovo-legion-5": {
    name: "Lenovo Legion 5",
    description: "لابتوب ألعاب قوي مع أداء عالي ومواصفات مميزة.",
    specs: [
      "المعالج: AMD Ryzen 7 5800H",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3060",
      "الشاشة: 15.6 بوصة FHD 144Hz"
    ],
    price: "15000 جنيه",
    image: "images/lenovo-legion.jpg"
  },
  
  "vivobook": {
    name: "Vivobook 16X K3605VV-N1116W",
    description: "لابتوب ألعاب قوي مع أداء عالي ومواصفات مميزة.",
    specs: [
      "المعالج: انتل كور i7-13700H DDR4",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: FHD 15.6 بوصة",
      "الشاشة: M.2 NVMe PCIe 4.0"
    ],
    price: "20000 جنيه",
    image: "images/vivobook.jpeg"
  },

  "asus-rog": {
    name: "Asus ROG Zephyrus G14",
    description: "لابتوب ألعاب مدمج مع أداء مذهل وتصميم أنيق .",
    specs: [
      "المعالج: AMD Ryzen 9 5900HS",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3060",
      "الشاشة: 14 بوصة QHD 120Hz"
    ],
    price: "20000 جنيه",
    image: "images/asus-rog.png"
  },
  "lenovo-legion-7": {
    name: "Lenovo Legion 7",
    description: "لابتوب ألعاب قوي مع أداء عالي ومواصفات مميزة.",
    specs: [
      "المعالج: AMD Ryzen 9 5900HX",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3080",
      "الشاشة: 16 بوصة QHD 165Hz"
    ],
    price: "25000 جنيه",
    image: "images/Lenovo Legion 7.jpeg"
  },
  "msi-ge76-raider": {
    name: "MSI GE76 Raider",
    description: "لابتوب ألعاب قوي مع تصميم مميز وأداء عالي.",
    specs: [
      "المعالج: Intel Core i9-11980HK",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GeForce RTX 3080",
      "الشاشة: 17.3 بوصة 4K 120Hz"
    ],
    price: "30000 جنيه",
    image: "images/msi-ge76-raider.jpeg"
  },
  


  

  //الابتوبات مبرمجين

  "macbook-pro-m2": {
    name: "macbook-pro-m2",
    description: "لابتوب ممتاز للبرمجة على macOS مع أداء استثنائي وعمر بطارية طويل.",
    specs: [
      "المعالج: Apple M2",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Apple GPU",
      "الشاشة: 14 بوصة Liquid Retina XDR"
    ],
    price: "65000 جنيه",
    image: "images/macbook-pro-m2.jpg"
  },
  "dell-xps-13": {
    name: "Dell XPS 13",
    description: "تصميم مدمج وأداء عالي، مثالي للتنقل والبرمجة.",
    specs: [
      "المعالج: Intel Core i7 12th Gen",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 13.4 بوصة FHD+"
    ],
    price: "57000 جنيه",
    image: "images/dell-xps-13.jpg"
  },
  "lenovo-thinkpad-x1": {
    name: "Lenovo ThinkPad X1 Carbon",
    description: "كيبورد ممتاز وأداء احترافي، موجه للمبرمجين المحترفين.",
    specs: [
      "المعالج: Intel Core i7 12th Gen",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 14 بوصة FHD"
    ],
    price: "62000 جنيه",
    image: "images/thinkpad-x1.jpg"
  },
  "hp-envy-15": {
    name: "HP Envy 15",
    description: "أداء رائع لبرامج التطوير مع شاشة كبيرة ومريحة.",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA GTX 1650 Ti",
      "الشاشة: 15.6 بوصة FHD"
    ],
    price: "54000 جنيه",
    image: "images/hp-envy-15.jpg"
  },
  
  "surface-laptop-5": {
    name: "Microsoft Surface Laptop 5",
    description: "خفيف وأنيق، مثالي للبرمجه و لبيئة تطوير Windows و .NET.",
    specs: [
      "المعالج: Intel Core i7 12th Gen",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 13.5 بوصة PixelSense"
    ],
    price: "51000 جنيه",
    image: "images/surface-laptop-5.jpg"
  },
  "acer-swift-5": {
    name: "Acer Swift 5",
    description: "تصميم نحيف وأداء كافي للمبرمجين في التنقل والعمل الخفيف.",
    specs: [
      "المعالج: Intel Core i5 12th Gen",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 14 بوصة FHD"
    ],
    price: "43000 جنيه",
    image: "images/acer-swift-5.jpeg"
  },
  "msi-modern-14": {
    name: "MSI Modern 14",
    description: "لابتوب عملي بسعر مناسب للمبرمجين المبتدئين.",
    specs: [
      "المعالج: Intel Core i5",
      "الذاكرة: 8GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Intel UHD Graphics",
      "الشاشة: 14 بوصة FHD"
    ],
    price: "38000 جنيه",
    image: "images/msi-modern-14.jpg"
  },
  "framework-laptop": {
    name: "Framework Laptop",
    description: "قابل للتعديل بالكامل، ممتاز للمبرمجين اللي بيحبوا التخصيص.",
    specs: [
      "المعالج: Intel Core i7 13th Gen",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 13.5 بوصة FHD"
    ],
    price: "49000 جنيه",
    image: "images/framework-laptop.jpg"
  },
  "huawei-matebook-14": {
    name: "Huawei MateBook 14",
    description: "للمبرمجين تصميم شيك وأداء ثابت لتطوير البرامج والتطبيقات .",
    specs: [
      "المعالج: AMD Ryzen 7 5800H",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: AMD Radeon Graphics",
      "الشاشة: 14 بوصة 2K"
    ],
    price: "46000 جنيه",
    image: "images/huawei-matebook-14.jpg"
  },

  //الابتوبات مصممين
 

  "dell-xps-15": {
    name: "Dell XPS 15",
    description: "شاشة 4K وأداء قوي، ممتاز لتصميم الصور والفيديو ",
    specs: [
      "المعالج: Intel Core i7 12th Gen",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA RTX 3050",
      "الشاشة: 15.6 بوصة UHD+ 4K"
    ],
    price: "68000 جنيه",
    image: "images/dell-xps-15.png"
  },
  "asus-zenbook-pro": {
    name: "ASUS ZenBook Pro Duo",
    description: " شاشتين بدقة عالية لمزيد من الإنتاجية والمرونة في التصميم مثالي لمصممي الجرافيك",
    specs: [
      "المعالج: Intel Core i9",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA RTX 3070",
      "الشاشة: 15.6 بوصة 4K OLED + شاشة ثانوية"
    ],
    price: "72000 جنيه",
    image: "images/asus-zenbook-pro.jpg"
  },
  "hp-spectre-x360": {
    name: "HP Spectre x360",
    description: "لابتوب للمصميم قابل للطي مع شاشة لمس بدقة ممتازة وتصميم أنيق مثالي لمصممي الجرافيك",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 13.5 بوصة OLED Touch"
    ],
    price: "54000 جنيه",
    image: "images/hp-spectre-x360.webp"
  },

  "macbook-pro-16": {
    name: "MacBook Pro 16\" M2",
    description: "لابتوب مثالي لمصممي الجرافيك والمونتاج مع شاشة  Retina وأداء عالي.",
    specs: [
      "المعالج: Apple M2 Pro",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: 16-Core GPU",
      "الشاشة: 16 بوصة Liquid Retina XDR"
    ],
    price: "75000 جنيه",
    image: "images/macbook-pro-16.jpg"
  },

  "acer-conceptd-7": {
    name: "Acer ConceptD 7",
    description: "مصمم خصيصًا للمصممين والمبدعين مع شاشة 4K دقيقة الألوان.",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA RTX 2080",
      "الشاشة: 15.6 بوصة 4K UHD (Pantone Validated)"
    ],
    price: "73000 جنيه",
    image: "images/acer-conceptd-7.jpg"
  },
  "msi-creator-z16": {
    name: "MSI Creator Z16",
    description: "قوة معالجة ضخمة وشاشة QHD+ بألوان دقيقة للمصممين.",
    specs: [
      "المعالج: Intel Core i9",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA RTX 3060",
      "الشاشة: 16 بوصة QHD+ 120Hz"
    ],
    price: "69000 جنيه",
    image: "images/msi-creator-z16.jpg"
  },
  "surface-laptop-studio": {
    name: "Microsoft Surface Laptop Studio",
    description: "مناسب للرسم والتحريك بفضل الشاشة القابلة للطي والدقة العالية مثالي لمصممي الجرافيك.",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 16GB RAM",
      "التخزين: 512GB SSD",
      "كرت الشاشة: NVIDIA RTX 3050 Ti",
      "الشاشة: 14.4 بوصة PixelSense Touch 120Hz"
    ],
    price: "65000 جنيه",
    image: "images/surface-laptop-studio.jpeg"
  },
  "razer-blade-15-studio": {
    name: "Razer Blade 15 Studio",
    description: "موجه لصناع المحتوى والمصممين مع كارت Quadro وشاشة 4K OLED مثالي لمصممي الجرافيك",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA Quadro RTX 5000",
      "الشاشة: 15.6 بوصة 4K OLED"
    ],
    price: "85000 جنيه",
    image: "images/razer-blade-15-studio.jpg"
  },
  "lg-gram-17": {
    name: "LG Gram 17",
    description: "خفيف جدًا مع شاشة ضخمة بدقة عالية، مثالي للتنقل والتصميم.",
    specs: [
      "المعالج: Intel Core i7",
      "الذاكرة: 16GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: Intel Iris Xe",
      "الشاشة: 17 بوصة WQXGA (2560x1600)"
    ],
    price: "52000 جنيه",
    image: "images/lg-gram-17.jpg"
  },
  "gigabyte-aero-16": {
    name: "Gigabyte Aero 16",
    description: "شاشة AMOLED بدقة عالية، وكارت قوي لتحرير الفيديو والتصميم ثلاثي الأبعاد.",
    specs: [
      "المعالج: Intel Core i9 13th Gen",
      "الذاكرة: 32GB RAM",
      "التخزين: 1TB SSD",
      "كرت الشاشة: NVIDIA RTX 4070",
      "الشاشة: 16 بوصة 4K UHD AMOLED"
    ],
    price: "79000 جنيه",
    image: "images/gigabyte-aero-16.jpeg"
  }

};

 

// إضافة أحدث المنتجات إلى قسم "latest-products"
function populateLatestProducts() {
  const latestProductsContainer = document.querySelector("#latest-products .product-list");

  if (!latestProductsContainer) return;

  
  const latestProducts = Object.values(products).slice(-6).reverse(); 
  latestProducts.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">السعر: ${product.price}</p>
        <a href="product-details.html?id=${product.name.toLowerCase().replace(/\s+/g, "-")}" class="btn">عرض التفاصيل</a>
      </div>
    `;
    latestProductsContainer.innerHTML += productHTML;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  populateLatestProducts();
});

// عرض تفاصيل المنتج في صفحة product-details.html
if (window.location.pathname.includes("product-details.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (products[productId]) {
    const product = products[productId];
    document.querySelector(".product-container img").src = product.image;
    document.querySelector(".product-info h2").textContent = product.name;
    document.querySelector(".product-info p").textContent = product.description;
    document.querySelector(".product-info ul").innerHTML = product.specs
      .map(spec => `<li>${spec}</li>`)
      .join("");
    document.querySelector(".product-info .price").textContent = product.price;
  } else {
    document.querySelector(".product-details").innerHTML =
      "<p>المنتج غير موجود.</p>";
  }
}

// تحديث إجمالي السعر
function updateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach(item => {
    const priceText = item.querySelector('.item-details p').textContent;
    const price = parseInt(priceText.match(/\d+/)); // استخراج الرقم فقط من النص
    const quantityInput = item.querySelector('input[type="number"]');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    totalPrice += price * quantity;
  });

  const totalPriceElement = document.querySelector('.cart-summary span');
  if (totalPriceElement) {
    totalPriceElement.textContent = `${totalPrice} جنيه`;
  }
}

// إزالة منتج من السلة
function removeFromCart(event) {
  const cartItem = event.target.closest('.cart-item');
  if (cartItem) {
    const productId = event.target.getAttribute('data-id');

    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    cart = cart.filter(item => item.id !== productId);

    
    localStorage.setItem("cart", JSON.stringify(cart));

   
    cartItem.remove();

    
    updateTotalPrice();
  }
}


document.addEventListener('click', event => {
  if (event.target.classList.contains('remove-btn')) {
    removeFromCart(event);
  }
});


document.addEventListener('input', event => {
  if (event.target.matches('.cart-item input[type="number"]')) {
    updateTotalPrice();
  }
});
// البحث عن المنتجات
const searchInput = document.querySelector(".search-section input");
if (searchInput) {
  searchInput.addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    const productElements = document.querySelectorAll(".product");
    productElements.forEach(product => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(query)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });


  //account page
  onload = function(){

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
    
    };
}

// وظيفة لعرض المنتجات في السلة
function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".cart-items");

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = ""; 

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>السلة فارغة.</p>";
    return;
  }

  cart.forEach(item => {
    const cartItemHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>السعر: ${item.price}</p>
          <p>الكمية: <input type="number" value="${item.quantity}" min="1"></p>
          <button class="btn remove-btn" data-id="${item.id}">إزالة</button>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItemHTML;
  });

  updateTotalPrice(); 
}

// تحميل السلة عند فتح صفحة السلة
if (window.location.pathname.includes("cart.html")) {
  loadCartItems();
}

// وظيفة لإضافة المنتجات إلى صفحة معينة بناءً على الفئة
function populateProducts(category, containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) return;


  const filteredProducts = Object.values(products).filter(product => {
    if (category === "business") {
      return product.description.includes("أعمال");
    } else if (category === "gaming") {
      return product.description.includes("ألعاب");
    } else if (category === "programming") {
      return product.description.includes("مبرمجين") || product.description.includes("مصممين")|| product.description.includes("برمجة")|| product.description.includes("مطورين")|| product.description.includes("مطورين")|| product.description.includes("برمجة التطبيقات")|| product.description.includes("برمجة الويب")|| product.description.includes("برمجة الألعاب")|| product.description.includes("برمجة الذكاء الاصطناعي")|| product.description.includes("برمجة البيانات الكبيرة")|| product.description.includes("برمجة الشبكات");
    } else if (category === "design") {
      return product.description.includes("للمصممين")|| product.description.includes("مصممي الجرافيك")|| product.description.includes("مونتاج")|| product.description.includes("تصميم الجرافيك")|| product.description.includes("تصميم الفيديو")|| product.description.includes("تصميم الويب")|| product.description.includes("تصميم التطبيقات")|| product.description.includes("تصميم الرسوم المتحركة")|| product.description.includes("تصميم الهوية البصرية")|| product.description.includes("التصميم");
    } else if (category === "all") {
      return true; 
    }
    return false;
  });

  
  filteredProducts.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <a href="product-details.html?id=${product.name.toLowerCase().replace(/\s+/g, "-")}" class="btn">عرض التفاصيل</a>
      </div>
    `;
    container.innerHTML += productHTML;
  });
}


if (window.location.pathname.includes("business.html")) {
  populateProducts("business", ".product-list");
} else if (window.location.pathname.includes("gaming.html")) {
  populateProducts("gaming", ".product-list");
} else if (window.location.pathname.includes("programming.html")) {
  populateProducts("programming", ".product-list");
} else if (window.location.pathname.includes("design.html")) {
  populateProducts("design", ".product-list");
} else if (window.location.pathname.includes("All-products.html")) {
  populateProducts("all", ".product-list");
}

// إضافة المنتج إلى السلة
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.querySelector(".add-to-cart");

  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get("id");

      if (products[productId]) {
        const product = products[productId];

        
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
          existingProduct.quantity += 1; 
        } else {
          
          cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1, 
          });
        }

        
        localStorage.setItem("cart", JSON.stringify(cart));

        
        alert("تمت إضافة المنتج إلى السلة!");
      } else {
        alert("المنتج غير موجود!");
      }
    });
  }
});

