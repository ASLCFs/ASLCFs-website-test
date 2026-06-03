const REGISTER_TITLE_OPTIONS = {
  zh: [
    { value: "", label: "请选择职称" },
    { value: "undergraduate", label: "本科生" },
    { value: "master", label: "硕士研究生" },
    { value: "doctoral", label: "博士研究生" },
    { value: "postdoc", label: "博士后" },
    { value: "lecturer", label: "讲师" },
    { value: "associate_professor", label: "副教授" },
    { value: "professor", label: "教授" },
    { value: "researcher", label: "研究员" },
    { value: "engineer", label: "工程师" },
    { value: "other", label: "其他" }
  ],
  en: [
    { value: "", label: "Select title" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "master", label: "Master Student" },
    { value: "doctoral", label: "Doctoral Student" },
    { value: "postdoc", label: "Postdoctoral Researcher" },
    { value: "lecturer", label: "Lecturer" },
    { value: "associate_professor", label: "Associate Professor" },
    { value: "professor", label: "Professor" },
    { value: "researcher", label: "Researcher" },
    { value: "engineer", label: "Engineer" },
    { value: "other", label: "Other" }
  ]
};

const ADVISOR_REQUIRED_TITLES = ["undergraduate", "master", "doctoral", "postdoc"];

const EXPRESS_DELIVERY_ZENODO_FILE = {
  filename: "快递业道路尺度排放清单.zip",
  zenodoUrl: "https://zenodo.org/records/20528292/files/%E5%BF%AB%E9%80%92%E4%B8%9A%E9%81%93%E8%B7%AF%E5%B0%BA%E5%BA%A6%E6%8E%92%E6%94%BE%E6%B8%85%E5%8D%95.zip?download=1",
  datasetKey: "other_emission",
  datasetName: "其他排放清单",
  mainCategory: "快递业道路尺度排放清单",
  subject: "快递业",
  scale: "zip",
  fileCount: 1
};

const PUBLIC_EMAIL_DOMAINS = [
  "qq.com",
  "163.com",
  "126.com",
  "yeah.net",
  "sina.com",
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "foxmail.com",
  "icloud.com"
];

const pageData = {
  zh: {
    pageTitle: "农业SLCFs排放数据集",
    languageLabel: "语言",
    navHome: "首页",
    navResources: "数据资源",
    navPapers: "论文成果",
    navDownloads: "下载中心",
    navAbout: "关于我们",
    navContact: "联系反馈",
    navLogin: "登录",
    navRegister: "注册",
    searchPlaceholder: "搜索数据、论文、下载...",
    papersSearchPlaceholder: "搜索论文题目、作者、期刊、DOI...",
    statLabel: "访问统计",
    announcementItems: [
      "数据更新通知：最新畜牧业NOx排放清单已同步上线。",
      "版本迭代：V1.2 已发布，下载与检索体验已优化。",
      "使用说明：站内数据仅限科研与教学用途。"
    ],
    heroTitle: "农业SLCFs排放数据集",
    heroText: "农业SLCFs数据集（ASLCFs）汇集了团队与农业相关的短寿命辐射强迫因子（NH3、NOx、CH4）的排放数据，时间范围覆盖2001-2023年，分辨率为5arcmin（月尺度），并且细分到畜牧业和种植业的各物种。该数据集可为大气模式模拟与农业减污降碳提供数据支撑。",
    buttonAbout: "了解我们",
    buttonDataset: "查看数据集",
    newsTitle: "最新动态",
    newsText: "排放数据样例已更新，支持在线浏览与下载。",
    aboutTitle: "我们的研究方向",
    aboutText: "围绕农业源SLCFs（NH3，NOx和CH4），开发时空高分辨率排放清单与减排策略，解析农业SLCFs的大气环境与气候效应，支撑大气环境与气候协同治理与决策。",
    teamTitle: "团队成员",
    teamText: "以下展示课题组教师的照片、职称与研究方向，信息整理自教师官方主页。",
    teamLinkText: "查看主页",
    resourcesTitle: "数据资源",
    resourcesText: "这里汇集课题组公开的样例数据资源，可用于教学演示、方法验证与学术交流。",
    papersTitle: "论文成果",
    papersText: "按研究方向分组展示课题组代表性论文，中文引用采用 GB/T 7714，英文引用采用 APA 7。",
    downloadsTitle: "下载中心",
    downloadsText: "集中提供排放数据下载",
    dataTypeEmission: "排放数据",
    descEmissionText: "栅格化排放清单数据，按年份、分解维度和对象组织，提供 GeoTIFF 格式文件。",
    citationTitle: "引用论文",
    emissionCitationNote: "如使用排放数据，请引用以下论文：",
    emissionCitationText: "作者占位符. 排放数据论文题名占位符[J]. 期刊名占位符, 2026, 卷号占位符(期号占位符): 页码占位符.",
    filterYearLabel: "年份",
    filterCategoryLabel: "分类",
    filterSubjectLabel: "对象",
    filterScaleLabel: "时间尺度",
    buttonSearchDownload: "搜索并下载",
    contactTitle: "联系反馈",
    contactText: "欢迎提交数据使用咨询、合作意向或页面建议，我们会尽快回复。",
    contactInfoTitle: "联系方式",
    contactInfo: {
      email: "baojieli@nuist.edu.cn",
      phone: "+86-15751883196",
      address: "江苏省南京市浦口区宁六路219号"
    },
    emailLabel: "邮箱：",
    addressLabel: "地址：",
    phoneLabel: "电话：",
    nameLabel: "姓名",
    formEmailLabel: "邮箱",
    contactSubjectLabel: "主题",
    messageLabel: "留言",
    messagePlaceholder: "请简要说明您的需求或建议",
    submitFeedback: "提交反馈",
    contactHoursTitle: "工作时间",
    contactHoursWeekday: "周一至周五：9:00 - 17:00",
    contactHoursWeekend: "周末及节假日休息",
    footerOrg: "南京信息工程大学环境科学与工程学院 / 农业SLCFs排放数据集",
    footerCopyright: "© 2026 南京信息工程大学",
    footerLegal: [
      "数据使用规范：仅限科研与教学用途。",
      "引用要求：请注明来自于ASLCFs排放数据集，并引用相关文章。",
      "数据用途：本数据仅限于科研与教学用途，严禁商用。",
      "免责声明：数据仅供参考，不构成政策依据。"
    ],
    footerLicense: "备案号：苏 ICP 备 12345678 号",
    footerEmail: "邮箱：baojieli@nuist.edu.cn",
    footerAddress: "地址：江苏省南京市浦口区宁六路219号",
    loginTitle: "用户登录",
    usernameLabel: "用户名",
    passwordLabel: "密码",
    loginButton: "登录",
    registerLink: "还没有账户？",
    registerTitle: "用户注册",
    forgotPasswordTitle: "找回密码",
    forgotPasswordText: "请输入注册时使用的教育邮箱，我们会发送一个 30 分钟内有效的重置链接。",
    resetPasswordTitle: "重置密码",
    resetPasswordText: "请设置新密码。密码需包含大写字母、小写字母和数字。",
    resetEmailLabel: "教育邮箱",
    sendResetLinkButton: "发送重置链接",
    newPasswordLabel: "新密码",
    confirmNewPasswordLabel: "确认新密码",
    resetPasswordButton: "重置密码",
    backToLoginLink: "想起密码了？",
    regUsernameLabel: "真实姓名",
    regInstitutionLabel: "机构",
    regTitleLabel: "职称",
    regAdvisorLabel: "导师姓名",
    regAdvisorHint: "本科生、硕士研究生、博士研究生和博士后需填写导师姓名。",
    regEmailLabel: "教育邮箱",
    regEmailHint: "请填写学校或科研机构教育邮箱，用于身份核验与审核。",
    regTitleOptions: REGISTER_TITLE_OPTIONS.zh,
    regPasswordLabel: "密码",
    confirmPasswordLabel: "确认密码",
    registerButton: "注册",
    loginLink: "已有账户？"
  },
  en: {
    pageTitle: "Agricultural SLCFs Emission Dataset",
    languageLabel: "Language",
    navHome: "Home",
    navResources: "Data Resources",
    navPapers: "Publications",
    navDownloads: "Downloads",
    navAbout: "About",
    navContact: "Contact",
    navLogin: "Login",
    navRegister: "Register",
    searchPlaceholder: "Search datasets, papers, downloads...",
    papersSearchPlaceholder: "Search titles, authors, journals, or DOI...",
    statLabel: "Visit Count",
    announcementItems: [
      "Data update notice: latest inventories synced.",
      "Version release: V1.2 is live with improved downloads.",
      "Usage notice: for research and teaching only."
    ],
    heroTitle: "Agricultural SLCFs Emission Dataset",
    heroText: "The Agricultural SLCFs Emission Dataset brings together agricultural short-lived climate forcer emission inventories to support emission assessment, model simulation, and coordinated mitigation research.",
    buttonAbout: "About Us",
    buttonDataset: "Browse Datasets",
    newsTitle: "Latest News",
    newsText: "Emission data samples are available for review and download.",
    aboutTitle: "Our Research Focus",
    aboutText: "We focus on agricultural SLCFs (NH3, NOx and CH4), develop high spatiotemporal resolution emission inventories and mitigation strategies, and analyze their atmospheric environmental and climate effects to support coordinated governance and decision-making.",
    teamTitle: "Team Members",
    teamText: "Our research team advances atmospheric pollution and weather-climate studies with an emphasis on innovation and practical impact.",
    teamLinkText: "View Profile",
    resourcesTitle: "Data Resources",
    resourcesText: "Here are our sample public data resources with links to details and downloads.",
    papersTitle: "Publications",
    papersText: "Representative papers are grouped by research direction. Chinese citations follow GB/T 7714 and English citations follow APA 7.",
    downloadsTitle: "Download Center",
    downloadsText: "Centralized access to emission data",
    dataTypeEmission: "Emission Data",
    descEmissionText: "Gridded emission inventory data organized by year, decomposition dimension, and object, provided in GeoTIFF format.",
    citationTitle: "Citation",
    emissionCitationNote: "If you use the emission data, please cite the following paper:",
    emissionCitationText: "Author Placeholder. Emission data paper title placeholder[J]. Journal Placeholder, 2026, Volume Placeholder(Issue Placeholder): Page Placeholder.",
    filterYearLabel: "Year",
    filterCategoryLabel: "Category",
    filterSubjectLabel: "Subject",
    filterScaleLabel: "Time Scale",
    buttonSearchDownload: "Search and Download",
    contactTitle: "Contact & Feedback",
    contactText: "Submit requests, data usage inquiries, or cooperation intentions.",
    contactInfoTitle: "Contact Info",
    contactInfo: {
      email: "baojieli@nuist.edu.cn",
      phone: "+86-15751883196",
      address: "No.219 Ningliu Road, Pukou District, Nanjing, Jiangsu Province"
    },
    emailLabel: "Email:",
    addressLabel: "Address:",
    phoneLabel: "Phone:",
    nameLabel: "Name",
    formEmailLabel: "Email",
    contactSubjectLabel: "Subject",
    messageLabel: "Message",
    messagePlaceholder: "Briefly describe your request or suggestion",
    submitFeedback: "Submit Feedback",
    contactHoursTitle: "Office Hours",
    contactHoursWeekday: "Monday to Friday: 9:00 - 17:00",
    contactHoursWeekend: "Closed on weekends and public holidays",
    footerOrg: "School of Environmental Science and Engineering / Agricultural SLCFs Emission Dataset",
    footerCopyright: "漏 2026 Nanjing University of Information Science & Technology",
    footerLegal: [
      "Data usage: research and teaching only.",
      "Citation: please cite the source and research group.",
      "No commercial use: prohibited.",
      "Disclaimer: data are for reference only."
    ],
    footerLicense: "ICP 12345678",
    footerEmail: "Email: baojieli@nuist.edu.cn",
    footerAddress: "Address: No.219 Ningliu Road, Pukou District, Nanjing, Jiangsu",
    loginTitle: "User Login",
    usernameLabel: "Username",
    passwordLabel: "Password",
    loginButton: "Login",
    registerLink: "Don't have an account?",
    registerTitle: "User Registration",
    forgotPasswordTitle: "Recover Password",
    forgotPasswordText: "Enter your educational email and we will send a reset link valid for 30 minutes.",
    resetPasswordTitle: "Reset Password",
    resetPasswordText: "Set a new password with uppercase, lowercase, and a number.",
    resetEmailLabel: "Educational Email",
    sendResetLinkButton: "Send Reset Link",
    newPasswordLabel: "New Password",
    confirmNewPasswordLabel: "Confirm New Password",
    resetPasswordButton: "Reset Password",
    backToLoginLink: "Remembered it?",
    regUsernameLabel: "Real Name",
    regInstitutionLabel: "Institution",
    regTitleLabel: "Title",
    regAdvisorLabel: "Advisor Name",
    regAdvisorHint: "Undergraduate, master, doctoral, and postdoctoral users must provide an advisor name.",
    regEmailLabel: "Educational Email",
    regEmailHint: "Use your university or institutional email for identity verification and review.",
    regTitleOptions: REGISTER_TITLE_OPTIONS.en,
    regPasswordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    registerButton: "Register",
    loginLink: "Already have an account?"
  },
  fr: {
    pageTitle: "Laboratoire 脡missions Sources & Impact 脡cologique",
    languageLabel: "Langue",
    navHome: "Accueil",
    navResources: "Ressources",
    navDownloads: "T茅l茅chargements",
    navAbout: "脌 propos",
    navContact: "Contact",
    navLogin: "Connexion",
    navRegister: "Inscription",
    searchPlaceholder: "Rechercher donn茅es, publications, t茅l茅chargements...",
    statLabel: "Visites",
    announcementItems: [
      "Mise 脿 jour des donn茅es : derniers inventaires synchronis茅s.",
      "Version : V1.2 disponible avec des t茅l茅chargements am茅lior茅s.",
      "Utilisation : r茅serv茅 脿 l'enseignement et 脿 la recherche."
    ],
    eyebrow: "Pr茅sentation du groupe",
    heroTitle: "脡missions sources et impact 茅cologique",
    heroText: "Nous 茅tudions les sources d'茅missions, les trajectoires de pollution et les r茅ponses des 茅cosyst猫mes.",
    buttonAbout: "脌 propos",
    buttonDataset: "Explorer les donn茅es",
    newsTitle: "Actualit茅s",
    newsText: "Nouveaux inventaires des 茅missions de trafic et d'agriculture disponibles.",
    aboutTitle: "Nos axes de recherche",
    aboutText: "Nous abordons caract茅ristiques des 茅missions, transport des polluants et impact 茅cologique.",
    teamTitle: "脡quipe",
    teamText: "Notre 茅quipe collabore pour faire progresser les 茅tudes et applications.",
    resourcesTitle: "Ressources",
    resourcesText: "Voici nos ressources de donn茅es publiques avec liens de t茅l茅chargement.",
    downloadsTitle: "Centre de t茅l茅chargement",
    downloadsText: "T茅l茅chargez des paquets de donn茅es, logiciels et documents techniques.",
    contactTitle: "Contact & Retour",
    contactText: "Soumettez des demandes, questions d'utilisation ou partenariats.",
    contactInfoTitle: "Contact",
    contactInfo: {
      email: "baojieli@nuist.edu.cn",
      phone: "+86-15751883196",
      address: "No.219 Ningliu Road, Pukou District, Nanjing, Jiangsu"
    },
    emailLabel: "Email :",
    addressLabel: "Adresse :",
    phoneLabel: "T茅l茅phone :",
    nameLabel: "Nom",
    formEmailLabel: "Email",
    messageLabel: "Message",
    submitFeedback: "Envoyer",
    footerOrg: "脡cole des sciences et ing茅nierie de l'environnement / laboratoire / groupe de recherche",
    footerCopyright: "漏 2026 Nanjing University of Information Science & Technology",
    footerLegal: [
      "Utilisation des donn茅es : recherche et enseignement uniquement.",
      "Citation : veuillez citer la source.",
      "Pas d'usage commercial : interdit.",
      "Avertissement : donn茅es 脿 titre indicatif uniquement."
    ],
    footerLicense: "ICP 12345678",
    footerEmail: "Email : baojieli@nuist.edu.cn",
    footerAddress: "Adresse : No.219 Ningliu Road, Pukou District, Nanjing, Jiangsu",
    loginTitle: "Connexion",
    usernameLabel: "Nom d'utilisateur",
    passwordLabel: "Mot de passe",
    loginButton: "Se connecter",
    registerLink: "Pas de compte ?",
    registerTitle: "Inscription",
    regUsernameLabel: "Nom d'utilisateur",
    regEmailLabel: "Email",
    regPasswordLabel: "Mot de passe",
    confirmPasswordLabel: "Confirmer le mot de passe",
    registerButton: "S'inscrire",
    loginLink: "D茅j脿 un compte ?"
  },
  es: {
    pageTitle: "Laboratorio Emisiones Fuente e Impacto Ecol贸gico",
    languageLabel: "Idioma",
    navHome: "Inicio",
    navResources: "Recursos",
    navDownloads: "Descargas",
    navAbout: "Acerca",
    navContact: "Contacto",
    navLogin: "Iniciar sesi贸n",
    navRegister: "Registrarse",
    searchPlaceholder: "Buscar datos, publicaciones y descargas...",
    statLabel: "Visitas",
    announcementItems: [
      "Actualizaci贸n de datos: inventarios sincronizados.",
      "Versi贸n: V1.2 disponible con descargas mejoradas.",
      "Uso: solo para investigaci贸n y ense帽anza."
    ],
    eyebrow: "Descripci贸n del grupo",
    heroTitle: "Emisiones de fuente e impacto ecol贸gico",
    heroText: "Nos enfocamos en fuentes de emisi贸n, rutas de contaminaci贸n y respuestas del ecosistema.",
    buttonAbout: "Sobre nosotros",
    buttonDataset: "Explorar datos",
    newsTitle: "脷ltimas noticias",
    newsText: "Inventarios de emisiones de tr谩fico y agricultura disponibles.",
    aboutTitle: "Nuestro enfoque",
    aboutText: "Caracter铆sticas de emisiones, transporte de contaminantes e impacto ecol贸gico.",
    teamTitle: "Equipo",
    teamText: "Nuestro equipo avanza estudios aplicables sobre emisiones y ambiente.",
    resourcesTitle: "Recursos",
    resourcesText: "Aqu铆 nuestras recursos p煤blicos de datos con enlaces.",
    downloadsTitle: "Centro de descargas",
    downloadsText: "Descargue paquetes de datos, software y documentaci贸n.",
    contactTitle: "Contacto & Retroalimentaci贸n",
    contactText: "Env铆e solicitudes, consultas o colaboraciones.",
    contactInfoTitle: "Contacto",
    contactInfo: {
      email: "baojieli@nuist.edu.cn",
      phone: "+86-15751883196",
      address: "No.219 Ningliu Road, Pukou District, Nanjing, Jiangsu"
    },
    emailLabel: "Correo:",
    addressLabel: "Direcci贸n:",
    phoneLabel: "Tel茅fono:",
    nameLabel: "Nombre",
    formEmailLabel: "Correo",
    messageLabel: "Mensaje",
    submitFeedback: "Enviar",
    footerOrg: "Escuela de Ciencias e Ingenier铆a Ambiental / laboratorio / grupo de investigaci贸n",
    footerCopyright: "漏 2026 Nanjing University of Information Science & Technology",
    footerLegal: [
      "Uso de datos: solo investigaci贸n y ense帽anza.",
      "Citaci贸n: indique la fuente.",
      "Sin uso comercial: prohibido.",
      "Descargo de responsabilidad: datos solo de referencia."
    ],
    footerLicense: "ICP 12345678",
    footerEmail: "Correo: baojieli@nuist.edu.cn",
    footerAddress: "Direcci贸n: Xianlin University Town, Nanjing, Jiangsu",
    loginTitle: "Iniciar Sesi贸n",
    usernameLabel: "Nombre de usuario",
    passwordLabel: "Contrase帽a",
    loginButton: "Iniciar Sesi贸n",
    registerLink: "驴No tienes cuenta?",
    registerTitle: "Registro",
    regUsernameLabel: "Nombre de usuario",
    regEmailLabel: "Correo",
    regPasswordLabel: "Contrase帽a",
    confirmPasswordLabel: "Confirmar Contrase帽a",
    registerButton: "Registrarse",
    loginLink: "驴Ya tienes cuenta?"
  },
  ru: {
    pageTitle: "袥邪斜芯褉邪褌芯褉懈褟 懈褋褌芯褔薪懈泻芯胁 胁褘斜褉芯褋芯胁 懈 褝泻芯谢芯谐懈褔械褋泻芯谐芯 胁芯蟹写械泄褋褌胁懈褟",
    languageLabel: "携蟹褘泻",
    navHome: "袚谢邪胁薪邪褟",
    navResources: "袪械褋褍褉褋褘",
    navDownloads: "袟邪谐褉褍蟹泻邪",
    navAbout: "袨 薪邪褋",
    navContact: "袣芯薪褌邪泻褌",
    navLogin: "袙芯泄褌懈",
    navRegister: "袪械谐懈褋褌褉邪褑懈褟",
    searchPlaceholder: "袩芯懈褋泻 写邪薪薪褘褏, 锌褍斜谢懈泻邪褑懈泄 懈 蟹邪谐褉褍蟹芯泻...",
    statLabel: "袩芯褋械褖械薪懈褟",
    announcementItems: [
      "袨斜薪芯胁谢械薪懈械 写邪薪薪褘褏: 锌芯褋谢械写薪懈械 懈薪胁械薪褌邪褉懈蟹邪褑懈懈 褋懈薪褏褉芯薪懈蟹懈褉芯胁邪薪褘.",
      "袙械褉褋懈褟: V1.2 写芯褋褌褍锌薪邪 褋 褍谢褍褔褕械薪薪褘屑懈 蟹邪谐褉褍蟹泻邪屑懈.",
      "袠褋锌芯谢褜蟹芯胁邪薪懈械: 褌芯谢褜泻芯 写谢褟 懈褋褋谢械写芯胁邪薪懈泄 懈 芯斜褍褔械薪懈褟."
    ],
    eyebrow: "袨 谐褉褍锌锌械",
    heroTitle: "袠褋褌芯褔薪懈泻懈 胁褘斜褉芯褋芯胁 懈 褝泻芯谢芯谐懈褔械褋泻芯械 胁芯蟹写械泄褋褌胁懈械",
    heroText: "袦褘 懈蟹褍褔邪械屑 懈褋褌芯褔薪懈泻懈 胁褘斜褉芯褋芯胁, 锌褍褌懈 蟹邪谐褉褟蟹薪械薪懈褟 懈 褉械邪泻褑懈褞 褝泻芯褋懈褋褌械屑.",
    buttonAbout: "袨 薪邪褋",
    buttonDataset: "袨斜蟹芯褉 写邪薪薪褘褏",
    newsTitle: "袧芯胁芯褋褌懈",
    newsText: "袠薪胁械薪褌邪褉懈蟹邪褑懈懈 胁褘斜褉芯褋芯胁 褌褉邪薪褋锌芯褉褌邪 懈 褋械谢褜褋泻芯谐芯 褏芯蟹褟泄褋褌胁邪 写芯褋褌褍锌薪褘.",
    aboutTitle: "袧邪褕懈 薪邪锌褉邪胁谢械薪懈褟",
    aboutText: "啸邪褉邪泻褌械褉懈褋褌懈泻懈 胁褘斜褉芯褋芯胁, 锌械褉械薪芯褋 蟹邪谐褉褟蟹薪械薪懈泄 懈 褝泻芯谢芯谐懈褔械褋泻芯械 胁芯蟹写械泄褋褌胁懈械.",
    teamTitle: "袣芯屑邪薪写邪",
    teamText: "袧邪褕邪 泻芯屑邪薪写邪 锌褉芯写胁懈谐邪械褌 懈褋褋谢械写芯胁邪薪懈褟 锌芯 胁褘斜褉芯褋邪屑 懈 褝泻芯谢芯谐懈懈.",
    resourcesTitle: "袪械褋褍褉褋褘",
    resourcesText: "袩褍斜谢懈褔薪褘械 写邪薪薪褘械 褋 褋褋褘谢泻邪屑懈 薪邪 蟹邪谐褉褍蟹泻褍.",
    downloadsTitle: "笑械薪褌褉 蟹邪谐褉褍蟹芯泻",
    downloadsText: "小泻邪褔懈胁邪泄褌械 锌邪泻械褌褘 写邪薪薪褘褏, 袩袨 懈 写芯泻褍屑械薪褌邪褑懈褞.",
    contactTitle: "袣芯薪褌邪泻褌褘 懈 芯褌蟹褘胁褘",
    contactText: "袨褋褌邪胁褜褌械 蟹邪锌褉芯褋, 胁芯锌褉芯褋褘 懈谢懈 锌褉械写谢芯卸械薪懈褟.",
    contactInfoTitle: "袣芯薪褌邪泻褌褘",
    emailLabel: "Email:",
    addressLabel: "袗写褉械褋:",
    phoneLabel: "孝械谢械褎芯薪:",
    nameLabel: "袠屑褟",
    formEmailLabel: "Email",
    messageLabel: "小芯芯斜褖械薪懈械",
    submitFeedback: "袨褌锌褉邪胁懈褌褜",
    footerOrg: "楔泻芯谢邪 褝泻芯谢芯谐懈褔械褋泻懈褏 薪邪褍泻 懈 懈薪卸械薪械褉懈懈 / 谢邪斜芯褉邪褌芯褉懈褟 / 懈褋褋谢械写芯胁邪褌械谢褜褋泻邪褟 谐褉褍锌锌邪",
    footerCopyright: "漏 2026 Nanjing University of Information Science & Technology",
    footerLegal: [
      "袠褋锌芯谢褜蟹芯胁邪薪懈械 写邪薪薪褘褏: 褌芯谢褜泻芯 写谢褟 懈褋褋谢械写芯胁邪薪懈泄 懈 芯斜褍褔械薪懈褟.",
      "笑懈褌懈褉芯胁邪薪懈械: 褍泻邪卸懈褌械 懈褋褌芯褔薪懈泻.",
      "袟邪锌褉械褖械薪芯 泻芯屑屑械褉褔械褋泻芯械 懈褋锌芯谢褜蟹芯胁邪薪懈械.",
      "袨褌泻邪蟹 芯褌 芯褌胁械褌褋褌胁械薪薪芯褋褌懈: 写邪薪薪褘械 褌芯谢褜泻芯 写谢褟 褋锌褉邪胁泻懈."
    ],
    footerLicense: "ICP 12345678",
    footerEmail: "Email: baojieli@nuist.edu.cn",
    footerAddress: "袗写褉械褋: Xianlin University Town, Nanjing, Jiangsu",
    loginTitle: "袙褏芯写",
    usernameLabel: "袠屑褟 锌芯谢褜蟹芯胁邪褌械谢褟",
    passwordLabel: "袩邪褉芯谢褜",
    loginButton: "袙芯泄褌懈",
    registerLink: "袧械褌 邪泻泻邪褍薪褌邪?",
    registerTitle: "袪械谐懈褋褌褉邪褑懈褟",
    regUsernameLabel: "袠屑褟 锌芯谢褜蟹芯胁邪褌械谢褟",
    regEmailLabel: "Email",
    regPasswordLabel: "袩邪褉芯谢褜",
    confirmPasswordLabel: "袩芯写褌胁械褉写懈褌褜 锌邪褉芯谢褜",
    registerButton: "袟邪褉械谐懈褋褌褉懈褉芯胁邪褌褜褋褟",
    loginLink: "校卸械 械褋褌褜 邪泻泻邪褍薪褌?"
  },
  ar: {
    pageTitle: "賲禺鬲亘乇 丕賳亘毓丕孬丕鬲 丕賱賲氐丿乇 賵丕賱鬲兀孬賷乇 丕賱亘賷卅賷",
    languageLabel: "丕賱賱睾丞",
    navHome: "丕賱乇卅賷爻賷丞",
    navResources: "賲氐丕丿乇 丕賱亘賷丕賳丕鬲",
    navDownloads: "丕賱鬲賳夭賷賱丕鬲",
    navAbout: "賲賳 賳丨賳",
    navContact: "丕鬲氐賱",
    navLogin: "鬲爻噩賷賱 丕賱丿禺賵賱",
    navRegister: "丕賱鬲爻噩賷賱",
    searchPlaceholder: "丕亘丨孬 毓賳 亘賷丕賳丕鬲貙 賲賳卮賵乇丕鬲 賵鬲賳夭賷賱丕鬲...",
    statLabel: "丕賱夭賷丕乇丕鬲",
    announcementItems: [
      "廿卮毓丕乇 鬲丨丿賷孬 丕賱亘賷丕賳丕鬲: 鬲賲 賲夭丕賲賳丞 兀丨丿孬 丕賱噩丿丕賵賱.",
      "丕賱廿氐丿丕乇: 丕賱廿氐丿丕乇 1.2 賲鬲丕丨 賲毓 鬲丨爻賷賳 丕賱鬲賳夭賷賱.",
      "丕賱丕爻鬲禺丿丕賲: 賱賱亘丨孬 賵丕賱鬲毓賱賷賲 賮賯胤."
    ],
    eyebrow: "毓乇囟 丕賱賲噩賲賵毓丞",
    heroTitle: "丕賳亘毓丕孬丕鬲 丕賱賲氐丿乇 賵丕賱鬲兀孬賷乇 丕賱亘賷卅賷",
    heroText: "賳乇賰夭 毓賱賶 賲氐丕丿乇 丕賱丕賳亘毓丕孬 賵賲爻丕乇丕鬲 丕賱鬲賱賵孬 賵丕爻鬲噩丕亘丞 丕賱賳馗丕賲 丕賱亘賷卅賷.",
    buttonAbout: "賲賳 賳丨賳",
    buttonDataset: "毓乇囟 丕賱亘賷丕賳丕鬲",
    newsTitle: "丌禺乇 丕賱兀禺亘丕乇",
    newsText: "噩丿丕賵賱 丕賳亘毓丕孬丕鬲 丕賱賲乇賵乇 賵丕賱夭乇丕毓丞 賲鬲丕丨丞 丕賱丌賳.",
    aboutTitle: "賲噩丕賱丕鬲 亘丨孬賳丕",
    aboutText: "禺氐丕卅氐 丕賱丕賳亘毓丕孬貙 賳賯賱 丕賱賲賱賵孬丕鬲 賵丕賱鬲兀孬賷乇 丕賱亘賷卅賷.",
    teamTitle: "丕賱賮乇賷賯",
    teamText: "賮乇賷賯賳丕 賷丿毓賲 丕賱丿乇丕爻丕鬲 丕賱鬲胤亘賷賯賷丞 賱賱丕賳亘毓丕孬丕鬲 賵丕賱亘賷卅丞.",
    resourcesTitle: "賲氐丕丿乇 丕賱亘賷丕賳丕鬲",
    resourcesText: "亘賷丕賳丕鬲 毓丕賲丞 賲毓 乇賵丕亘胤 鬲賳夭賷賱.",
    downloadsTitle: "賲乇賰夭 丕賱鬲賳夭賷賱丕鬲",
    downloadsText: "鬲丨賲賷賱 丨夭賲 丕賱亘賷丕賳丕鬲 賵丕賱亘乇丕賲噩 賵丕賱賵孬丕卅賯.",
    contactTitle: "丕鬲氐賱 亘賳丕",
    contactText: "兀乇爻賱 胤賱亘賰貙 爻丐丕賱 丕賱丕爻鬲禺丿丕賲 兀賵 丕賯鬲乇丕丨 丕賱鬲毓丕賵賳.",
    contactInfoTitle: "賲毓賱賵賲丕鬲 丕賱丕鬲氐丕賱",
    emailLabel: "丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷:",
    addressLabel: "丕賱毓賳賵丕賳:",
    phoneLabel: "丕賱賴丕鬲賮:",
    nameLabel: "丕賱丕爻賲",
    formEmailLabel: "丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
    messageLabel: "丕賱乇爻丕賱丞",
    submitFeedback: "廿乇爻丕賱",
    footerOrg: "賰賱賷丞 毓賱賵賲 丕賱亘賷卅丞 賵丕賱賴賳丿爻丞 / 丕賱賲禺鬲亘乇 / 賲噩賲賵毓丞 丕賱亘丨孬",
    footerCopyright: "漏 2026 Nanjing University of Information Science & Technology",
    footerLegal: [
      "丕爻鬲禺丿丕賲 丕賱亘賷丕賳丕鬲: 賱賱亘丨孬 賵丕賱鬲毓賱賷賲 賮賯胤.",
      "丕賱丕爻鬲卮賴丕丿: 賷乇噩賶 匕賰乇 丕賱賲氐丿乇.",
      "賲賲賳賵毓 丕賱丕爻鬲禺丿丕賲 丕賱鬲噩丕乇賷.",
      "廿禺賱丕亍 丕賱賲爻丐賵賱賷丞: 丕賱亘賷丕賳丕鬲 賱賱賲乇噩毓 賮賯胤."
    ],
    footerLicense: "ICP 12345678",
    footerEmail: "丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷: baojieli@nuist.edu.cn",
    footerAddress: "丕賱毓賳賵丕賳: 賲丿賷賳丞 噩丕賲毓丞 卮賷丕賳賱賷賳貙 賳丕賳噩賷賳睾貙 噩賷丕賳睾爻賵",
    loginTitle: "鬲爻噩賷賱 丕賱丿禺賵賱",
    usernameLabel: "丕爻賲 丕賱賲爻鬲禺丿賲",
    passwordLabel: "賰賱賲丞 丕賱賲乇賵乇",
    loginButton: "鬲爻噩賷賱 丕賱丿禺賵賱",
    registerLink: "賱賷爻 賱丿賷賰 丨爻丕亘責",
    registerTitle: "丕賱鬲爻噩賷賱",
    regUsernameLabel: "丕爻賲 丕賱賲爻鬲禺丿賲",
    regEmailLabel: "丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
    regPasswordLabel: "賰賱賲丞 丕賱賲乇賵乇",
    confirmPasswordLabel: "鬲兀賰賷丿 賰賱賲丞 丕賱賲乇賵乇",
    registerButton: "爻噩賱",
    loginLink: "賱丿賷賰 丨爻丕亘 亘丕賱賮毓賱責"
  }
};

