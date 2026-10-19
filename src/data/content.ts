import type { IconName } from '../components/icons';

// Page copy in both languages. Items marked TODO in CONTENT-TODO.md still need
// the company's confirmation.

export const pillars = {
  ar: [
    { icon: 'compass', title: 'رؤية استراتيجية', text: 'نعمل بمنهجية طويلة الأمد لبناء علامات تجارية ذات حضور قوي وقيمة مستدامة في السوق السعودي والخليجي.' },
    { icon: 'handshake', title: 'شراكات موثوقة', text: 'نبني علاقات طويلة الأمد مع شركائنا ومورّدينا وعملائنا على أساس الثقة والاحترام والنزاهة.' },
    { icon: 'layers', title: 'منظومة متكاملة', text: 'نمتلك ونطوّر شركات وعلامات تجارية متخصصة تغطي احتياجات قطاع الأغذية بمعايير جودة عالية.' },
    { icon: 'growth', title: 'نمو مستدام', text: 'نستثمر في الفرص الواعدة ونطوّر أعمالنا باستمرار لضمان النمو المستدام ودعم الاقتصاد الوطني.' },
  ],
  en: [
    { icon: 'compass', title: 'Strategic vision', text: 'A long-term approach to building brands with a strong presence and lasting value in the Saudi and Gulf markets.' },
    { icon: 'handshake', title: 'Trusted partnerships', text: 'Long-term relationships with partners, suppliers and customers, built on trust, respect and integrity.' },
    { icon: 'layers', title: 'Integrated ecosystem', text: 'We own and develop specialised companies and brands that cover the needs of the food sector to high standards.' },
    { icon: 'growth', title: 'Sustainable growth', text: 'We invest in promising opportunities and keep developing our business to grow sustainably and support the national economy.' },
  ],
} satisfies Record<string, { icon: IconName; title: string; text: string }[]>;

