// 国家代码到时区信息的映射 - 包含全球所有主要国家
const countryTimezones = {
  // 亚洲
  86: {
    country: "中国",
    timezone: "Asia/Shanghai",
    utcOffset: "+08:00",
    name: "北京时间 (CST)",
  },
  852: {
    country: "香港",
    timezone: "Asia/Hong_Kong",
    utcOffset: "+08:00",
    name: "香港时间 (HKT)",
  },
  853: {
    country: "澳门",
    timezone: "Asia/Macau",
    utcOffset: "+08:00",
    name: "澳门时间 (MOT)",
  },
  886: {
    country: "台湾",
    timezone: "Asia/Taipei",
    utcOffset: "+08:00",
    name: "台湾时间 (CST)",
  },
  81: {
    country: "日本",
    timezone: "Asia/Tokyo",
    utcOffset: "+09:00",
    name: "日本标准时间 (JST)",
  },
  82: {
    country: "韩国",
    timezone: "Asia/Seoul",
    utcOffset: "+09:00",
    name: "韩国标准时间 (KST)",
  },
  91: {
    country: "印度",
    timezone: "Asia/Kolkata",
    utcOffset: "+05:30",
    name: "印度标准时间 (IST)",
  },
  92: {
    country: "巴基斯坦",
    timezone: "Asia/Karachi",
    utcOffset: "+05:00",
    name: "巴基斯坦时间 (PKT)",
  },
  880: {
    country: "孟加拉",
    timezone: "Asia/Dhaka",
    utcOffset: "+06:00",
    name: "孟加拉时间 (BST)",
  },
  94: {
    country: "斯里兰卡",
    timezone: "Asia/Colombo",
    utcOffset: "+05:30",
    name: "斯里兰卡时间 (SLST)",
  },
  977: {
    country: "尼泊尔",
    timezone: "Asia/Kathmandu",
    utcOffset: "+05:45",
    name: "尼泊尔时间 (NPT)",
  },
  975: {
    country: "不丹",
    timezone: "Asia/Thimphu",
    utcOffset: "+06:00",
    name: "不丹时间 (BTT)",
  },
  95: {
    country: "缅甸",
    timezone: "Asia/Yangon",
    utcOffset: "+06:30",
    name: "缅甸时间 (MMT)",
  },
  66: {
    country: "泰国",
    timezone: "Asia/Bangkok",
    utcOffset: "+07:00",
    name: "泰国时间 (ICT)",
  },
  84: {
    country: "越南",
    timezone: "Asia/Ho_Chi_Minh",
    utcOffset: "+07:00",
    name: "越南时间 (ICT)",
  },
  855: {
    country: "柬埔寨",
    timezone: "Asia/Phnom_Penh",
    utcOffset: "+07:00",
    name: "柬埔寨时间 (ICT)",
  },
  856: {
    country: "老挝",
    timezone: "Asia/Vientiane",
    utcOffset: "+07:00",
    name: "老挝时间 (ICT)",
  },
  60: {
    country: "马来西亚",
    timezone: "Asia/Kuala_Lumpur",
    utcOffset: "+08:00",
    name: "马来西亚时间 (MYT)",
  },
  65: {
    country: "新加坡",
    timezone: "Asia/Singapore",
    utcOffset: "+08:00",
    name: "新加坡时间 (SGT)",
  },
  673: {
    country: "文莱",
    timezone: "Asia/Brunei",
    utcOffset: "+08:00",
    name: "文莱时间 (BNT)",
  },
  62: {
    country: "印尼",
    timezone: "Asia/Jakarta",
    utcOffset: "+07:00",
    name: "印尼时间 (WIB)",
  },
  63: {
    country: "菲律宾",
    timezone: "Asia/Manila",
    utcOffset: "+08:00",
    name: "菲律宾时间 (PST)",
  },
  998: {
    country: "乌兹别克",
    timezone: "Asia/Tashkent",
    utcOffset: "+05:00",
    name: "乌兹别克时间 (UZT)",
  },
  996: {
    country: "吉尔吉斯",
    timezone: "Asia/Bishkek",
    utcOffset: "+06:00",
    name: "吉尔吉斯时间 (KGT)",
  },
  992: {
    country: "塔吉克",
    timezone: "Asia/Dushanbe",
    utcOffset: "+05:00",
    name: "塔吉克时间 (TJT)",
  },
  993: {
    country: "土库曼",
    timezone: "Asia/Ashgabat",
    utcOffset: "+05:00",
    name: "土库曼时间 (TMT)",
  },
  7: {
    country: "哈萨克",
    timezone: "Asia/Almaty",
    utcOffset: "+06:00",
    name: "哈萨克时间 (ALMT)",
  },
  994: {
    country: "阿塞拜疆",
    timezone: "Asia/Baku",
    utcOffset: "+04:00",
    name: "阿塞拜疆时间 (AZT)",
  },
  374: {
    country: "亚美尼亚",
    timezone: "Asia/Yerevan",
    utcOffset: "+04:00",
    name: "亚美尼亚时间 (AMT)",
  },
  995: {
    country: "格鲁吉亚",
    timezone: "Asia/Tbilisi",
    utcOffset: "+04:00",
    name: "格鲁吉亚时间 (GET)",
  },
  90: {
    country: "土耳其",
    timezone: "Europe/Istanbul",
    utcOffset: "+03:00",
    name: "土耳其时间 (TRT)",
  },
  98: {
    country: "伊朗",
    timezone: "Asia/Tehran",
    utcOffset: "+03:30",
    name: "伊朗时间 (IRST)",
  },
  93: {
    country: "阿富汗",
    timezone: "Asia/Kabul",
    utcOffset: "+04:30",
    name: "阿富汗时间 (AFT)",
  },
  964: {
    country: "伊拉克",
    timezone: "Asia/Baghdad",
    utcOffset: "+03:00",
    name: "伊拉克时间 (AST)",
  },
  963: {
    country: "叙利亚",
    timezone: "Asia/Damascus",
    utcOffset: "+03:00",
    name: "叙利亚时间 (EET)",
  },
  961: {
    country: "黎巴嫩",
    timezone: "Asia/Beirut",
    utcOffset: "+03:00",
    name: "黎巴嫩时间 (EET)",
  },
  972: {
    country: "以色列",
    timezone: "Asia/Jerusalem",
    utcOffset: "+03:00",
    name: "以色列时间 (IST)",
  },
  970: {
    country: "巴勒斯坦",
    timezone: "Asia/Gaza",
    utcOffset: "+03:00",
    name: "巴勒斯坦时间 (EET)",
  },
  962: {
    country: "约旦",
    timezone: "Asia/Amman",
    utcOffset: "+03:00",
    name: "约旦时间 (EET)",
  },
  966: {
    country: "沙特",
    timezone: "Asia/Riyadh",
    utcOffset: "+03:00",
    name: "沙特时间 (AST)",
  },
  965: {
    country: "科威特",
    timezone: "Asia/Kuwait",
    utcOffset: "+03:00",
    name: "科威特时间 (AST)",
  },
  973: {
    country: "巴林",
    timezone: "Asia/Bahrain",
    utcOffset: "+03:00",
    name: "巴林时间 (AST)",
  },
  974: {
    country: "卡塔尔",
    timezone: "Asia/Qatar",
    utcOffset: "+03:00",
    name: "卡塔尔时间 (AST)",
  },
  971: {
    country: "阿联酋",
    timezone: "Asia/Dubai",
    utcOffset: "+04:00",
    name: "海湾标准时间 (GST)",
  },
  968: {
    country: "阿曼",
    timezone: "Asia/Muscat",
    utcOffset: "+04:00",
    name: "阿曼时间 (GST)",
  },
  967: {
    country: "也门",
    timezone: "Asia/Aden",
    utcOffset: "+03:00",
    name: "也门时间 (AST)",
  },
  976: {
    country: "蒙古",
    timezone: "Asia/Ulaanbaatar",
    utcOffset: "+08:00",
    name: "蒙古时间 (ULAT)",
  },
  850: {
    country: "朝鲜",
    timezone: "Asia/Pyongyang",
    utcOffset: "+09:00",
    name: "朝鲜时间 (KST)",
  },

  // 欧洲
  44: {
    country: "英国",
    timezone: "Europe/London",
    utcOffset: "+00:00",
    name: "格林威治时间 (GMT)",
  },
  353: {
    country: "爱尔兰",
    timezone: "Europe/Dublin",
    utcOffset: "+00:00",
    name: "爱尔兰时间 (GMT)",
  },
  33: {
    country: "法国",
    timezone: "Europe/Paris",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  49: {
    country: "德国",
    timezone: "Europe/Berlin",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  39: {
    country: "意大利",
    timezone: "Europe/Rome",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  34: {
    country: "西班牙",
    timezone: "Europe/Madrid",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  351: {
    country: "葡萄牙",
    timezone: "Europe/Lisbon",
    utcOffset: "+00:00",
    name: "西欧时间 (WET)",
  },
  31: {
    country: "荷兰",
    timezone: "Europe/Amsterdam",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  32: {
    country: "比利时",
    timezone: "Europe/Brussels",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  352: {
    country: "卢森堡",
    timezone: "Europe/Luxembourg",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  41: {
    country: "瑞士",
    timezone: "Europe/Zurich",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  43: {
    country: "奥地利",
    timezone: "Europe/Vienna",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  420: {
    country: "捷克",
    timezone: "Europe/Prague",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  421: {
    country: "斯洛伐克",
    timezone: "Europe/Bratislava",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  48: {
    country: "波兰",
    timezone: "Europe/Warsaw",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  36: {
    country: "匈牙利",
    timezone: "Europe/Budapest",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  386: {
    country: "斯洛文尼亚",
    timezone: "Europe/Ljubljana",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  385: {
    country: "克罗地亚",
    timezone: "Europe/Zagreb",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  387: {
    country: "波黑",
    timezone: "Europe/Sarajevo",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  382: {
    country: "黑山",
    timezone: "Europe/Podgorica",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  381: {
    country: "塞尔维亚",
    timezone: "Europe/Belgrade",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  389: {
    country: "北马其顿",
    timezone: "Europe/Skopje",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  355: {
    country: "阿尔巴尼亚",
    timezone: "Europe/Tirane",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  30: {
    country: "希腊",
    timezone: "Europe/Athens",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  359: {
    country: "保加利亚",
    timezone: "Europe/Sofia",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  40: {
    country: "罗马尼亚",
    timezone: "Europe/Bucharest",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  373: {
    country: "摩尔多瓦",
    timezone: "Europe/Chisinau",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  380: {
    country: "乌克兰",
    timezone: "Europe/Kiev",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  375: {
    country: "白俄罗斯",
    timezone: "Europe/Minsk",
    utcOffset: "+03:00",
    name: "莫斯科时间 (MSK)",
  },
  370: {
    country: "立陶宛",
    timezone: "Europe/Vilnius",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  371: {
    country: "拉脱维亚",
    timezone: "Europe/Riga",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  372: {
    country: "爱沙尼亚",
    timezone: "Europe/Tallinn",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  358: {
    country: "芬兰",
    timezone: "Europe/Helsinki",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  46: {
    country: "瑞典",
    timezone: "Europe/Stockholm",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  47: {
    country: "挪威",
    timezone: "Europe/Oslo",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  45: {
    country: "丹麦",
    timezone: "Europe/Copenhagen",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  354: {
    country: "冰岛",
    timezone: "Atlantic/Reykjavik",
    utcOffset: "+00:00",
    name: "格林威治时间 (GMT)",
  },

  // 北美洲
  1: {
    country: "美国",
    timezone: "America/New_York",
    utcOffset: "-05:00",
    name: "东部时间 (EST)",
  },
  52: {
    country: "墨西哥",
    timezone: "America/Mexico_City",
    utcOffset: "-06:00",
    name: "中部时间 (CST)",
  },

  // 南美洲
  55: {
    country: "巴西",
    timezone: "America/Sao_Paulo",
    utcOffset: "-03:00",
    name: "巴西时间 (BRT)",
  },
  54: {
    country: "阿根廷",
    timezone: "America/Argentina/Buenos_Aires",
    utcOffset: "-03:00",
    name: "阿根廷时间 (ART)",
  },
  56: {
    country: "智利",
    timezone: "America/Santiago",
    utcOffset: "-03:00",
    name: "智利时间 (CLT)",
  },
  57: {
    country: "哥伦比亚",
    timezone: "America/Bogota",
    utcOffset: "-05:00",
    name: "哥伦比亚时间 (COT)",
  },
  51: {
    country: "秘鲁",
    timezone: "America/Lima",
    utcOffset: "-05:00",
    name: "秘鲁时间 (PET)",
  },
  58: {
    country: "委内瑞拉",
    timezone: "America/Caracas",
    utcOffset: "-04:00",
    name: "委内瑞拉时间 (VET)",
  },
  593: {
    country: "厄瓜多尔",
    timezone: "America/Guayaquil",
    utcOffset: "-05:00",
    name: "厄瓜多尔时间 (ECT)",
  },
  591: {
    country: "玻利维亚",
    timezone: "America/La_Paz",
    utcOffset: "-04:00",
    name: "玻利维亚时间 (BOT)",
  },
  595: {
    country: "巴拉圭",
    timezone: "America/Asuncion",
    utcOffset: "-03:00",
    name: "巴拉圭时间 (PYT)",
  },
  598: {
    country: "乌拉圭",
    timezone: "America/Montevideo",
    utcOffset: "-03:00",
    name: "乌拉圭时间 (UYT)",
  },
  597: {
    country: "苏里南",
    timezone: "America/Paramaribo",
    utcOffset: "-03:00",
    name: "苏里南时间 (SRT)",
  },
  592: {
    country: "圭亚那",
    timezone: "America/Guyana",
    utcOffset: "-04:00",
    name: "圭亚那时间 (GYT)",
  },

  // 非洲
  27: {
    country: "南非",
    timezone: "Africa/Johannesburg",
    utcOffset: "+02:00",
    name: "南非时间 (SAST)",
  },
  20: {
    country: "埃及",
    timezone: "Africa/Cairo",
    utcOffset: "+02:00",
    name: "埃及时间 (EET)",
  },
  212: {
    country: "摩洛哥",
    timezone: "Africa/Casablanca",
    utcOffset: "+01:00",
    name: "摩洛哥时间 (WEST)",
  },
  213: {
    country: "阿尔及利亚",
    timezone: "Africa/Algiers",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  216: {
    country: "突尼斯",
    timezone: "Africa/Tunis",
    utcOffset: "+01:00",
    name: "中欧时间 (CET)",
  },
  218: {
    country: "利比亚",
    timezone: "Africa/Tripoli",
    utcOffset: "+02:00",
    name: "东欧时间 (EET)",
  },
  249: {
    country: "苏丹",
    timezone: "Africa/Khartoum",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  251: {
    country: "埃塞俄比亚",
    timezone: "Africa/Addis_Ababa",
    utcOffset: "+03:00",
    name: "东非时间 (EAT)",
  },
  254: {
    country: "肯尼亚",
    timezone: "Africa/Nairobi",
    utcOffset: "+03:00",
    name: "东非时间 (EAT)",
  },
  255: {
    country: "坦桑尼亚",
    timezone: "Africa/Dar_es_Salaam",
    utcOffset: "+03:00",
    name: "东非时间 (EAT)",
  },
  256: {
    country: "乌干达",
    timezone: "Africa/Kampala",
    utcOffset: "+03:00",
    name: "东非时间 (EAT)",
  },
  250: {
    country: "卢旺达",
    timezone: "Africa/Kigali",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  257: {
    country: "布隆迪",
    timezone: "Africa/Bujumbura",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  260: {
    country: "赞比亚",
    timezone: "Africa/Lusaka",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  263: {
    country: "津巴布韦",
    timezone: "Africa/Harare",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  265: {
    country: "马拉维",
    timezone: "Africa/Blantyre",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  258: {
    country: "莫桑比克",
    timezone: "Africa/Maputo",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  264: {
    country: "纳米比亚",
    timezone: "Africa/Windhoek",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  267: {
    country: "博茨瓦纳",
    timezone: "Africa/Gaborone",
    utcOffset: "+02:00",
    name: "中非时间 (CAT)",
  },
  268: {
    country: "斯威士兰",
    timezone: "Africa/Mbabane",
    utcOffset: "+02:00",
    name: "南非时间 (SAST)",
  },
  266: {
    country: "莱索托",
    timezone: "Africa/Maseru",
    utcOffset: "+02:00",
    name: "南非时间 (SAST)",
  },
  234: {
    country: "尼日利亚",
    timezone: "Africa/Lagos",
    utcOffset: "+01:00",
    name: "西非时间 (WAT)",
  },
  233: {
    country: "加纳",
    timezone: "Africa/Accra",
    utcOffset: "+00:00",
    name: "格林威治时间 (GMT)",
  },
  225: {
    country: "科特迪瓦",
    timezone: "Africa/Abidjan",
    utcOffset: "+00:00",
    name: "格林威治时间 (GMT)",
  },
  221: {
    country: "塞内加尔",
    timezone: "Africa/Dakar",
    utcOffset: "+00:00",
    name: "格林威治时间 (GMT)",
  },

  // 大洋洲
  61: {
    country: "澳大利亚",
    timezone: "Australia/Sydney",
    utcOffset: "+10:00",
    name: "澳东时间 (AEST)",
  },
  64: {
    country: "新西兰",
    timezone: "Pacific/Auckland",
    utcOffset: "+12:00",
    name: "新西兰时间 (NZST)",
  },
  679: {
    country: "斐济",
    timezone: "Pacific/Fiji",
    utcOffset: "+12:00",
    name: "斐济时间 (FJT)",
  },
  685: {
    country: "萨摩亚",
    timezone: "Pacific/Apia",
    utcOffset: "+13:00",
    name: "萨摩亚时间 (WSST)",
  },
  676: {
    country: "汤加",
    timezone: "Pacific/Tongatapu",
    utcOffset: "+13:00",
    name: "汤加时间 (TOT)",
  },
  675: {
    country: "巴新",
    timezone: "Pacific/Port_Moresby",
    utcOffset: "+10:00",
    name: "巴新时间 (PGT)",
  },
  687: {
    country: "新喀里多尼亚",
    timezone: "Pacific/Noumea",
    utcOffset: "+11:00",
    name: "新喀里多尼亚时间 (NCT)",
  },
  678: {
    country: "瓦努阿图",
    timezone: "Pacific/Efate",
    utcOffset: "+11:00",
    name: "瓦努阿图时间 (VUT)",
  },
  677: {
    country: "所罗门群岛",
    timezone: "Pacific/Guadalcanal",
    utcOffset: "+11:00",
    name: "所罗门群岛时间 (SBT)",
  },
};

// 国家名称到国家代码的映射 - 包含中英文全称和简称
const countryNameToCode = {
  // 中国及地区
  中国: "86",
  China: "86",
  香港: "852",
  "Hong Kong": "852",
  HK: "852",
  澳门: "853",
  Macau: "853",
  Macao: "853",
  台湾: "886",
  Taiwan: "886",

  // 亚洲主要国家
  日本: "81",
  Japan: "81",

  韩国: "82",
  Korea: "82",
  "South Korea": "82",

  印度: "91",
  India: "91",

  巴基斯坦: "92",
  Pakistan: "92",
  巴基斯坦: "92",

  孟加拉: "880",
  Bangladesh: "880",

  斯里兰卡: "94",
  "Sri Lanka": "94",
  斯里兰卡: "94",
  尼泊尔: "977",
  Nepal: "977",

  不丹: "975",
  Bhutan: "975",
  缅甸: "95",
  Myanmar: "95",
  Burma: "95",

  泰国: "66",
  Thailand: "66",

  越南: "84",
  Vietnam: "84",

  柬埔寨: "855",
  Cambodia: "855",

  老挝: "856",
  Laos: "856",

  马来西亚: "60",
  Malaysia: "60",
  马来: "60",

  新加坡: "65",
  Singapore: "65",

  文莱: "673",
  Brunei: "673",

  印尼: "62",
  Indonesia: "62",
  印尼: "62",
  菲律宾: "63",
  Philippines: "63",

  蒙古: "976",
  Mongolia: "976",

  朝鲜: "850",
  "North Korea": "850",
  DPRK: "850",

  // 中亚
  乌兹别克: "998",
  Uzbekistan: "998",
  乌兹别克斯坦: "998",
  吉尔吉斯: "996",
  Kyrgyzstan: "996",
  吉尔吉斯斯坦: "996",
  塔吉克: "992",
  Tajikistan: "992",
  塔吉克斯坦: "992",
  土库曼: "993",
  Turkmenistan: "993",
  土库曼斯坦: "993",
  哈萨克: "7",
  Kazakhstan: "7",
  哈萨克斯坦: "7",
  阿塞拜疆: "994",
  Azerbaijan: "994",
  亚美尼亚: "374",
  Armenia: "374",
  格鲁吉亚: "995",
  Georgia: "995",

  // 中东
  土耳其: "90",
  Turkey: "90",

  伊朗: "98",
  Iran: "98",

  阿富汗: "93",
  Afghanistan: "93",
  阿富汗: "93",
  伊拉克: "964",
  Iraq: "964",
  伊拉克: "964",
  叙利亚: "963",
  Syria: "963",

  黎巴嫩: "961",
  Lebanon: "961",

  以色列: "972",
  Israel: "972",

  巴勒斯坦: "970",
  Palestine: "970",
  巴勒斯坦: "970",
  约旦: "962",
  Jordan: "962",

  沙特: "966",
  "Saudi Arabia": "966",
  沙特阿拉伯: "966",

  科威特: "965",
  Kuwait: "965",

  巴林: "973",
  Bahrain: "973",
  巴林: "973",
  卡塔尔: "974",
  Qatar: "974",

  阿联酋: "971",
  UAE: "971",
  "United Arab Emirates": "971",
  迪拜: "971",
  Dubai: "971",
  阿曼: "968",
  Oman: "968",
  阿曼: "968",
  也门: "967",
  Yemen: "967",

  // 欧洲
  英国: "44",
  UK: "44",
  "United Kingdom": "44",
  Britain: "44",

  爱尔兰: "353",
  Ireland: "353",

  法国: "33",
  France: "33",

  德国: "49",
  Germany: "49",

  意大利: "39",
  Italy: "39",

  西班牙: "34",
  Spain: "34",

  葡萄牙: "351",
  Portugal: "351",

  荷兰: "31",
  Netherlands: "31",

  比利时: "32",
  Belgium: "32",

  卢森堡: "352",
  Luxembourg: "352",

  瑞士: "41",
  Switzerland: "41",
  瑞士: "41",
  奥地利: "43",
  Austria: "43",

  捷克: "420",
  "Czech Republic": "420",

  斯洛伐克: "421",
  Slovakia: "421",
  斯洛伐克: "421",
  波兰: "48",
  Poland: "48",

  匈牙利: "36",
  Hungary: "36",

  斯洛文尼亚: "386",
  Slovenia: "386",
  斯洛文尼亚: "386",
  克罗地亚: "385",
  Croatia: "385",

  波黑: "387",
  Bosnia: "387",
  "Bosnia and Herzegovina": "387",
  黑山: "382",
  Montenegro: "382",

  塞尔维亚: "381",
  Serbia: "381",

  北马其顿: "389",
  "North Macedonia": "389",
  Macedonia: "389",
  阿尔巴尼亚: "355",
  Albania: "355",
  阿尔巴尼亚: "355",
  希腊: "30",
  Greece: "30",

  保加利亚: "359",
  Bulgaria: "359",

  罗马尼亚: "40",
  Romania: "40",

  摩尔多瓦: "373",
  Moldova: "373",

  乌克兰: "380",
  Ukraine: "380",

  白俄罗斯: "375",
  Belarus: "375",

  立陶宛: "370",
  Lithuania: "370",

  拉脱维亚: "371",
  Latvia: "371",

  爱沙尼亚: "372",
  Estonia: "372",
  爱沙尼亚: "372",
  芬兰: "358",
  Finland: "358",

  瑞典: "46",
  Sweden: "46",
  瑞典: "46",
  挪威: "47",
  Norway: "47",

  丹麦: "45",
  Denmark: "45",

  冰岛: "354",
  Iceland: "354",

  // 北美洲
  美国: "1",
  USA: "1",
  "United States": "1",
  America: "1",

  加拿大: "1",
  Canada: "1",

  墨西哥: "52",
  Mexico: "52",

  // 南美洲
  巴西: "55",
  Brazil: "55",
  巴西: "55",
  阿根廷: "54",
  Argentina: "54",
  阿根廷: "54",
  智利: "56",
  Chile: "56",

  哥伦比亚: "57",
  Colombia: "57",

  秘鲁: "51",
  Peru: "51",

  委内瑞拉: "58",
  Venezuela: "58",

  厄瓜多尔: "593",
  Ecuador: "593",

  玻利维亚: "591",
  Bolivia: "591",

  巴拉圭: "595",
  Paraguay: "595",
  巴拉圭: "595",
  乌拉圭: "598",
  Uruguay: "598",
  乌拉圭: "598",
  苏里南: "597",
  Suriname: "597",

  圭亚那: "592",
  Guyana: "592",

  // 非洲
  南非: "27",
  "South Africa": "27",

  埃及: "20",
  Egypt: "20",

  摩洛哥: "212",
  Morocco: "212",

  阿尔及利亚: "213",
  Algeria: "213",
  阿尔及利亚: "213",
  突尼斯: "216",
  Tunisia: "216",

  利比亚: "218",
  Libya: "218",

  苏丹: "249",
  Sudan: "249",
  苏丹: "249",
  埃塞俄比亚: "251",
  埃塞: "251",
  Ethiopia: "251",
  埃塞俄比亚: "251",
  肯尼亚: "254",
  Kenya: "254",
  坦桑尼亚: "255",
  Tanzania: "255",
  乌干达: "256",
  Uganda: "256",
  乌干达: "256",
  卢旺达: "250",
  Rwanda: "250",
  卢旺达: "250",
  布隆迪: "257",
  Burundi: "257",
  赞比亚: "260",
  Zambia: "260",

  津巴布韦: "263",
  Zimbabwe: "263",

  马拉维: "265",
  Malawi: "265",
  马拉维: "265",
  莫桑比克: "258",
  Mozambique: "258",

  纳米比亚: "264",
  Namibia: "264",

  博茨瓦纳: "267",
  Botswana: "267",

  斯威士兰: "268",
  Swaziland: "268",
  斯威士兰: "268",
  莱索托: "266",
  Lesotho: "266",

  尼日利亚: "234",
  Nigeria: "234",
  尼日利亚: "234",
  加纳: "233",
  Ghana: "233",
  加纳: "233",
  科特迪瓦: "225",
  "Ivory Coast": "225",
  "Cote dIvoire": "225",
  塞内加尔: "221",
  Senegal: "221",
  塞内加尔: "221",

  // 大洋洲
  澳大利亚: "61",
  Australia: "61",

  新西兰: "64",
  "New Zealand": "64",
  新西兰: "64",
  斐济: "679",
  Fiji: "679",

  萨摩亚: "685",
  Samoa: "685",

  汤加: "676",
  Tonga: "676",

  巴新: "675",
  "Papua New Guinea": "675",
  巴布亚新几内亚: "675",
  新喀里多尼亚: "687",
  "New Caledonia": "687",
  瓦努阿图: "678",
  Vanuatu: "678",

  所罗门群岛: "677",
  "Solomon Islands": "677",
};

// 存储更新间隔的ID
const timeIntervals = {};

// 初始化
function init() {
  console.log("WhatsApp时区显示器已启动");

  // 定期检查聊天标题
  setInterval(checkChatHeaders, 2000);
}

// 检查聊天标题并添加时区信息
function checkChatHeaders() {
  // 1. 处理聊天列表中的联系人（侧边栏） - 更精确的选择器
  const chatListItems = document.querySelectorAll(`
        #pane-side div[role="listitem"] div[role="gridcell"] span[title]:not([data-timezone-added]),
        #pane-side div[role="gridcell"] span._11JPr[title]:not([data-timezone-added])
    `);

  chatListItems.forEach((item) => {
    // 确保在聊天列表区域且不是搜索结果
    if (
      (item.closest('[data-testid="cell-frame-container"]') ||
        item.closest('div[role="listitem"]')) &&
      !item.closest('[data-testid="search"]')
    ) {
      processHeaderForChatList(item);
    }
  });

  // 2. 处理聊天窗口中的联系人名称（顶部） - 更精确的选择器
  const chatWindowHeaders = document.querySelectorAll(`
        header span[dir="auto"]:not([data-timezone-added]):not([class*="emoji"]),
        div[data-testid="conversation-header"] span[dir="auto"]:not([data-timezone-added])
    `);

  chatWindowHeaders.forEach((header) => {
    // 确保这是聊天窗口顶部的联系人名称，不是消息内容或其他元素
    if (isValidChatWindowHeader(header)) {
      processHeaderForChatWindow(header);
    }
  });
}

// 检查是否为有效的聊天窗口标题
function isValidChatWindowHeader(element) {
  const text = element.textContent || "";

  // 排除日期格式的文本
  if (
    /^\d{4}年\d{1,2}月\d{1,2}日$/.test(text) ||
    /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(text) ||
    /^(今天|昨天|前天|Yesterday|Today)$/.test(text)
  ) {
    return false;
  }

  // 排除消息时间
  if (/^\d{1,2}:\d{2}$/.test(text)) {
    return false;
  }

  // 排除空文本或太短的文本
  if (!text.trim() || text.trim().length < 2) {
    return false;
  }

  // 排除纯数字或特殊字符
  if (/^[\d\s\-\+\(\)\.]+$/.test(text)) {
    return false;
  }

  // 排除消息状态或系统文本
  if (/^(已读|未读|typing|online|last seen|最后在线)/.test(text)) {
    return false;
  }

  // 检查是否在聊天窗口的header区域
  const isInHeader =
    element.closest("header") ||
    element.closest('[data-testid="conversation-header"]') ||
    element.closest('div[data-testid="conversation-info-header"]');

  // 排除在消息区域的元素
  const isInMessageArea =
    element.closest('[data-testid="conversation-panel-messages"]') ||
    element.closest(".message-in") ||
    element.closest(".message-out") ||
    element.closest("._ak8l") ||
    element.closest("._akbu");

  return isInHeader && !isInMessageArea;
}

// 检查是否为有效的聊天列表项
function isValidChatListItem(element) {
  const text = element.textContent || element.title || "";

  // 排除空文本或太短的文本
  if (!text.trim() || text.trim().length < 2) {
    return false;
  }

  // 排除日期和时间
  if (
    /^\d{4}年\d{1,2}月\d{1,2}日$/.test(text) ||
    /^\d{1,2}:\d{2}$/.test(text) ||
    /^(今天|昨天|前天)$/.test(text)
  ) {
    return false;
  }

  // 排除纯数字或特殊字符
  if (/^[\d\s\-\+\(\)\.]+$/.test(text)) {
    return false;
  }

  // 确保在聊天列表区域
  const isInChatList =
    element.closest('[data-testid="cell-frame-container"]') ||
    element.closest('div[role="listitem"]') ||
    element.closest("#pane-side");

  // 排除在搜索区域或其他区域的元素
  const isInSearchArea =
    element.closest('[data-testid="search"]') ||
    element.closest(".search-container");

  return isInChatList && !isInSearchArea;
}

// 处理聊天列表中的联系人（上下布局）
function processHeaderForChatList(headerElement) {
  if (!headerElement || headerElement.hasAttribute("data-timezone-added")) {
    return;
  }

  // 验证是否为有效的聊天列表项
  if (!isValidChatListItem(headerElement)) {
    return;
  }

  const headerText = headerElement.textContent || headerElement.title || "";
  if (!headerText.trim()) return;

  // 检查是否包含电话号码
  let countryCode = extractCountryCodeFromPhone(headerText);

  // 如果没有找到电话号码，检查是否包含国家名称
  if (!countryCode) {
    countryCode = extractCountryCodeFromName(headerText);
  }

  if (countryCode && countryTimezones[countryCode]) {
    addTimeDisplayToList(headerElement, countryCode, headerText);
    headerElement.setAttribute("data-timezone-added", "true");
  }
}

// 处理聊天窗口中的联系人名称（水平布局）
function processHeaderForChatWindow(headerElement) {
  if (!headerElement || headerElement.hasAttribute("data-timezone-added")) {
    return;
  }

  // 验证是否为有效的聊天窗口标题
  if (!isValidChatWindowHeader(headerElement)) {
    return;
  }

  const headerText = headerElement.textContent || "";
  if (!headerText.trim()) return;

  // 检查是否包含电话号码
  let countryCode = extractCountryCodeFromPhone(headerText);

  // 如果没有找到电话号码，检查是否包含国家名称
  if (!countryCode) {
    countryCode = extractCountryCodeFromName(headerText);
  }

  if (countryCode && countryTimezones[countryCode]) {
    addTimeDisplayToWindow(headerElement, countryCode, headerText);
    headerElement.setAttribute("data-timezone-added", "true");
  }
}

// 为聊天列表添加时间显示（上下布局）
function addTimeDisplayToList(element, countryCode, originalText) {
  const timezoneInfo = countryTimezones[countryCode];
  if (!timezoneInfo) return;

  // 检查是否已经存在时间显示
  const existingDisplay =
    element.parentNode?.querySelector(".timezone-display");
  if (existingDisplay) return;

  // 创建时间显示元素
  const timeDisplay = document.createElement("div");
  timeDisplay.className = "timezone-display timezone-list";
  timeDisplay.id = `timezone-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  // 设置样式 - 聊天列表样式
  timeDisplay.style.fontSize = "14px";
  timeDisplay.style.marginTop = "2px";
  timeDisplay.style.fontWeight = "400";
  timeDisplay.style.opacity = "0.8";
  timeDisplay.style.paddingLeft = "0px";

  // 尝试插入到合适的位置
  let inserted = false;

  // 策略1: 插入到父容器的末尾
  if (element.parentNode && !inserted) {
    try {
      element.parentNode.appendChild(timeDisplay);
      inserted = true;
    } catch (e) {
      console.log("聊天列表插入策略1失败");
    }
  }

  if (inserted) {
    // 立即更新一次时间
    updateTime(
      timeDisplay.id,
      timezoneInfo.timezone,
      timezoneInfo.utcOffset,
      timezoneInfo.country
    );

    // 每分钟更新一次时间
    const intervalId = setInterval(() => {
      updateTime(
        timeDisplay.id,
        timezoneInfo.timezone,
        timezoneInfo.utcOffset,
        timezoneInfo.country
      );
    }, 60000);

    // 存储间隔ID以便清理
    timeIntervals[timeDisplay.id] = intervalId;

    console.log(
      `为聊天列表 ${originalText} 添加了时区显示: ${timezoneInfo.country}`
    );
  }
}

// 为聊天窗口添加时间显示（水平布局）
function addTimeDisplayToWindow(element, countryCode, originalText) {
  const timezoneInfo = countryTimezones[countryCode];
  if (!timezoneInfo) return;

  // 检查是否已经存在时间显示
  const existingDisplay =
    element.parentNode?.querySelector(".timezone-display");
  if (existingDisplay) return;

  // 创建时间显示元素
  const timeDisplay = document.createElement("span");
  timeDisplay.className = "timezone-display timezone-window";
  timeDisplay.id = `timezone-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  // 设置样式 - 聊天窗口样式（水平布局）
  timeDisplay.style.fontSize = "12px";
  timeDisplay.style.marginLeft = "8px";
  timeDisplay.style.fontWeight = "400";
  timeDisplay.style.opacity = "0.8";
  timeDisplay.style.display = "inline-block";

  // 尝试插入到联系人名称的右侧
  let inserted = false;

  // 策略1: 插入到元素后面
  if (element.parentNode && !inserted) {
    try {
      element.parentNode.insertBefore(timeDisplay, element.nextSibling);
      inserted = true;
    } catch (e) {
      console.log("聊天窗口插入策略1失败");
    }
  }

  // 策略2: 插入到父容器的末尾
  if (!inserted && element.parentNode) {
    try {
      element.parentNode.appendChild(timeDisplay);
      inserted = true;
    } catch (e) {
      console.log("聊天窗口插入策略2失败");
    }
  }

  if (inserted) {
    // 立即更新一次时间
    updateTime(
      timeDisplay.id,
      timezoneInfo.timezone,
      timezoneInfo.utcOffset,
      timezoneInfo.country
    );

    // 每分钟更新一次时间
    const intervalId = setInterval(() => {
      updateTime(
        timeDisplay.id,
        timezoneInfo.timezone,
        timezoneInfo.utcOffset,
        timezoneInfo.country
      );
    }, 60000);

    // 存储间隔ID以便清理
    timeIntervals[timeDisplay.id] = intervalId;

    console.log(
      `为聊天窗口 ${originalText} 添加了时区显示: ${timezoneInfo.country}`
    );
  }
}

// 从电话号码中提取国家代码
function extractCountryCodeFromPhone(text) {
  // 移除所有空格、连字符和括号
  const cleaned = text.replace(/[\s\-\(\)]/g, "");

  // 查找+号后的数字
  const phoneMatch = cleaned.match(/\+(\d+)/);
  if (!phoneMatch) return null;

  const numbers = phoneMatch[1];

  // 预定义已知的国家代码列表，按长度分组，优先匹配更长的代码
  const knownCodes = {
    // 3位代码（优先匹配）
    3: [
      "852",
      "853",
      "886",
      "880",
      "855",
      "856",
      "673",
      "998",
      "996",
      "992",
      "993",
      "994",
      "374",
      "995",
      "964",
      "963",
      "961",
      "972",
      "970",
      "962",
      "966",
      "965",
      "973",
      "974",
      "971",
      "968",
      "967",
      "976",
      "850",
      "353",
      "351",
      "352",
      "420",
      "421",
      "386",
      "385",
      "387",
      "382",
      "381",
      "389",
      "355",
      "359",
      "373",
      "380",
      "375",
      "370",
      "371",
      "372",
      "358",
      "354",
      "593",
      "591",
      "595",
      "598",
      "597",
      "592",
      "212",
      "213",
      "216",
      "218",
      "249",
      "251",
      "254",
      "255",
      "256",
      "250",
      "257",
      "260",
      "263",
      "265",
      "258",
      "264",
      "267",
      "268",
      "266",
      "234",
      "233",
      "225",
      "221",
      "679",
      "685",
      "676",
      "675",
      "687",
      "678",
      "677",
    ],
    // 2位代码
    2: [
      "86",
      "81",
      "82",
      "91",
      "92",
      "94",
      "95",
      "66",
      "84",
      "60",
      "65",
      "62",
      "63",
      "98",
      "93",
      "90",
      "44",
      "33",
      "49",
      "39",
      "34",
      "31",
      "32",
      "41",
      "43",
      "48",
      "36",
      "30",
      "40",
      "46",
      "47",
      "45",
      "52",
      "55",
      "54",
      "56",
      "57",
      "51",
      "58",
      "27",
      "20",
      "61",
      "64",
    ],
    // 1位代码
    1: ["1", "7"],
  };

  // 按长度优先级匹配（3位→2位→1位）
  for (const length of [3, 2, 1]) {
    const possibleCode = numbers.substring(0, length);
    if (
      knownCodes[length].includes(possibleCode) &&
      countryTimezones[possibleCode]
    ) {
      console.log(
        `电话号码 ${text} 识别为国家代码: ${possibleCode} (${countryTimezones[possibleCode].country})`
      );
      return possibleCode;
    }
  }

  console.log(`无法识别电话号码: ${text} (提取的数字: ${numbers})`);
  return null;
}

// 从联系人名称中提取国家代码（智能匹配）
function extractCountryCodeFromName(text) {
  // 按名称长度排序，优先匹配更长的国家名称，避免部分匹配错误
  const sortedCountries = Object.entries(countryNameToCode).sort((a, b) => {
    return b[0].length - a[0].length; // 按长度降序排序
  });

  for (const [countryName, code] of sortedCountries) {
    // 跳过单字符的中文简称，避免误匹配
    if (countryName.length === 1 && /[\u4e00-\u9fff]/.test(countryName)) {
      // 对于单字中文简称，需要更严格的匹配
      // 检查是否在文本开头且后面跟着空格或其他非中文字符
      const strictRegex = new RegExp(
        `^${countryName}[\\s\\u4e00-\\u9fff]`,
        "i"
      );
      if (strictRegex.test(text)) {
        console.log(
          `国家名称 "${text}" 识别为: ${countryName} (代码: ${code}) - 严格匹配`
        );
        return code;
      }
      continue; // 跳过单字符匹配
    }

    // 对于多字符国家名称，使用词边界匹配
    if (countryName.length >= 2) {
      // 中文国家名称直接匹配
      if (/[\u4e00-\u9fff]/.test(countryName)) {
        if (text.includes(countryName)) {
          console.log(
            `国家名称 "${text}" 识别为: ${countryName} (代码: ${code})`
          );
          return code;
        }
      } else {
        // 英文国家名称使用词边界匹配
        const regex = new RegExp(
          `\\b${countryName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
          "i"
        );
        if (regex.test(text)) {
          console.log(
            `国家名称 "${text}" 识别为: ${countryName} (代码: ${code})`
          );
          return code;
        }
      }
    }
  }

  console.log(`无法从名称识别国家: ${text}`);
  return null;
}

// 判断是否为工作时间（周一到周五，上午9点到下午6点）
function isWorkingTime(timezone) {
  try {
    const now = new Date();
    const timeOptions = {
      timeZone: timezone,
      weekday: "short",
      hour: "numeric",
      hour12: false,
    };

    const timeInfo = new Intl.DateTimeFormat(
      "en-US",
      timeOptions
    ).formatToParts(now);
    const weekday = timeInfo.find((part) => part.type === "weekday").value;
    const hour = parseInt(timeInfo.find((part) => part.type === "hour").value);

    // 判断是否为工作日（周一到周五）
    const isWeekday = !["Sat", "Sun"].includes(weekday);

    // 判断是否为工作时间（9:00-18:00）
    const isWorkHour = hour >= 9 && hour < 18;

    return isWeekday && isWorkHour;
  } catch (error) {
    console.error("工作时间判断错误:", error);
    return false;
  }
}

// 更新时间显示
function updateTime(elementId, timezone, utcOffset, countryName) {
  const element = document.getElementById(elementId);
  if (!element) {
    // 如果元素不存在，清除定时器
    if (timeIntervals[elementId]) {
      clearInterval(timeIntervals[elementId]);
      delete timeIntervals[elementId];
    }
    return;
  }

  try {
    const now = new Date();

    // 使用Intl.DateTimeFormat来获取特定时区的时间
    const timeOptions = {
      timeZone: timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    };

    const timeString = now.toLocaleTimeString("zh-CN", timeOptions);

    // 判断是否为工作时间
    const isWorking = isWorkingTime(timezone);

    // 根据工作时间设置状态图标
    const statusIcon = isWorking ? "🟢" : "🔴";

    // 使用HTML结构，状态图标保持原色，时间和国家名称为黑色
    const iconClass = isWorking ? "status-icon working" : "status-icon";
    element.innerHTML = `<span class="${iconClass}">${statusIcon}</span><span class="time-text" style="color: #000000;">${timeString} ${countryName}</span>`;

    // 移除整体颜色设置，让各部分保持自己的颜色
    element.style.color = "";
  } catch (error) {
    console.error("时间更新错误:", error);
    // 如果时区不支持，使用UTC偏移计算
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;

    // 解析UTC偏移
    const offsetMatch = utcOffset.match(/([+-])(\d{1,2}):?(\d{2})/);
    if (offsetMatch) {
      const sign = offsetMatch[1] === "+" ? 1 : -1;
      const hours = parseInt(offsetMatch[2]);
      const minutes = parseInt(offsetMatch[3] || "0");
      const offsetMilliseconds = sign * (hours * 3600000 + minutes * 60000);

      const targetTime = new Date(utc + offsetMilliseconds);
      const hour = targetTime.getHours();
      const minute = targetTime.getMinutes();
      const day = targetTime.getDay();

      // 简单的工作时间判断
      const isWeekday = day >= 1 && day <= 5;
      const isWorkHour = hour >= 9 && hour < 18;
      const isWorking = isWeekday && isWorkHour;

      const statusIcon = isWorking ? "🟢" : "🔴";

      // 使用HTML结构，状态图标保持原色，时间和国家名称为黑色
      const iconClass = isWorking ? "status-icon working" : "status-icon";
      element.innerHTML = `<span class="${iconClass}">${statusIcon}</span><span class="time-text" style="color: #000000;">${hour
        .toString()
        .padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")} ${countryName}</span>`;

      // 移除整体颜色设置
      element.style.color = "";
    }
  }
}

// 添加MutationObserver以监视DOM变化
function observeDOMChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // 延迟检查以确保元素完全加载
        setTimeout(checkChatHeaders, 1000);
      }
    });
  });

  // 开始观察整个文档
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// 添加自定义样式
function addCustomStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .timezone-display {
      animation: fadeIn 0.5s;
      font-family: inherit;
      line-height: 1.2;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
}

// 等待页面加载完成
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAfterDelay);
} else {
  initAfterDelay();
}

function initAfterDelay() {
  setTimeout(() => {
    init();
    observeDOMChanges();
    addCustomStyles();
  }, 3000); // 等待3秒，确保WhatsApp Web完全加载
}

// 消息监听器，用于接收来自popup或background的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkStatus") {
    sendResponse({ status: "active" });
  } else if (message.action === "refresh") {
    // 重新检查所有聊天标题
    checkChatHeaders();
  } else if (message.action === "enable") {
    // 启用插件
    init();
  } else if (message.action === "disable") {
    // 禁用插件 - 清除所有时间显示
    document.querySelectorAll(".timezone-display").forEach((el) => el.remove());
    Object.values(timeIntervals).forEach(clearInterval);
    Object.keys(timeIntervals).forEach((key) => delete timeIntervals[key]);
  }
});