const teamData = {
  zh: [
    {
      name: "李保杰",
      role: "教授",
      research: "活性氮排放及其大气环境效应",
      photo: "assets/teachers/libaojie.png",
      link: "https://faculty.nuist.edu.cn/libaojie/zh_CN/index.htm"
    },
    {
      name: "廖宏",
      role: "团队PI",
      research: "大气环境与气候变化",
      photo: "assets/teachers/liaohong.jpg",
      photoClass: "team-photo-liaohong",
      link: "https://faculty.nuist.edu.cn/liaohong/zh_CN/index.htm"
    },
    {
      name: "古王立今",
      role: "农业NH3",
      research: "",
      photo: "人物卡片/古王立今.jpg",
      photoClass: "team-photo-guwangjinli"
    },
    {
      name: "沈志慧",
      role: "乘用车排放清单",
      research: "",
      photo: "人物卡片/沈志慧.jpg",
      photoClass: "team-photo-shenzhihui"
    },
    {
      name: "刘俊杰",
      role: "种植业CH4",
      research: "",
      photo: "人物卡片/刘俊杰.jpg",
      photoClass: "team-photo-yangjunjie"
    },
    {
      name: "张薇檬",
      role: "NH3和NOx",
      research: "",
      photo: "人物卡片/张薇檬.jpg",
      photoClass: "team-photo-zhangweimeng"
    },
    {
      name: "唐峻天",
      role: "畜牧CH4",
      research: "",
      photo: "人物卡片/唐峻天.jpg",
      photoClass: "team-photo-tangjuntian"
    },
    {
      name: "张家宁",
      role: "技术支持",
      research: "",
      photo: "人物卡片/张家宁.jpg",
      photoClass: "team-photo-zhangjianing"
    }
  ]
};

const datasets = [
  {
    title: {
      zh: "其他排放清单",
      en: "Other Emission Inventory",
      fr: "Autres inventaires d'émissions",
      es: "Otros inventarios de emisiones",
      ru: "Другие кадастры выбросов",
      ar: "قوائم انبعاثات أخرى"
    },
    description: {
      zh: "基于路网与车辆活动的 NOx、PM2.5 与 CO2 排放数据，支持分区域分析与时段对比。",
      en: "NOx/PM2.5/CO2 emissions based on road networks and vehicle activity, supporting regional analysis and time comparisons.",
      fr: "Émissions de NOx/PM2.5/CO2 fondées sur le réseau routier et l'activité des véhicules.",
      es: "Emisiones de NOx/PM2.5/CO2 basadas en la red vial y la actividad vehicular.",
      ru: "Выбросы NOx/PM2.5/CO2 на основе дорожной сети и активности транспорта.",
      ar: "انبعاثات NOx/PM2.5/CO2 بناءً على شبكات الطرق ونشاط المركبات."
    },
    tags: {
      zh: ["交通", "NOx", "PM2.5", "CO2"],
      en: ["Traffic", "NOx", "PM2.5", "CO2"],
      fr: ["Trafic", "NOx", "PM2.5", "CO2"],
      es: ["Tráfico", "NOx", "PM2.5", "CO2"],
      ru: ["Трафик", "NOx", "PM2.5", "CO2"],
      ar: ["المرور", "NOx", "PM2.5", "CO2"]
    },
    link: "#"
  },
  {
    title: {
      zh: "农业源排放清单",
      en: "Agricultural SLCFs Emission Data (ASLCFs)",
      fr: "Inventaire des émissions agricoles",
      es: "Inventario de emisiones agrícolas",
      ru: "Инвентаризация сельскохозяйственных выбросов",
      ar: "جرد انبعاثات الزراعة"
    },
    description: {
      zh: "包含化肥施用、畜禽养殖与秸秆焚烧等农业源排放强度及空间分布数据。",
      en: "Includes fertilizer, livestock, and straw burning emissions with intensity and spatial distribution.",
      fr: "Comprend les émissions des engrais, de l'élevage et de la combustion de paille.",
      es: "Incluye emisiones de fertilizantes, ganado y quema de rastrojos.",
      ru: "Включает выбросы удобрений, животноводства и сжигания соломы.",
      ar: "تشمل انبعاثات الأسمدة والثروة الحيوانية وحرق القش مع التوزيع المكاني."
    },
    tags: {
      zh: ["农业", "NH3", "VOC", "生态环境"],
      en: ["Agriculture", "NH3", "VOC", "Ecosystem"],
      fr: ["Agriculture", "NH3", "VOC", "Écosystème"],
      es: ["Agricultura", "NH3", "VOC", "Ecosistema"],
      ru: ["Сельское хозяйство", "NH3", "VOC", "Экосистема"],
      ar: ["الزراعة", "NH3", "VOC", "النظام البيئي"]
    },
    link: "#"
  },
  {
    title: {
      zh: "工业与能源排放整合数据",
      en: "Industrial & Energy Emission Dataset",
      fr: "Jeu de données émissions industrielles et énergétiques",
      es: "Conjunto de datos de emisiones industriales y energéticas",
      ru: "Данные по выбросам промышленности и энергетики",
      ar: "مجموعة بيانات انبعاثات الصناعة والطاقة"
    },
    description: {
      zh: "覆盖重点行业、燃料类型与排放因子，适用于政策评估与减排模拟。",
      en: "Covers key industries, fuel types and emission factors for policy assessment and mitigation modeling.",
      fr: "Couvre les secteurs clés, les types de carburant et les facteurs d'émission.",
      es: "Cubre sectores clave, tipos de combustible y factores de emisión.",
      ru: "Охватывает ключевые отрасли, виды топлива и коэффициенты выбросов.",
      ar: "يشمل القطاعات الرئيسية وأنواع الوقود وعوامل الانبعاث للتقييم والسياسات."
    },
    tags: {
      zh: ["工业", "能源", "排放因子", "共享"],
      en: ["Industry", "Energy", "Emission Factors", "Shared"],
      fr: ["Industrie", "Énergie", "Facteurs d'émission", "Partage"],
      es: ["Industria", "Energía", "Factores de emisión", "Compartido"],
      ru: ["Промышленность", "Энергия", "Факторы выбросов", "Общие"],
      ar: ["الصناعة", "الطاقة", "عوامل الانبعاث", "مشاركة"]
    },
    link: "#"
  }
];

const paperCollections = [
  {
    group: "2026年",
    entries: [
      {
        language: "en",
        citation: "Baojie Li*, Zhihui Shen, Yan Li, Yongqi Zhao, Wanglijin Gu, Junjie Liu, Yunkai Yang, Weimeng Zhang, Ziqian Ma and Hong Liao*. An improved high-resolution passenger vehicle emission inventory for China using ride-hailing big data. Atmospheric Chemistry and Physics, 2026, 6197-6211."
      },
      {
        language: "en",
        citation: "Ruijie Mu, Baojie Li*, Wanglijin Gu, Liang Chen, Junjie Liu, Weimeng Zhang, Kaihua Liao, Qing Zhu and Hong Liao. Ammonia emissions and crop yields in China to 2060 under SSP-RCP scenarios with climate change and nitrogen fertilization attribution. Environmental Research Letters, 2026, 21: 054020."
      }
    ]
  },
  {
    group: "2025年",
    entries: [
      {
        language: "en",
        citation: "Zizun Wei, Baojie Li*, Yunkai Yang, Wanglijin Gu, Junjie Liu and Qing Zhu*. Mitigation Potential of Greenhouse Gas Emissions Through Nitrogen-Water Management Optimization in Major Asian Rice Regions. Earth's Future, 2025, 13, e2025EF006740."
      },
      {
        language: "en",
        citation: "Baojie Li, Hong Liao*, Ke Li, Jintai Lin, Cheng Gong, Huan Liu, Yan Li, Lei Chen, Yang Yang, Xipeng Jin, Yongqi Zhao, Teng Wang, Jianbing Jin, Ruijun Dang and Daniel J. Jacob. Environmental burden and health inequity in China's road-based express delivery. Nature Cities, 2025. https://doi.org/10.1038/s44284-025-00300-3."
      },
      {
        language: "en",
        citation: "Weimeng Zhang, Baojie Li*, Junjie Liu, Wanglijin Gu, Yan Li, Kaihua Liao, Qing Zhu. High-resolution livestock spatial distribution mapping in China based on big data and applications in ammonia emission inventories. Journal of Cleaner Production, 2025, 520: 146097."
      }
    ]
  },
  {
    group: "2024年",
    entries: [
      {
        language: "en",
        citation: "Baojie Li, Hong Liao*, Ke Li, Ye Wang, Lin Zhang, Yixin Guo, Lei Liu, Jingyi Li, Jianbing Jin, Yang Yang, Cheng Gong, Teng Wang, Weishou Shen, Pinya Wang, Ruijun Dang, Kaihua Liao, Qing Zhu, Daniel J. Jacob. Unlocking nitrogen management potential via large-scale farming for air quality and substantial Co-benefits. National Science Review, 2024, 11(10): nwae324."
      },
      {
        language: "en",
        citation: "Baojie Li*, Wanglijin Gu, Yongqi Zhao, Zhifei Zhang, Xiaorui Wang, Yunkai Yang, Zhihui Shen, Hong Liao, Qing Zhu. Differentiated strategies for synergistic mitigation of ammonia and methane emissions from agricultural cropping systems in China. Agricultural and Forest Meteorology, 2024, 358: 110250."
      },
      {
        language: "en",
        citation: "Cong Gan, Baojie Li*, Jinyan Dong, Yan Li, Yongqi Zhao, Teng Wang, Yang Yang and Hong Liao. Atmospheric HONO emissions in China: Unraveling the spatiotemporal patterns and their key influencing factors. Environmental Pollution, 2024, 343: 123228."
      }
    ]
  },
  {
    group: "2023年",
    entries: [
      {
        language: "en",
        citation: "Chu Sun, Baojie Li*, Lei Chen, Yucheng Gao, Jianbing Jin, Xuan Gu, Yang Yang, Yuxiang Lou, Yongqi Zhao and Hong Liao*. An improved hourly-resolved atmospheric NOx emission inventory of industrial sources based on Continuous Emission Monitoring System data: Case of Jiangsu Province, China. Journal of Cleaner Production, 2023, 419: 138192."
      },
      {
        language: "en",
        citation: "Yongqi Zhao, Baojie Li*, Jinyan Dong, Yan Li, Xueqing Wang, Cong Gan, Yingzhen Lin, and Hong Liao. Improved ammonia emission inventory of fertilizer application for three major crops in China based on phenological data. Science of The Total Environment, 2023, 896: 165225."
      }
    ]
  },
  {
    group: "2022年",
    entries: [
      {
        language: "en",
        citation: "Xuan Gu, Baojie Li*, Chu Sun, Hong Liao, Yongqi Zhao and Yang Yang. An improved hourly-resolved NOx emission inventory for power plants based on continuous emission monitoring system (CEMS) database: A case in Jiangsu, China. Journal of Cleaner Production, 2022, 369: 133176."
      }
    ]
  },
  {
    group: "2021年",
    entries: [
      {
        language: "en",
        citation: "Baojie Li, Lei Chen, Weishou Shen, Jianbing Jin, Teng Wang, Pinya Wang, Yang Yang, and Hong Liao*. Improved gridded ammonia emission inventory in China. Atmospheric Chemistry and Physics, 2021, 21(20): 15883-15900."
      },
      {
        language: "en",
        citation: "Teng Wang, Baojie Li*, Hong Liao* and Yan Li. Spatiotemporal distribution of atmospheric polycyclic aromatic hydrocarbon emissions during 2013-2017 in mainland China. Science of The Total Environment, 2021: 148003."
      }
    ]
  },
  {
    group: "2020年及以前",
    entries: [
      {
        language: "en",
        citation: "Baojie Li, Junxiao Wang, Shaohua Wu, Zhenyi Jia, Yan Li, Teng Wang and Shenglu Zhou. New Method for Improving Spatial Allocation Accuracy of Industrial Energy Consumption and Implications for Polycyclic Aromatic Hydrocarbon Emissions in China. Environmental Science & Technology, 2019, 53(8): 4326-4334."
      }
    ]
  }
];

const downloads = {
  zh: [
    {
      title: "排放清单模板",
      description: "CSV 模板文件，适合整理行业、区域、污染物、活动水平和排放量等基础字段。",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "字段说明文档",
      description: "列出推荐字段、单位填写方式和命名建议，方便上传前统一格式。",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "接入与发布说明",
      description: "说明如何把新的排放清单上传到网页目录，并在前端生成用户下载入口。",
      link: "assets/downloads/README.txt"
    }
  ],
  en: [
    {
      title: "Emission Inventory Template",
      description: "CSV template for sector, region, pollutant, activity level and emissions.",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "Field Description",
      description: "Recommended fields, units and naming guidance before publishing.",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "Publishing Guide",
      description: "How to upload a new inventory file and expose it on the download page.",
      link: "assets/downloads/README.txt"
    }
  ],
  fr: [
    {
      title: "Modèle d'inventaire d'émissions",
      description: "Modèle CSV pour les secteurs, régions, polluants et émissions.",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "Description des champs",
      description: "Champs recommandés, unités et règles de nommage.",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "Guide de publication",
      description: "Comment téléverser et publier un nouvel inventaire sur le site.",
      link: "assets/downloads/README.txt"
    }
  ],
  es: [
    {
      title: "Plantilla de inventario de emisiones",
      description: "Plantilla CSV para sector, región, contaminante y emisiones.",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "Descripción de campos",
      description: "Campos recomendados, unidades y reglas de nomenclatura.",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "Guía de publicación",
      description: "Cómo subir un nuevo inventario y mostrarlo para descarga.",
      link: "assets/downloads/README.txt"
    }
  ],
  ru: [
    {
      title: "Шаблон инвентаризации выбросов",
      description: "CSV-шаблон для отрасли, региона, загрязнителя и объема выбросов.",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "Описание полей",
      description: "Рекомендуемые поля, единицы измерения и правила именования.",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "Руководство по публикации",
      description: "Как загрузить и опубликовать новый файл для скачивания.",
      link: "assets/downloads/README.txt"
    }
  ],
  ar: [
    {
      title: "قالب جرد الانبعاثات",
      description: "ملف CSV منظم للقطاع والمنطقة والملوثات وكميات الانبعاث.",
      link: "assets/downloads/emission_inventory_template.csv"
    },
    {
      title: "شرح الحقول",
      description: "الحقول الموصى بها ووحدات القياس وقواعد التسمية.",
      link: "assets/downloads/emission_inventory_fields.txt"
    },
    {
      title: "دليل النشر",
      description: "كيفية رفع ملف جديد وإظهاره للمستخدمين للتنزيل.",
      link: "assets/downloads/README.txt"
    }
  ]
};

const rasterInventoryConfig = {
  years: Array.from({ length: 24 }, (_, index) => String(2000 + index)),
  pollutant: "NH3",
  mainCategory: "NH3排放清单",
  timeSubjects: ["livestock"],
  speciesSubjects: ["猪", "牛", "奶牛", "羊", "家禽", "其他"],
  cropSubjects: ["水稻", "小麦", "玉米", "其他作物"],
  passengerCarPollutants: ["CO", "NH3", "NOx", "PM", "VOC"],
  methaneSourceSubjects: ["甲烷总排放量", "水稻种植", "粪便管理", "肠道发酵"],
  monthlyPeriods: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  annualPeriod: "Annual",
  pageSize: 20
};

const rasterInventoryState = {
  items: [],
  filteredItems: [],
  page: 1,
  dynamicLoaded: false,
  sidebarMainCategory: "",
  sidebarSector: "",
  sidebarCategory: "",
  sidebarSubjects: []
};

const VISIT_BASE_COUNT = 6124;
const supportedLanguages = ["zh", "en"];
let currentLanguage = "zh";
let currentSearch = "";

const sitePageMap = {
  "index.html": "home",
  "resources.html": "resources",
  "papers.html": "papers",
  "downloads.html": "downloads",
  "about.html": "about",
  "contact.html": "contact",
  "login.html": "login",
  "register.html": "register",
  "forgot-password.html": "forgot-password",
  "reset-password.html": "reset-password",
  "admin.html": "admin"
};