export const sectors = {
  ar: [
    { id: 'manufacturing', icon: 'factory', title: 'الصناعات الغذائية', text: 'نطوّر ونصنّع منتجات غذائية عالية الجودة تلبي احتياجات السوق السعودي وتتبنى أفضل معايير الصناعة والابتكار.', detail: 'من خلال شركة عبدالله السبيعي للصناعات الغذائية في جدة، ننتج المخبوزات والمعجنات بقدرات تصنيع منظمة، مع تركيز على سلامة الغذاء وثبات الجودة.' },
    { id: 'chains', icon: 'store', title: 'سلاسل الفروع', text: 'نمتلك ونشغّل سلاسل مطاعم ومحلات بيع بالتجزئة في السعودية والكويت وقطر بمعايير موحدة وجودة استثنائية.', detail: 'تقود خلية خالد هذا القطاع بفروع في مدن المملكة وخارجها، وتنضم إليها قريبًا كباجي الغربية. نطبّق معايير تشغيل موحدة في كل فرع.' },
    { id: 'catering', icon: 'tray', title: 'تقديم الوجبات', text: 'نقدم خدمات متكاملة في قطاع تقديم الوجبات للمؤسسات والفعاليات الكبرى بمعايير عالية وذوق راقٍ.', detail: 'نلبي طلبات الشركات والجهات والمناسبات بتشكيلات من منتجات علاماتنا، مع تخطيط للكميات والتوصيل يناسب حجم كل فعالية.' },
    { id: 'brands', icon: 'badge', title: 'العلامات التجارية', text: 'نصنع ونطوّر علامات تجارية سعودية تحمل هوية قوية وتحقق حضورًا حقيقيًا في وعي المستهلك السعودي والخليجي.', detail: 'نبني لكل علامة هوية مستقلة وقصة واضحة، من خلية خالد بلونها الأزرق المعروف إلى كباجي الغربية المستلهمة من الروشن الحجازي.' },
    { id: 'quality', icon: 'shield', title: 'الجودة والاستدامة', text: 'نلتزم بأعلى معايير الجودة في كل مراحل الإنتاج والخدمة، ونعمل وفق ممارسات مستدامة تحمي البيئة والمجتمع.', detail: 'تبدأ الجودة من اختيار المورّد وتستمر حتى يصل المنتج إلى العميل. ونعمل على تقليل الهدر واختيار تغليف أكثر مسؤولية.' },
    { id: 'investment', icon: 'chart', title: 'الاستثمار والتطوير', text: 'نستثمر في الفرص الواعدة ونطوّر أعمالنا باستمرار لضمان النمو المستدام وتنويع مصادر الدخل والابتكار.', detail: 'ندرس الفرص الجديدة في قطاع الأغذية، من إطلاق علامات جديدة إلى الشراكات والامتياز التجاري، بما يضيف قيمة طويلة الأمد للمجموعة وشركائها.' },
  ],
  en: [
    { id: 'manufacturing', icon: 'factory', title: 'Food manufacturing', text: 'We develop and manufacture high-quality food products for the Saudi market, applying the best standards of industry and innovation.', detail: 'Through Abdullah Alsubaie Food Production in Jeddah, we produce baked goods and pastries with organised manufacturing capacity and a focus on food safety and consistent quality.' },
    { id: 'chains', icon: 'store', title: 'Restaurant & retail chains', text: 'We own and operate restaurant and retail chains in Saudi Arabia, Kuwait and Qatar with unified standards and exceptional quality.', detail: 'Khaliat Khalid leads this sector with branches across the Kingdom and beyond, and Kbagi Algharbia joins it soon. Every branch runs to the same operating standards.' },
    { id: 'catering', icon: 'tray', title: 'Catering', text: 'We provide complete catering services for institutions and major events, to high standards and with refined taste.', detail: 'We serve corporate, institutional and event orders with selections from our brands, planning quantities and delivery to suit each occasion.' },
    { id: 'brands', icon: 'badge', title: 'Brands', text: 'We create and develop Saudi brands with a strong identity and a real place in the minds of Saudi and Gulf consumers.', detail: 'Each brand gets its own identity and story, from the familiar blue of Khaliat Khalid to Kbagi Algharbia, inspired by the Hijazi rawshan.' },
    { id: 'quality', icon: 'shield', title: 'Quality & sustainability', text: 'We hold every stage of production and service to the highest quality standards, and work in ways that protect the environment and community.', detail: 'Quality starts with how we choose suppliers and continues until the product reaches the customer. We work to reduce waste and choose more responsible packaging.' },
    { id: 'investment', icon: 'chart', title: 'Investment & development', text: 'We invest in promising opportunities and keep developing our business for sustainable growth, diversified income and innovation.', detail: 'We look at new opportunities across the food sector, from launching new brands to partnerships and franchising, that add long-term value for the group and its partners.' },
  ],
} satisfies Record<string, { id: string; icon: IconName; title: string; text: string; detail: string }[]>;

