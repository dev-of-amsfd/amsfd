import type { RouteKey } from '../i18n/routes';

type Text = { ar: string; en: string };

export interface Company {
  key: 'food' | 'khaliat' | 'kbagi';
  route: RouteKey;
  name: Text;
  kind: Text;
  status: 'active' | 'soon';
  // Brand colours from each company's identity guide.
  colors: { primary: string; surface: string; onPrimary: string };
  logo: string;
  logoOnPrimary: string;
  photo?: { src: string; alt: Text };
  summary: Text;
  body: { ar: string[]; en: string[] };
  facts: { label: Text; value: Text }[];
  highlights: { ar: string[]; en: string[] };
  links: { label: Text; url: string }[];
}

export const companies: Company[] = [
  {
    key: 'food',
    route: 'food',
    name: { ar: 'شركة عبدالله السبيعي للصناعات الغذائية', en: 'Abdullah Alsubaie Food Production Co.' },
    kind: { ar: 'التصنيع الغذائي', en: 'Food manufacturing' },
    status: 'active',
    colors: { primary: '#6B2F1A', surface: '#FBF4EC', onPrimary: '#FFFFFF' },
    logo: '/images/brands/food-logo.png',
    logoOnPrimary: '/images/brands/food-logo.png',
    summary: {
      ar: 'الذراع الصناعية للمجموعة في جدة، متخصصة في تصنيع المخبوزات والمنتجات الغذائية وفق معايير جودة وسلامة غذاء عالية.',
      en: "The group's manufacturing arm in Jeddah, producing baked goods and food products to high quality and food-safety standards.",
    },
    body: {
      ar: [
        'تمثل شركة عبدالله السبيعي للصناعات الغذائية القاعدة الصناعية للمجموعة. من مقرها في جدة، تعمل الشركة في مجال تصنيع المخبوزات، وتركّز على جودة المكونات وثبات المنتج من دفعة إلى أخرى.',
        'تدعم الشركة نمو علامات المجموعة التجارية بقدرات إنتاج منظمة، وتنفتح على فرص التوريد والتصنيع للشركات والجهات الراغبة في شريك صناعي سعودي موثوق.',
      ],
      en: [
        "Abdullah Alsubaie Food Production is the group's industrial base. From Jeddah, the company manufactures baked goods with a focus on quality ingredients and consistency from one batch to the next.",
        "It supports the growth of the group's brands with organised production capacity, and is open to supply and manufacturing opportunities with businesses looking for a reliable Saudi manufacturing partner.",
      ],
    },
    facts: [
      { label: { ar: 'المجال', en: 'Industry' }, value: { ar: 'تصنيع المخبوزات', en: 'Baked goods manufacturing' } },
      { label: { ar: 'الموقع', en: 'Location' }, value: { ar: 'جدة، منطقة مكة المكرمة', en: 'Jeddah, Makkah Province' } },
      { label: { ar: 'حجم الفريق', en: 'Team size' }, value: { ar: '51 – 200 موظف', en: '51–200 employees' } },
    ],
    highlights: {
      ar: ['تصنيع المخبوزات والمعجنات', 'دعم إنتاج علامات المجموعة', 'معايير الجودة وسلامة الغذاء', 'فرص التوريد والتصنيع للشركات'],
      en: ['Baked goods and pastry production', "Production for the group's brands", 'Quality and food-safety standards', 'Supply and manufacturing for businesses'],
    },
    links: [],
  },
  {
    key: 'khaliat',
    route: 'khaliat',
    name: { ar: 'خلية خالد', en: 'Khaliat Khalid' },
    kind: { ar: 'سلسلة مخابز ومعجنات', en: 'Bakery & pastry chain' },
    status: 'active',
    colors: { primary: '#01498E', surface: '#EEF5FB', onPrimary: '#FFFFFF' },
    logo: '/images/brands/kk-logo-blue.png',
    logoOnPrimary: '/images/brands/kk-logo-white.png',
    photo: {
      src: '/images/photos/kk-signage.jpg',
      alt: { ar: 'لافتة فرع خلية خالد', en: 'Khaliat Khalid branch signage' },
    },
    summary: {
      ar: 'علامة سعودية للمخبوزات اشتهرت بخلية النحل، تنتشر فروعها في مدن المملكة وتمتد إلى الكويت وقطر.',
      en: 'A Saudi bakery brand known for its honeycomb bread, with branches across the Kingdom and in Kuwait and Qatar.',
    },
    body: {
      ar: [
        'خلية خالد علامة سعودية متخصصة في المخبوزات والمعجنات، اشتهرت بخلية النحل: كرات عجين صغيرة محشوة بالجبن الكريمي، تُخبز حتى تصبح ذهبية ثم تُزيَّن بالشيرة.',
        'تضم القائمة تشكيلة الخلية بنكهاتها المتعددة مثل القرفة واللوتس والكنافة والسينابون، إلى جانب مثلثات الخلية وكب بايتس والحلويات والمشروبات، مع خيارات مالحة وفطائر صغيرة.',
        'تخدم خلية خالد عملاءها عبر فروعها وتطبيقها وموقعها الإلكتروني وتطبيقات التوصيل، وتتيح فرص الامتياز التجاري للراغبين في الانضمام إلى نموها.',
      ],
      en: [
        'Khaliat Khalid is a Saudi bakery and pastry brand best known for khaliat al-nahl, honeycomb bread: small balls of dough filled with cream cheese, baked golden and finished with syrup.',
        'The menu spans the signature khaliah in flavours such as cinnamon, Biscoff, kunafa and cinnabon, alongside khaliah triangles, cup bites, desserts and drinks, plus savoury options and mini pies.',
        'Customers order through the branches, the Khaliat Khalid app and website, and delivery apps. The brand also offers franchise opportunities for partners who want to grow with it.',
      ],
    },
    facts: [
      { label: { ar: 'المنتج الأشهر', en: 'Signature product' }, value: { ar: 'خلية النحل', en: 'Honeycomb bread (khaliat al-nahl)' } },
      { label: { ar: 'الانتشار', en: 'Footprint' }, value: { ar: 'السعودية، الكويت، قطر', en: 'Saudi Arabia, Kuwait, Qatar' } },
      { label: { ar: 'قنوات البيع', en: 'Channels' }, value: { ar: 'الفروع، التطبيق، الموقع، تطبيقات التوصيل', en: 'Branches, app, website, delivery apps' } },
    ],
    highlights: {
      ar: ['فروع في مناطق المملكة الخمس', 'تطبيق خاص على iOS وAndroid', 'فرص امتياز تجاري', 'ظهور في عرب نيوز 2025'],
      en: ['Branches across all five regions of the Kingdom', 'Own iOS and Android app', 'Franchise opportunities', 'Featured in Arab News, 2025'],
    },
    links: [
      { label: { ar: 'الموقع الرسمي', en: 'Official website' }, url: 'https://khaliatkhalid.com' },
      { label: { ar: 'إنستغرام', en: 'Instagram' }, url: 'https://www.instagram.com/khaliatkh.sa/' },
      { label: { ar: 'الفروع والروابط', en: 'Branches & links' }, url: 'https://linktr.ee/khaliatkh' },
    ],
  },
  {
    key: 'kbagi',
    route: 'kbagi',
    name: { ar: 'كباجي الغربية', en: 'Kbagi Algharbia' },
    kind: { ar: 'مخبوزات شعبية', en: 'Traditional baked goods' },
    status: 'soon',
    colors: { primary: '#D44B2A', surface: '#F8F0ED', onPrimary: '#FFFFFF' },
    logo: '/images/brands/kbagi-logo.png',
    logoOnPrimary: '/images/brands/kbagi-logo-white.png',
    photo: {
      src: '/images/photos/kbagi-pastry.jpg',
      alt: { ar: 'طبق من مخبوزات كباجي الغربية', en: 'A plate of Kbagi Algharbia pastries' },
    },
    summary: {
      ar: 'علامة جديدة تقدّم المخبوزات الشعبية الحجازية بنكهة تراثية ولمسة عصرية. قريبًا.',
      en: 'A new brand serving traditional Hijazi baked goods with a heritage flavour and a modern touch. Coming soon.',
    },
    body: {
      ar: [
        'كباجي الغربية أحدث علامات المجموعة، وتحتفي بالمخبوزات الشعبية في المنطقة الغربية. شعارها: «نكهة تراثية بلمسة عصرية».',
        'استُلهمت هويتها من زخارف الروشن الحجازي، وقُدّمت بأسلوب مبسط وحديث، وبألوان دافئة تعكس الأصالة والضيافة. مخبوزات طازجة، مصنوعة بحب… ومغلفة بعناية.',
      ],
      en: [
        "Kbagi Algharbia is the group's newest brand, celebrating the popular baked goods of Saudi Arabia's Western Region. Its promise: a heritage flavour with a modern touch.",
        'Its identity draws on the carved patterns of the Hijazi rawshan window, simplified into a modern motif and set in warm colours of hospitality. Fresh baked goods, made with love and packed with care.',
      ],
    },
    facts: [
      { label: { ar: 'الفئة', en: 'Category' }, value: { ar: 'مخبوزات شعبية طازجة', en: 'Fresh traditional baked goods' } },
      { label: { ar: 'الإلهام', en: 'Inspiration' }, value: { ar: 'الروشن الحجازي', en: 'The Hijazi rawshan' } },
      { label: { ar: 'الحالة', en: 'Status' }, value: { ar: 'قيد الإطلاق', en: 'Launching soon' } },
    ],
    highlights: {
      ar: ['مكونات مختارة', 'مصنوعة بحب', 'طازجة يوميًا'],
      en: ['Selected ingredients', 'Made with love', 'Fresh every day'],
    },
    links: [],
  },
];

export const companyByKey = (key: Company['key']) => companies.find((c) => c.key === key)!;