function getCurrentPageKey() {
  const explicitPage = document.body.dataset.page;
  if (explicitPage) return explicitPage;

  const path = window.location.pathname.split("/").pop() || "index.html";
  return sitePageMap[path] || "";
}

function createSiteHeaderMarkup(activePage) {
  const navItems = [
    { id: "navHome", href: "index.html", label: "首页", page: "home" },
    { id: "navResources", href: "resources.html", label: "数据资源", page: "resources" },
    { id: "navPapers", href: "papers.html", label: "论文成果", page: "papers" },
    { id: "navDownloads", href: "downloads.html", label: "下载中心", page: "downloads" },
    { id: "navAbout", href: "about.html", label: "关于我们", page: "about" },
    { id: "navContact", href: "contact.html", label: "联系反馈", page: "contact" },
    { id: "navLogin", href: "login.html", label: "登录", page: "login" },
    { id: "navRegister", href: "register.html", label: "注册", page: "register" },
    { id: "navAdmin", href: "admin.html", label: "管理员", page: "admin", className: "admin-only" }
  ];

  const navMarkup = navItems.map((item) => {
    const classes = [
      item.page === activePage ? "active" : "",
      item.className || ""
    ].filter(Boolean).join(" ");
    const classAttribute = classes ? ` class="${classes}"` : "";
    return `<a href="${item.href}" id="${item.id}"${classAttribute}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="container">
        <a href="index.html" class="brand">
          <img src="logo.png" alt="南京信息工程大学校徽" class="brand-logo" />
          <div class="brand-copy">
            <p class="brand-name">南京信息工程大学</p>
            <p class="brand-subtitle">环境科学与工程学院</p>
          </div>
        </a>

        <nav class="site-nav" aria-label="主导航">
          ${navMarkup}
        </nav>

        <div class="site-actions">
          <form id="searchForm" class="search-form" aria-label="站点搜索">
            <input id="searchInput" type="search" placeholder="${pageData.zh.searchPlaceholder}" />
            <button type="submit">搜索</button>
          </form>
          <select id="languageSelect" class="language-select" aria-label="语言">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
          <div class="visit-stats">
            <span id="statLabel">访问统计</span>
            <strong id="visitCount">0</strong>
          </div>
        </div>
      </div>
    </header>
  `;
}

function createAnnouncementMarkup() {
  return `
    <div class="announcement-bar" aria-live="polite">
      <div class="ticker">
        <span id="tickerText">${pageData.zh.announcementItems.join(" · ")}</span>
      </div>
    </div>
  `;
}

function createSiteFooterMarkup() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-column">
          <p class="footer-title">机构信息</p>
          <p id="footerOrg">南京信息工程大学环境科学与工程学院 / 农业SLCFs排放数据集</p>
          <p id="footerCopyright">© 2026 南京信息工程大学</p>
        </div>
        <div class="footer-column">
          <p class="footer-title">使用声明</p>
          <ul class="legal-list">
            <li id="footerLegal1">数据使用规范：仅限科研与教学用途。</li>
            <li id="footerLegal2">引用要求：请注明来自于ASLCFs排放数据集，并引用相关文章。</li>
            <li id="footerLegal3">数据用途：本数据仅限于科研与教学用途，严禁商用。</li>
            <li id="footerLegal4">免责声明：数据仅供参考，不构成政策依据。</li>
          </ul>
        </div>
        <div class="footer-column">
          <p class="footer-title">联系方式</p>
          <p id="footerLicense" hidden>备案号：苏 ICP 备 12345678 号</p>
          <p id="footerEmail">邮箱：baojieli@nuist.edu.cn</p>
          <p id="footerAddress">地址：江苏省南京市宁六路219号</p>
        </div>
      </div>
      <p class="footer-note">本站页面与样例数据仅用于科研展示与教学交流。</p>
    </footer>
  `;
}

function renderSharedLayout() {
  const headerSlot = document.getElementById("site-header-slot");
  const announcementSlot = document.getElementById("site-announcement-slot");
  const footerSlot = document.getElementById("site-footer-slot");
  const activePage = getCurrentPageKey();

  if (headerSlot) {
    headerSlot.innerHTML = createSiteHeaderMarkup(activePage);
  }

  if (announcementSlot) {
    announcementSlot.innerHTML = createAnnouncementMarkup();
  }

  if (footerSlot) {
    footerSlot.innerHTML = createSiteFooterMarkup();
  }
}

function getLocalizedDocumentTitle(page) {
  const pageKey = getCurrentPageKey();
  const titleMap = {
    home: page.pageTitle,
    resources: `${page.resourcesTitle} - ${page.pageTitle}`,
    papers: `${page.papersTitle} - ${page.pageTitle}`,
    downloads: `${page.downloadsTitle} - ${page.pageTitle}`,
    about: `${page.navAbout} - ${page.pageTitle}`,
    contact: `${page.contactTitle} - ${page.pageTitle}`,
    login: `${page.loginTitle} - ${page.pageTitle}`,
    register: `${page.registerTitle} - ${page.pageTitle}`,
    "forgot-password": `${page.forgotPasswordTitle || "找回密码"} - ${page.pageTitle}`,
    "reset-password": `${page.resetPasswordTitle || "重置密码"} - ${page.pageTitle}`,
    admin: `${currentLanguage === "zh" ? "管理员面板" : "Admin Panel"} - ${page.pageTitle}`,
    teachers: `${currentLanguage === "zh" ? "课题组教师" : "Faculty Directory"} - ${page.pageTitle}`
  };

  return titleMap[pageKey] || document.title || page.pageTitle;
}

function setLanguage(lang) {
  currentLanguage = supportedLanguages.includes(lang) ? lang : "zh";
  localStorage.setItem("pageLanguage", currentLanguage);
  const page = pageData[currentLanguage];
  const searchInput = document.getElementById("searchInput");
  const papersPageActive = Boolean(document.getElementById("paperList"));
  document.title = getLocalizedDocumentTitle(page);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
  document.documentElement.dir = "ltr";
  document.body.classList.remove("rtl");
  document.getElementById("languageSelect").value = currentLanguage;
  if (searchInput) {
    searchInput.placeholder = papersPageActive
      ? (page.papersSearchPlaceholder || page.searchPlaceholder)
      : page.searchPlaceholder;
  }
  document.getElementById("statLabel").textContent = page.statLabel + ":";
  document.getElementById("navHome").textContent = page.navHome;
  document.getElementById("navResources").textContent = page.navResources;
  if (document.getElementById("navPapers")) document.getElementById("navPapers").textContent = page.navPapers || pageData.zh.navPapers;
  document.getElementById("navDownloads").textContent = page.navDownloads;
  document.getElementById("navAbout").textContent = page.navAbout;
  document.getElementById("navContact").textContent = page.navContact;
  document.getElementById("navLogin").textContent = page.navLogin;
  document.getElementById("navRegister").textContent = page.navRegister;
  
  // Update page-specific elements if they exist
  if (document.getElementById("eyebrowText")) document.getElementById("eyebrowText").textContent = page.eyebrow;
  if (document.getElementById("aboutTitle")) document.getElementById("aboutTitle").textContent = page.aboutTitle;
  if (document.getElementById("aboutText")) document.getElementById("aboutText").textContent = page.aboutText;
  if (document.getElementById("teamTitle")) document.getElementById("teamTitle").textContent = page.teamTitle;
  if (document.getElementById("teamText")) document.getElementById("teamText").textContent = page.teamText;
  if (document.getElementById("buttonAbout")) document.getElementById("buttonAbout").textContent = page.buttonAbout;
  if (document.getElementById("buttonDataset")) document.getElementById("buttonDataset").textContent = page.buttonDataset;
  if (document.getElementById("resourcesTitle")) document.getElementById("resourcesTitle").textContent = page.resourcesTitle;
  if (document.getElementById("resourcesText")) document.getElementById("resourcesText").textContent = page.resourcesText;
  if (document.getElementById("papersTitle")) document.getElementById("papersTitle").textContent = page.papersTitle || pageData.zh.papersTitle;
  if (document.getElementById("downloadsTitle")) document.getElementById("downloadsTitle").textContent = page.downloadsTitle;
  if (document.getElementById("downloadsText")) document.getElementById("downloadsText").textContent = page.downloadsText;
  if (document.getElementById("dataTypeEmission")) document.getElementById("dataTypeEmission").textContent = page.dataTypeEmission || pageData.zh.dataTypeEmission;
  if (document.getElementById("descEmissionText")) document.getElementById("descEmissionText").textContent = page.descEmissionText || pageData.zh.descEmissionText;
  if (document.getElementById("emissionCitationTitle")) document.getElementById("emissionCitationTitle").textContent = page.citationTitle || pageData.zh.citationTitle;
  if (document.getElementById("emissionCitationNote")) document.getElementById("emissionCitationNote").textContent = page.emissionCitationNote || pageData.zh.emissionCitationNote;
  if (document.getElementById("emissionCitationText")) document.getElementById("emissionCitationText").textContent = page.emissionCitationText || pageData.zh.emissionCitationText;
  if (document.getElementById("filterYearLabel")) document.getElementById("filterYearLabel").textContent = page.filterYearLabel || pageData.zh.filterYearLabel;
  if (document.getElementById("filterCategoryLabel")) document.getElementById("filterCategoryLabel").textContent = page.filterCategoryLabel || pageData.zh.filterCategoryLabel;
  if (document.getElementById("filterScaleLabel")) document.getElementById("filterScaleLabel").textContent = page.filterScaleLabel || pageData.zh.filterScaleLabel;
  if (document.getElementById("buttonSearchDownload")) document.getElementById("buttonSearchDownload").textContent = page.buttonSearchDownload || pageData.zh.buttonSearchDownload;
  if (document.getElementById("contactTitle")) document.getElementById("contactTitle").textContent = page.contactTitle;
  if (document.getElementById("contactText")) document.getElementById("contactText").textContent = page.contactText;
  if (document.getElementById("contactInfoTitle")) document.getElementById("contactInfoTitle").textContent = page.contactInfoTitle;
  if (document.getElementById("emailLabel")) document.getElementById("emailLabel").textContent = page.emailLabel;
  if (document.getElementById("addressLabel")) document.getElementById("addressLabel").textContent = page.addressLabel;
  if (document.getElementById("phoneLabel")) document.getElementById("phoneLabel").textContent = page.phoneLabel;
  if (document.getElementById("nameLabel")) document.getElementById("nameLabel").textContent = page.nameLabel;
  if (document.getElementById("formEmailLabel")) document.getElementById("formEmailLabel").textContent = page.formEmailLabel;
  if (document.getElementById("contactSubjectLabel")) document.getElementById("contactSubjectLabel").textContent = page.contactSubjectLabel || pageData.zh.contactSubjectLabel;
  if (document.getElementById("messageLabel")) document.getElementById("messageLabel").textContent = page.messageLabel;
  if (document.getElementById("message")) document.getElementById("message").placeholder = page.messagePlaceholder || pageData.zh.messagePlaceholder;
  if (document.getElementById("submitFeedback")) document.getElementById("submitFeedback").textContent = page.submitFeedback;
  if (document.getElementById("contactHoursTitle")) document.getElementById("contactHoursTitle").textContent = page.contactHoursTitle || pageData.zh.contactHoursTitle;
  if (document.getElementById("contactHoursWeekday")) document.getElementById("contactHoursWeekday").textContent = page.contactHoursWeekday || pageData.zh.contactHoursWeekday;
  if (document.getElementById("contactHoursWeekend")) document.getElementById("contactHoursWeekend").textContent = page.contactHoursWeekend || pageData.zh.contactHoursWeekend;
  if (document.getElementById("heroTitle")) document.getElementById("heroTitle").textContent = page.heroTitle;
  if (document.getElementById("heroText")) document.getElementById("heroText").textContent = page.heroText;
  if (document.getElementById("newsTitle")) document.getElementById("newsTitle").textContent = page.newsTitle;
  if (document.getElementById("newsText")) document.getElementById("newsText").textContent = page.newsText;
  
  // Update login/register elements if they exist
  if (document.getElementById("loginTitle")) document.getElementById("loginTitle").textContent = page.loginTitle;
  if (document.getElementById("usernameLabel")) document.getElementById("usernameLabel").textContent = page.usernameLabel;
  if (document.getElementById("passwordLabel")) document.getElementById("passwordLabel").textContent = page.passwordLabel;
  if (document.getElementById("loginButton")) document.getElementById("loginButton").textContent = page.loginButton;
  if (document.getElementById("registerLink")) document.getElementById("registerLink").innerHTML = page.registerLink + ' <a href="register.html">' + page.navRegister + '</a>';
  if (document.getElementById("registerTitle")) document.getElementById("registerTitle").textContent = page.registerTitle;
  if (document.getElementById("regUsernameLabel")) document.getElementById("regUsernameLabel").textContent = page.regUsernameLabel;
  if (document.getElementById("regInstitutionLabel")) document.getElementById("regInstitutionLabel").textContent = page.regInstitutionLabel || pageData.zh.regInstitutionLabel;
  if (document.getElementById("regTitleLabel")) document.getElementById("regTitleLabel").textContent = page.regTitleLabel || pageData.zh.regTitleLabel;
  if (document.getElementById("regAdvisorLabel")) document.getElementById("regAdvisorLabel").textContent = page.regAdvisorLabel || pageData.zh.regAdvisorLabel;
  if (document.getElementById("regAdvisorHint")) document.getElementById("regAdvisorHint").textContent = page.regAdvisorHint || pageData.zh.regAdvisorHint;
  if (document.getElementById("regEmailLabel")) document.getElementById("regEmailLabel").textContent = page.regEmailLabel;
  if (document.getElementById("regEmailHint")) document.getElementById("regEmailHint").textContent = page.regEmailHint || pageData.zh.regEmailHint;
  if (document.getElementById("regPasswordLabel")) document.getElementById("regPasswordLabel").textContent = page.regPasswordLabel;
  if (document.getElementById("confirmPasswordLabel")) document.getElementById("confirmPasswordLabel").textContent = page.confirmPasswordLabel;
  if (document.getElementById("registerButton")) document.getElementById("registerButton").textContent = page.registerButton;
  if (document.getElementById("loginLink")) document.getElementById("loginLink").innerHTML = page.loginLink + ' <a href="login.html">' + page.navLogin + '</a>';
  updateRegisterTitleOptions(page);
  if (document.getElementById("forgotPasswordTitle")) document.getElementById("forgotPasswordTitle").textContent = page.forgotPasswordTitle || pageData.zh.forgotPasswordTitle;
  if (document.getElementById("forgotPasswordText")) document.getElementById("forgotPasswordText").textContent = page.forgotPasswordText || pageData.zh.forgotPasswordText;
  if (document.getElementById("resetPasswordTitle")) document.getElementById("resetPasswordTitle").textContent = page.resetPasswordTitle || pageData.zh.resetPasswordTitle;
  if (document.getElementById("resetPasswordText")) document.getElementById("resetPasswordText").textContent = page.resetPasswordText || pageData.zh.resetPasswordText;
  if (document.getElementById("resetEmailLabel")) document.getElementById("resetEmailLabel").textContent = page.resetEmailLabel || pageData.zh.resetEmailLabel;
  if (document.getElementById("sendResetLinkButton")) document.getElementById("sendResetLinkButton").textContent = page.sendResetLinkButton || pageData.zh.sendResetLinkButton;
  if (document.getElementById("newPasswordLabel")) document.getElementById("newPasswordLabel").textContent = page.newPasswordLabel || pageData.zh.newPasswordLabel;
  if (document.getElementById("confirmNewPasswordLabel")) document.getElementById("confirmNewPasswordLabel").textContent = page.confirmNewPasswordLabel || pageData.zh.confirmNewPasswordLabel;
  if (document.getElementById("resetPasswordButton")) document.getElementById("resetPasswordButton").textContent = page.resetPasswordButton || pageData.zh.resetPasswordButton;
  if (document.getElementById("backToLoginLink")) document.getElementById("backToLoginLink").innerHTML = `${page.backToLoginLink || pageData.zh.backToLoginLink} <a href="login.html">${page.navLogin}</a>`;

  loadAnnouncements(currentLanguage);
  if (document.getElementById("teamList")) renderTeam();
  if (document.getElementById("datasetList")) renderResources();
  if (document.getElementById("paperList")) renderPapers();
  if (document.getElementById("rasterList")) {
    updateRasterInventoryCopy();
    renderRasterInventory();
    renderDownloadHistory();
  }
  if (document.getElementById("downloadList")) renderDownloads();
  if (document.getElementById("filterFormEmission")) {
    initializeDownloadsPage();
  }
  if (document.getElementById("contactDetails")) renderContactDetails();
  renderFooter();
}

function updateDownloadStats() {
  const statsFilesCount = document.getElementById("statsFilesCount");
  const statsTotalSize = document.getElementById("statsTotalSize");
  const statsLastUpdate = document.getElementById("statsLastUpdate");
  const statsTotalDownloads = document.getElementById("statsTotalDownloads");
  const items = rasterInventoryState.items.length ? rasterInventoryState.items : createRasterInventoryItems();
  const totalSize = items.reduce((sum, item) => sum + Number(item.size || 0), 0);
  const totalDownloads = items.reduce((sum, item) => sum + getInventoryDownloadCount(item), 0);
  const lastUpdate = items
    .map(item => item.updatedAt || item.createdAt || "")
    .filter(Boolean)
    .sort()
    .pop();

  if (statsFilesCount) statsFilesCount.textContent = items.length.toLocaleString();
  if (statsTotalSize) statsTotalSize.textContent = formatFileSize(totalSize);
  if (statsLastUpdate) statsLastUpdate.textContent = lastUpdate ? String(lastUpdate).slice(0, 10) : "-";
  if (statsTotalDownloads) statsTotalDownloads.textContent = totalDownloads.toLocaleString();
}

function renderAnnouncements(items) {
  const ticker = document.getElementById("tickerText");
  if (!ticker) return;
  ticker.textContent = items.join(" · ");
}

async function loadAnnouncements(lang) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/announcements?lang=${lang}`);
    const data = await response.json();
    if (response.ok && data.items && data.items.length) {
      renderAnnouncements(data.items.map(item => item.text));
      return;
    }
  } catch (error) {
    // fallback to local data
  }
  const fallback = pageData[lang]?.announcementItems || pageData.zh.announcementItems;
  renderAnnouncements(fallback);
}

function renderTeam() {
  const container = document.getElementById("teamList");
  if (!container) return;
  const list = teamData[currentLanguage] || teamData.zh;
  container.innerHTML = list.map(member => member.placeholder ? `
    <article class="team-card team-card-placeholder" aria-label="团队成员占位">
      <div class="team-card-photo-placeholder"></div>
      <div class="team-card-body">
        <h3>&nbsp;</h3>
        <p class="team-card-role">&nbsp;</p>
        <p class="team-card-research">&nbsp;</p>
      </div>
    </article>
  ` : `
    <article class="team-card">
      <div class="team-card-photo">
        <img
          src="${member.photo}"
          alt="${member.name}"
          class="${member.photoClass || ""}"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.onerror=null;this.src='logo.png';"
        />
      </div>
      <div class="team-card-body">
        <h3>${member.name}</h3>
        <p class="team-card-role">${member.role}</p>
        <p class="team-card-research">${member.research}</p>
      </div>
    </article>
  `).join("");
}