export const home = {
  ar: {
    title: 'الرئيسية',
    description: 'شركة عبدالله السبيعي التجارية: شركة سعودية تبني وتدير منظومة متكاملة من الشركات والعلامات التجارية في قطاع الأغذية.',
    eyebrow: 'شركة سعودية منذ 2020',
    heading: 'نبني كيانات غذائية سعودية تنمو بثقة',
    lead: 'جودة واستدامة… من رؤية إلى أثر. نبني ونطوّر شركات وعلامات تجارية في قطاع الأغذية، من التصنيع إلى الفروع.',
    heroPrimary: 'تعرّف على الشركة',
    heroSecondary: 'تواصل معنا',
    stats: [
      { value: '2020', label: 'سنة التأسيس' },
      { value: '3', label: 'دول نعمل فيها' },
      { value: '3', label: 'شركات وعلامات' },
      { value: '2030', label: 'متوافقون مع رؤية المملكة' },
    ],
    aboutEyebrow: 'عن الشركة',
    aboutHeading: 'نبني كيانات غذائية سعودية استثنائية',
    aboutText: 'شركة سعودية تأسست عام 2020، تعمل على بناء وإدارة منظومة متكاملة في قطاع الأغذية من خلال مجموعة من الشركات والعلامات التجارية المتخصصة. نسعى إلى بناء كيان غذائي مستدام قادر على النمو والتوسع، وصناعة علامات تجارية ذات حضور قوي وقيمة طويلة الأمد، بما يواكب مستهدفات رؤية المملكة العربية السعودية 2030.',
    companiesEyebrow: 'المجموعة',
    companiesHeading: 'شركاتنا وعلاماتنا التجارية',
    companiesLead: 'ثلاث جهات تعمل معًا: التصنيع، والفروع، والعلامات الجديدة.',
    sectorsEyebrow: 'قطاعاتنا',
    sectorsHeading: 'ما نعمل عليه',
    whyEyebrow: 'لماذا نحن',
    whyHeading: 'لماذا شركة عبدالله السبيعي؟',
    why: [
      { title: 'منظومة سعودية متكاملة', text: 'شركات وعلامات متخصصة تعمل معًا لتحقيق قيمة مستدامة في السوق السعودي والخليجي.' },
      { title: 'كفاءات متخصصة', text: 'فريق سعودي محترف يجمع الخبرة العميقة في قطاع الأغذية والفهم الدقيق للسوق المحلي.' },
      { title: 'شراكات موثوقة', text: 'علاقات طويلة الأمد قائمة على النزاهة والشفافية، والتزام بمعايير أخلاقية عالية في كل تعاملاتنا.' },
    ],
    ctaHeading: 'لنبنِ شيئًا معًا',
    ctaText: 'نرحب بالتواصل مع الشركاء والمستثمرين والموردين المهتمين بالانضمام إلى منظومتنا. نرد على الاستفسارات خلال 48 ساعة عمل.',
    ctaButton: 'ابدأ المحادثة',
    ctaSecondary: 'فرص الشراكة',
  },
  en: {
    title: 'Home',
    description: 'Abdullah Al-Subaie Trading Company: a Saudi company building and managing an integrated portfolio of food companies and brands.',
    eyebrow: 'A Saudi company since 2020',
    heading: 'Building Saudi food enterprises that grow with confidence',
    lead: 'Quality and sustainability, from vision to impact. We build and grow companies and brands across the food sector, from manufacturing to branches.',
    heroPrimary: 'About the company',
    heroSecondary: 'Contact us',
    stats: [
      { value: '2020', label: 'Founded' },
      { value: '3', label: 'Countries' },
      { value: '3', label: 'Companies & brands' },
      { value: '2030', label: 'Aligned with Vision 2030' },
    ],
    aboutEyebrow: 'About us',
    aboutHeading: 'Building exceptional Saudi food enterprises',
    aboutText: 'A Saudi company founded in 2020, dedicated to building and managing an integrated ecosystem in the food sector through a portfolio of specialised companies and brands. We aim to build a sustainable food enterprise that can grow and expand, and to create strong brands with lasting value, in line with the goals of Saudi Vision 2030.',
    companiesEyebrow: 'The group',
    companiesHeading: 'Our companies & brands',
    companiesLead: 'Three businesses working together: manufacturing, branches and new brands.',
    sectorsEyebrow: 'Sectors',
    sectorsHeading: 'What we do',
    whyEyebrow: 'Why us',
    whyHeading: 'Why Al-Subaie?',
    why: [
      { title: 'An integrated Saudi ecosystem', text: 'Specialised companies and brands working together to create lasting value in the Saudi and Gulf markets.' },
      { title: 'Specialist talent', text: 'A professional Saudi team with deep food-sector experience and a precise understanding of the local market.' },
      { title: 'Trusted partnerships', text: 'Long-term relationships built on integrity and transparency, with high ethical standards in everything we do.' },
    ],
    ctaHeading: "Let's build something together",
    ctaText: 'We welcome partners, investors and suppliers interested in joining our ecosystem. We reply to enquiries within 48 working hours.',
    ctaButton: 'Start the conversation',
    ctaSecondary: 'Partnership opportunities',
  },
};

export const about = {
  ar: {
    title: 'عن الشركة',
    description: 'تعرّف على شركة عبدالله السبيعي التجارية: قصتنا ورؤيتنا ورسالتنا وقيمنا.',
    heading: 'قصة سعودية بامتياز',
    lead: 'منذ عام 2020 نبني منظومة غذائية سعودية متكاملة، ونصنع علامات تجارية تليق بطموحات رؤية المملكة 2030.',
    storyHeading: 'رحلة نمو',
    story: [
      'تأسست شركة عبدالله السبيعي التجارية في جدة عام 2020 بهدف واضح: بناء كيان غذائي سعودي متكامل يجمع التصنيع والتشغيل وصناعة العلامات التجارية تحت مظلة واحدة.',
      'تضم المجموعة اليوم شركة عبدالله السبيعي للصناعات الغذائية، وعلامة خلية خالد التي انتشرت فروعها في مدن المملكة ووصلت إلى الكويت وقطر، وعلامة كباجي الغربية التي تستعد للإطلاق.',
      'نؤمن بأن النجاح الحقيقي يُقاس بالأثر: بالقيمة الاقتصادية والاجتماعية التي نقدمها لشركائنا وعملائنا ومجتمعنا.',
    ],
    vision: { title: 'رؤيتنا', text: 'أن نكون من أبرز المجموعات الغذائية السعودية، بعلامات تجارية رائدة تعكس هوية سعودية أصيلة وتحقق أثرًا ملموسًا في السوق المحلي والخليجي.' },
    mission: { title: 'رسالتنا', text: 'بناء وإدارة شركات وعلامات تجارية غذائية متخصصة، بمعايير جودة عالية وشراكات موثوقة ونمو مستدام يدعم الاقتصاد الوطني.' },
    valuesHeading: 'قيمنا',
    values: [
      { icon: 'shield', title: 'الجودة', text: 'معايير عالية في كل مرحلة، من المورّد إلى العميل.' },
      { icon: 'handshake', title: 'النزاهة', text: 'الشفافية والاحترام أساس كل علاقة نبنيها.' },
      { icon: 'spark', title: 'الابتكار', text: 'نطوّر منتجاتنا وطرق عملنا باستمرار.' },
      { icon: 'flag', title: 'الهوية السعودية', text: 'نصنع علامات تعبّر عن ذائقتنا وثقافتنا.' },
      { icon: 'leaf', title: 'الاستدامة', text: 'نمو مسؤول يحمي البيئة ويخدم المجتمع.' },
    ],
    structureHeading: 'هيكل المجموعة',
    structureLead: 'مظلة واحدة تدير شركات وعلامات متخصصة.',
    logoHeading: 'دلالة الشعار',
    logoText: 'يرمز الشعار إلى الثقة والاحترافية والنمو، حيث يجسد الحرف (A) هوية الشركة، بينما يعكس اللون الأزرق الموثوقية والاستقرار، ويعبّر اللون الأسود عن القوة والجودة.',
  },
  en: {
    title: 'About us',
    description: 'Get to know Abdullah Al-Subaie Trading Company: our story, vision, mission and values.',
    heading: 'A truly Saudi story',
    lead: 'Since 2020 we have been building an integrated Saudi food ecosystem and creating brands worthy of the ambitions of Vision 2030.',
    storyHeading: 'A journey of growth',
    story: [
      'Abdullah Al-Subaie Trading Company was founded in Jeddah in 2020 with a clear aim: to build an integrated Saudi food enterprise that brings manufacturing, operations and brand building under one roof.',
      'Today the group includes Abdullah Alsubaie Food Production; Khaliat Khalid, whose branches have spread across the Kingdom and into Kuwait and Qatar; and Kbagi Algharbia, which is preparing to launch.',
      'We believe real success is measured by impact: the economic and social value we create for our partners, customers and community.',
    ],
    vision: { title: 'Our vision', text: 'To be one of the leading Saudi food groups, with pioneering brands that reflect an authentic Saudi identity and make a real mark on the local and Gulf markets.' },
    mission: { title: 'Our mission', text: 'To build and manage specialised food companies and brands, with high quality standards, trusted partnerships and sustainable growth that supports the national economy.' },
    valuesHeading: 'Our values',
    values: [
      { icon: 'shield', title: 'Quality', text: 'High standards at every stage, from supplier to customer.' },
      { icon: 'handshake', title: 'Integrity', text: 'Transparency and respect in every relationship we build.' },
      { icon: 'spark', title: 'Innovation', text: 'We keep improving our products and how we work.' },
      { icon: 'flag', title: 'Saudi identity', text: 'Brands that express our taste and our culture.' },
      { icon: 'leaf', title: 'Sustainability', text: 'Responsible growth that protects the environment and serves the community.' },
    ],
    structureHeading: 'Group structure',
    structureLead: 'One umbrella managing specialised companies and brands.',
    logoHeading: 'The meaning of our logo',
    logoText: 'The logo stands for trust, professionalism and growth. The letter A embodies the company\'s identity, blue reflects reliability and stability, and black expresses strength and quality.',
  },
};