function renderResources() {
  const page = pageData[currentLanguage];
  const container = document.getElementById("datasetList");
  if (!container) return;
  const list = datasets.filter(item => {
    const keyword = currentSearch.trim().toLowerCase();
    if (!keyword) return true;
    return item.title[currentLanguage].toLowerCase().includes(keyword) || item.description[currentLanguage].toLowerCase().includes(keyword);
  });
  container.innerHTML = list.map(dataset => `
    <div class="dataset-item">
      <div class="dataset-meta">
        <h3>${dataset.title[currentLanguage]}</h3>
        <p>${dataset.description[currentLanguage]}</p>
        <div class="dataset-tags">
          ${dataset.tags[currentLanguage].map(tag => `<span class="dataset-tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="dataset-actions">
        <a href="${dataset.link}" target="_blank" rel="noreferrer">${page.buttonDataset}</a>
        <a href="downloads.html">${page.navDownloads}</a>
      </div>
    </div>
  `).join("");
}

function renderPapers() {
  const container = document.getElementById("paperList");
  if (!container) return;
  const papers = paperCollections.flatMap(section => section.entries);
  container.innerHTML = `
    <ul class="paper-citation-list">
      ${papers.map(entry => `
        <li class="paper-citation-item">
          <span class="paper-citation paper-citation-${entry.language}">${entry.citation}</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function getRasterTexts() {
  if (currentLanguage === "zh") {
    return {
      sectionTitle: "农业SLCFs排放数据（ASLCFs）",
      yearLabel: "年份",
      datasetLabel: "数据集",
      categoryLabel: "分类",
      subjectLabel: "对象",
      scaleLabel: "时间尺度",
      keywordLabel: "关键词",
      keywordPlaceholder: "输入对象、物种或文件名关键词",
      filesLabel: "GeoTIFF 文件数",
      yearsLabel: "年份范围",
      formatLabel: "文件格式",
      allYears: "全部年份",
      allCategories: "全部分类",
      allSubjects: "全部对象",
      allScales: "全部时间尺度",
      mainCategory: "NH3排放清单",
      sectorPlanting: "种植业",
      sectorPlantingPending: "种植业（待开发）",
      sectorLivestock: "畜牧业",
      categoryTime: "时间分解",
      categorySpecies: "物种分解",
      categoryCrop: "作物分解",
      categoryPollutant: "污染物分解",
      categoryMethaneSource: "甲烷来源分解",
      riceMethane: "水稻种植",
      subCategoryLivestock: "畜禽总量",
      subCategoryCrop: "种植业总量",
      scaleMonthly: "月度",
      scaleAnnual: "年度",
      subjectLivestock: "畜禽总量",
      resultSummary: (shown, total, filtered) => `每页显示 ${shown || rasterInventoryConfig.pageSize} 条，共 ${filtered} 条`,
      noResults: "未找到符合条件的 NH3 畜禽排放 GeoTIFF 文件，请调整筛选条件。",
      download: "数据下载",
      versionInfo: "文件信息",
      dataTypeName: "农业排放清单",
      previous: "上一页",
      next: "下一页",
      pageInfo: (page, totalPages) => `第 ${page} 页 / 共 ${totalPages} 页`,
      allDatasets: "全部数据集",
      dataTypeHeader: "数据类型",
      datasetHeader: "数据集",
      yearHeader: "年份",
      scaleHeader: "时间尺度",
      filenameHeader: "文件名",
      formatHeader: "格式",
      actionHeader: "操作",
      sidebarTitle: "清单列表",
      emissionData: "排放数据",
      noPublicData: "暂无公开数据",
      agricultureDataset: "农业SLCFs排放数据（ASLCFs）",
      ch4Category: "CH4排放清单",
      noxCategory: "NOx排放清单",
      honoCategory: "HONO排放清单",
      honoCategoryPending: "HONO排放清单（待开发）",
      otherDataset: "其他排放清单",
      passengerCarDataset: "乘用车日尺度排放清单",
      expressDeliveryDataset: "快递业道路尺度排放清单",
      swineGroup: "猪",
      cattleGroup: "牛",
      dairyCattleGroup: "奶牛",
      sheepGroup: "羊",
      poultryGroup: "家禽",
      draftGroup: "其他",
      historyTitle: "下载历史",
      historyText: "展示当前登录账号最近的数据下载记录。",
      refresh: "刷新",
      downloadTimeHeader: "下载时间",
      downloadMethodHeader: "下载方式",
      categoryHeader: "分解维度",
      subjectHeader: "对象/物种",
      fileCountHeader: "文件数",
      pollutantLabel: "污染物",
      fileSizeLabel: "文件大小",
      uploadDateLabel: "上传日期",
      downloadCountLabel: "下载次数",
      sidebarAriaLabel: "清单导航"
    };
  }

  return {
    sectionTitle: "Agricultural SLCFs Emission Data (ASLCFs)",
    yearLabel: "Year",
    datasetLabel: "Dataset",
    categoryLabel: "Category",
    subjectLabel: "Subject",
    scaleLabel: "Time Scale",
    keywordLabel: "Keyword",
    keywordPlaceholder: "Search by subject, species, or filename",
    filesLabel: "GeoTIFF Files",
    yearsLabel: "Year Range",
    formatLabel: "Format",
    allYears: "All Years",
    allCategories: "All Categories",
    allSubjects: "All Subjects",
    allScales: "All Scales",
    mainCategory: "NH3 Emission Inventory",
    sectorPlanting: "Crop Farming",
    sectorPlantingPending: "Crop Farming (Under development)",
    sectorLivestock: "Livestock Farming",
    categoryTime: "Temporal Decomposition",
    categorySpecies: "Species Decomposition",
    categoryCrop: "Crop Decomposition",
    categoryPollutant: "Pollutant Decomposition",
    categoryMethaneSource: "Methane Source Decomposition",
    riceMethane: "Rice Cultivation",
    subCategoryLivestock: "Total Livestock",
    subCategoryCrop: "Total Crop Farming",
    scaleMonthly: "Monthly",
    scaleAnnual: "Annual",
    subjectLivestock: "Livestock",
    resultSummary: (shown, total, filtered) => `${shown || rasterInventoryConfig.pageSize} per page, ${filtered} total`,
    noResults: "No NH3 livestock emission GeoTIFF files match the current filters.",
    download: "Download",
    versionInfo: "File Info",
    dataTypeName: "NH3 Livestock Emissions",
    previous: "Previous",
    next: "Next",
    pageInfo: (page, totalPages) => `Page ${page} / ${totalPages}`,
    allDatasets: "All Datasets",
    dataTypeHeader: "Data Type",
    datasetHeader: "Dataset",
    yearHeader: "Year",
    scaleHeader: "Time Scale",
    filenameHeader: "Filename",
    formatHeader: "Format",
    actionHeader: "Action",
    sidebarTitle: "Inventory List",
    emissionData: "Emission Data",
    noPublicData: "No public data",
    agricultureDataset: "Agricultural SLCFs Emission Data (ASLCFs)",
    ch4Category: "CH4 Emission Inventory",
    noxCategory: "NOx Emission Inventory",
    honoCategory: "HONO Emission Inventory",
    honoCategoryPending: "HONO Emission Inventory (Under development)",
    otherDataset: "Other Emission Inventory",
    passengerCarDataset: "Passenger Car Emission Inventory",
    expressDeliveryDataset: "Express Delivery Emission Inventory",
    swineGroup: "Swine",
    cattleGroup: "Cattle",
    dairyCattleGroup: "Dairy Cattle",
    sheepGroup: "Sheep and Goats",
    poultryGroup: "Poultry",
    draftGroup: "Other",
    historyTitle: "Download History",
    historyText: "Recent download records for the current account.",
    refresh: "Refresh",
    downloadTimeHeader: "Download Time",
    downloadMethodHeader: "Method",
    categoryHeader: "Dimension",
    subjectHeader: "Subject/Species",
    fileCountHeader: "Files",
    pollutantLabel: "Pollutant",
    fileSizeLabel: "File Size",
    uploadDateLabel: "Upload Date",
    downloadCountLabel: "Downloads",
    sidebarAriaLabel: "Inventory Navigation"
  };
}

function createRasterInventoryItemsForPollutant(pollutant, mainCategory) {
  const items = [];

  const getStaticInventorySize = (category, subject) => {
    if (category === "时间") return 1148056;
    const sizeBySubject = {
      "奶牛": 1018000,
      "家禽": 1064000,
      "其他": 1093000,
      "猪": 1064000,
      "牛": 1144000,
      "羊": 1147000
    };
    return sizeBySubject[subject] || 1060000;
  };

  rasterInventoryConfig.years.forEach((year) => {
    rasterInventoryConfig.timeSubjects.forEach((subject) => {
      const annualName = `${year}_${subject}_${pollutant}.tif`;
      items.push({
        id: `${pollutant}-${year}-time-${subject}-annual`,
        dataType: "emission",
        datasetKey: "agriculture_emission",
        datasetName: "农业排放清单",
        name: annualName,
        year,
        mainCategory,
        sector: "畜牧业",
        category: "时间分解",
        subCategory: "畜禽总量",
        pollutant,
        subject,
        period: rasterInventoryConfig.annualPeriod,
        scale: "annual",
        extension: "TIF",
        path: buildEmissionFileDownloadUrl({ pollutant, sector: "畜牧业", year, category: "时间分解", subject, scale: "annual", filename: annualName }),
        size: getStaticInventorySize("时间", subject),
        createdAt: `${year}-01-15`,
        updatedAt: `${year}-12-31`,
        downloadCount: 0,
        source: "static"
      });

      rasterInventoryConfig.monthlyPeriods.forEach((period) => {
        const name = `${year}_${period}_${subject}_${pollutant}.tif`;
        items.push({
          id: `${pollutant}-${year}-time-${subject}-${period}`,
          dataType: "emission",
          datasetKey: "agriculture_emission",
          datasetName: "农业排放清单",
          name,
          year,
          mainCategory,
          sector: "畜牧业",
          category: "时间分解",
          subCategory: "畜禽总量",
          pollutant,
          subject,
          period,
          scale: "monthly",
          extension: "TIF",
          path: buildEmissionFileDownloadUrl({ pollutant, sector: "畜牧业", year, category: "时间分解", subject, scale: "monthly", filename: name }),
          size: getStaticInventorySize("时间", subject),
          createdAt: `${year}-${period}-01`,
          updatedAt: `${year}-${period}-28`,
          downloadCount: 0,
          source: "static"
        });
      });
    });

    rasterInventoryConfig.speciesSubjects.forEach((subject) => {
      const annualName = `${year}_${subject}_${pollutant}.tif`;
      items.push({
        id: `${pollutant}-${year}-species-${subject}-annual`,
        dataType: "emission",
        datasetKey: "agriculture_emission",
        datasetName: "农业排放清单",
        name: annualName,
        year,
        mainCategory,
        sector: "畜牧业",
        category: "物种分解",
        subCategory: subject,
        pollutant,
        subject,
        period: rasterInventoryConfig.annualPeriod,
        scale: "annual",
        extension: "TIF",
        path: buildEmissionFileDownloadUrl({ pollutant, sector: "畜牧业", year, category: "物种分解", subject, scale: "annual", filename: annualName }),
        size: getStaticInventorySize("物种", subject),
        createdAt: `${year}-01-15`,
        updatedAt: `${year}-12-31`,
        downloadCount: 0,
        source: "static"
      });

      rasterInventoryConfig.monthlyPeriods.forEach((period) => {
        const name = `${year}_${period}_${subject}_${pollutant}.tif`;
        items.push({
          id: `${pollutant}-${year}-species-${subject}-${period}`,
          dataType: "emission",
          datasetKey: "agriculture_emission",
          datasetName: "农业排放清单",
          name,
          year,
          mainCategory,
          sector: "畜牧业",
          category: "物种分解",
          subCategory: subject,
          pollutant,
          subject,
          period,
          scale: "monthly",
          extension: "TIF",
          path: buildEmissionFileDownloadUrl({ pollutant, sector: "畜牧业", year, category: "物种分解", subject, scale: "monthly", filename: name }),
          size: getStaticInventorySize("物种", subject),
          createdAt: `${year}-${period}-01`,
          updatedAt: `${year}-${period}-28`,
          downloadCount: 0,
          source: "static"
        });
      });
    });
  });

  return items;
}

function createPlantingInventoryItemsForPollutant(pollutant, mainCategory) {
  const items = [];
  const cropSizeBySubject = {
    crop: 4067400,
    "其他作物": 530000,
    "小麦": 518000,
    "水稻": 210000,
    "玉米": 477000
  };

  rasterInventoryConfig.years.forEach((year) => {
    const annualTotalName = `${year}_crop_${pollutant}.tif`;
    items.push({
      id: `${pollutant}-${year}-planting-time-crop-annual`,
      dataType: "emission",
      datasetKey: "agriculture_emission",
      datasetName: "农业排放清单",
      name: annualTotalName,
      year,
      mainCategory,
      sector: "种植业",
      category: "时间分解",
      subCategory: "种植业总量",
      pollutant,
      subject: "crop",
      period: rasterInventoryConfig.annualPeriod,
      scale: "annual",
      extension: "TIF",
      path: buildEmissionFileDownloadUrl({ pollutant, sector: "种植业", year, category: "时间分解", subject: "crop", scale: "annual", filename: annualTotalName }),
      size: cropSizeBySubject.crop,
      createdAt: `${year}-01-15`,
      updatedAt: `${year}-12-31`,
      downloadCount: 0,
      source: "static"
    });

    rasterInventoryConfig.cropSubjects.forEach((subject) => {
      const annualName = `${year}_${subject}_${pollutant}.tif`;
      items.push({
        id: `${pollutant}-${year}-planting-crop-${subject}-annual`,
        dataType: "emission",
        datasetKey: "agriculture_emission",
        datasetName: "农业排放清单",
        name: annualName,
        year,
        mainCategory,
        sector: "种植业",
        category: "作物分解",
        subCategory: subject,
        pollutant,
        subject,
        period: rasterInventoryConfig.annualPeriod,
        scale: "annual",
        extension: "TIF",
        path: buildEmissionFileDownloadUrl({ pollutant, sector: "种植业", year, category: "作物分解", subject, scale: "annual", filename: annualName }),
        size: cropSizeBySubject[subject] || 400000,
        createdAt: `${year}-01-15`,
        updatedAt: `${year}-12-31`,
        downloadCount: 0,
        source: "static"
      });

      rasterInventoryConfig.monthlyPeriods.forEach((period) => {
        const name = `${year}_${period}_${subject}_${pollutant}.tif`;
        items.push({
          id: `${pollutant}-${year}-planting-crop-${subject}-${period}`,
          dataType: "emission",
          datasetKey: "agriculture_emission",
          datasetName: "农业排放清单",
          name,
          year,
          mainCategory,
          sector: "种植业",
          category: "作物分解",
          subCategory: subject,
          pollutant,
          subject,
          period,
          scale: "monthly",
          extension: "TIF",
          path: buildEmissionFileDownloadUrl({ pollutant, sector: "种植业", year, category: "作物分解", subject, scale: "monthly", filename: name }),
          size: cropSizeBySubject[subject] || 400000,
          createdAt: `${year}-${period}-01`,
          updatedAt: `${year}-${period}-28`,
          downloadCount: 0,
          source: "static"
        });
      });
    });
  });

  return items;
}

function buildOtherEmissionFileDownloadUrl({ datasetKey = "other_emission", datasetName = "其他排放清单", mainCategory = "", subject = "", pollutant = "", year, period, scale, filename }) {
  const params = new URLSearchParams({
    datasetKey,
    datasetName,
    mainCategory,
    subject,
    pollutant,
    year: String(year || ""),
    period: String(period || ""),
    scale: String(scale || ""),
    filename: String(filename || "")
  });
  return `${API_BASE_URL}/api/downloads/other/file?${params.toString()}`;
}

function createPassengerCarInventoryItems() {
  const items = [];
  const year = "2019";
  const size = 116575946;

  rasterInventoryConfig.passengerCarPollutants.forEach((pollutant) => {
    rasterInventoryConfig.monthlyPeriods.forEach((period) => {
      const name = `emission_${year}-${period}_monthly.tif`;
      items.push({
        id: `passenger-car-${pollutant}-${year}-${period}`,
        dataType: "emission",
        datasetKey: "other_emission",
        datasetName: "其他排放清单",
        name,
        year,
        mainCategory: "乘用车日尺度排放清单",
        sector: "乘用车",
        category: "污染物分解",
        pollutant,
        subject: "乘用车",
        period,
        scale: "monthly",
        extension: "TIF",
        path: buildOtherEmissionFileDownloadUrl({ mainCategory: "乘用车日尺度排放清单", subject: "乘用车", pollutant, year, period, scale: "monthly", filename: name }),
        size,
        createdAt: `${year}-${period}-01`,
        updatedAt: `${year}-${period}-28`,
        downloadCount: 0,
        source: "static"
      });
    });
  });

  return items;
}

function createMethaneSourceInventoryItems() {
  const items = [];
  const sizeBySubject = {
    "甲烷总排放量": 1120000,
    "水稻种植": 356490,
    "粪便管理": 1120000,
    "肠道发酵": 1120000
  };

  rasterInventoryConfig.years.forEach((year) => {
    rasterInventoryConfig.methaneSourceSubjects.forEach((subject) => {
      const name = subject === "水稻种植"
        ? `CH4_emission_rice_China_5min_${year}.tif`
        : `${subject}_${year}.tif`;
      items.push({
        id: `CH4-${year}-methane-source-${subject}`,
        dataType: "emission",
        datasetKey: "agriculture_emission",
        datasetName: "农业排放清单",
        name,
        year,
        mainCategory: "CH4排放清单",
        sector: "甲烷来源",
        category: "甲烷来源分解",
        subCategory: subject,
        pollutant: "CH4",
        subject,
        period: rasterInventoryConfig.annualPeriod,
        scale: "annual",
        extension: "TIF",
        path: buildEmissionFileDownloadUrl({ pollutant: "CH4", sector: "甲烷来源", year, category: "甲烷来源分解", subject, scale: "annual", filename: name }),
        size: sizeBySubject[subject] || 1120000,
        createdAt: `${year}-01-15`,
        updatedAt: `${year}-12-31`,
        downloadCount: 0,
        source: "static"
      });
    });
  });

  return items;
}

function createHonoInventoryItems() {
  const year = "2016";
  const name = "2016(1).tif";

  return [{
    id: "HONO-2016",
    dataType: "emission",
    datasetKey: "agriculture_emission",
    datasetName: "农业排放清单",
    name,
    year,
    mainCategory: "HONO排放清单",
    sector: "",
    category: "",
    subCategory: "HONO",
    pollutant: "HONO",
    subject: "HONO",
    period: rasterInventoryConfig.annualPeriod,
    scale: "annual",
    extension: "TIF",
    path: `${API_BASE_URL}/api/downloads/emission/file?pollutant=HONO&year=${encodeURIComponent(year)}&category=${encodeURIComponent("时间分解")}&filename=${encodeURIComponent(name)}`,
    size: 704550,
    createdAt: `${year}-01-15`,
    updatedAt: `${year}-12-31`,
    downloadCount: 0,
    source: "static"
  }];
}

function createRasterInventoryItems() {
  return [
    ...createRasterInventoryItemsForPollutant("NH3", "NH3排放清单"),
    ...createPlantingInventoryItemsForPollutant("NH3", "NH3排放清单"),
    ...createMethaneSourceInventoryItems(),
    ...createRasterInventoryItemsForPollutant("NOx", "NOx排放清单"),
    ...createHonoInventoryItems(),
    ...createPassengerCarInventoryItems()
  ];
}

function createInventoryItemSignature(item) {
  return [
    item.dataType || "",
    item.datasetKey || "",
    item.year || "",
    item.sector || "",
    item.category || "",
    item.subject || "",
    item.scale || "",
    item.period || "",
    item.name || ""
  ].join("|").toLowerCase();
}

function normalizePublishedInventoryItem(item) {
  if (!item || !item._id) return null;

  return {
    id: item._id,
    dataType: item.dataType || "emission",
    datasetKey: item.datasetKey || "",
    datasetName: item.datasetName || "",
    name: item.originalFilename || item.title || "inventory.tif",
    title: item.title || item.originalFilename || "inventory.tif",
    year: item.year || "",
    category: item.category || (item.dataType === "emission" ? "时间" : ""),
    pollutant: item.pollutant || "",
    subject: item.subject || "",
    period: item.period || "Annual",
    scale: item.scale || "annual",
    extension: (item.extension || "tif").toUpperCase(),
    path: `${API_BASE_URL}/api/inventories/${item._id}/download`,
    size: Number(item.size || 0),
    createdAt: item.createdAt || "",
    updatedAt: item.updatedAt || "",
    downloadCount: Number(item.downloadCount || 0),
    source: "api",
    description: item.description || "",
    version: item.version || "v1",
    developer: item.developer || "开发团队占位符"
  };
}

function mergeRasterInventoryItems(staticItems, dynamicItems) {
  const merged = [];
  const seen = new Set();

  [...dynamicItems, ...staticItems].forEach((item) => {
    const signature = createInventoryItemSignature(item);
    if (seen.has(signature)) return;
    seen.add(signature);
    merged.push(item);
  });

  return merged;
}

function getRasterInventoryOptionData() {
  const items = rasterInventoryState.items.length ? rasterInventoryState.items : createRasterInventoryItems();
  const years = Array.from(new Set(items.map(item => item.year).filter(Boolean)))
    .sort((a, b) => Number(a) - Number(b));
  const datasets = Array.from(new Map(items
    .filter(item => item.datasetKey || item.datasetName)
    .map(item => {
      const key = getCanonicalDatasetKey(item.datasetKey || item.datasetName);
      return [key, {
        key,
        name: getCanonicalDatasetName(item.datasetKey, item.datasetName)
      }];
    })).values())
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  const categories = Array.from(new Set(items.map(item => item.category).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, "zh-CN"));
  const timeSubjects = Array.from(new Set(items
    .filter(item => item.category === "时间分解")
    .map(item => item.subject)
    .filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, "zh-CN"));
  const speciesSubjects = Array.from(new Set(items
    .filter(item => item.category === "物种分解")
    .map(item => item.subject)
    .filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, "zh-CN"));

  return { years, datasets, categories, timeSubjects, speciesSubjects };
}

function getEquivalentDatasetKeys(datasetKey) {
  if (datasetKey === "other_emission") {
    return ["other_emission", "industrial_emission", "traffic_emission"];
  }
  return datasetKey ? [datasetKey] : [];
}

function getCanonicalDatasetKey(datasetKey = "") {
  return getEquivalentDatasetKeys("other_emission").includes(datasetKey) ? "other_emission" : datasetKey;
}

function getCanonicalDatasetName(datasetKey = "", datasetName = "") {
  if (getCanonicalDatasetKey(datasetKey) === "other_emission") {
    return currentLanguage === "zh" ? "其他排放清单" : "Other Emission Inventory";
  }
  return datasetName || datasetKey || "-";
}

async function loadPublishedInventories() {
  const dataTypes = ["emission"];
  const results = await Promise.all(dataTypes.map(async (dataType) => {
    const response = await fetch(`${API_BASE_URL}/api/inventories?dataType=${encodeURIComponent(dataType)}`);
    let data = {};

    try {
      data = await response.json();
    } catch (error) {
      data = {};
    }

    if (!response.ok) {
      const message = data && (data.error || data.message)
        ? (data.error || data.message)
        : `HTTP ${response.status}`;
      throw new Error(message);
    }

    return Array.isArray(data.items)
      ? data.items.map(normalizePublishedInventoryItem).filter(Boolean)
      : [];
  }));

  return results.flat();
}

function formatFileSize(bytes) {
  const size = Number(bytes || 0);
  if (!size) return "-";

  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let index = 0;

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }

  const digits = value >= 100 || index === 0 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toFixed(digits)} ${units[index]}`;
}

function getPollutantFromMainCategory(mainCategory = "NH3排放清单") {
  const value = String(mainCategory || "").trim();
  if (value.includes("HONO")) return "HONO";
  if (value.includes("CH4")) return "CH4";
  if (value.includes("NOx")) return "NOx";
  return "NH3";
}

function buildEmissionFileDownloadUrl({ pollutant = "NH3", sector = "", year, category, subject, scale, filename }) {
  const params = new URLSearchParams({
    pollutant: String(pollutant || 'NH3'),
    sector: String(sector || ''),
    year: String(year || ''),
    category: String(category || ''),
    subject: String(subject || ''),
    scale: String(scale || ''),
    filename: String(filename || '')
  });
  return `${API_BASE_URL}/api/downloads/emission/file?${params.toString()}`;
}

function formatInventoryDate(item) {
  const value = item.updatedAt || item.createdAt;
  if (value) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date.toISOString().slice(0, 10);
    }
  }
  return item.year ? `${item.year}-01` : "-";
}

function getInventoryDownloadCount(item) {
  return Number.isFinite(Number(item.downloadCount)) ? Number(item.downloadCount) : 0;
}

function formatDatasetTypeLabel(dataType) {
  return currentLanguage === "zh" ? "排放数据" : "Emission";
}

function formatInventoryDatasetName(datasetKey, datasetName) {
  const text = getRasterTexts();
  if (datasetKey === "agriculture_emission" || datasetName === "农业排放清单") return text.agricultureDataset;
  if (
    datasetKey === "other_emission" ||
    datasetKey === "industrial_emission" ||
    datasetKey === "traffic_emission" ||
    datasetName === "其他排放清单" ||
    datasetName === "工业排放清单" ||
    datasetName === "交通排放清单"
  ) return text.otherDataset;
  return datasetName || datasetKey || "-";
}

function setSelectOptions(select, options, selectedValue = "") {
  if (!select) return;
  select.innerHTML = options.map(option => `<option value="${option.value}">${option.label}</option>`).join("");
  const nextValue = options.some(option => option.value === selectedValue) ? selectedValue : "";
  select.value = nextValue;
}

function updateRasterSectionTitle(filters = getRasterInventoryFilters()) {
  const title = document.getElementById("rasterSectionTitle");
  if (!title) return;

  const text = getRasterTexts();
  const datasetKey = getCanonicalDatasetKey(filters.datasetKey || "");
  title.textContent = datasetKey === "other_emission"
    ? text.otherDataset
    : text.agricultureDataset || text.sectionTitle;
}

function updateRegisterTitleOptions(page) {
  const select = document.getElementById("regTitle");
  if (!select) return;
  const selectedValue = select.value;
  const options = page.regTitleOptions || REGISTER_TITLE_OPTIONS.zh;
  setSelectOptions(select, options, selectedValue);
  updateRegisterAdvisorField();
}

function getRegisterTitleLabel(value, lang = currentLanguage) {
  if (!value) return "-";
  const options = REGISTER_TITLE_OPTIONS[lang] || REGISTER_TITLE_OPTIONS.zh;
  const matched = options.find(option => option.value === value);
  return matched ? matched.label : value;
}

function shouldRequireAdvisor(title) {
  return ADVISOR_REQUIRED_TITLES.includes(title);
}

function updateRegisterAdvisorField() {
  const titleSelect = document.getElementById("regTitle");
  const advisorGroup = document.getElementById("regAdvisorGroup");
  const advisorInput = document.getElementById("regAdvisor");
  if (!titleSelect || !advisorGroup || !advisorInput) return;

  const required = shouldRequireAdvisor(titleSelect.value);
  advisorGroup.hidden = !required;
  advisorInput.required = required;
  advisorInput.setAttribute("aria-required", required ? "true" : "false");
  if (!required) {
    advisorInput.value = "";
    advisorInput.setCustomValidity("");
  }
}

function isEducationalEmail(email) {
  if (!email || !email.includes("@")) return false;
  const domain = email.split("@").pop().trim().toLowerCase();
  if (!domain) return false;
  return !PUBLIC_EMAIL_DOMAINS.some(item => domain === item || domain.endsWith(`.${item}`));
}

function formatRasterSubject(subject) {
  const text = getRasterTexts();
  if (subject === "livestock") return text.subjectLivestock;
  if (subject === "crop") return text.subCategoryCrop;
  if (subject === "乘用车") return text.passengerCarDataset;
  if (currentLanguage !== "zh") {
    const subjectMap = {
      "水稻": "Rice",
      "小麦": "Wheat",
      "玉米": "Maize",
      "其他作物": "Other Crops",
      "甲烷总排放量": "Total Methane Emissions",
      "水稻种植": "Rice Cultivation",
      "粪便管理": "Manure Management",
      "肠道发酵": "Enteric Fermentation",
      "肉猪": "Market Hogs",
      "母猪": "Sows",
      "奶牛": "Dairy Cattle",
      "肉牛": "Beef Cattle",
      "其他牛": "Other Cattle",
      "猪": "Swine",
      "牛": "Cattle",
      "羊": "Sheep and Goats",
      "家禽": "Poultry",
      "其他": "Other",
      "绵羊": "Sheep",
      "山羊": "Goats",
      "肉鸡": "Broilers",
      "蛋鸡": "Laying Hens",
      "肉鸭": "Meat Ducks",
      "蛋鸭": "Laying Ducks",
      "肉鹅": "Geese",
      "马": "Horses",
      "驴": "Donkeys",
      "骡": "Mules",
      "兔": "Rabbits",
      "骆驼": "Camels"
    };
    return subjectMap[subject] || subject || "-";
  }
  return subject || "-";
}

function formatRasterCategory(category) {
  const text = getRasterTexts();
  if (category === "时间分解" || category === "时间") return text.categoryTime;
  if (category === "物种分解" || category === "物种") return text.categorySpecies;
  if (category === "作物分解") return text.categoryCrop;
  if (category === "污染物分解") return text.categoryPollutant;
  if (category === "甲烷来源分解") return text.categoryMethaneSource;
  if (category === "种植业") return text.sectorPlanting;
  if (category === "畜牧业") return text.sectorLivestock;
  if (category === "NH3排放清单") return text.mainCategory;
  return category || "-";
}

function formatRasterPeriod(item) {
  const text = getRasterTexts();
  if (item.scale === "annual") {
    return text.scaleAnnual;
  }
  return currentLanguage === "zh"
    ? `${Number(item.period)} 月`
    : `Month ${item.period}`;
}

function formatInventoryScale(item) {
  if (item.scale === "annual") return currentLanguage === "zh" ? "年度" : "Annual";
  if (item.scale === "monthly") return formatRasterPeriod(item);
  if (item.scale === "daily") return currentLanguage === "zh" ? "日尺度" : "Daily";
  if (item.scale === "hourly") return currentLanguage === "zh" ? "小时尺度" : "Hourly";
  if (item.scale === "other") return currentLanguage === "zh" ? "其他" : "Other";
  return item.scale || "-";
}

function matchesInventoryKeyword(item, keyword) {
  const terms = String(keyword || "")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (!terms.length) return true;

  const haystack = [
    item.name,
    item.year,
    item.category,
    item.sector,
    item.pollutant,
    item.subject,
    item.pollutant,
    formatRasterSubject(item.subject),
    formatRasterCategory(item.category),
    formatInventoryScale(item)
  ].join(" ").toLowerCase();

  return terms.some(term => haystack.includes(term));
}

function updateRasterInventoryCopy() {
  const rasterList = document.getElementById("rasterList");
  if (!rasterList) return;

  const text = getRasterTexts();
  const optionData = getRasterInventoryOptionData();
  const yearFilter = document.getElementById("rasterYearFilter");
  const datasetFilter = document.getElementById("rasterDatasetFilter");
  const scaleFilter = document.getElementById("rasterScaleFilter");
  const keywordFilter = document.getElementById("rasterKeywordFilter");

  const selectedYear = yearFilter ? yearFilter.value : "";
  const selectedDataset = datasetFilter ? datasetFilter.value : "";
  const selectedScale = scaleFilter ? scaleFilter.value : "";

  const yearOptions = [{ value: "", label: text.allYears }]
    .concat(optionData.years.map(year => ({ value: year, label: year })));
  const datasetOptions = [{ value: "", label: text.allDatasets }]
    .concat(optionData.datasets.map(dataset => ({ value: dataset.key, label: formatInventoryDatasetName(dataset.key, dataset.name) })));
  const scaleOptions = [
    { value: "", label: text.allScales },
    { value: "annual", label: text.scaleAnnual },
    { value: "monthly", label: text.scaleMonthly }
  ];

  setSelectOptions(yearFilter, yearOptions, selectedYear);
  setSelectOptions(datasetFilter, datasetOptions, selectedDataset);
  if (datasetFilter && !selectedDataset) {
    const activeDatasetLink = document.querySelector(".inventory-menu-child.active[data-inventory-filter-dataset]");
    if (activeDatasetLink && datasetOptions.some(option => option.value === activeDatasetLink.dataset.inventoryFilterDataset)) {
      datasetFilter.value = activeDatasetLink.dataset.inventoryFilterDataset;
    }
  }
  setSelectOptions(scaleFilter, scaleOptions, selectedScale);

  if (keywordFilter) keywordFilter.placeholder = text.keywordPlaceholder;
  updateRasterSectionTitle();
  if (document.getElementById("rasterYearLabel")) document.getElementById("rasterYearLabel").textContent = text.yearLabel;
  if (document.getElementById("rasterDatasetLabel")) document.getElementById("rasterDatasetLabel").textContent = text.datasetLabel;
  if (document.getElementById("rasterScaleLabel")) document.getElementById("rasterScaleLabel").textContent = text.scaleLabel;
  if (document.getElementById("rasterKeywordLabel")) document.getElementById("rasterKeywordLabel").textContent = text.keywordLabel;
  if (document.getElementById("rasterStatFilesLabel")) document.getElementById("rasterStatFilesLabel").textContent = text.filesLabel;
  if (document.getElementById("rasterStatYearsLabel")) document.getElementById("rasterStatYearsLabel").textContent = text.yearsLabel;
  if (document.getElementById("rasterStatFormatLabel")) document.getElementById("rasterStatFormatLabel").textContent = text.formatLabel;
  if (document.getElementById("rasterPrevPage")) document.getElementById("rasterPrevPage").textContent = text.previous;
  if (document.getElementById("rasterNextPage")) document.getElementById("rasterNextPage").textContent = text.next;
  updateResourceInventoryText();
}

function setTextIfExists(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function updateResourceInventoryText() {
  const text = getRasterTexts();
  const sidebar = document.querySelector(".inventory-sidebar");
  if (sidebar) sidebar.setAttribute("aria-label", text.sidebarAriaLabel);
  setTextIfExists("inventorySidebarTitle", text.sidebarTitle);
  setTextIfExists("inventoryMenuEmission", text.emissionData);
  setTextIfExists("inventoryMenuAgriculture", text.agricultureDataset);
  setTextIfExists("inventoryMenuNh3", text.mainCategory);
  setTextIfExists("inventoryMenuPlanting", text.sectorPlanting);
  setTextIfExists("inventoryMenuLivestockSector", text.sectorLivestock);
  setTextIfExists("inventoryMenuCh4", text.ch4Category);
  setTextIfExists("inventoryMenuCh4MethaneSource", text.categoryMethaneSource);
  setTextIfExists("inventoryMenuCh4Total", formatRasterSubject("甲烷总排放量"));
  setTextIfExists("inventoryMenuCh4Manure", formatRasterSubject("粪便管理"));
  setTextIfExists("inventoryMenuCh4Enteric", formatRasterSubject("肠道发酵"));
  setTextIfExists("inventoryMenuCh4Rice", text.riceMethane || "水稻种植");
  setTextIfExists("inventoryMenuNox", text.noxCategory);
  setTextIfExists("inventoryMenuNoxPlanting", text.sectorPlantingPending);
  setTextIfExists("inventoryMenuNoxLivestockSector", text.sectorLivestock);
  setTextIfExists("inventoryMenuNoxTime", text.categoryTime);
  setTextIfExists("inventoryMenuNoxLivestock", text.subjectLivestock);
  setTextIfExists("inventoryMenuNoxSpecies", text.categorySpecies);
  setTextIfExists("inventoryMenuNoxSwine", text.swineGroup);
  setTextIfExists("inventoryMenuNoxCattle", text.cattleGroup);
  setTextIfExists("inventoryMenuNoxDairyCattle", text.dairyCattleGroup);
  setTextIfExists("inventoryMenuNoxSheep", text.sheepGroup);
  setTextIfExists("inventoryMenuNoxPoultry", text.poultryGroup);
  setTextIfExists("inventoryMenuNoxOtherLivestock", text.draftGroup);
  setTextIfExists("inventoryMenuHono", text.honoCategory);
  setTextIfExists("inventoryMenuTime", text.categoryTime);
  setTextIfExists("inventoryMenuLivestock", text.subCategoryLivestock);
  setTextIfExists("inventoryMenuSpecies", text.categorySpecies);
  setTextIfExists("inventoryMenuPlantingTime", text.categoryTime);
  setTextIfExists("inventoryMenuPlantingTotal", text.subCategoryCrop);
  setTextIfExists("inventoryMenuCropDecomposition", text.categoryCrop);
  setTextIfExists("inventoryMenuRice", formatRasterSubject("水稻"));
  setTextIfExists("inventoryMenuWheat", formatRasterSubject("小麦"));
  setTextIfExists("inventoryMenuMaize", formatRasterSubject("玉米"));
  setTextIfExists("inventoryMenuOtherCrops", formatRasterSubject("其他作物"));
  setTextIfExists("inventoryMenuSwine", text.swineGroup);
  setTextIfExists("inventoryMenuCattle", text.cattleGroup);
  setTextIfExists("inventoryMenuDairyCattle", text.dairyCattleGroup);
  setTextIfExists("inventoryMenuSheep", text.sheepGroup);
  setTextIfExists("inventoryMenuPoultry", text.poultryGroup);
  setTextIfExists("inventoryMenuDraft", text.draftGroup);
  setTextIfExists("inventoryMenuOther", text.otherDataset);
  setTextIfExists("inventoryMenuPassengerCar", text.passengerCarDataset);
  setTextIfExists("inventoryMenuPassengerCarCo", "CO");
  setTextIfExists("inventoryMenuPassengerCarNh3", "NH3");
  setTextIfExists("inventoryMenuPassengerCarNox", "NOx");
  setTextIfExists("inventoryMenuPassengerCarPm", "PM");
  setTextIfExists("inventoryMenuPassengerCarVoc", "VOC");
  setTextIfExists("inventoryMenuExpressDelivery", text.expressDeliveryDataset);
  setTextIfExists("rasterTableTypeHeader", text.dataTypeHeader);
  setTextIfExists("rasterTableDatasetHeader", text.datasetHeader);
  setTextIfExists("rasterTableYearHeader", text.yearHeader);
  setTextIfExists("rasterTableScaleHeader", text.scaleHeader);
  setTextIfExists("rasterTableFilenameHeader", text.filenameHeader);
  setTextIfExists("rasterTableFormatHeader", text.formatHeader);
  setTextIfExists("rasterTableActionHeader", text.actionHeader);
  setTextIfExists("downloadHistoryTitle", text.historyTitle);
  setTextIfExists("downloadHistoryText", text.historyText);
  setTextIfExists("refreshDownloadHistory", text.refresh);
  setTextIfExists("historyTimeHeader", text.downloadTimeHeader);
  setTextIfExists("historyTypeHeader", text.dataTypeHeader);
  setTextIfExists("historyDatasetHeader", text.datasetHeader);
  setTextIfExists("historyMethodHeader", text.downloadMethodHeader);
  setTextIfExists("historyFilenameHeader", text.filenameHeader);
  setTextIfExists("historyYearHeader", text.yearHeader);
  setTextIfExists("historyCategoryHeader", text.categoryHeader);
  setTextIfExists("historySubjectHeader", text.subjectHeader);
  setTextIfExists("historyScaleHeader", text.scaleHeader);
  setTextIfExists("historyCountHeader", text.fileCountHeader);
}

function getRasterInventoryFilters() {
  return {
    year: document.getElementById("rasterYearFilter")?.value || "",
    datasetKey: document.getElementById("rasterDatasetFilter")?.value || "",
    mainCategory: rasterInventoryState.sidebarMainCategory || "",
    sector: rasterInventoryState.sidebarSector || "",
    category: rasterInventoryState.sidebarCategory || "",
    subjects: rasterInventoryState.sidebarSubjects || [],
    scale: document.getElementById("rasterScaleFilter")?.value || "",
    keyword: (document.getElementById("rasterKeywordFilter")?.value || "").trim().toLowerCase()
  };
}

function renderRasterInventory() {
  const container = document.getElementById("rasterList");
  if (!container) return;

  if (!rasterInventoryState.items.length) {
    rasterInventoryState.items = createRasterInventoryItems();
  }

  const text = getRasterTexts();
  const filters = getRasterInventoryFilters();
  updateRasterSectionTitle(filters);
  const categoryOrder = { "时间分解": 0, "物种分解": 1, "作物分解": 2, "甲烷来源分解": 3, "污染物分解": 4 };
  const optionData = getRasterInventoryOptionData();

  const filtered = rasterInventoryState.items.filter((item) => {
    if (filters.year && item.year !== filters.year) return false;
    if (filters.datasetKey && !getEquivalentDatasetKeys(filters.datasetKey).includes(item.datasetKey)) return false;
    if (filters.mainCategory && item.mainCategory !== filters.mainCategory) return false;
    if (filters.sector && item.sector !== filters.sector) return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.subjects.length && !filters.subjects.includes(item.subject)) return false;
    if (filters.scale && item.scale !== filters.scale) return false;
    return matchesInventoryKeyword(item, filters.keyword);
  }).sort((a, b) => {
    if (a.year !== b.year) return Number(b.year) - Number(a.year);
    if ((a.datasetName || "") !== (b.datasetName || "")) return (a.datasetName || "").localeCompare(b.datasetName || "", "zh-CN");
    if (a.category !== b.category) return (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99);
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject, "zh-CN");
    if (a.scale !== b.scale) return a.scale === "annual" ? -1 : 1;
    return a.period.localeCompare(b.period);
  });

  rasterInventoryState.filteredItems = filtered;

  const totalPages = Math.max(1, Math.ceil(filtered.length / rasterInventoryConfig.pageSize));
  rasterInventoryState.page = Math.min(rasterInventoryState.page, totalPages);
  rasterInventoryState.page = Math.max(rasterInventoryState.page, 1);

  const start = (rasterInventoryState.page - 1) * rasterInventoryConfig.pageSize;
  const visibleItems = filtered.slice(start, start + rasterInventoryConfig.pageSize);

  if (document.getElementById("rasterFileCount")) {
    document.getElementById("rasterFileCount").textContent = rasterInventoryState.items.length.toLocaleString();
  }
  if (document.getElementById("rasterYearRange")) {
    const firstYear = optionData.years[0];
    const lastYear = optionData.years[optionData.years.length - 1];
    document.getElementById("rasterYearRange").textContent = firstYear && lastYear ? `${firstYear}-${lastYear}` : "-";
  }
  if (document.getElementById("rasterResultsMeta")) {
    document.getElementById("rasterResultsMeta").textContent = text.resultSummary(visibleItems.length, rasterInventoryState.items.length, filtered.length);
  }
  if (document.getElementById("rasterPageInfo")) {
    document.getElementById("rasterPageInfo").textContent = text.pageInfo(rasterInventoryState.page, totalPages);
  }

  const prevPage = document.getElementById("rasterPrevPage");
  const nextPage = document.getElementById("rasterNextPage");
  if (prevPage) prevPage.disabled = rasterInventoryState.page <= 1;
  if (nextPage) nextPage.disabled = rasterInventoryState.page >= totalPages;

  if (!visibleItems.length) {
    container.innerHTML = container.tagName === "TBODY"
      ? `<tr><td colspan="7" class="inventory-empty-cell">${text.noResults}</td></tr>`
      : `<div class="paper-empty">${text.noResults}</div>`;
    return;
  }

  if (container.tagName === "TBODY") {
    container.innerHTML = visibleItems.map((item) => `
      <tr>
        <td>${formatDatasetTypeLabel(item.dataType)}</td>
        <td>${formatInventoryDatasetName(item.datasetKey, item.datasetName)}</td>
        <td>${item.year || "-"}</td>
        <td>${formatInventoryScale(item)}</td>
        <td class="inventory-scenario-cell">${item.name}</td>
        <td>${item.extension || "TIF"}</td>
        <td>
          <div class="inventory-row-actions">
            <button
              type="button"
              class="inventory-table-btn"
              data-inventory-info
              data-file-name="${item.name}"
              data-file-year="${item.year || "-"}"
              data-file-category="${formatRasterCategory(item.category)}"
              data-file-subject="${formatRasterSubject(item.subject)}"
              data-file-scale="${formatInventoryScale(item)}"
            >${text.versionInfo}</button>
            <button
              type="button"
              class="inventory-table-btn"
              data-open-download-center
              data-download-dataset="${item.datasetKey || ""}"
              data-download-main-category="${item.mainCategory || ""}"
              data-download-sector="${item.sector || ""}"
              data-download-category="${item.category || ""}"
              data-download-subject="${item.subject || ""}"
              data-download-pollutant="${item.pollutant || ""}"
              data-download-year="${item.year || ""}"
              data-download-scale="${item.scale || ""}"
              data-download-period="${item.period || ""}"
            >${text.download}</button>
          </div>
        </td>
      </tr>
    `).join("");
    return;
  }

  container.innerHTML = visibleItems.map(item => `
    <article class="raster-card">
      <input type="checkbox" class="raster-card-checkbox" data-file-path="${item.path}" data-file-name="${item.name}" />
      <div class="raster-card-header">
        <span class="raster-card-icon">📄</span>
        <h3 class="raster-card-title">${item.name}</h3>
      </div>
      <div class="raster-card-meta">
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.yearLabel}</span>
          <span class="raster-meta-value">${item.year}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.categoryLabel}</span>
          <span class="raster-meta-value">${formatRasterCategory(item.category)}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.pollutantLabel}</span>
          <span class="raster-meta-value">${item.pollutant}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.subjectLabel}</span>
          <span class="raster-meta-value">${formatRasterSubject(item.subject)}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.scaleLabel}</span>
          <span class="raster-meta-value">${formatRasterPeriod(item)}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.fileSizeLabel}</span>
          <span class="raster-meta-value">${formatFileSize(item.size)}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.uploadDateLabel}</span>
          <span class="raster-meta-value">${formatInventoryDate(item)}</span>
        </div>
        <div class="raster-meta-item">
          <span class="raster-meta-label">${text.downloadCountLabel}</span>
          <span class="raster-meta-value">${getInventoryDownloadCount(item)}</span>
        </div>
      </div>
      <div class="raster-card-actions">
        <button
          type="button"
          class="button primary download-tif-btn"
          data-open-download-center
          data-download-dataset="${item.datasetKey || ""}"
          data-download-main-category="${item.mainCategory || ""}"
          data-download-sector="${item.sector || ""}"
          data-download-category="${item.category || ""}"
          data-download-subject="${item.subject || ""}"
          data-download-pollutant="${item.pollutant || ""}"
          data-download-year="${item.year || ""}"
          data-download-scale="${item.scale || ""}"
          data-download-period="${item.period || ""}"
        >${text.download}</button>
      </div>
    </article>
  `).join("");

  updateBatchDownloadButton();
}

function initializeDownloadsPage() {
  const forms = {
    emission: document.getElementById('filterFormEmission')
  };
  if (!forms.emission || forms.emission.dataset.initialized === "true") return;
  forms.emission.dataset.initialized = "true";

  const typeRadios = document.querySelectorAll('input[name="dataType"]');
  const descriptions = {
    emission: document.getElementById('descEmission')
  };

  // 数据类型切换
  typeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const selectedType = e.target.value;

      Object.keys(forms).forEach(key => {
        if (forms[key]) forms[key].style.display = key === selectedType ? 'block' : 'none';
        if (descriptions[key]) descriptions[key].style.display = key === selectedType ? 'block' : 'none';
      });

      const matchResult = document.getElementById('matchResult');
      if (matchResult) matchResult.classList.remove('show');
    });
  });

  // 分类变化时显示/隐藏对应的对象选择区域
  const mainCategoryRadios = document.querySelectorAll('input[name="mainCategory"]');
  const datasetRadios = document.querySelectorAll('input[name="datasetKey"]');
  const otherMainCategoryRadios = document.querySelectorAll('input[name="otherMainCategory"]');
  const agricultureFields = document.querySelectorAll('.agriculture-download-field');
  const otherFields = [
    document.getElementById('otherEmissionSection'),
    document.getElementById('otherPollutantSection'),
    document.getElementById('otherPeriodSection')
  ].filter(Boolean);
  const otherPendingSection = document.getElementById('otherPendingSection');
  const otherPollutantSection = document.getElementById('otherPollutantSection');
  const otherPeriodSection = document.getElementById('otherPeriodSection');
  const yearSection = document.getElementById('yearSection');
  const sectorSection = document.getElementById('sectorSection');
  const sectorOptions = document.getElementById('sectorOptions');
  const categorySection = document.getElementById('categorySection');
  const categoryOptions = document.getElementById('categoryOptions');
  const scaleSection = document.getElementById('scaleSection');
  const monthSection = document.getElementById('monthSection');
  const categoryTime = document.getElementById('categoryTime');
  const categorySpecies = document.getElementById('categorySpecies');
  const timeSubjectSection = document.getElementById('timeSubjectSection');
  const timeSubjectOptions = timeSubjectSection?.querySelector('.filter-options');
  const speciesSubjectSection = document.getElementById('speciesSubjectSection');
  const cropSubjectSection = document.getElementById('cropSubjectSection');
  const methaneSubjectSection = document.getElementById('methaneSubjectSection');

  const downloadCategoryOptions = {
    livestock: [
      { value: "时间分解", label: "时间分解", id: "categoryTime" },
      { value: "物种分解", label: "物种分解", id: "categorySpecies" }
    ],
    planting: [
      { value: "时间分解", label: "时间分解", id: "categoryTime" },
      { value: "作物分解", label: "作物分解", id: "categoryCrop" }
    ],
    methane: [
      { value: "甲烷来源分解", label: "甲烷来源分解", id: "categoryMethaneSource" }
    ]
  };

  const clearChecked = (selector) => {
    document.querySelectorAll(selector).forEach(input => {
      input.checked = false;
    });
  };

  const getCheckedValue = (name) => document.querySelector(`input[name="${name}"]:checked`)?.value || "";

  const setRadioValue = (name, value) => {
    if (!value) return false;
    const input = Array.from(document.querySelectorAll(`input[name="${name}"]`))
      .find(item => item.value === value);
    if (!input || input.disabled) return false;
    input.checked = true;
    return true;
  };

  const setCheckboxValue = (name, value) => {
    if (!value) return false;
    const input = Array.from(document.querySelectorAll(`input[name="${name}"]`))
      .find(item => item.value === value);
    if (!input || input.disabled) return false;
    input.checked = true;
    return true;
  };

  const applyDownloadParams = () => {
    const params = new URLSearchParams(window.location.search);
    if (!params.size) return;

    const dataset = params.get("dataset");
    const mainCategory = params.get("mainCategory");
    const sector = params.get("sector");
    const category = params.get("category");
    const subject = params.get("subject");
    const pollutant = params.get("pollutant");
    const year = params.get("year");
    const scale = params.get("scale");
    const period = params.get("period");

    if (dataset) setRadioValue("datasetKey", dataset);
    updateDownloadDatasetMode();

    if (dataset === "other_emission") {
      if (mainCategory === "乘用车日尺度排放清单") {
        setRadioValue("otherMainCategory", mainCategory);
        updateOtherEmissionMode();
        if (pollutant) setCheckboxValue("otherPollutant", pollutant);
        if (period) setCheckboxValue("otherPeriod", period);
      } else if (subject === "快递业") {
        setRadioValue("otherMainCategory", "快递业道路尺度排放清单");
        updateOtherEmissionMode();
      }
      return;
    }

    if (mainCategory) setRadioValue("mainCategory", mainCategory);
    updateDownloadFormOptions();
    if (sector) setRadioValue("sector", sector);
    updateDownloadFormOptions();
    if (category) setRadioValue("category", category);
    updateDownloadSubjectSections();
    if (year) setRadioValue("year", year);
    if (scale) setRadioValue("scale", scale);
    updateDownloadMonthOptions();
    if (period) setRadioValue("month", period);

    if (category === "时间分解") {
      setRadioValue("timeSubject", subject);
    } else if (category === "物种分解") {
      setCheckboxValue("species", subject);
    } else if (category === "作物分解") {
      setCheckboxValue("cropSubject", subject);
    } else if (category === "甲烷来源分解") {
      setCheckboxValue("methaneSubject", subject);
    } else if (mainCategory === "HONO排放清单") {
      setRadioValue("year", "2016");
      setRadioValue("scale", "annual");
    }
  };

  const updateDownloadMonthOptions = () => {
    const datasetKey = getCheckedValue("datasetKey") || "agriculture_emission";
    const scale = getCheckedValue("scale") || "all";
    const showMonth = datasetKey === "agriculture_emission" && scale === "monthly";
    const monthInputs = document.querySelectorAll('input[name="month"]');

    if (monthSection) monthSection.style.display = showMonth ? "" : "none";
    monthInputs.forEach((input, index) => {
      input.disabled = !showMonth;
      input.required = showMonth && index === 0;
      if (!showMonth) input.checked = false;
    });
  };

  const updateDownloadYearOptions = (mainCategory) => {
    const yearInputs = document.querySelectorAll('input[name="year"]');
    yearInputs.forEach(input => {
      if (mainCategory === "HONO排放清单") {
        input.checked = input.value === "2016";
        input.disabled = input.value !== "2016";
      } else {
        input.disabled = false;
      }
    });
    if (yearSection) yearSection.style.display = "";
    updateDownloadMonthOptions();
  };

  const updateDownloadScaleOptions = (mainCategory) => {
    const scaleInputs = document.querySelectorAll('input[name="scale"]');
    const scaleOptionLabels = document.querySelectorAll('[data-scale-option]');
    const annualOnly = mainCategory === "CH4排放清单" || mainCategory === "HONO排放清单";
    const hideNonAnnual = mainCategory === "HONO排放清单";

    scaleInputs.forEach(input => {
      if (annualOnly) {
        input.checked = input.value === "annual";
        input.disabled = input.value !== "annual";
      } else {
        input.checked = input.checked || input.value === "all";
        input.disabled = false;
      }
    });

    scaleOptionLabels.forEach(label => {
      const option = label.getAttribute('data-scale-option');
      label.style.display = hideNonAnnual && option !== "annual" ? "none" : "";
    });

    if (scaleSection) scaleSection.style.display = "";
    updateDownloadMonthOptions();
  };

  const updateDownloadDatasetMode = () => {
    const datasetKey = getCheckedValue("datasetKey") || "agriculture_emission";
    const isOther = datasetKey === "other_emission";
    agricultureFields.forEach(field => {
      field.style.display = isOther ? "none" : "";
    });
    otherFields.forEach(field => {
      field.style.display = isOther ? "" : "none";
    });
    updateOtherEmissionMode();
    updateDownloadFormOptions();
  };

  const updateOtherEmissionMode = () => {
    const isOther = (getCheckedValue("datasetKey") || "agriculture_emission") === "other_emission";
    const mainCategory = getCheckedValue("otherMainCategory") || "乘用车日尺度排放清单";
    const isExpressDelivery = mainCategory === "快递业道路尺度排放清单";
    const yearInputs = document.querySelectorAll('input[name="year"]');
    const scaleInputs = document.querySelectorAll('input[name="scale"]');

    if (yearSection) yearSection.style.display = isOther && isExpressDelivery ? "none" : "";
    if (scaleSection) scaleSection.style.display = isOther && isExpressDelivery ? "none" : "";
    yearInputs.forEach(input => {
      input.disabled = isOther && isExpressDelivery;
    });
    scaleInputs.forEach(input => {
      input.disabled = isOther && isExpressDelivery;
    });
    if (monthSection) monthSection.style.display = "none";
    document.querySelectorAll('input[name="month"]').forEach(input => {
      input.disabled = true;
      input.required = false;
      input.checked = false;
    });
    if (otherPendingSection) otherPendingSection.style.display = isOther && isExpressDelivery ? "" : "none";
    if (otherPollutantSection) otherPollutantSection.style.display = isOther && !isExpressDelivery ? "" : "none";
    if (otherPeriodSection) otherPeriodSection.style.display = isOther && !isExpressDelivery ? "" : "none";
  };

  const renderDownloadCategoryOptions = (mode) => {
    if (!categoryOptions) return;
    const options = downloadCategoryOptions[mode] || downloadCategoryOptions.livestock;
    categoryOptions.innerHTML = options.map((option, index) => `
      <label><input type="radio" name="category" value="${option.value}" id="${option.id}" ${index === 0 ? "required checked" : ""} /> ${option.label}</label>
    `).join("");
  };

  const renderDownloadSectorOptions = (mainCategory) => {
    if (!sectorOptions || !sectorSection) return;
    const previousSector = getCheckedValue("sector");

    if (mainCategory === "CH4排放清单" || mainCategory === "HONO排放清单") {
      sectorSection.style.display = "none";
      sectorOptions.innerHTML = "";
      return;
    }

    sectorSection.style.display = "";
    const options = mainCategory === "NH3排放清单"
      ? [
        { value: "畜牧业", label: "畜牧业" },
        { value: "种植业", label: "种植业" }
      ]
      : [
        { value: "畜牧业", label: "畜牧业" },
        { value: "种植业", label: "种植业（待开发）", disabled: true }
      ];
    const selectedSector = options.some(option => option.value === previousSector && !option.disabled)
      ? previousSector
      : options.find(option => !option.disabled)?.value;

    sectorOptions.innerHTML = options.map(option => `
      <label><input type="radio" name="sector" value="${option.value}" ${option.value === selectedSector ? "checked" : ""} ${option.disabled ? "disabled" : ""} /> ${option.label}</label>
    `).join("");
  };

  const renderDownloadTimeSubjectOptions = (mainCategory) => {
    if (!timeSubjectOptions) return;
    const sector = getCheckedValue("sector");
    const options = mainCategory === "NH3排放清单" && sector === "种植业"
      ? [{ value: "crop", label: "作物总量" }]
      : [{ value: "livestock", label: "畜禽总量" }];

    timeSubjectOptions.innerHTML = options.map((option, index) => `
      <label><input type="radio" name="timeSubject" value="${option.value}" ${index === 0 ? "checked" : ""} /> ${option.label}</label>
    `).join("");
  };

  const updateDownloadSubjectSections = () => {
    const mainCategory = getCheckedValue("mainCategory") || "NH3排放清单";
    const category = getCheckedValue("category");

    if (mainCategory === "HONO排放清单") {
      [timeSubjectSection, speciesSubjectSection, cropSubjectSection, methaneSubjectSection].forEach(section => {
        if (section) section.style.display = "none";
      });
      clearChecked('input[name="timeSubject"], input[name="species"], input[name="cropSubject"], input[name="methaneSubject"]');
      return;
    }

    if (timeSubjectSection) timeSubjectSection.style.display = category === "时间分解" ? "block" : "none";
    if (speciesSubjectSection) speciesSubjectSection.style.display = category === "物种分解" ? "block" : "none";
    if (cropSubjectSection) cropSubjectSection.style.display = category === "作物分解" ? "block" : "none";
    if (methaneSubjectSection) methaneSubjectSection.style.display = category === "甲烷来源分解" ? "block" : "none";
    clearChecked('input[name="timeSubject"], input[name="species"], input[name="cropSubject"], input[name="methaneSubject"]');
  };

  const updateDownloadFormOptions = () => {
    if ((getCheckedValue("datasetKey") || "agriculture_emission") === "other_emission") return;
    const mainCategory = getCheckedValue("mainCategory") || "NH3排放清单";
    updateDownloadYearOptions(mainCategory);
    updateDownloadScaleOptions(mainCategory);
    renderDownloadSectorOptions(mainCategory);
    renderDownloadTimeSubjectOptions(mainCategory);

    if (categorySection) categorySection.style.display = mainCategory === "HONO排放清单" ? "none" : "";

    if (mainCategory === "HONO排放清单") {
      if (categoryOptions) categoryOptions.innerHTML = "";
    } else if (mainCategory === "CH4排放清单") {
      renderDownloadCategoryOptions("methane");
    } else if (getCheckedValue("sector") === "种植业") {
      renderDownloadCategoryOptions("planting");
    } else {
      renderDownloadCategoryOptions("livestock");
    }

    updateDownloadSubjectSections();
    updateDownloadMonthOptions();
  };

  if (categoryTime && categorySpecies) {
    categoryTime.addEventListener('change', function() {
      if (this.checked) {
        timeSubjectSection.style.display = 'block';
        speciesSubjectSection.style.display = 'none';
      }
    });

    categorySpecies.addEventListener('change', function() {
      if (this.checked) {
        timeSubjectSection.style.display = 'none';
        speciesSubjectSection.style.display = 'block';
      }
    });
  }

  mainCategoryRadios.forEach(radio => {
    radio.addEventListener('change', updateDownloadFormOptions);
  });
  datasetRadios.forEach(radio => {
    radio.addEventListener('change', updateDownloadDatasetMode);
  });
  otherMainCategoryRadios.forEach(radio => {
    radio.addEventListener('change', updateOtherEmissionMode);
  });
  if (sectorOptions) {
    sectorOptions.addEventListener('change', updateDownloadFormOptions);
  }
  if (categoryOptions) {
    categoryOptions.addEventListener('change', updateDownloadSubjectSections);
  }
  if (scaleSection) {
    scaleSection.addEventListener('change', updateDownloadMonthOptions);
  }
  updateDownloadDatasetMode();
  applyDownloadParams();

  // Select All 功能
  const selectAllSpecies = document.getElementById('selectAllSpecies');
  if (selectAllSpecies) {
    selectAllSpecies.addEventListener('click', function(e) {
      e.preventDefault();
      const checkboxes = document.querySelectorAll('input[name="species"]');
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !allChecked);
    });
  }

  // 排放数据表单提交
  if (forms.emission) {
    forms.emission.addEventListener('submit', handleEmissionDownload);
  }
}