export const sectorsPage = {
  ar: { title: 'قطاعاتنا', description: 'قطاعات عمل شركة عبدالله السبيعي التجارية: التصنيع الغذائي، سلاسل الفروع، تقديم الوجبات، العلامات التجارية، الجودة والاستدامة، والاستثمار.', heading: 'ما نعمل عليه', lead: 'ستة قطاعات مترابطة تشكّل منظومة غذائية متكاملة، من خط الإنتاج حتى يد العميل.', related: 'الجهة المعنية' },
  en: { title: 'Sectors', description: "Abdullah Al-Subaie Trading Company's sectors: food manufacturing, restaurant and retail chains, catering, brands, quality and sustainability, and investment.", heading: 'What we do', lead: 'Six connected sectors that make up an integrated food ecosystem, from the production line to the customer.', related: 'Group company' },
};

export const companiesPage = {
  ar: { title: 'شركاتنا وعلاماتنا', description: 'شركات وعلامات شركة عبدالله السبيعي التجارية: الصناعات الغذائية، خلية خالد، وكباجي الغربية.', heading: 'شركاتنا وعلاماتنا التجارية', lead: 'لكل شركة تخصصها وهويتها، وتجمعها رؤية واحدة ومعايير جودة مشتركة.', facts: 'نبذة سريعة', highlights: 'أبرز ما يميزها', links: 'روابط', back: 'كل الشركات والعلامات', others: 'تعرّف على باقي المجموعة', soonNote: 'تستعد كباجي الغربية للإطلاق. تابعونا لمعرفة موعد افتتاح أول فرع.', contactCta: 'للاستفسار عن هذه الشركة' },
  en: { title: 'Companies & Brands', description: "Abdullah Al-Subaie Trading Company's companies and brands: Food Production, Khaliat Khalid and Kbagi Algharbia.", heading: 'Our companies & brands', lead: 'Each company has its own speciality and identity, united by one vision and shared quality standards.', facts: 'At a glance', highlights: 'Highlights', links: 'Links', back: 'All companies & brands', others: 'Explore the rest of the group', soonNote: 'Kbagi Algharbia is preparing to launch. Stay tuned for the first branch opening.', contactCta: 'Enquire about this company' },
};