async function handleEmissionDownload(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const datasetKey = formData.get('datasetKey') || 'agriculture_emission';
  if (datasetKey === 'other_emission') {
    await handleOtherEmissionDownload(event, formData);
    return;
  }

  const year = formData.get('year');
  const mainCategory = formData.get('mainCategory');
  const category = formData.get('category');
  const sector = formData.get('sector') || (mainCategory === 'CH4排放清单' ? '甲烷来源' : '畜牧业');
  const scale = formData.get('scale') || 'all';
  const period = scale === "monthly" ? formData.get('month') : "";
  const selectedPollutant = getPollutantFromMainCategory(mainCategory);

  if (selectedPollutant === "HONO") {
    if (!year || !mainCategory) {
      showMatchResult('请填写所有必填项', 'error');
      return;
    }
    if (year !== "2016") {
      showMatchResult("HONO排放清单目前仅提供 2016 年数据。", "error");
      return;
    }
  } else if (!year || !mainCategory || !category) {
    showMatchResult('请填写所有必填项', 'error');
    return;
  }

  if (scale === "monthly" && !period) {
    showMatchResult('请选择月份。', 'error');
    return;
  }

  let subjects = [];
  if (category === '时间分解') {
    const timeSubject = formData.get('timeSubject');
    if (!timeSubject) {
      showMatchResult('请选择子类', 'error');
      return;
    }
    subjects = [timeSubject];
  } else if (category === '物种分解') {
    subjects = formData.getAll('species');
    if (subjects.length === 0) {
      showMatchResult('请至少选择一个物种', 'error');
      return;
    }
  } else if (category === '作物分解') {
    subjects = formData.getAll('cropSubject');
    if (subjects.length === 0) {
      showMatchResult('请至少选择一个作物子类', 'error');
      return;
    }
  } else if (category === '甲烷来源分解') {
    subjects = formData.getAll('methaneSubject');
    if (subjects.length === 0) {
      showMatchResult('请至少选择一个甲烷来源', 'error');
      return;
    }
  }

  const btn = event.target.querySelector('.download-btn');
  const originalText = btn.textContent;
  btn.textContent = '正在准备下载...';
  btn.disabled = true;

  try {
    const token = getAuthToken();
    const zenodoMatch = await findZenodoEmissionFile({
      pollutant: selectedPollutant,
      mainCategory,
      sector,
      year,
      category: selectedPollutant === "HONO" ? "" : category,
      subjects: selectedPollutant === "HONO" ? ["HONO"] : subjects,
      scale,
      period
    });

    if (zenodoMatch) {
      await recordZenodoDownloadRequest(zenodoMatch, {
        pollutant: selectedPollutant,
        mainCategory,
        sector,
        year,
        category: selectedPollutant === "HONO" ? "" : category,
        subjects: selectedPollutant === "HONO" ? ["HONO"] : subjects,
        scale,
        period
      });
      window.open(zenodoMatch.zenodoUrl, "_blank", "noopener");
      showMatchResult(`已记录下载申请，正在打开 Zenodo 文件：${zenodoMatch.filename}`, "success");
      renderDownloadHistory();
      return;
    }

    if (selectedPollutant === "HONO") {
      if (year !== "2016") {
        throw new Error("HONO排放清单目前仅提供 2016 年数据。");
      }

      const honoUrl = `${API_BASE_URL}/api/downloads/emission/file?pollutant=HONO&year=2016&category=${encodeURIComponent("时间分解")}&filename=${encodeURIComponent("2016(1).tif")}`;
      const downloaded = await downloadWithAuth(honoUrl, "2016(1).tif");
      if (downloaded) {
        showMatchResult("HONO 文件已开始下载。", "success");
      }
      return;
    }

    const filters = {
      pollutant: selectedPollutant,
      mainCategory,
      sector,
      year,
      category,
      subjects,
      scale
    };

    const response = await fetch(`${API_BASE_URL}/api/downloads/emission/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      credentials: "include",
      body: JSON.stringify(filters)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '下载失败');
    }

    const contentDisposition = response.headers.get('Content-Disposition');
    const filename = contentDisposition
      ? decodeURIComponent(contentDisposition.split('filename=')[1].replace(/"/g, ''))
      : `emission_${year}_${category}.zip`;

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    const fileCount = response.headers.get('X-File-Count') || '若干';
    showMatchResult(`找到 ${fileCount} 个符合条件的文件，下载已开始`, 'success');
    renderDownloadHistory();

  } catch (error) {
    showMatchResult(`下载失败：${error.message}`, 'error');
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

let zenodoFileIndexPromise = null;

async function loadZenodoFileIndex() {
  if (!zenodoFileIndexPromise) {
    zenodoFileIndexPromise = fetch("zenodo-files.json", { cache: "no-store" })
      .then(response => {
        if (!response.ok) return [];
        return response.json();
      })
      .then(items => Array.isArray(items) ? items : [])
      .catch(() => []);
  }
  return zenodoFileIndexPromise;
}

function normalizeZenodoScale(scale) {
  return String(scale || "");
}

function getZenodoSubjectAliases(subject) {
  const value = String(subject || "");
  if (value === "甲烷总排放量") return ["甲烷总排放量", "总排放量"];
  if (value === "总排放量") return ["总排放量", "甲烷总排放量"];
  return [value];
}

function getZenodoFilePeriod(item) {
  const text = `${item.filename || ""}/${item.relativePath || ""}`;
  const year = String(item.year || "");
  const pattern = new RegExp(`(?:^|[^0-9])${year}[_-](0[1-9]|1[0-2])(?:[^0-9]|$)`);
  const matched = text.match(pattern);
  return matched ? matched[1] : "";
}

async function findZenodoEmissionFile(filters) {
  const items = await loadZenodoFileIndex();
  const subjects = Array.isArray(filters.subjects)
    ? filters.subjects.flatMap(getZenodoSubjectAliases)
    : [];
  const requestedScale = normalizeZenodoScale(filters.scale);
  const scaleOrder = requestedScale === "all" ? ["annual", "monthly"] : [requestedScale];

  for (const scale of scaleOrder) {
    const matched = items.find(item => {
      const samePollutant = item.pollutant === filters.pollutant;
      const sameMainCategory = item.mainCategory === filters.mainCategory;
      const sameSector = !item.sector || item.sector === filters.sector;
      const sameCategory = !item.category || item.category === filters.category;
      const sameYear = item.year === filters.year;
      const sameScale = item.scale === scale;
      const samePeriod = scale !== "monthly" || !filters.period || getZenodoFilePeriod(item) === filters.period;
      const sameSubject = !item.subject || subjects.includes(item.subject);
      return samePollutant && sameMainCategory && sameSector && sameCategory && sameYear && sameScale && samePeriod && sameSubject;
    });
    if (matched) return matched;
  }

  return null;
}

async function recordZenodoDownloadRequest(file, filters) {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}/api/downloads/zenodo-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    credentials: "include",
    body: JSON.stringify({
      filename: file.filename,
      zenodoUrl: file.zenodoUrl,
      filePath: file.zenodoUrl,
      datasetKey: file.datasetKey || filters.datasetKey || "agriculture_emission",
      datasetName: file.datasetName || filters.datasetName || "农业排放清单",
      fileCount: file.fileCount || 1,
      year: file.year || filters.year,
      mainCategory: file.mainCategory || filters.mainCategory,
      sector: file.sector || filters.sector,
      category: file.category || filters.category,
      subject: file.subject || (Array.isArray(filters.subjects) ? filters.subjects.join(", ") : ""),
      scale: file.scale || filters.scale,
      period: filters.period || getZenodoFilePeriod(file),
      filters: {
        ...filters,
        filename: file.filename,
        zenodoUrl: file.zenodoUrl
      }
    })
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || error.message || "记录下载申请失败");
  }
}

async function recordExpressDeliveryDownloadRequest() {
  await recordZenodoDownloadRequest(EXPRESS_DELIVERY_ZENODO_FILE, {
    datasetKey: EXPRESS_DELIVERY_ZENODO_FILE.datasetKey,
    datasetName: EXPRESS_DELIVERY_ZENODO_FILE.datasetName,
    mainCategory: EXPRESS_DELIVERY_ZENODO_FILE.mainCategory,
    subject: EXPRESS_DELIVERY_ZENODO_FILE.subject,
    scale: EXPRESS_DELIVERY_ZENODO_FILE.scale
  });
}

async function handleOtherEmissionDownload(event, formData) {
  const year = formData.get('year');
  const mainCategory = formData.get('otherMainCategory') || '乘用车日尺度排放清单';
  const pollutants = formData.getAll('otherPollutant');
  const periods = formData.getAll('otherPeriod');

  if (mainCategory === '快递业道路尺度排放清单') {
    const btn = event.target.querySelector('.download-btn');
    const originalText = btn.textContent;
    btn.textContent = '正在打开 Zenodo...';
    btn.disabled = true;

    try {
      await recordExpressDeliveryDownloadRequest();
      window.open(EXPRESS_DELIVERY_ZENODO_FILE.zenodoUrl, "_blank", "noopener");
      showMatchResult("已记录下载申请，正在打开快递业道路尺度排放清单 zip 数据包。", "success");
      renderDownloadHistory();
    } catch (error) {
      showMatchResult(`下载失败：${error.message}`, 'error');
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
    return;
  }

  if (year !== '2019') {
    showMatchResult('乘用车日尺度排放清单当前仅支持 2019 年数据', 'error');
    return;
  }

  if (!pollutants.length) {
    showMatchResult('请至少选择一个污染物', 'error');
    return;
  }

  if (!periods.length) {
    showMatchResult('请至少选择一个月份', 'error');
    return;
  }

  const btn = event.target.querySelector('.download-btn');
  const originalText = btn.textContent;
  btn.textContent = '正在准备下载...';
  btn.disabled = true;

  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/downloads/other/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      credentials: "include",
      body: JSON.stringify({
        datasetKey: 'other_emission',
        datasetName: '其他排放清单',
        mainCategory,
        subject: '乘用车',
        pollutants,
        year,
        periods,
        scale: 'monthly'
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '下载失败');
    }

    const contentDisposition = response.headers.get('Content-Disposition');
    const filename = contentDisposition
      ? decodeURIComponent(contentDisposition.split('filename=')[1].replace(/"/g, ''))
      : `other_emission_${year}.zip`;

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    const fileCount = response.headers.get('X-File-Count') || '若干';
    showMatchResult(`找到 ${fileCount} 个符合条件的文件，下载已开始`, 'success');
    renderDownloadHistory();
  } catch (error) {
    showMatchResult(`下载失败：${error.message}`, 'error');
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

async function downloadWithAuth(url, fallbackFilename) {
  const token = getAuthToken();

  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    credentials: "include"
  });

  if (!response.ok) {
    let message = '下载失败';
    try {
      const error = await response.json();
      message = error.error || error.message || message;
    } catch (error) {
      message = response.statusText || message;
    }
    throw new Error(message);
  }

  const contentDisposition = response.headers.get('Content-Disposition') || '';
  const match = contentDisposition.match(/filename\*?=(?:UTF-8''|")?([^";]+)/i);
  const filename = match
    ? decodeURIComponent(match[1].replace(/"/g, ''))
    : fallbackFilename || 'download';

  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(blobUrl);
  return true;
}

function showMatchResult(message, type = 'info') {
  const resultDiv = document.getElementById('matchResult');
  if (!resultDiv) return;

  resultDiv.textContent = message;
  resultDiv.className = `match-result show ${type}`;

  setTimeout(() => {
    resultDiv.classList.remove('show');
  }, 3000);
}

function buildDownloadCenterUrlFromInventory(button) {
  const params = new URLSearchParams();
  const fieldMap = {
    dataset: "downloadDataset",
    mainCategory: "downloadMainCategory",
    sector: "downloadSector",
    category: "downloadCategory",
    subject: "downloadSubject",
    pollutant: "downloadPollutant",
    year: "downloadYear",
    scale: "downloadScale",
    period: "downloadPeriod"
  };

  Object.entries(fieldMap).forEach(([param, key]) => {
    const value = button.dataset[key];
    if (value) params.set(param, value);
  });

  return `downloads.html${params.toString() ? `?${params.toString()}` : ""}`;
}

function buildDownloadCenterUrlFromLegacyDownload(button) {
  const rawUrl = button.dataset.downloadUrl || "";
  const params = new URLSearchParams();

  try {
    const url = new URL(rawUrl, window.location.href);
    const source = url.searchParams;
    const pollutant = source.get("pollutant") || "";
    const subject = source.get("subject") || "";
    const mainCategory = pollutant === "HONO"
      ? "HONO排放清单"
      : pollutant === "CH4"
        ? "CH4排放清单"
        : pollutant === "NOx"
          ? "NOx排放清单"
          : "NH3排放清单";

    params.set("dataset", source.get("datasetKey") || "agriculture_emission");
    params.set("mainCategory", source.get("mainCategory") || mainCategory);
    if (source.get("sector")) params.set("sector", source.get("sector"));
    if (source.get("category")) params.set("category", source.get("category"));
    if (subject) params.set("subject", subject);
    if (pollutant) params.set("pollutant", pollutant);
    if (source.get("year")) params.set("year", source.get("year"));
    if (source.get("scale")) params.set("scale", source.get("scale"));
    if (source.get("period")) params.set("period", source.get("period"));

    if (!params.get("period") && params.get("scale") === "monthly") {
      const filename = source.get("filename") || button.dataset.fileName || "";
      const matched = filename.match(/(?:^|[^0-9])(?:19|20)\d{2}[_-](0[1-9]|1[0-2])(?:[^0-9]|$)/);
      if (matched) params.set("period", matched[1]);
    }
  } catch (error) {
    if (button.dataset.fileName) params.set("keyword", button.dataset.fileName);
  }

  return `downloads.html${params.toString() ? `?${params.toString()}` : ""}`;
}

function initializeRasterInventory() {
  const container = document.getElementById("rasterList");
  if (!container) return;

  const staticItems = createRasterInventoryItems();
  rasterInventoryState.items = staticItems;
  updateRasterInventoryCopy();
  renderRasterInventory();
  updateDownloadStats();

  loadPublishedInventories()
    .then((dynamicItems) => {
      if (!dynamicItems.length) return;
      rasterInventoryState.items = mergeRasterInventoryItems(staticItems, dynamicItems);
      rasterInventoryState.dynamicLoaded = true;
      updateRasterInventoryCopy();
      renderRasterInventory();
      updateDownloadStats();
    })
    .catch(() => {
      rasterInventoryState.dynamicLoaded = false;
    });

  const yearFilter = document.getElementById("rasterYearFilter");
  const datasetFilter = document.getElementById("rasterDatasetFilter");
  const scaleFilter = document.getElementById("rasterScaleFilter");
  const keywordFilter = document.getElementById("rasterKeywordFilter");
  const prevPage = document.getElementById("rasterPrevPage");
  const nextPage = document.getElementById("rasterNextPage");
  const sidebarLinks = document.querySelectorAll("[data-inventory-filter-dataset], [data-inventory-filter-main-category], [data-inventory-filter-sector], [data-inventory-filter-category], [data-inventory-filter-keyword], [data-inventory-filter-subjects]");
  const menuLinks = Array.from(document.querySelectorAll(".inventory-menu-child"));

  const getMenuLevel = (link) => {
    const match = Array.from(link.classList).join(" ").match(/inventory-menu-level-(\d)/);
    return match ? Number(match[1]) : 0;
  };

  const getMenuDescendants = (link) => {
    const level = getMenuLevel(link);
    const startIndex = menuLinks.indexOf(link);
    if (startIndex < 0) return [];
    const descendants = [];
    for (let index = startIndex + 1; index < menuLinks.length; index += 1) {
      const candidate = menuLinks[index];
      if (getMenuLevel(candidate) <= level) break;
      descendants.push(candidate);
    }
    return descendants;
  };

  const getMenuAncestors = (link) => {
    const ancestors = [];
    let level = getMenuLevel(link);
    const startIndex = menuLinks.indexOf(link);
    for (let index = startIndex - 1; index >= 0 && level > 1; index -= 1) {
      const candidate = menuLinks[index];
      const candidateLevel = getMenuLevel(candidate);
      if (candidateLevel < level) {
        ancestors.unshift(candidate);
        level = candidateLevel;
      }
    }
    return ancestors;
  };

  const setMenuExpanded = (link, expanded) => {
    if (!link || !link.classList.contains("inventory-menu-parent")) return;
    link.classList.toggle("is-expanded", expanded);
  };

  const updateMenuVisibility = () => {
    menuLinks.forEach((link) => {
      const collapsedByAncestor = getMenuAncestors(link).some(parent => !parent.classList.contains("is-expanded"));
      link.classList.toggle("is-collapsed", collapsedByAncestor);
      link.classList.remove("has-active-descendant");
    });

    const active = document.querySelector(".inventory-menu-child.active");
    if (active) {
      getMenuAncestors(active).forEach(parent => parent.classList.add("has-active-descendant"));
    }
  };

  const expandPathTo = (link) => {
    getMenuAncestors(link).forEach(parent => setMenuExpanded(parent, true));
    updateMenuVisibility();
  };

  menuLinks.forEach((link) => {
    const level = getMenuLevel(link);
    setMenuExpanded(link, level === 1);
  });
  updateMenuVisibility();

  if (yearFilter) {
    yearFilter.addEventListener("change", () => {
      rasterInventoryState.page = 1;
      renderRasterInventory();
    });
  }

  if (datasetFilter) {
    datasetFilter.addEventListener("change", () => {
      rasterInventoryState.page = 1;
      renderRasterInventory();
    });
  }

  if (scaleFilter) {
    scaleFilter.addEventListener("change", () => {
      rasterInventoryState.page = 1;
      renderRasterInventory();
    });
  }

  if (keywordFilter) {
    keywordFilter.addEventListener("input", () => {
      rasterInventoryState.page = 1;
      renderRasterInventory();
    });
  }

  if (prevPage) {
    prevPage.addEventListener("click", () => {
      if (rasterInventoryState.page > 1) {
        rasterInventoryState.page -= 1;
        renderRasterInventory();
      }
    });
  }

  if (nextPage) {
    nextPage.addEventListener("click", () => {
      const totalPages = Math.max(1, Math.ceil(rasterInventoryState.filteredItems.length / rasterInventoryConfig.pageSize));
      if (rasterInventoryState.page < totalPages) {
        rasterInventoryState.page += 1;
        renderRasterInventory();
      }
    });
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (link.classList.contains("inventory-menu-parent")) {
        const shouldExpand = !link.classList.contains("is-expanded");
        setMenuExpanded(link, shouldExpand);
      }
      document.querySelectorAll(".inventory-menu-child").forEach(item => item.classList.remove("active"));
      link.classList.add("active");
      expandPathTo(link);

      if (datasetFilter && link.dataset.inventoryFilterDataset !== undefined) {
        datasetFilter.value = link.dataset.inventoryFilterDataset;
        if (keywordFilter) keywordFilter.value = "";
      }
      rasterInventoryState.sidebarMainCategory = link.dataset.inventoryFilterMainCategory || "";
      rasterInventoryState.sidebarSector = link.dataset.inventoryFilterSector || "";
      rasterInventoryState.sidebarCategory = link.dataset.inventoryFilterCategory || "";
      rasterInventoryState.sidebarSubjects = (link.dataset.inventoryFilterSubjects || "")
        .split(",")
        .map(subject => subject.trim())
        .filter(Boolean);
      if (keywordFilter && link.dataset.inventoryFilterKeyword !== undefined) {
        keywordFilter.value = link.dataset.inventoryFilterKeyword;
      } else if (keywordFilter) {
        keywordFilter.value = "";
      }

      rasterInventoryState.page = 1;
      renderRasterInventory();
    });
  });

  // Batch download functionality
  const selectAllBtn = document.getElementById("selectAllBtn");
  const batchDownloadBtn = document.getElementById("batchDownloadBtn");

  if (selectAllBtn) {
    selectAllBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll(".raster-card-checkbox");
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !allChecked);
      selectAllBtn.textContent = allChecked ? "全选" : "取消全选";
      updateBatchDownloadButton();
    });
  }

  if (batchDownloadBtn) {
    batchDownloadBtn.addEventListener("click", () => {
      const checkedBoxes = document.querySelectorAll(".raster-card-checkbox:checked");
      if (checkedBoxes.length === 0) {
        alert("请至少选择一个文件");
        return;
      }

      checkedBoxes.forEach((checkbox, index) => {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = checkbox.dataset.filePath;
          link.download = checkbox.dataset.fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 300);
      });

      alert(`开始下载 ${checkedBoxes.length} 个文件`);
    });
  }

  // Update batch button on checkbox change
  container.addEventListener("change", (e) => {
    if (e.target.classList.contains("raster-card-checkbox")) {
      updateBatchDownloadButton();
      const checkboxes = document.querySelectorAll(".raster-card-checkbox");
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      if (selectAllBtn) {
        selectAllBtn.textContent = allChecked ? "取消全选" : "全选";
      }
    }
  });

  container.addEventListener("click", (event) => {
    const downloadCenterButton = event.target.closest("[data-open-download-center]");
    if (downloadCenterButton) {
      window.location.href = buildDownloadCenterUrlFromInventory(downloadCenterButton);
      return;
    }

    const downloadButton = event.target.closest("[data-download-url]");
    if (downloadButton) {
      window.location.href = buildDownloadCenterUrlFromLegacyDownload(downloadButton);
      return;
    }

    const infoButton = event.target.closest("[data-inventory-info]");
    if (!infoButton) return;

    const labels = currentLanguage === "zh"
      ? {
          title: "文件信息",
          name: "文件名",
          year: "年份",
          category: "分解维度",
          subject: "对象/物种",
          scale: "时间尺度",
          format: "文件格式"
        }
      : {
          title: "File Info",
          name: "Filename",
          year: "Year",
          category: "Dimension",
          subject: "Subject/Species",
          scale: "Time Scale",
          format: "Format"
        };

    alert([
      labels.title,
      `${labels.name}: ${infoButton.dataset.fileName}`,
      `${labels.year}: ${infoButton.dataset.fileYear}`,
      `${labels.category}: ${infoButton.dataset.fileCategory}`,
      `${labels.subject}: ${infoButton.dataset.fileSubject}`,
      `${labels.scale}: ${infoButton.dataset.fileScale}`,
      `${labels.format}: TIF`
    ].join("\n"));
  });
}

function updateBatchDownloadButton() {
  const batchCount = document.getElementById("batchCount");
  const checkedCount = document.querySelectorAll(".raster-card-checkbox:checked").length;
  if (batchCount) {
    batchCount.textContent = `(${checkedCount})`;
  }
}

function formatHistoryDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(currentLanguage === "zh" ? "zh-CN" : "en-US", { hour12: false });
}

function renderDownloadHistoryRows(items) {
  const list = document.getElementById("downloadHistoryList");
  if (!list) return;

  if (!items.length) {
    list.innerHTML = `<tr><td colspan="10">${currentLanguage === "zh" ? "暂无下载历史。" : "No download history yet."}</td></tr>`;
    return;
  }

  list.innerHTML = items.map(item => `
    <tr>
      <td>${formatHistoryDate(item.createdAt)}</td>
      <td>${formatDatasetTypeLabel(item.dataType)}</td>
      <td>${escapeHtml(formatInventoryDatasetName(item.datasetKey, item.datasetName))}</td>
      <td>${item.downloadType === "batch" ? (currentLanguage === "zh" ? "批量下载" : "Batch") : (currentLanguage === "zh" ? "单文件" : "Single")}</td>
      <td class="inventory-scenario-cell">${escapeHtml(item.filename || "-")}</td>
      <td>${escapeHtml(item.year || "-")}</td>
      <td>${formatRasterCategory(item.category)}</td>
      <td>${formatRasterSubject(item.subject)}</td>
      <td>${formatInventoryScale(item)}</td>
      <td>${escapeHtml(item.fileCount || 1)}</td>
    </tr>
  `).join("");
}

async function renderDownloadHistory() {
  const list = document.getElementById("downloadHistoryList");
  if (!list) return;

  const token = getAuthToken();

  try {
    const response = await fetch(`${API_BASE_URL}/api/downloads/history?limit=20`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      credentials: "include"
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || data.message || "Failed to load download history");
    }
    renderDownloadHistoryRows(Array.isArray(data.items) ? data.items : []);
  } catch (error) {
    list.innerHTML = `<tr><td colspan="10">${currentLanguage === "zh" ? "下载历史加载失败。" : "Failed to load download history."}</td></tr>`;
  }
}

function initializeDownloadHistory() {
  const refreshButton = document.getElementById("refreshDownloadHistory");
  if (refreshButton) {
    refreshButton.addEventListener("click", renderDownloadHistory);
  }
  renderDownloadHistory();
}

function generateFileSize() {
  const sizes = ["2.3 MB", "4.1 MB", "1.8 MB", "3.5 MB", "5.2 MB", "2.9 MB"];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

function generateUploadDate(year) {
  const months = ["01", "03", "06", "09", "12"];
  const month = months[Math.floor(Math.random() * months.length)];
  return `${year}-${month}`;
}

function generateDownloadCount() {
  return Math.floor(Math.random() * 500) + 50;
}

function renderDownloads() {
  const container = document.getElementById("downloadList");
  if (!container) return;
  const actionText = currentLanguage === "zh" ? "立即下载" : "Download";
  container.innerHTML = downloads[currentLanguage].map(item => `
    <article class="download-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="download-meta">
        <span>${item.link.split(".").pop().toUpperCase()}</span>
        <a href="${item.link}" download>${actionText}</a>
      </div>
    </article>
  `).join("");
}

function renderContactDetails() {
  const page = pageData[currentLanguage];
  const container = document.getElementById("contactDetails");
  if (container && page.contactInfo) {
    container.innerHTML = `
      <p><strong>${page.emailLabel}</strong> ${page.contactInfo.email}</p>
      <p><strong>${page.phoneLabel}</strong> ${page.contactInfo.phone}</p>
      <p><strong>${page.addressLabel}</strong> ${page.contactInfo.address}</p>
    `;
  }
}

async function updateVisitStats() {
  const visitCount = document.getElementById("visitCount");
  if (!visitCount) return;

  visitCount.textContent = VISIT_BASE_COUNT.toLocaleString();
  const visitRecordedKey = "aslcfs_visit_recorded";
  const hasRecordedVisit = sessionStorage.getItem(visitRecordedKey) === "true";

  try {
    const response = hasRecordedVisit
      ? await fetch(`${API_BASE_URL}/api/analytics/visit-count`, {
        credentials: "include"
      })
      : await fetch(`${API_BASE_URL}/api/analytics/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          page: document.body?.dataset?.page || "",
          path: window.location.pathname,
          referrer: document.referrer || ""
        })
      });

    if (!response.ok) throw new Error("Failed to record visit");

    const data = await response.json();
    visitCount.textContent = Number(data.totalCount || VISIT_BASE_COUNT).toLocaleString();
    if (!hasRecordedVisit) {
      sessionStorage.setItem(visitRecordedKey, "true");
    }
  } catch (error) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/analytics/visit-count`, {
        credentials: "include"
      });
      if (!response.ok) throw new Error("Failed to load visit count");
      const data = await response.json();
      visitCount.textContent = Number(data.totalCount || VISIT_BASE_COUNT).toLocaleString();
    } catch (fallbackError) {
      visitCount.textContent = VISIT_BASE_COUNT.toLocaleString();
    }
  }
}

function handleSearch(event) {
  event.preventDefault();
  currentSearch = document.getElementById("searchInput").value;
  renderResources();
  renderPapers();
  const rasterKeyword = document.getElementById("rasterKeywordFilter");
  if (rasterKeyword) {
    rasterKeyword.value = currentSearch;
    rasterInventoryState.page = 1;
    renderRasterInventory();
  }
}

function initializeLanguageSelector() {
  const select = document.getElementById("languageSelect");
  if (!select) return;
  select.addEventListener("change", event => setLanguage(event.target.value));
}

function initializeSearch() {
  const form = document.getElementById("searchForm");
  if (!form) return;
  form.addEventListener("submit", handleSearch);
}

function initializeSectorTags() {
  const tags = document.querySelectorAll(".sector-tag");
  if (tags.length === 0) return;

  const sectorContent = {
    emission: {
      zh: "排放数据样例已更新：按年份、分解维度和对象组织，支持在线浏览与下载。",
      en: "Emission data samples updated: organized by year, dimension and subject for review and download."
    }
  };

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const sector = tag.dataset.sector;
      const newsText = document.getElementById("newsText");

      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      if (newsText && sectorContent[sector]) {
        newsText.textContent = sectorContent[sector][currentLanguage] || sectorContent[sector].zh;
      }
    });
  });

  const activeTag = document.querySelector(".sector-tag.active") || tags[0];
  if (activeTag) {
    activeTag.classList.add("active");
  }
}

function initializeHomeNewsCarousel() {
  const carousel = document.getElementById("homeNewsCarousel");
  if (!carousel) return;

  const images = Array.from(carousel.querySelectorAll(".home-news-image"));
  const dots = Array.from(carousel.querySelectorAll(".home-news-dot"));
  const prevButton = carousel.querySelector('[data-news-action="prev"]');
  const nextButton = carousel.querySelector('[data-news-action="next"]');
  const title = document.getElementById("newsTitle");
  const text = document.getElementById("newsText");

  const slides = [
    {
      title: "2023 年畜牧业 CH4 排放空间分布",
      text: "展示畜牧业甲烷排放格局与年度变化趋势。"
    },
    {
      title: "2023 年畜牧业 NH3 排放空间分布",
      text: "展示不同畜禽物种 NH3 排放贡献。"
    },
    {
      title: "2023 年种植业 CH4 排放空间分布",
      text: "展示水稻等种植活动甲烷排放变化。"
    },
    {
      title: "2023 年畜牧业 NOx 排放空间分布",
      text: "展示不同畜禽物种 NOx 排放贡献。"
    },
    {
      title: "2023 年种植业 NH3 排放空间分布",
      text: "展示主要作物 NH3 排放空间格局。"
    }
  ];

  if (!images.length) return;

  let activeIndex = 0;
  let timer = null;

  const setSlide = (index) => {
    activeIndex = (index + images.length) % images.length;
    images.forEach((image, imageIndex) => {
      image.classList.toggle("is-active", imageIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });

    const slide = slides[activeIndex] || slides[0];
    if (title) title.textContent = slide.title;
    if (text) text.textContent = slide.text;
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => setSlide(activeIndex + 1), 4500);
  };

  const stop = () => {
    window.clearInterval(timer);
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      setSlide(Number(dot.dataset.newsDot || 0));
      start();
    });
  });

  prevButton?.addEventListener("click", () => {
    setSlide(activeIndex - 1);
    start();
  });

  nextButton?.addEventListener("click", () => {
    setSlide(activeIndex + 1);
    start();
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  setSlide(0);
  start();
}

document.addEventListener("DOMContentLoaded", () => {
  renderSharedLayout();
  initializeLanguageSelector();
  initializeSearch();
  initializeRasterInventory();
  initializeDownloadHistory();
  initializeAuth();
  initializeAdmin();
  revealAdminLink();
  initializeSectorTags();
  initializeHomeNewsCarousel();
  const savedLanguage = localStorage.getItem("pageLanguage") || "zh";
  setLanguage(savedLanguage);
  updateVisitStats();
});

// Authentication functions
const API_BASE_URL = window.ASLCFS_API_BASE_URL || "https://aslcfs-backend-tdg7.onrender.com";
const LOGIN_URL = `${API_BASE_URL}/api/auth/login`;
const REGISTER_URL = `${API_BASE_URL}/api/auth/register`;
const FORGOT_PASSWORD_URL = `${API_BASE_URL}/api/auth/forgot-password`;
const RESET_PASSWORD_URL = `${API_BASE_URL}/api/auth/reset-password`;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getAuthToken() {
  return sessionStorage.getItem("authToken") || localStorage.getItem("authToken") || "";
}

function clearStoredAuth() {
  sessionStorage.removeItem("authToken");
  localStorage.removeItem("authToken");
  localStorage.removeItem("currentUser");
}

function initializeAuth() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const resetPasswordForm = document.getElementById("resetPasswordForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
    initializePasswordToggles(loginForm);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
    initializePasswordToggles(registerForm);
    initializePasswordValidation();
    initializeRegisterAdvisorField();
  }

  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", handleForgotPassword);
  }

  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", handleResetPassword);
    initializePasswordToggles(resetPasswordForm);
    initializeResetPasswordValidation();
  }
}

// 密码显示/隐藏切换功能
function initializePasswordToggles(form) {
  const toggleButtons = form.querySelectorAll('.password-toggle');
  const visibleIcon = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
  const hiddenIcon = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>';

  toggleButtons.forEach(button => {
    const wrapper = button.closest('.password-wrapper');
    const input = wrapper ? wrapper.querySelector('input') : null;
    const icon = button.querySelector('.eye-icon');

    if (input) input.type = 'password';
    if (icon) icon.innerHTML = visibleIcon;
    button.setAttribute('aria-label', '显示密码');
    button.setAttribute('aria-pressed', 'false');

    button.addEventListener('click', function() {
      const wrapper = this.closest('.password-wrapper');
      const input = wrapper.querySelector('input');
      const icon = this.querySelector('.eye-icon');

      if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = hiddenIcon;
        this.setAttribute('aria-label', '隐藏密码');
        this.setAttribute('aria-pressed', 'true');
      } else {
        input.type = 'password';
        icon.innerHTML = visibleIcon;
        this.setAttribute('aria-label', '显示密码');
        this.setAttribute('aria-pressed', 'false');
      }
    });
  });
}

// 注册页面密码验证
function getPasswordRuleState(value = "") {
  return {
    length: value.length >= 6,
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
    number: /\d/.test(value)
  };
}

function isStrongPassword(value = "") {
  return Object.values(getPasswordRuleState(value)).every(Boolean);
}

function initializePasswordValidation() {
  const password = document.getElementById('regPassword');
  const confirmPassword = document.getElementById('confirmPassword');
  const email = document.getElementById('regEmail');
  const passwordRules = document.getElementById('passwordRules');
  const confirmPasswordHint = document.getElementById('confirmPasswordHint');

  const updatePasswordRules = () => {
    if (!passwordRules || !password) return;
    const state = getPasswordRuleState(password.value);
    Object.entries(state).forEach(([rule, isValid]) => {
      const item = passwordRules.querySelector(`[data-rule="${rule}"]`);
      if (item) item.classList.toggle('is-valid', isValid);
    });
    password.setCustomValidity(password.value && !isStrongPassword(password.value)
      ? '密码需至少 6 位，并包含大写字母、小写字母和数字'
      : '');
  };

  const validatePasswordMatch = () => {
    if (!password || !confirmPassword) return;
    if (confirmPassword.value && password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('两次密码输入不一致');
      confirmPassword.style.borderColor = '#ef4444';
      if (confirmPasswordHint) {
        confirmPasswordHint.textContent = '两次密码输入不一致。';
        confirmPasswordHint.classList.add('is-error');
      }
    } else {
      confirmPassword.setCustomValidity('');
      confirmPassword.style.borderColor = '';
      if (confirmPasswordHint) {
        confirmPasswordHint.textContent = confirmPassword.value ? '两次密码已一致。' : '请再次输入相同密码。';
        confirmPasswordHint.classList.remove('is-error');
      }
    }
  };

  if (confirmPassword && password) {
    updatePasswordRules();
    validatePasswordMatch();

    confirmPassword.addEventListener('input', validatePasswordMatch);

    password.addEventListener('input', function() {
      updatePasswordRules();
      validatePasswordMatch();
    });
  }

  if (email) {
    email.addEventListener('blur', function() {
      if (this.value && !isEducationalEmail(this.value)) {
        this.setCustomValidity('请使用教育邮箱');
        this.style.borderColor = '#ef4444';
      } else {
        this.setCustomValidity('');
        this.style.borderColor = '';
      }
    });
  }
}

function initializeRegisterAdvisorField() {
  const titleSelect = document.getElementById("regTitle");
  if (!titleSelect) return;

  titleSelect.addEventListener("change", updateRegisterAdvisorField);
  updateRegisterAdvisorField();
}

function initializeResetPasswordValidation() {
  const password = document.getElementById("newPassword");
  const confirmPassword = document.getElementById("confirmNewPassword");

  if (!password || !confirmPassword) return;

  const validateMatch = () => {
    if (confirmPassword.value && password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("两次密码输入不一致");
      confirmPassword.style.borderColor = "#ef4444";
    } else {
      confirmPassword.setCustomValidity("");
      confirmPassword.style.borderColor = "";
    }
  };

  password.addEventListener("input", validateMatch);
  confirmPassword.addEventListener("input", validateMatch);
}

function renderFooter() {
  const page = pageData[currentLanguage];
  const footerOrg = document.getElementById("footerOrg");
  const footerCopyright = document.getElementById("footerCopyright");
  const footerLicense = document.getElementById("footerLicense");
  const footerEmail = document.getElementById("footerEmail");
  const footerAddress = document.getElementById("footerAddress");
  const legalIds = ["footerLegal1", "footerLegal2", "footerLegal3", "footerLegal4"];

  if (footerOrg) footerOrg.textContent = page.footerOrg;
  if (footerCopyright) footerCopyright.textContent = page.footerCopyright;
  if (footerLicense) {
    footerLicense.textContent = page.footerLicense;
    footerLicense.hidden = true;
  }
  if (footerEmail) footerEmail.textContent = page.footerEmail;
  if (footerAddress) footerAddress.textContent = page.footerAddress;

  legalIds.forEach((id, index) => {
    const element = document.getElementById(id);
    if (element && page.footerLegal[index]) {
      element.textContent = page.footerLegal[index];
    }
  });
}

function setAuthMessage(text, type = "info") {
  const box = document.getElementById("authMessage");
  if (!box) {
    if (text) alert(text);
    return;
  }

  if (!text) {
    box.textContent = "";
    box.classList.remove('show', 'error', 'success', 'info');
    return;
  }

  box.textContent = text;
  box.className = `form-message ${type} show`;
}

function setMessageById(elementId, text, type = "info") {
  const box = document.getElementById(elementId);
  if (!box) return;
  if (!text) {
    box.textContent = "";
    box.style.display = "none";
    box.className = "form-message";
    return;
  }
  box.textContent = text;
  box.className = `form-message is-${type}`;
  box.style.display = "block";
}

async function requestJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload)
  });

  let data = null;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const message = data && (data.error || data.message)
      ? (data.error || data.message)
      : `HTTP ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function requestAuth(url, options = {}) {
  const token = getAuthToken();
  const method = options.method || "GET";
  const headers = {
    "Accept": "application/json"
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (options.body) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    method,
    headers,
    credentials: "include",
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  let data = null;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const message = data && (data.error || data.message)
      ? (data.error || data.message)
      : `HTTP ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function requestAuthRaw(url, options = {}) {
  const token = getAuthToken();
  const headers = {
    ...(options.headers || {})
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: options.method || "GET",
    headers,
    credentials: "include",
    body: options.body
  });

  let data = null;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const message = data && (data.error || data.message)
      ? (data.error || data.message)
      : `HTTP ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function revealAdminLink() {
  const link = document.getElementById("navAdmin");
  if (!link) return;
  const token = getAuthToken();

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      credentials: "include"
    });
    const data = await response.json();
    if (response.ok && data.user && data.user.role === "admin") {
      link.style.display = "inline-flex";
    }
  } catch (error) {
    // ignore
  }
}