export const sustainability = {
  ar: {
    title: 'المسؤولية والاستدامة',
    description: 'التزامات شركة عبدالله السبيعي التجارية في الجودة وسلامة الغذاء والمجتمع والبيئة ورؤية 2030.',
    heading: 'نمو مسؤول',
    lead: 'نؤمن بأن قيمة الشركة تُقاس بأثرها على عملائها وموظفيها ومجتمعها، لا بأرقامها وحدها.',
    items: [
      { icon: 'shield', title: 'الجودة وسلامة الغذاء', text: 'نطبّق معايير واضحة لسلامة الغذاء في التصنيع والتخزين والنقل والفروع، ونراجعها باستمرار.' },
      { icon: 'people', title: 'تمكين الكفاءات الوطنية', text: 'نستثمر في توظيف الكفاءات السعودية وتدريبها، ونفتح لها مسارات نمو داخل المجموعة.' },
      { icon: 'heart', title: 'خدمة المجتمع', text: 'نسعى إلى المشاركة في المبادرات المجتمعية المحلية ودعم الأسر والمناسبات الوطنية.' },
      { icon: 'leaf', title: 'البيئة', text: 'نعمل على تقليل هدر الطعام، وترشيد استهلاك الموارد، واختيار تغليف أكثر مسؤولية.' },
      { icon: 'truck', title: 'المورّدون المحليون', text: 'نفضّل الشراكة مع المورّدين المحليين حين تتوفر الجودة، دعمًا لسلاسل الإمداد الوطنية.' },
      { icon: 'flag', title: 'رؤية المملكة 2030', text: 'نساهم في تنمية قطاع الأغذية المحلي وتنويع الاقتصاد، تماشيًا مع مستهدفات الرؤية.' },
    ],
    note: 'نعمل على إعداد تقارير دورية عن مبادراتنا في هذا المجال، وسننشرها هنا.',
  },
  en: {
    title: 'Sustainability',
    description: "Abdullah Al-Subaie Trading Company's commitments on quality, food safety, community, environment and Vision 2030.",
    heading: 'Responsible growth',
    lead: 'We believe a company is measured by its impact on customers, employees and the community, not by its numbers alone.',
    items: [
      { icon: 'shield', title: 'Quality & food safety', text: 'Clear food-safety standards across manufacturing, storage, transport and branches, reviewed continuously.' },
      { icon: 'people', title: 'Developing Saudi talent', text: 'We invest in hiring and training Saudi talent and open paths for growth within the group.' },
      { icon: 'heart', title: 'Community', text: 'We aim to take part in local community initiatives and support families and national occasions.' },
      { icon: 'leaf', title: 'Environment', text: 'We work to reduce food waste, use resources carefully and choose more responsible packaging.' },
      { icon: 'truck', title: 'Local suppliers', text: 'Where quality allows, we prefer local suppliers to strengthen national supply chains.' },
      { icon: 'flag', title: 'Saudi Vision 2030', text: 'We contribute to developing the local food sector and diversifying the economy, in line with the Vision.' },
    ],
    note: 'We are preparing regular reports on our initiatives in this area and will publish them here.',
  },
} satisfies Record<string, { items: { icon: IconName }[] } & Record<string, unknown>>;

export const partnerships = {
  ar: {
    title: 'الاستثمار والشراكات',
    description: 'فرص الاستثمار والشراكة والامتياز التجاري والتوريد مع شركة عبدالله السبيعي التجارية.',
    heading: 'نمو أكبر… بشراكات أقوى',
    lead: 'نبحث عن شركاء يشاركوننا الطموح والمعايير. سواء كنت مستثمرًا أو مورّدًا أو راغبًا في امتياز تجاري، يسعدنا الحديث معك.',
    audiences: [
      { icon: 'chart', title: 'المستثمرون', text: 'فرص للاستثمار في علامات قائمة تنمو، وفي علامات جديدة تستعد للانطلاق.', type: 'partnership' },
      { icon: 'store', title: 'الامتياز التجاري', text: 'افتح فرعًا لإحدى علاماتنا في مدينتك بدعم تشغيلي ومعايير واضحة. تتيح خلية خالد حاليًا فرص الامتياز.', type: 'franchise' },
      { icon: 'truck', title: 'المورّدون', text: 'نتعاون مع مورّدي المكونات والتغليف والمعدات الملتزمين بالجودة والمواعيد.', type: 'supplier' },
      { icon: 'tray', title: 'الشركات والفعاليات', text: 'طلبات بالجملة وتموين للمؤسسات والمناسبات من منتجات علاماتنا.', type: 'b2b' },
    ],
    processHeading: 'كيف نبدأ',
    process: [
      { title: 'أرسل استفسارك', text: 'عبّئ النموذج واختر نوع الشراكة.' },
      { title: 'نرد خلال 48 ساعة', text: 'يتواصل معك الفريق المختص لفهم احتياجك.' },
      { title: 'اجتماع تعارف', text: 'نناقش الفرصة والتفاصيل والخطوات التالية.' },
      { title: 'اتفاق واضح', text: 'نضع إطار الشراكة ونبدأ العمل معًا.' },
    ],
    formHeading: 'أرسل طلب شراكة',
    franchiseNote: 'للامتياز التجاري لخلية خالد يمكنك أيضًا التقديم عبر',
    franchiseLink: 'موقع خلية خالد',
  },
  en: {
    title: 'Investment & Partnerships',
    description: 'Investment, partnership, franchising and supply opportunities with Abdullah Al-Subaie Trading Company.',
    heading: 'Bigger growth, through stronger partnerships',
    lead: "We are looking for partners who share our ambition and our standards. Whether you are an investor, a supplier or interested in a franchise, we'd like to talk.",
    audiences: [
      { icon: 'chart', title: 'Investors', text: 'Opportunities to invest in growing brands and in new brands preparing to launch.', type: 'partnership' },
      { icon: 'store', title: 'Franchising', text: 'Open a branch of one of our brands in your city, with operational support and clear standards. Khaliat Khalid currently offers franchises.', type: 'franchise' },
      { icon: 'truck', title: 'Suppliers', text: 'We work with ingredient, packaging and equipment suppliers who are committed to quality and reliable delivery.', type: 'supplier' },
      { icon: 'tray', title: 'Corporate & events', text: 'Bulk orders and catering for organisations and occasions from across our brands.', type: 'b2b' },
    ],
    processHeading: 'How it works',
    process: [
      { title: 'Send your enquiry', text: 'Fill in the form and choose the type of partnership.' },
      { title: 'We reply within 48 hours', text: 'The right team gets in touch to understand what you need.' },
      { title: 'Introductory meeting', text: 'We discuss the opportunity, the details and next steps.' },
      { title: 'A clear agreement', text: 'We set out the partnership framework and start working together.' },
    ],
    formHeading: 'Send a partnership request',
    franchiseNote: 'For a Khaliat Khalid franchise you can also apply through the',
    franchiseLink: 'Khaliat Khalid website',
  },
} satisfies Record<string, { audiences: { icon: IconName; type: string }[] } & Record<string, unknown>>;