async function handleLogin(event) {
  event.preventDefault();
  setAuthMessage("");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    setAuthMessage("请输入用户名和密码。", "error");
    return;
  }

  try {
    const data = await requestJson(LOGIN_URL, { username, password });

    if (data && data.user) {
      localStorage.setItem("currentUser", JSON.stringify(data.user));
    }

    setAuthMessage("登录成功，正在跳转…", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 600);
  } catch (error) {
    setAuthMessage(`登录失败：${error.message}`, "error");
  }
}

async function handleForgotPassword(event) {
  event.preventDefault();
  setAuthMessage("");

  const email = document.getElementById("resetEmail").value.trim();
  if (!email) {
    setAuthMessage("请输入教育邮箱。", "error");
    return;
  }

  try {
    await requestJson(FORGOT_PASSWORD_URL, { email });
    setAuthMessage("如果该邮箱已注册，重置链接已发送，请检查邮箱。", "success");
    event.target.reset();
  } catch (error) {
    setAuthMessage(`发送失败：${error.message}`, "error");
  }
}

async function handleResetPassword(event) {
  event.preventDefault();
  setAuthMessage("");

  const params = new URLSearchParams(window.location.search);
  const token = params.get("token") || "";
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmNewPassword").value;

  if (!token) {
    setAuthMessage("重置链接缺少 token，请重新申请。", "error");
    return;
  }

  if (password !== confirmPassword) {
    setAuthMessage("两次密码输入不一致。", "error");
    return;
  }

  try {
    await requestJson(RESET_PASSWORD_URL, {
      token,
      password,
      confirmPassword
    });
    setAuthMessage("密码已重置，请使用新密码登录。", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  } catch (error) {
    setAuthMessage(`重置失败：${error.message}`, "error");
  }
}

async function handleRegister(event) {
  event.preventDefault();
  setAuthMessage("");
  const username = document.getElementById("regUsername").value.trim();
  const institution = document.getElementById("regInstitution").value.trim();
  const title = document.getElementById("regTitle").value;
  const advisorInput = document.getElementById("regAdvisor");
  const advisor = advisorInput ? advisorInput.value.trim() : "";
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    setAuthMessage("两次密码输入不一致。", "error");
    return;
  }

  if (!isStrongPassword(password)) {
    setAuthMessage("密码需至少 6 位，并包含大写字母、小写字母和数字。", "error");
    return;
  }

  if (!username || !institution || !title || !email || !password) {
    setAuthMessage("请填写所有必填项。", "error");
    return;
  }

  if (shouldRequireAdvisor(title) && !advisor) {
    setAuthMessage("该职位/职称需填写导师姓名。", "error");
    return;
  }

  if (!isEducationalEmail(email)) {
    setAuthMessage("请填写学校或科研机构教育邮箱，不支持个人公共邮箱。", "error");
    return;
  }

  try {
    const data = await requestJson(REGISTER_URL, {
      username,
      email,
      password,
      confirmPassword,
      profile: {
        institution,
        title,
        advisor
      }
    });

    if (data && data.status === "pending") {
      setAuthMessage("注册申请已提交，请等待审核。", "info");
      return;
    }

    setAuthMessage("注册成功，请登录。", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 800);
  } catch (error) {
    setAuthMessage(`注册失败：${error.message}`, "error");
  }
}

function initializeAdmin() {
  const list = document.getElementById("pendingList");
  if (!list) {
    initializeAnnouncementAdmin();
    initializeDownloadUserStatsAdmin();
    initializeInventoryAdmin();
    return;
  }

  const refreshBtn = document.getElementById("refreshPending");
  const approveBtn = document.getElementById("approveSelected");
  const rejectBtn = document.getElementById("rejectSelected");
  const selectAll = document.getElementById("selectAllPending");
  const reloadWhitelistBtn = document.getElementById("reloadWhitelist");
  const searchBtn = document.getElementById("searchPending");
  const searchInput = document.getElementById("adminSearch");
  const statusFilter = document.getElementById("statusFilter");
  const pageSize = document.getElementById("pageSize");
  const prevPage = document.getElementById("prevPage");
  const nextPage = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");

  const state = {
    page: 1,
    limit: Number(pageSize ? pageSize.value : 20),
    status: statusFilter ? statusFilter.value : "pending",
    search: ""
  };

  const ensureAdmin = async () => {
    try {
      const profile = await requestAuth(`${API_BASE_URL}/api/auth/profile`);
      if (!profile.user || profile.user.role !== "admin") {
        setMessageById("adminMessage", "当前账号没有管理员权限。", "error");
        return false;
      }
      return true;
    } catch (error) {
      setMessageById("adminMessage", `无法校验管理员权限：${error.message}`, "error");
      return false;
    }
  };

  const loadPending = async () => {
    try {
      setMessageById("adminMessage", "正在加载待审核列表…", "info");
      const params = new URLSearchParams({
        status: state.status,
        page: String(state.page),
        limit: String(state.limit)
      });
      if (state.search) params.set("search", state.search);

      const data = await requestAuth(`${API_BASE_URL}/api/admin/registrations?${params.toString()}`);
      renderPendingList(data.users || []);
      updatePagination(data.pagination);
      setMessageById("adminMessage", "");
    } catch (error) {
      setMessageById("adminMessage", `加载失败：${error.message}`, "error");
    }
  };

  const renderPendingList = (users) => {
    if (!users.length) {
      list.innerHTML = "<tr><td colspan=\"6\">暂无待审核账号</td></tr>";
      return;
    }
    list.innerHTML = users.map(user => {
      const institution = user.profile && user.profile.institution ? user.profile.institution : "-";
      const title = user.profile && user.profile.title ? getRegisterTitleLabel(user.profile.title) : "-";
      const createdAt = user.createdAt ? new Date(user.createdAt).toLocaleString() : "-";
      return `
        <tr>
          <td><input type="checkbox" class="pending-check" data-id="${escapeHtml(user._id)}" /></td>
          <td>${escapeHtml(user.username || "-")}</td>
          <td>${escapeHtml(user.email || "-")}</td>
          <td>${escapeHtml(institution)}</td>
          <td>${escapeHtml(title)}</td>
          <td>${escapeHtml(createdAt)}</td>
        </tr>
      `;
    }).join("");
  };

  const getSelectedIds = () => {
    return Array.from(document.querySelectorAll(".pending-check:checked"))
      .map(item => item.dataset.id);
  };

  const updatePagination = (pagination) => {
    if (!pageInfo || !pagination) return;
    pageInfo.textContent = `第 ${pagination.currentPage} 页 / 共 ${pagination.totalPages || 1} 页`;
    if (prevPage) prevPage.disabled = pagination.currentPage <= 1;
    if (nextPage) nextPage.disabled = pagination.currentPage >= pagination.totalPages;
  };

  refreshBtn.addEventListener("click", loadPending);
  if (reloadWhitelistBtn) {
    reloadWhitelistBtn.addEventListener("click", async () => {
      try {
        setMessageById("adminMessage", "正在刷新白名单…", "info");
        const data = await requestAuth(`${API_BASE_URL}/api/admin/whitelist/reload`, {
          method: "POST"
        });
        setMessageById("adminMessage", `白名单已刷新（${data.count} 条）。`, "success");
      } catch (error) {
        setMessageById("adminMessage", `刷新失败：${error.message}`, "error");
      }
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      state.page = 1;
      state.search = searchInput ? searchInput.value.trim() : "";
      state.status = statusFilter ? statusFilter.value : "pending";
      state.limit = Number(pageSize ? pageSize.value : 20);
      loadPending();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", () => {
      state.page = 1;
      state.status = statusFilter.value;
      loadPending();
    });
  }

  if (pageSize) {
    pageSize.addEventListener("change", () => {
      state.page = 1;
      state.limit = Number(pageSize.value);
      loadPending();
    });
  }

  if (prevPage) {
    prevPage.addEventListener("click", () => {
      if (state.page > 1) {
        state.page -= 1;
        loadPending();
      }
    });
  }

  if (nextPage) {
    nextPage.addEventListener("click", () => {
      state.page += 1;
      loadPending();
    });
  }

  approveBtn.addEventListener("click", async () => {
    const ids = getSelectedIds();
    if (!ids.length) {
      setMessageById("adminMessage", "请先选择要通过的账号。", "error");
      return;
    }
    try {
      setMessageById("adminMessage", "正在批量通过…", "info");
      await requestAuth(`${API_BASE_URL}/api/admin/registrations/approve`, {
        method: "POST",
        body: { ids }
      });
      setMessageById("adminMessage", "已批量通过所选账号。", "success");
      loadPending();
    } catch (error) {
      setMessageById("adminMessage", `操作失败：${error.message}`, "error");
    }
  });

  rejectBtn.addEventListener("click", async () => {
    const ids = getSelectedIds();
    if (!ids.length) {
      setMessageById("adminMessage", "请先选择要拒绝的账号。", "error");
      return;
    }
    const reason = document.getElementById("rejectReason").value.trim();
    try {
      setMessageById("adminMessage", "正在批量拒绝…", "info");
      await requestAuth(`${API_BASE_URL}/api/admin/registrations/reject`, {
        method: "POST",
        body: { ids, reason }
      });
      setMessageById("adminMessage", "已批量拒绝所选账号。", "success");
      loadPending();
    } catch (error) {
      setMessageById("adminMessage", `操作失败：${error.message}`, "error");
    }
  });

  selectAll.addEventListener("change", () => {
    const checked = selectAll.checked;
    document.querySelectorAll(".pending-check").forEach(item => {
      item.checked = checked;
    });
  });

  ensureAdmin().then((ok) => {
    if (ok) loadPending();
  });

  initializeAnnouncementAdmin();
  initializeDownloadUserStatsAdmin();
  initializeInventoryAdmin();
}

function initializeDownloadUserStatsAdmin() {
  const list = document.getElementById("downloadUserStatsList");
  if (!list) return;

  const dateFromInput = document.getElementById("downloadStatsDateFrom");
  const dateToInput = document.getElementById("downloadStatsDateTo");
  const datasetInput = document.getElementById("downloadStatsDataset");
  const yearInput = document.getElementById("downloadStatsYear");
  const keywordInput = document.getElementById("downloadStatsKeyword");
  const pageSizeInput = document.getElementById("downloadStatsPageSize");
  const queryBtn = document.getElementById("downloadStatsQuery");
  const refreshBtn = document.getElementById("downloadStatsRefresh");
  const prevPage = document.getElementById("downloadStatsPrevPage");
  const nextPage = document.getElementById("downloadStatsNextPage");
  const pageInfo = document.getElementById("downloadStatsPageInfo");

  const state = {
    page: 1,
    limit: Number(pageSizeInput ? pageSizeInput.value : 20)
  };

  const ensureAdmin = async () => {
    try {
      const profile = await requestAuth(`${API_BASE_URL}/api/auth/profile`);
      if (!profile.user || profile.user.role !== "admin") {
        setMessageById("downloadUserStatsMessage", "当前账号没有管理员权限。", "error");
        return false;
      }
      return true;
    } catch (error) {
      setMessageById("downloadUserStatsMessage", `无法校验管理员权限：${error.message}`, "error");
      return false;
    }
  };

  const buildParams = () => {
    const params = new URLSearchParams({
      page: String(state.page),
      limit: String(state.limit)
    });
    if (dateFromInput && dateFromInput.value) params.set("dateFrom", dateFromInput.value);
    if (dateToInput && dateToInput.value) params.set("dateTo", dateToInput.value);
    if (datasetInput && datasetInput.value) params.set("datasetKey", datasetInput.value);
    if (yearInput && yearInput.value) params.set("year", yearInput.value);
    if (keywordInput && keywordInput.value.trim()) params.set("keyword", keywordInput.value.trim());
    return params;
  };

  const formatStatsDate = (value) => {
    if (!value) return "-";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "-" : date.toLocaleString();
  };

  const renderRows = (items) => {
    if (!items.length) {
      list.innerHTML = "<tr><td colspan=\"9\">暂无下载用户统计</td></tr>";
      return;
    }

    list.innerHTML = items.map((item) => `
      <tr>
        <td>${escapeHtml(item.name || item.username || "-")}</td>
        <td>${escapeHtml(item.email || "-")}</td>
        <td>${escapeHtml(item.institution || "-")}</td>
        <td>${escapeHtml(item.title ? getRegisterTitleLabel(item.title) : "-")}</td>
        <td>${escapeHtml(shouldRequireAdvisor(item.title) ? (item.advisor || "-") : "-")}</td>
        <td>${Number(item.downloadCount || 0).toLocaleString()}</td>
        <td>${Number(item.fileCount || 0).toLocaleString()}</td>
        <td>${escapeHtml(Array.isArray(item.datasets) && item.datasets.length ? item.datasets.join("、") : "-")}</td>
        <td>${formatStatsDate(item.lastDownloadAt)}</td>
      </tr>
    `).join("");
  };

  const updatePagination = (pagination) => {
    if (!pagination) return;
    if (pageInfo) pageInfo.textContent = `第 ${pagination.page} 页 / 共 ${pagination.totalPages || 1} 页，共 ${pagination.total || 0} 人`;
    if (prevPage) prevPage.disabled = pagination.page <= 1;
    if (nextPage) nextPage.disabled = pagination.page >= pagination.totalPages;
  };

  const loadStats = async () => {
    try {
      setMessageById("downloadUserStatsMessage", "正在加载下载用户统计…", "info");
      const data = await requestAuth(`${API_BASE_URL}/api/admin/download-user-stats?${buildParams().toString()}`);
      renderRows(data.items || []);
      updatePagination(data.pagination);
      setMessageById("downloadUserStatsMessage", "");
    } catch (error) {
      setMessageById("downloadUserStatsMessage", `加载失败：${error.message}`, "error");
    }
  };

  const reloadFromFilters = () => {
    state.page = 1;
    state.limit = Number(pageSizeInput ? pageSizeInput.value : 20);
    loadStats();
  };

  if (queryBtn) queryBtn.addEventListener("click", reloadFromFilters);
  if (refreshBtn) refreshBtn.addEventListener("click", loadStats);
  if (pageSizeInput) pageSizeInput.addEventListener("change", reloadFromFilters);
  if (prevPage) {
    prevPage.addEventListener("click", () => {
      if (state.page > 1) {
        state.page -= 1;
        loadStats();
      }
    });
  }
  if (nextPage) {
    nextPage.addEventListener("click", () => {
      state.page += 1;
      loadStats();
    });
  }

  ensureAdmin().then((ok) => {
    if (ok) loadStats();
  });
}

function initializeAnnouncementAdmin() {
  const list = document.getElementById("announcementList");
  if (!list) return;

  const refreshBtn = document.getElementById("announcementRefresh");
  const createBtn = document.getElementById("announcementCreate");
  const queryBtn = document.getElementById("announcementQuery");
  const searchInput = document.getElementById("announcementSearch");
  const langSelect = document.getElementById("announcementLang");
  const activeSelect = document.getElementById("announcementActive");

  const state = {
    search: "",
    lang: langSelect ? langSelect.value : "zh",
    isActive: activeSelect ? activeSelect.value : ""
  };

  const ensureAdmin = async () => {
    try {
      const profile = await requestAuth(`${API_BASE_URL}/api/auth/profile`);
      if (!profile.user || profile.user.role !== "admin") {
        setMessageById("announcementMessage", "当前账号没有管理员权限。", "error");
        return false;
      }
      return true;
    } catch (error) {
      setMessageById("announcementMessage", `无法校验管理员权限：${error.message}`, "error");
      return false;
    }
  };

  const loadAnnouncements = async () => {
    try {
      setMessageById("announcementMessage", "正在加载公告…", "info");
      const params = new URLSearchParams();
      if (state.lang) params.set("lang", state.lang);
      if (state.isActive) params.set("isActive", state.isActive);
      const data = await requestAuth(`${API_BASE_URL}/api/admin/announcements?${params.toString()}`);
      renderAnnouncements(data.items || []);
      setMessageById("announcementMessage", "");
    } catch (error) {
      setMessageById("announcementMessage", `加载失败：${error.message}`, "error");
    }
  };

  const renderAnnouncements = (items) => {
    const keyword = state.search.toLowerCase();
    const filtered = keyword
      ? items.filter(item => (item.text || "").toLowerCase().includes(keyword))
      : items;

    if (!filtered.length) {
      list.innerHTML = "<tr><td colspan=\"5\">暂无公告</td></tr>";
      return;
    }

    list.innerHTML = filtered.map(item => `
      <tr>
        <td>${escapeHtml(item.text)}</td>
        <td>${escapeHtml(item.lang || "zh")}</td>
        <td>${escapeHtml(item.order ?? 0)}</td>
        <td>${item.isActive ? "启用" : "停用"}</td>
        <td>
          <button type="button" class="button secondary" data-action="edit" data-id="${item._id}">编辑</button>
          <button type="button" class="button danger" data-action="delete" data-id="${item._id}">删除</button>
        </td>
      </tr>
    `).join("");
  };

  const promptAnnouncement = (item = {}) => {
    const text = window.prompt("公告内容", item.text || "");
    if (!text) return null;
    const lang = window.prompt("语言 (zh/en/fr/es/ru/ar)", item.lang || "zh") || "zh";
    const orderStr = window.prompt("顺序（数字）", String(item.order ?? 0));
    const order = Number(orderStr);
    const isActive = window.confirm("是否启用该公告？");
    return { text, lang, order: Number.isNaN(order) ? 0 : order, isActive };
  };

  const handleCreate = async () => {
    const payload = promptAnnouncement();
    if (!payload) return;
    try {
      setMessageById("announcementMessage", "正在创建公告…", "info");
      await requestAuth(`${API_BASE_URL}/api/admin/announcements`, {
        method: "POST",
        body: payload
      });
      setMessageById("announcementMessage", "公告已创建。", "success");
      loadAnnouncements();
    } catch (error) {
      setMessageById("announcementMessage", `创建失败：${error.message}`, "error");
    }
  };

  const handleEdit = async (id) => {
    const currentRow = list.querySelector(`[data-id="${id}"]`)?.closest("tr");
    const currentText = currentRow ? currentRow.children[0].textContent : "";
    const currentLang = currentRow ? currentRow.children[1].textContent : "zh";
    const currentOrder = currentRow ? currentRow.children[2].textContent : "0";
    const currentActive = currentRow ? currentRow.children[3].textContent === "启用" : true;
    const payload = promptAnnouncement({
      text: currentText,
      lang: currentLang,
      order: Number(currentOrder),
      isActive: currentActive
    });
    if (!payload) return;

    try {
      setMessageById("announcementMessage", "正在更新公告…", "info");
      await requestAuth(`${API_BASE_URL}/api/admin/announcements/${id}`, {
        method: "PUT",
        body: payload
      });
      setMessageById("announcementMessage", "公告已更新。", "success");
      loadAnnouncements();
    } catch (error) {
      setMessageById("announcementMessage", `更新失败：${error.message}`, "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("确定删除该公告吗？")) return;
    try {
      setMessageById("announcementMessage", "正在删除公告…", "info");
      await requestAuth(`${API_BASE_URL}/api/admin/announcements/${id}`, {
        method: "DELETE"
      });
      setMessageById("announcementMessage", "公告已删除。", "success");
      loadAnnouncements();
    } catch (error) {
      setMessageById("announcementMessage", `删除失败：${error.message}`, "error");
    }
  };

  list.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (!id) return;
    if (action === "edit") handleEdit(id);
    if (action === "delete") handleDelete(id);
  });

  if (refreshBtn) refreshBtn.addEventListener("click", loadAnnouncements);
  if (createBtn) createBtn.addEventListener("click", handleCreate);
  if (queryBtn) {
    queryBtn.addEventListener("click", () => {
      state.search = searchInput ? searchInput.value.trim() : "";
      state.lang = langSelect ? langSelect.value : "zh";
      state.isActive = activeSelect ? activeSelect.value : "";
      loadAnnouncements();
    });
  }

  ensureAdmin().then((ok) => {
    if (ok) loadAnnouncements();
  });
}

function initializeInventoryAdmin() {
  const form = document.getElementById("inventoryUploadForm");
  const list = document.getElementById("inventoryList");
  const refreshBtn = document.getElementById("inventoryRefresh");

  if (!form || !list) return;

  const fileInput = document.getElementById("inventoryFile");
  const dataTypeInput = document.getElementById("inventoryDataType");
  const datasetPresetInput = document.getElementById("inventoryDatasetPreset");
  const datasetKeyInput = document.getElementById("inventoryDatasetKey");
  const datasetNameInput = document.getElementById("inventoryDatasetName");
  const titleInput = document.getElementById("inventoryTitle");
  const pollutantInput = document.getElementById("inventoryPollutant");
  const yearInput = document.getElementById("inventoryYear");
  const categoryInput = document.getElementById("inventoryCategory");
  const subjectInput = document.getElementById("inventorySubject");
  const scaleInput = document.getElementById("inventoryScale");
  const periodInput = document.getElementById("inventoryPeriod");
  const versionInput = document.getElementById("inventoryVersion");
  const developerInput = document.getElementById("inventoryDeveloper");
  const descriptionInput = document.getElementById("inventoryDescription");
  const publishInput = document.getElementById("inventoryPublish");

  const getSelectedDatasetKey = () => datasetKeyInput ? datasetKeyInput.value.trim() : "agriculture_emission";

  const syncDatasetOptionsForType = () => {
    if (!datasetPresetInput || !dataTypeInput) return;
    dataTypeInput.value = "emission";
    const options = [
      ["agriculture_emission|农业排放清单", "农业排放清单"],
      ["other_emission|其他排放清单", "其他排放清单"],
      ["custom|自定义", "自定义"]
    ];
    const current = datasetPresetInput.value;
    datasetPresetInput.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    datasetPresetInput.value = options.some(([value]) => value === current) ? current : options[0][0];
  };

  const syncDatasetPresetFields = () => {
    if (!datasetPresetInput || !datasetKeyInput || !datasetNameInput) return;
    const [key, name] = datasetPresetInput.value.split("|");
    const isCustom = key === "custom";
    datasetKeyInput.readOnly = !isCustom;
    datasetNameInput.readOnly = !isCustom;
    if (!isCustom) {
      datasetKeyInput.value = key || "";
      datasetNameInput.value = name || "";
    }
  };

  const syncInventoryUploadFields = () => {
    syncDatasetOptionsForType();
    syncDatasetPresetFields();
    const dataType = dataTypeInput ? dataTypeInput.value : "emission";
    const datasetKey = getSelectedDatasetKey();
    if (fileInput) {
      fileInput.accept = ".tif,.tiff";
    }
    if (categoryInput) {
      categoryInput.required = false;
      if (categoryInput.required && !categoryInput.value) {
        categoryInput.value = "时间";
      }
      if (!categoryInput.required && datasetKey !== "agriculture_emission") {
        categoryInput.value = "";
      }
    }
    if (pollutantInput) {
      pollutantInput.placeholder = "例如：NH3";
    }
    if (subjectInput) {
      subjectInput.placeholder = "例如：livestock / 奶牛 / 乘用车 / 快递业";
    }
    if (descriptionInput) {
      descriptionInput.placeholder = "填写该 GeoTIFF 的来源、处理说明、适用范围等";
    }
  };

  const ensureAdmin = async () => {
    try {
      const profile = await requestAuth(`${API_BASE_URL}/api/auth/profile`);
      if (!profile.user || profile.user.role !== "admin") {
        setMessageById("inventoryMessage", "当前账号没有管理员权限。", "error");
        return false;
      }
      return true;
    } catch (error) {
      setMessageById("inventoryMessage", `无法校验管理员权限：${error.message}`, "error");
      return false;
    }
  };

  const renderInventoryRows = (items) => {
    if (!items.length) {
      list.innerHTML = "<tr><td colspan=\"10\">暂无已上传数据文件</td></tr>";
      return;
    }

    list.innerHTML = items.map((item) => {
      const statusText = item.isPublished ? "已发布" : "未发布";
      const actionButton = item.isPublished
        ? `<button type="button" class="button secondary" data-action="unpublish" data-id="${item._id}">撤回</button>`
        : `<button type="button" class="button secondary" data-action="publish" data-id="${item._id}">发布</button>`;
      const subject = item.subject || "-";
      const scale = item.scale || "-";
      const downloadHref = `${API_BASE_URL}/api/inventories/${encodeURIComponent(item._id)}/download`;
      const downloadAction = item.isPublished
        ? `<a class="button secondary" href="${downloadHref}">下载</a>`
        : `<span class="button secondary">未发布</span>`;

      return `
        <tr>
          <td>
            <strong>${escapeHtml(item.title || item.originalFilename || "-")}</strong>
            <div class="admin-table-subtle">${escapeHtml(item.originalFilename || "-")}</div>
          </td>
          <td>${formatDatasetTypeLabel(item.dataType)}</td>
          <td>${escapeHtml(item.datasetName || "-")}</td>
          <td>${escapeHtml(item.year || "-")}</td>
          <td>${escapeHtml(item.category || "-")}</td>
          <td>${escapeHtml(subject)}</td>
          <td>${escapeHtml(scale)}</td>
          <td>${formatFileSize(item.size)}</td>
          <td><span class="admin-status ${item.isPublished ? "is-published" : "is-draft"}">${statusText}</span></td>
          <td class="admin-actions-cell">
            ${actionButton}
            ${downloadAction}
            <button type="button" class="button danger" data-action="delete" data-id="${item._id}">删除</button>
          </td>
        </tr>
      `;
    }).join("");
  };

  const loadInventories = async () => {
    try {
      setMessageById("inventoryMessage", "正在加载数据文件…", "info");
      const data = await requestAuth(`${API_BASE_URL}/api/admin/inventories`);
      renderInventoryRows(data.items || []);
      setMessageById("inventoryMessage", "");
    } catch (error) {
      setMessageById("inventoryMessage", `加载失败：${error.message}`, "error");
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const file = fileInput.files && fileInput.files[0];
    if (!file) {
      setMessageById("inventoryMessage", "请选择要上传的数据文件。", "error");
      return;
    }

    const dataType = dataTypeInput ? dataTypeInput.value : "emission";
    const datasetKey = getSelectedDatasetKey();
    const datasetName = datasetNameInput ? datasetNameInput.value.trim() : "";
    const allowedPattern = /\.(tif|tiff)$/i;
    if (!allowedPattern.test(file.name)) {
      setMessageById("inventoryMessage", "排放数据仅支持上传 .tif 或 .tiff 文件。", "error");
      return;
    }

    const title = titleInput.value.trim();
    const year = yearInput.value.trim();
    const category = categoryInput.value;

    if (!datasetKey || !datasetName) {
      setMessageById("inventoryMessage", "请先填写数据集标识和数据集名称。", "error");
      return;
    }

    if (!title || !year) {
      setMessageById("inventoryMessage", "请先填写标题和年份。", "error");
      return;
    }

    try {
      setMessageById("inventoryMessage", "正在上传数据文件…", "info");
      const params = new URLSearchParams({
        originalFilename: file.name,
        dataType,
        datasetKey,
        datasetName,
        title,
        pollutant: pollutantInput.value.trim(),
        year,
        category,
        subject: subjectInput.value.trim(),
        scale: scaleInput.value,
        period: periodInput.value.trim() || (scaleInput.value === "monthly" ? "01" : "Annual"),
        version: versionInput.value.trim() || "v1",
        developer: developerInput ? developerInput.value.trim() : "开发团队占位符",
        description: descriptionInput.value.trim(),
        publish: publishInput.checked ? "true" : "false",
        mimeType: file.type || "application/octet-stream"
      });

      const buffer = await file.arrayBuffer();
      await requestAuthRaw(`${API_BASE_URL}/api/admin/inventories/upload?${params.toString()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream"
        },
        body: buffer
      });

      form.reset();
      if (publishInput) publishInput.checked = true;
      if (versionInput) versionInput.value = "v1";
      if (developerInput) developerInput.value = "开发团队占位符";
      if (datasetPresetInput) datasetPresetInput.value = "agriculture_emission|农业排放清单";
      syncDatasetPresetFields();
      syncInventoryUploadFields();
      setMessageById("inventoryMessage", "数据文件已上传。", "success");
      await loadInventories();
    } catch (error) {
      setMessageById("inventoryMessage", `上传失败：${error.message}`, "error");
    }
  });

  if (refreshBtn) {
    refreshBtn.addEventListener("click", loadInventories);
  }

  if (dataTypeInput) {
    dataTypeInput.addEventListener("change", syncInventoryUploadFields);
    syncInventoryUploadFields();
  }

  if (datasetPresetInput) {
    datasetPresetInput.addEventListener("change", () => {
      syncDatasetPresetFields();
      syncInventoryUploadFields();
    });
    syncDatasetPresetFields();
    syncInventoryUploadFields();
  }

  if (datasetKeyInput) {
    datasetKeyInput.addEventListener("input", syncInventoryUploadFields);
  }

  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;

      const basename = file.name.replace(/\.(tif|tiff|csv|txt|json|xlsx|xls|nc|zip)$/i, "");
      if (titleInput && !titleInput.value.trim()) {
        titleInput.value = basename;
      }

      const matchedYear = basename.match(/(19|20)\d{2}/);
      if (matchedYear && yearInput && !yearInput.value.trim()) {
        yearInput.value = matchedYear[0];
      }
    });
  }

  list.addEventListener("click", async (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;
    if (!id || !action) return;

    try {
      if (action === "delete" && !window.confirm("确定删除该数据文件吗？删除后文件也会一并移除。")) {
        return;
      }

      if (action === "publish") {
        setMessageById("inventoryMessage", "正在发布数据文件…", "info");
        await requestAuth(`${API_BASE_URL}/api/admin/inventories/${id}/publish`, { method: "PUT" });
        setMessageById("inventoryMessage", "文件已发布。", "success");
      }

      if (action === "unpublish") {
        setMessageById("inventoryMessage", "正在撤回数据文件…", "info");
        await requestAuth(`${API_BASE_URL}/api/admin/inventories/${id}/unpublish`, { method: "PUT" });
        setMessageById("inventoryMessage", "文件已撤回。", "success");
      }

      if (action === "delete") {
        setMessageById("inventoryMessage", "正在删除数据文件…", "info");
        await requestAuth(`${API_BASE_URL}/api/admin/inventories/${id}`, { method: "DELETE" });
        setMessageById("inventoryMessage", "文件已删除。", "success");
      }

      await loadInventories();
    } catch (error) {
      setMessageById("inventoryMessage", `操作失败：${error.message}`, "error");
    }
  });

  ensureAdmin().then((ok) => {
    if (ok) loadInventories();
  });
}