export const careers = {
  ar: {
    title: 'الوظائف',
    description: 'انضم إلى فريق شركة عبدالله السبيعي التجارية في التصنيع والفروع والإدارة.',
    heading: 'انضم إلى فريقنا',
    lead: 'نبني فريقًا سعوديًا محترفًا يصنع علامات يفخر بها. إن كنت تبحث عن بيئة تنمو فيها، فنحن نبحث عنك.',
    whyHeading: 'لماذا تعمل معنا',
    why: [
      { icon: 'growth', title: 'مجال للنمو', text: 'مجموعة تتوسع، وفرص للتطور والانتقال بين شركاتها.' },
      { icon: 'people', title: 'فريق متعاون', text: 'بيئة عمل تحترم الجهد وتقدّر المبادرة.' },
      { icon: 'flag', title: 'أثر حقيقي', text: 'ساهم في بناء علامات سعودية يعرفها الناس ويحبونها.' },
    ],
    areasHeading: 'مجالات العمل',
    areas: ['الإنتاج والتصنيع', 'إدارة الفروع وخدمة العملاء', 'الجودة وسلامة الغذاء', 'سلاسل الإمداد والمشتريات', 'التسويق والعلامات التجارية', 'المالية والموارد البشرية'],
    openHeading: 'الوظائف المتاحة',
    openText: 'لا توجد وظائف معلنة حاليًا. يمكنك إرسال سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.',
    applyText: 'أرسل سيرتك الذاتية إلى',
    applyHint: 'اذكر المجال الذي تهتم به في عنوان الرسالة، أو استخدم النموذج أدناه للتعريف بنفسك.',
    formHeading: 'عرّفنا بنفسك',
  },
  en: {
    title: 'Careers',
    description: 'Join the Abdullah Al-Subaie Trading Company team in manufacturing, branches and management.',
    heading: 'Join our team',
    lead: "We are building a professional Saudi team that creates brands to be proud of. If you're looking for a place to grow, we're looking for you.",
    whyHeading: 'Why work with us',
    why: [
      { icon: 'growth', title: 'Room to grow', text: 'A growing group, with chances to develop and move between its companies.' },
      { icon: 'people', title: 'A supportive team', text: 'A workplace that respects effort and values initiative.' },
      { icon: 'flag', title: 'Real impact', text: 'Help build Saudi brands that people know and love.' },
    ],
    areasHeading: 'Where you could work',
    areas: ['Production & manufacturing', 'Branch operations & customer service', 'Quality & food safety', 'Supply chain & procurement', 'Marketing & brands', 'Finance & HR'],
    openHeading: 'Open positions',
    openText: "There are no advertised vacancies right now. Send us your CV and we'll be in touch when a suitable role opens.",
    applyText: 'Email your CV to',
    applyHint: 'Mention the area you are interested in in the subject line, or use the form below to introduce yourself.',
    formHeading: 'Introduce yourself',
  },
} satisfies Record<string, { why: { icon: IconName }[] } & Record<string, unknown>>;

export const news = {
  ar: {
    title: 'الأخبار',
    description: 'آخر أخبار شركة عبدالله السبيعي التجارية وشركاتها وعلاماتها التجارية.',
    heading: 'الأخبار والإعلام',
    lead: 'آخر المستجدات من المجموعة وعلاماتها التجارية.',
    read: 'اقرأ الخبر',
    mediaHeading: 'للاستفسارات الإعلامية',
    mediaText: 'للتواصل مع فريقنا بخصوص المقابلات أو المواد الإعلامية، راسلنا على',
    items: [
      { date: '2026', source: 'شركة عبدالله السبيعي التجارية', title: 'هوية بصرية جديدة للشركة', text: 'أطلقت الشركة هويتها البصرية الجديدة: شعار يجمع الحرف (A) في مثلث يرمز إلى الثقة والاحترافية والنمو، بالأزرق والأسود.', url: '' },
      { date: '15 فبراير 2025', source: 'عرب نيوز', title: 'خلية خالد في «وين نروح اليوم»', text: 'سلطت صحيفة عرب نيوز الضوء على خلية خالد وخلية النحل الشهيرة ضمن زاوية «Where We Are Going Today».', url: 'https://arab.news/6p8cd' },
    ],
  },
  en: {
    title: 'News',
    description: 'The latest news from Abdullah Al-Subaie Trading Company and its companies and brands.',
    heading: 'News & media',
    lead: 'The latest from the group and its brands.',
    read: 'Read the article',
    mediaHeading: 'Media enquiries',
    mediaText: 'For interviews or press materials, contact our team at',
    items: [
      { date: '2026', source: 'Abdullah Al-Subaie Trading Company', title: 'A new visual identity for the company', text: 'The company introduced its new identity: a logo that sets the letter A inside a triangle, standing for trust, professionalism and growth, in blue and black.', url: '' },
      { date: '15 February 2025', source: 'Arab News', title: 'Khaliat Khalid in "Where We Are Going Today"', text: 'Arab News featured Khaliat Khalid and its famous honeycomb bread in its "Where We Are Going Today" column.', url: 'https://arab.news/6p8cd' },
    ],
  },
};

export const contact = {
  ar: {
    title: 'تواصل معنا',
    description: 'تواصل مع شركة عبدالله السبيعي التجارية في جدة للاستفسارات العامة والشراكات والتوريد والتوظيف.',
    heading: 'تواصل معنا',
    lead: 'نرحب بتواصل الشركاء والمستثمرين والموردين والعملاء. نرد على الاستفسارات خلال 48 ساعة عمل.',
    detailsHeading: 'معلومات التواصل',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان',
    hours: 'ساعات العمل',
    hoursValue: 'الأحد – الخميس، 9 صباحًا – 5 مساءً',
    formHeading: 'أرسل رسالة',
    mapTitle: 'موقع الشركة على الخريطة',
  },
  en: {
    title: 'Contact',
    description: 'Contact Abdullah Al-Subaie Trading Company in Jeddah about general enquiries, partnerships, supply and careers.',
    heading: 'Contact us',
    lead: 'We welcome partners, investors, suppliers and customers. We reply to enquiries within 48 working hours.',
    detailsHeading: 'Contact details',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    hours: 'Working hours',
    hoursValue: 'Sunday – Thursday, 9 am – 5 pm',
    formHeading: 'Send a message',
    mapTitle: 'Company location on the map',
  },
};

export const notFound = {
  ar: { title: 'الصفحة غير موجودة', heading: 'لم نجد هذه الصفحة', text: 'ربما نُقلت الصفحة أو تغيّر رابطها. جرّب العودة إلى الصفحة الرئيسية.', home: 'العودة إلى الرئيسية' },
  en: { title: 'Page not found', heading: "We couldn't find that page", text: 'The page may have moved or its link may have changed. Try the home page.', home: 'Back to home' },
};
