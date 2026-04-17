/* ═══════════════════════════════════════════
   CropLynk – script.js
   All functionality: i18n, weather, AI, market
═══════════════════════════════════════════ */

'use strict';

/* ─── 1. TRANSLATIONS ─────────────────── */
const TRANSLATIONS = {
  en: {
    nav_weather: 'Weather',
    nav_ai: 'AI Guidance',
    nav_market: 'Market',
    nav_features: 'Features',
    nav_cta: 'Login',
    hero_badge: '🇮🇳 Built for Indian Farmers',
    hero_title_1: 'Grow Smarter.',
    hero_title_2: 'Earn Better.',
    hero_sub: 'Real-time weather, AI crop advice, and direct market access — all in one place. Empowering every farmer in India.',
    hero_cta1: 'Explore Dashboard',
    hero_cta2: 'Get AI Guidance',
    stat_farmers: 'Farmers Served',
    stat_states: 'States Covered',
    stat_trade: 'Trade Facilitated',
    scroll_hint: 'Scroll to explore',
    weather_tag: 'Live Dashboard',
    weather_title: 'Weather for Your Field',
    weather_sub: 'Hyperlocal forecasts so you can plan irrigation, harvests, and spraying with confidence.',
    weather_location: 'Lucknow, Uttar Pradesh',
    change_location: 'Change',
    forecast_title: '5-Day Forecast',
    humidity: 'Humidity',
    wind: 'Wind',
    rainfall: 'Rainfall',
    visibility: 'Visibility',
    weather_alert_default: 'Good conditions for fieldwork today.',
    soil_temp: 'Soil Temperature',
    soil_temp_note: 'Optimal for wheat & mustard',
    soil_moist: 'Soil Moisture',
    soil_moist_note: 'Consider irrigation in 2 days',
    uv_index: 'UV Index',
    uv_note: 'High – limit midday exposure',
    rain_prob: 'Rain Probability',
    rain_note: 'Low chance this week',
    ai_tag: 'AI Powered',
    ai_title: 'Smart Crop Guidance',
    ai_sub: 'Describe your field conditions and get expert recommendations instantly — powered by agricultural AI.',
    ai_form_title: 'Tell Us About Your Field',
    label_crop: 'Crop Type',
    label_soil: 'Soil Type',
    label_season: 'Current Season',
    label_problem: 'Any Problems? (Optional)',
    sel_crop_placeholder: 'Select a crop...',
    sel_soil_placeholder: 'Select soil type...',
    sel_season_placeholder: 'Select season...',
    ai_btn: 'Get AI Guidance',
    ai_placeholder: 'Fill in your field details and click Get AI Guidance to receive personalized crop recommendations.',
    market_tag: 'Live Market',
    market_title: 'Sell Directly to Buyers',
    market_sub: 'Real-time mandi prices and direct buyer connections. Cut out middlemen, maximise your profit.',
    filter_all: 'All Crops',
    filter_grains: 'Grains',
    filter_veg: 'Vegetables',
    filter_oil: 'Oilseeds',
    filter_fruits: 'Fruits',
    sort_default: 'Sort: Default',
    sort_price_high: 'Price: High → Low',
    sort_price_low: 'Price: Low → High',
    sort_trend: 'Trending ↑',
    ticker_label: '📊 Live Prices:',
    features_tag: 'Why CropLynk',
    features_title: 'Everything a Farmer Needs',
    features_sub: 'Designed with simplicity, built for scale. Here\'s what makes CropLynk different.',
    feat1_title: 'Hyperlocal Weather',
    feat1_desc: 'Village-level forecasts using satellite data and IMD integration. Know exactly when to irrigate or harvest.',
    feat2_title: 'AI Crop Doctor',
    feat2_desc: 'Upload a leaf photo or describe symptoms. Our AI identifies diseases and suggests organic/chemical remedies.',
    feat3_title: 'Real-Time Prices',
    feat3_desc: 'Live mandi rates from 500+ APMC markets across India. Compare prices before you sell.',
    feat4_title: 'Direct Buyer Network',
    feat4_desc: 'Connect with verified buyers, exporters, and food companies. No commission agents, better prices for you.',
    feat5_title: 'Works in Hindi',
    feat5_desc: 'Full platform support in Hindi, with more regional languages (Marathi, Punjabi, Tamil) coming soon.',
    feat6_title: 'Works on 2G',
    feat6_desc: 'Optimised for low-bandwidth connections and older smartphones. No app needed — open in any browser.',
    testimonials_tag: 'Farmer Stories',
    testimonials_title: 'Real Farmers, Real Results',
    testi1_text: '"CropLynk\'s weather alert saved my entire mustard crop last winter. I was able to cover the field before the frost hit."',
    testi1_name: 'Ramesh Yadav',
    testi1_loc: 'Varanasi, UP',
    testi2_text: '"I sold my potatoes directly to a buyer in Delhi through this platform. Got 18% more than the local mandi rate."',
    testi2_name: 'Sunita Devi',
    testi2_loc: 'Agra, UP',
    testi3_text: '"The AI crop doctor identified leaf blight on my rice crop. I treated it in time and had my best yield in 5 years."',
    testi3_name: 'Harpreet Singh',
    testi3_loc: 'Ludhiana, Punjab',
    trust1: 'Govt. of India Partner',
    trust2: 'ICAR Certified Data',
    trust3: '100% Secure Platform',
    trust4: '24/7 Kisan Helpline',
    footer_tagline: 'Bridging the gap between field and market.',
    footer_platform: 'Platform',
    footer_support: 'Support',
    footer_legal: 'Legal',
    footer_help: 'Help Center',
    footer_faq: 'FAQ',
    footer_helpline: 'Kisan Helpline',
    footer_feedback: 'Give Feedback',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_disclaimer: 'Disclaimer',
    footer_cta_text: 'Have a question? Call our Kisan Helpline.',
    footer_cta_btn: '1800-180-1551',
    footer_free: 'Toll Free · Available in Hindi & English',
    footer_copy: '© 2025 CropLynk. Made with ❤️ for Indian Farmers.',
    footer_disclaimer_small: 'Weather data is indicative. Always consult local agricultural officers for critical decisions.',
    sell_now: 'Sell Now',
    find_buyers: 'Find Buyers',
    buyers_found: 'Buyers found for',
    listed_for_sale: 'listed for sale!',
    use_my_location: 'My Location',
    close_search: 'Close',
    auth_title: 'Welcome to CropLynk',
    auth_sub: 'Login with Google to continue to your dashboard',
    auth_google_btn: 'Sign in with Google',
    auth_disclaimer: 'By continuing, you agree to our Terms of Service & Privacy Policy.',
    auth_success_title: 'Welcome, Kisan! 🌾',
    auth_success_sub: 'You are now logged in successfully.',
    auth_logout: 'Logout',
    auth_logged_in: 'Logged in',
  },
  hi: {
    nav_weather: 'मौसम',
    nav_ai: 'AI सलाह',
    nav_market: 'बाज़ार',
    nav_features: 'सुविधाएं',
    nav_cta: 'लॉगिन',
    hero_badge: '🇮🇳 भारतीय किसानों के लिए बना',
    hero_title_1: 'स्मार्ट खेती करें।',
    hero_title_2: 'बेहतर कमाएं।',
    hero_sub: 'रियल-टाइम मौसम, AI फसल सलाह, और सीधे बाज़ार से जुड़ाव — सब एक जगह। भारत के हर किसान को सशक्त बनाएं।',
    hero_cta1: 'डैशबोर्ड देखें',
    hero_cta2: 'AI सलाह लें',
    stat_farmers: 'किसान सेवित',
    stat_states: 'राज्य शामिल',
    stat_trade: 'व्यापार सुगम',
    scroll_hint: 'और देखें',
    weather_tag: 'लाइव डैशबोर्ड',
    weather_title: 'आपके खेत का मौसम',
    weather_sub: 'हाइपरलोकल पूर्वानुमान ताकि आप सिंचाई, कटाई और छिड़काव की योजना आत्मविश्वास से बना सकें।',
    weather_location: 'लखनऊ, उत्तर प्रदेश',
    change_location: 'बदलें',
    forecast_title: '5 दिन का पूर्वानुमान',
    humidity: 'आर्द्रता',
    wind: 'हवा',
    rainfall: 'वर्षा',
    visibility: 'दृश्यता',
    weather_alert_default: 'आज खेत के काम के लिए अच्छा मौसम है।',
    soil_temp: 'मिट्टी का तापमान',
    soil_temp_note: 'गेहूं और सरसों के लिए उपयुक्त',
    soil_moist: 'मिट्टी की नमी',
    soil_moist_note: '2 दिनों में सिंचाई पर विचार करें',
    uv_index: 'UV सूचकांक',
    uv_note: 'अधिक – दोपहर में कम रहें',
    rain_prob: 'बारिश की संभावना',
    rain_note: 'इस सप्ताह कम संभावना',
    ai_tag: 'AI संचालित',
    ai_title: 'स्मार्ट फसल सलाह',
    ai_sub: 'अपने खेत की स्थिति बताएं और तुरंत विशेषज्ञ सिफारिशें पाएं — कृषि AI द्वारा संचालित।',
    ai_form_title: 'अपने खेत के बारे में बताएं',
    label_crop: 'फसल का प्रकार',
    label_soil: 'मिट्टी का प्रकार',
    label_season: 'वर्तमान मौसम',
    label_problem: 'कोई समस्या? (वैकल्पिक)',
    sel_crop_placeholder: 'फसल चुनें...',
    sel_soil_placeholder: 'मिट्टी का प्रकार चुनें...',
    sel_season_placeholder: 'मौसम चुनें...',
    ai_btn: 'AI सलाह लें',
    ai_placeholder: 'खेत की जानकारी भरें और AI सलाह लें बटन दबाएं।',
    market_tag: 'लाइव बाज़ार',
    market_title: 'सीधे खरीदारों को बेचें',
    market_sub: 'रियल-टाइम मंडी भाव और सीधे खरीदार से जुड़ाव। बिचौलियों को हटाएं, अपना मुनाफा बढ़ाएं।',
    filter_all: 'सभी फसलें',
    filter_grains: 'अनाज',
    filter_veg: 'सब्ज़ियां',
    filter_oil: 'तिलहन',
    filter_fruits: 'फल',
    sort_default: 'क्रम: डिफ़ॉल्ट',
    sort_price_high: 'मूल्य: अधिक → कम',
    sort_price_low: 'मूल्य: कम → अधिक',
    sort_trend: 'ट्रेंडिंग ↑',
    ticker_label: '📊 लाइव भाव:',
    features_tag: 'CropLynk क्यों',
    features_title: 'किसान को जो चाहिए सब यहाँ',
    features_sub: 'सरलता के साथ डिज़ाइन, बड़े पैमाने पर बनाया। जानें CropLynk को क्या अलग बनाता है।',
    feat1_title: 'हाइपरलोकल मौसम',
    feat1_desc: 'उपग्रह डेटा और IMD एकीकरण से गांव-स्तरीय पूर्वानुमान। ठीक से जानें कब सिंचाई या कटाई करें।',
    feat2_title: 'AI फसल डॉक्टर',
    feat2_desc: 'पत्ती की फोटो अपलोड करें या लक्षण बताएं। हमारी AI बीमारियों को पहचानती है और उपाय सुझाती है।',
    feat3_title: 'रियल-टाइम भाव',
    feat3_desc: 'भारत भर के 500+ APMC बाजारों से लाइव मंडी भाव। बेचने से पहले कीमतें देखें।',
    feat4_title: 'सीधा खरीदार नेटवर्क',
    feat4_desc: 'सत्यापित खरीदारों, निर्यातकों और खाद्य कंपनियों से जुड़ें। कोई दलाल नहीं, आपको बेहतर भाव।',
    feat5_title: 'हिंदी में उपलब्ध',
    feat5_desc: 'हिंदी में पूर्ण प्लेटफ़ॉर्म समर्थन, जल्द ही मराठी, पंजाबी, तमिल में भी।',
    feat6_title: '2G पर काम करता है',
    feat6_desc: 'कम बैंडविड्थ कनेक्शन के लिए अनुकूलित। कोई ऐप नहीं चाहिए — किसी भी ब्राउज़र में खोलें।',
    testimonials_tag: 'किसानों की कहानियां',
    testimonials_title: 'असली किसान, असली नतीजे',
    testi1_text: '"CropLynk की मौसम चेतावनी ने पिछली सर्दियों में मेरी पूरी सरसों की फसल बचाई।"',
    testi1_name: 'रमेश यादव',
    testi1_loc: 'वाराणसी, UP',
    testi2_text: '"मैंने इस प्लेटफ़ॉर्म के ज़रिये दिल्ली के खरीदार को सीधे आलू बेचे। स्थानीय मंडी भाव से 18% अधिक मिला।"',
    testi2_name: 'सुनीता देवी',
    testi2_loc: 'आगरा, UP',
    testi3_text: '"AI फसल डॉक्टर ने मेरे धान की फसल में पत्ती झुलसा रोग पहचाना। समय पर उपचार किया और 5 साल में सबसे अच्छी पैदावार हुई।"',
    testi3_name: 'हरप्रीत सिंह',
    testi3_loc: 'लुधियाना, पंजाब',
    trust1: 'भारत सरकार भागीदार',
    trust2: 'ICAR प्रमाणित डेटा',
    trust3: '100% सुरक्षित प्लेटफ़ॉर्म',
    trust4: '24/7 किसान हेल्पलाइन',
    footer_tagline: 'खेत और बाज़ार के बीच की दूरी मिटाना।',
    footer_platform: 'प्लेटफ़ॉर्म',
    footer_support: 'सहायता',
    footer_legal: 'कानूनी',
    footer_help: 'सहायता केंद्र',
    footer_faq: 'सामान्य प्रश्न',
    footer_helpline: 'किसान हेल्पलाइन',
    footer_feedback: 'प्रतिक्रिया दें',
    footer_privacy: 'गोपनीयता नीति',
    footer_terms: 'उपयोग की शर्तें',
    footer_disclaimer: 'अस्वीकरण',
    footer_cta_text: 'कोई सवाल है? किसान हेल्पलाइन पर कॉल करें।',
    footer_cta_btn: '1800-180-1551',
    footer_free: 'टोल फ्री · हिंदी और अंग्रेजी में उपलब्ध',
    footer_copy: '© 2025 CropLynk. भारतीय किसानों के लिए ❤️ से बना।',
    footer_disclaimer_small: 'मौसम डेटा सांकेतिक है। महत्वपूर्ण निर्णयों के लिए स्थानीय कृषि अधिकारियों से परामर्श करें।',
    sell_now: 'अभी बेचें',
    find_buyers: 'खरीदार खोजें',
    buyers_found: 'के लिए खरीदार मिले',
    listed_for_sale: 'बिक्री के लिए सूचीबद्ध!',
    use_my_location: 'मेरा स्थान',
    close_search: 'बंद करें',
    auth_title: 'CropLynk में आपका स्वागत है',
    auth_sub: 'शुरू करने के लिए अपने फोन नंबर से लॉगिन करें',
    auth_send_otp: 'OTP भेजें',
    auth_disclaimer: 'आगे बढ़कर, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं।',
    auth_otp_title: 'OTP सत्यापित करें',
    auth_otp_sub: '6 अंकों का कोड भेजा गया',
    auth_verify: 'सत्यापित करें और लॉगिन करें',
    auth_no_code: 'कोड नहीं मिला?',
    auth_resend: 'OTP पुनः भेजें',
    auth_change_number: '← नंबर बदलें',
    auth_success_title: 'स्वागत है, किसान! 🌾',
    auth_success_sub: 'आप सफलतापूर्वक लॉगिन हो गए हैं।',
    auth_logout: 'लॉगआउट',
    auth_logged_in: 'लॉगिन हो गया',
  }
};

/* ─── 2. APP STATE ────────────────────── */
const state = {
  lang: 'en',
  currentFilter: 'all',
  currentSort: 'default',
  marketData: [],
};

/* ─── 3. WEATHER API CONFIG ───────────── */
const WEATHER_API_KEY = '2f5abe4ac4634a97baa54446261704';
const WEATHER_API_BASE = 'https://api.weatherapi.com/v1';

// Map WeatherAPI condition codes to emoji icons
function getWeatherEmoji(code, isDay) {
  if (code === 1000) return isDay ? '☀️' : '🌙';
  if ([1003].includes(code)) return '⛅';
  if ([1006, 1009].includes(code)) return '☁️';
  if ([1030, 1135, 1147].includes(code)) return '🌫️';
  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201].includes(code)) return '🌦️';
  if ([1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) return '🌨️';
  if ([1072, 1168, 1171, 1249, 1252].includes(code)) return '🌧️';
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return '⛈️';
  if ([1114, 1117].includes(code)) return '❄️';
  if ([1150, 1153, 1240, 1243, 1246].includes(code)) return '🌧️';
  return isDay ? '🌤️' : '🌙';
}

// Generate farming alert from weather data
function getFarmingAlert(data) {
  const current = data.current;
  const wind = current.wind_kph;
  const rain = current.precip_mm;
  const humidity = current.humidity;
  const uv = current.uv;
  const condCode = current.condition.code;

  if ([1087, 1273, 1276, 1279, 1282].includes(condCode))
    return '⚠️ Stay indoors – thunderstorm expected. Secure equipment and livestock.';
  if (rain > 10)
    return '🌧️ Heavy rain – avoid spraying pesticides or fertilisers today.';
  if (wind > 30)
    return '💨 Strong winds – delay aerial spraying and protect young crops.';
  if (humidity > 85)
    return '💦 High humidity – watch for fungal diseases. Improve field ventilation.';
  if (uv >= 8)
    return '☀️ Very high UV – avoid fieldwork between 11 AM–3 PM today.';
  if (rain > 0 && rain <= 10)
    return '🌦️ Light showers – good for germination but delay pesticide application.';
  return 'weather_alert_default';
}

const FORECAST_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ─── 4. MARKET DATA ──────────────────── */
const MARKET_DATA = [
  { id: 1, icon: '🌾', crop: 'Wheat', hindi: 'गेहूं', price: 2150, unit: '₹ / quintal', trend: 'up', change: '+3.2%', category: 'grains' },
  { id: 2, icon: '🌾', crop: 'Rice', hindi: 'धान', price: 2840, unit: '₹ / quintal', trend: 'up', change: '+1.8%', category: 'grains' },
  { id: 3, icon: '🥔', crop: 'Potato', hindi: 'आलू', price: 1240, unit: '₹ / quintal', trend: 'down', change: '-2.1%', category: 'vegetables' },
  { id: 4, icon: '🧅', crop: 'Onion', hindi: 'प्याज', price: 2100, unit: '₹ / quintal', trend: 'up', change: '+8.4%', category: 'vegetables' },
  { id: 5, icon: '🌿', crop: 'Mustard', hindi: 'सरसों', price: 5480, unit: '₹ / quintal', trend: 'stable', change: '+0.3%', category: 'oilseeds' },
  { id: 6, icon: '🫘', crop: 'Soybean', hindi: 'सोयाबीन', price: 4320, unit: '₹ / quintal', trend: 'down', change: '-1.4%', category: 'oilseeds' },
  { id: 7, icon: '🍅', crop: 'Tomato', hindi: 'टमाटर', price: 3800, unit: '₹ / quintal', trend: 'up', change: '+12.6%', category: 'vegetables' },
  { id: 8, icon: '🌽', crop: 'Maize', hindi: 'मक्का', price: 1980, unit: '₹ / quintal', trend: 'stable', change: '0.0%', category: 'grains' },
  { id: 9, icon: '🍋', crop: 'Lemon', hindi: 'नींबू', price: 7200, unit: '₹ / quintal', trend: 'up', change: '+5.0%', category: 'fruits' },
  { id: 10, icon: '🍇', crop: 'Grapes', hindi: 'अंगूर', price: 8500, unit: '₹ / quintal', trend: 'down', change: '-0.9%', category: 'fruits' },
  { id: 11, icon: '🌰', crop: 'Groundnut', hindi: 'मूंगफली', price: 5150, unit: '₹ / quintal', trend: 'up', change: '+2.2%', category: 'oilseeds' },
  { id: 12, icon: '🌶️', crop: 'Chilli', hindi: 'मिर्च', price: 9800, unit: '₹ / quintal', trend: 'stable', change: '+0.1%', category: 'vegetables' },
];

/* ─── 5. AI GUIDANCE DATA ─────────────── */
const AI_GUIDANCE = {
  wheat: {
    alluvial: {
      rabi: {
        score: 92,
        summary: 'Excellent conditions for wheat in alluvial soil during Rabi season.',
        cards: [
          { icon: '💧', title: 'Irrigation', body: 'First irrigation (Crown Root Initiation) should be done 20-25 days after sowing. Total 4-6 irrigations recommended. Avoid waterlogging — ensure proper drainage furrows.', tip: 'Early morning irrigation reduces evaporation loss by 30%.', type: '' },
          { icon: '🌱', title: 'Fertiliser', body: 'Apply NPK 120:60:40 kg/ha. Split nitrogen: 50% basal + 25% at tillering + 25% at jointing stage. Use DAP as base fertiliser.', tip: 'Zinc deficiency is common in UP soils — apply ZnSO₄ @ 25 kg/ha.', type: '' },
          { icon: '🐛', title: 'Pest Watch', body: 'Monitor for Aphids from December onwards. Yellow rust (stripe rust) risk is moderate — spray Propiconazole 25EC if lesions appear. Check for termite damage at base.', tip: 'Use pheromone traps to monitor aphid population before spraying.', type: '' },
          { icon: '🌡️', title: 'Weather Alert', body: 'Current soil temperature of 24°C is optimal for germination. If frost is forecast (below 2°C), light irrigation creates a protective layer for seedlings.', tip: '', type: 'warning-card' },
        ]
      }
    }
  },
  rice: {
    alluvial: {
      kharif: {
        score: 88,
        summary: 'Good conditions for rice. Kharif season with alluvial soil is a classic combination.',
        cards: [
          { icon: '💧', title: 'Water Management', body: 'Maintain 5cm standing water during active tillering. Drain fields for 7-10 days before harvest (physiological maturity stage). Use Alternate Wetting & Drying (AWD) to save 30% water.', tip: 'AWD can reduce methane emissions and save pumping cost.', type: '' },
          { icon: '🌱', title: 'Fertiliser Plan', body: 'Apply 100:50:50 NPK kg/ha. Use slow-release urea (neem-coated) to reduce nitrogen losses. Apply zinc sulphate @ 20 kg/ha in basal dose.', tip: 'Biofertiliser with Azospirillum can save 20-25% nitrogen cost.', type: '' },
          { icon: '🦟', title: 'Pest & Disease', body: 'High humidity increases blast risk — apply Tricyclazole 75WP preventively. Check for Brown Plant Hopper (BPH) in irrigated fields. Yellow Stem Borer monitoring essential in August.', tip: 'Light traps at 1 per hectare help monitor and trap stem borers.', type: 'warning-card' },
        ]
      }
    }
  },
  potato: {
    alluvial: {
      rabi: {
        score: 85,
        summary: 'Rabi season is ideal for potato in alluvial soil. Focus on disease prevention.',
        cards: [
          { icon: '🥔', title: 'Planting Guide', body: 'Use certified disease-free seed tubers (30-35g size). Plant at 60x20cm spacing. Soil temperature should be 15-20°C for best germination. Apply systemic fungicide to seed before planting.', tip: 'Cold storage for seed tubers keeps sprout dormancy until planting time.', type: '' },
          { icon: '🍄', title: 'Late Blight Alert', body: 'Phytophthora infestans (late blight) is the biggest threat in humid conditions. Spray Mancozeb 75WP every 7-10 days preventively from 30 days after planting.', tip: 'Never spray when rain is expected within 4 hours.', type: 'warning-card' },
          { icon: '💧', title: 'Irrigation', body: 'Critical stages: tuber initiation (45-55 DAS) and bulking (55-80 DAS). Avoid irrigation 2-3 weeks before harvest to prevent skin damage.', tip: '', type: '' },
        ]
      }
    }
  },
};

/* ─── GENERIC AI RESPONSE GENERATOR ──── */
function generateAIResponse(crop, soil, season, problem) {
  // Try to get specific guidance first
  const specific = AI_GUIDANCE[crop]?.[soil]?.[season];

  const cropNames = {
    wheat: 'Wheat (गेहूं)', rice: 'Rice (धान)', sugarcane: 'Sugarcane (गन्ना)',
    mustard: 'Mustard (सरसों)', potato: 'Potato (आलू)', cotton: 'Cotton (कपास)',
    maize: 'Maize (मक्का)', soybean: 'Soybean (सोयाबीन)'
  };
  const soilNames = {
    alluvial: 'Alluvial', black: 'Black Cotton', red: 'Red', sandy: 'Sandy', loamy: 'Loamy', clay: 'Clay'
  };
  const seasonNames = { kharif: 'Kharif', rabi: 'Rabi', zaid: 'Zaid' };

  const cropName = cropNames[crop] || crop;
  const soilName = soilNames[soil] || soil;
  const seasonName = seasonNames[season] || season;
  const score = specific ? specific.score : Math.floor(Math.random() * 15) + 75;

  let cards = specific ? specific.cards : [
    {
      icon: '🌱', title: 'Sowing Recommendation',
      body: `${cropName} is suitable for ${soilName} soil in ${seasonName} season. Ensure proper soil preparation with 2-3 deep ploughings. Apply FYM @ 10 t/ha as basal dose 3-4 weeks before sowing.`,
      tip: 'Treat seeds with bio-inoculants for better germination and early root development.',
      type: ''
    },
    {
      icon: '💧', title: 'Water Management',
      body: `Monitor soil moisture regularly. For ${soilName} soil, irrigation frequency depends on texture. Sandy soils need more frequent, light irrigations while clay soils retain moisture longer.`,
      tip: 'Install a simple soil moisture sensor to optimise irrigation timing.',
      type: ''
    },
    {
      icon: '🌿', title: 'Nutrient Management',
      body: `Get soil tested from your nearest KVK to know exact nutrient requirements. Generally, balanced NPK application improves yield by 20-35% compared to nitrogen-only application.`,
      tip: 'Apply micronutrients (Zinc, Boron) based on soil test for best results.',
      type: ''
    }
  ];

  // Add problem-specific card if problem provided
  if (problem && problem.trim().length > 5) {
    cards.push({
      icon: '🔍', title: 'Problem Analysis',
      body: `Based on your description: "${problem.trim()}" — this could indicate pest/disease pressure, nutrient deficiency, or environmental stress. Collect samples and consult your nearest KVK (Krishi Vigyan Kendra) for laboratory analysis.`,
      tip: 'Take a close-up photo of affected plants and upload to CropLynk\'s AI Doctor for instant diagnosis.',
      type: 'warning-card'
    });
  }

  return {
    score,
    summary: specific ? specific.summary : `Based on your inputs, ${cropName} in ${soilName} soil during ${seasonName} season shows good potential. Follow the recommendations below.`,
    cards
  };
}

/* ─── 6. FLOATING DOTS ────────────────── */
function createFloatingDots() {
  const container = document.getElementById('floatingDots');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    const size = Math.random() * 6 + 3;
    dot.style.cssText = `
      position: absolute;
      width: ${size}px; height: ${size}px;
      border-radius: 50%;
      background: rgba(90,170,70,${Math.random() * 0.15 + 0.05});
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatDot ${Math.random() * 8 + 6}s ease-in-out infinite alternate;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(dot);
  }

  // Add keyframes if not present
  if (!document.getElementById('dotKF')) {
    const style = document.createElement('style');
    style.id = 'dotKF';
    style.textContent = `
      @keyframes floatDot {
        from { transform: translate(0,0); }
        to { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ─── 7. LOADER ───────────────────────── */
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('loaded');
    }, 1800);
  });
}

/* ─── 8. NAVBAR ───────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll behaviour
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile menu
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ─── 9. SCROLL REVEAL ────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

/* ─── 10. LANGUAGE TOGGLE ─────────────── */
function initLanguageToggle() {
  const btn = document.getElementById('langToggle');
  const label = document.getElementById('langLabel');
  if (!btn || !label) return;

  btn.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'hi' : 'en';
    label.textContent = state.lang.toUpperCase();
    applyTranslations();
    showToast(state.lang === 'hi' ? 'भाषा हिंदी में बदली ✓' : 'Language changed to English ✓');
  });
}

function applyTranslations() {
  const t = TRANSLATIONS[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Update html lang attribute
  document.documentElement.lang = state.lang;
}

/* ─── 11. WEATHER ─────────────────────── */
async function fetchWeatherData(locationQuery) {
  const url = `${WEATHER_API_BASE}/forecast.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(locationQuery)}&days=5&aqi=no&alerts=no`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`WeatherAPI error: ${response.status}`);
  return response.json();
}

function renderWeatherFromAPI(data) {
  const current = data.current;
  const location = data.location;

  const icon = getWeatherEmoji(current.condition.code, current.is_day);
  const alert = getFarmingAlert(data);

  const preset = {
    icon,
    temp: Math.round(current.temp_c),
    condition: current.condition.text,
    humidity: `${current.humidity}%`,
    wind: `${Math.round(current.wind_kph)} km/h`,
    rain: `${current.precip_mm} mm`,
    vis: `${current.vis_km} km`,
    alert,
  };

  renderWeather(preset);

  // Update UV and Rain Probability from WeatherAPI
  const today = data.forecast.forecastday[0].day;
  updateUVAndRain(current, today);

  // Update location label
  const locEl = document.getElementById('weatherLocation');
  if (locEl) locEl.textContent = `${location.name}, ${location.region}`;

  // Update timestamp
  const updEl = document.getElementById('weatherUpdated');
  if (updEl) {
    const now = new Date();
    updEl.textContent = `Updated ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  // Update hero floating card too
  const heroCard = document.querySelector('.card-weather .fc-value');
  if (heroCard) heroCard.textContent = `${Math.round(current.temp_c)}°C, ${current.condition.text}`;
}

function updateUVAndRain(current, todayForecast) {
  // UV Index — real from WeatherAPI
  const uvVal = document.querySelector('#weather .indicator-card:nth-child(3) .ind-value');
  const uvBar = document.querySelector('#weather .indicator-card:nth-child(3) .ind-fill');
  const uvNote = document.querySelector('#weather .indicator-card:nth-child(3) .ind-note');
  if (uvVal) uvVal.textContent = current.uv;
  if (uvBar) uvBar.style.width = `${Math.min(current.uv * 10, 100)}%`;
  if (uvNote) {
    const uv = current.uv;
    uvNote.textContent = uv >= 8 ? 'Very High – avoid midday fieldwork' :
      uv >= 6 ? 'High – limit midday exposure' :
        uv >= 3 ? 'Moderate – wear sun protection' : 'Low – safe for fieldwork';
  }

  // Rain Probability — real from WeatherAPI forecast
  const rainProb = todayForecast.daily_chance_of_rain;
  const rpVal = document.querySelector('#weather .indicator-card:nth-child(4) .ind-value');
  const rpBar = document.querySelector('#weather .indicator-card:nth-child(4) .ind-fill');
  const rpNote = document.querySelector('#weather .indicator-card:nth-child(4) .ind-note');
  if (rpVal) rpVal.textContent = `${rainProb}%`;
  if (rpBar) rpBar.style.width = `${rainProb}%`;
  if (rpNote) rpNote.textContent = rainProb > 70 ? 'High chance – prepare drainage' :
    rainProb > 40 ? 'Moderate chance this week' : 'Low chance this week';
}

async function fetchAndRenderSoilData(lat, lon) {
  // Open-Meteo: free, no API key — real soil temperature & moisture
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=soil_temperature_0cm,soil_moisture_0_to_1cm&timezone=Asia%2FKolkata`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Open-Meteo error');
    const data = await res.json();
    const soilTemp = data.current.soil_temperature_0cm;    // °C
    const soilMoist = data.current.soil_moisture_0_to_1cm; // m³/m³ (0.0–0.8 typical range)

    // Soil Temperature
    const stVal = document.querySelector('#weather .indicator-card:nth-child(1) .ind-value');
    const stBar = document.querySelector('#weather .indicator-card:nth-child(1) .ind-fill');
    const stNote = document.querySelector('#weather .indicator-card:nth-child(1) .ind-note');
    if (stVal) stVal.textContent = `${Math.round(soilTemp)}°C`;
    if (stBar) stBar.style.width = `${Math.min((soilTemp / 50) * 100, 100)}%`;
    if (stNote) {
      stNote.textContent = soilTemp < 10 ? 'Too cold – delay sowing' :
        soilTemp < 15 ? 'Cool – suitable for mustard & peas' :
          soilTemp < 28 ? 'Optimal for wheat & mustard' :
            soilTemp < 35 ? 'Warm – suitable for kharif crops' :
              'Very hot – mulch to protect roots';
    }

    // Soil Moisture — convert m³/m³ to a % of field capacity (~0.4 max)
    const smPct = Math.round(Math.min((soilMoist / 0.4) * 100, 100));
    const smVal = document.querySelector('#weather .indicator-card:nth-child(2) .ind-value');
    const smBar = document.querySelector('#weather .indicator-card:nth-child(2) .ind-fill');
    const smNote = document.querySelector('#weather .indicator-card:nth-child(2) .ind-note');
    if (smVal) smVal.textContent = `${smPct}%`;
    if (smBar) smBar.style.width = `${smPct}%`;
    if (smNote) {
      smNote.textContent = smPct < 20 ? 'Very dry – irrigate immediately' :
        smPct < 40 ? 'Low – consider irrigation soon' :
          smPct < 70 ? 'Adequate – monitor daily' :
            'Well saturated – avoid over-irrigation';
    }

    console.log(`🌱 Open-Meteo soil data: temp=${soilTemp}°C, moisture=${soilMoist} m³/m³ (${smPct}%)`);
  } catch (err) {
    console.warn('Open-Meteo soil fetch failed:', err);
    // Mark as unavailable rather than showing fake numbers
    const stVal = document.querySelector('#weather .indicator-card:nth-child(1) .ind-value');
    const smVal = document.querySelector('#weather .indicator-card:nth-child(2) .ind-value');
    if (stVal) stVal.textContent = 'N/A';
    if (smVal) smVal.textContent = 'N/A';
  }
}

function renderForecastFromAPI(data) {
  const grid = document.getElementById('forecastGrid');
  if (!grid) return;
  grid.innerHTML = '';

  data.forecast.forecastday.forEach((day, i) => {
    const date = new Date(day.date);
    const dayName = i === 0 ? 'Today' : FORECAST_DAYS[date.getDay()];
    const icon = getWeatherEmoji(day.day.condition.code, 1);
    const high = Math.round(day.day.maxtemp_c);
    const low = Math.round(day.day.mintemp_c);
    const rainChance = day.day.daily_chance_of_rain;

    const item = document.createElement('div');
    item.className = 'forecast-item';
    item.innerHTML = `
      <span class="fc-day">${dayName}</span>
      <span class="fc-weather-icon" role="img" aria-label="${day.day.condition.text}">${icon}</span>
      <span class="fc-temp-range">
        <span class="fc-high">${high}°</span> / ${low}°
      </span>
      <span class="fc-rain-chance">💧${rainChance}%</span>
    `;
    grid.appendChild(item);
  });
}

function setWeatherLoading(isLoading) {
  const updEl = document.getElementById('weatherUpdated');
  if (updEl) updEl.textContent = isLoading ? 'Fetching live data…' : '';
}

async function loadWeatherForLocation(locationQuery) {
  setWeatherLoading(true);
  try {
    const data = await fetchWeatherData(locationQuery);
    renderWeatherFromAPI(data);
    renderForecastFromAPI(data);

    // Fetch real soil data from Open-Meteo using lat/lon returned by WeatherAPI
    const { lat, lon } = data.location;
    fetchAndRenderSoilData(lat, lon);
  } catch (err) {
    console.error('Weather fetch failed:', err);
    showToast('⚠️ Could not fetch live weather. Showing cached data.');
    const fallback = { icon: '☀️', temp: 28, condition: 'Partly Cloudy', humidity: '65%', wind: '14 km/h', rain: '0 mm', vis: '8 km', alert: 'weather_alert_default' };
    renderWeather(fallback);
    renderForecastFallback();
    const updEl = document.getElementById('weatherUpdated');
    if (updEl) updEl.textContent = 'Live update unavailable';
  }
}

function renderForecastFallback() {
  const grid = document.getElementById('forecastGrid');
  if (!grid) return;
  const icons = ['☀️', '🌤️', '⛅', '🌦️', '🌧️'];
  grid.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const d = new Date(); d.setDate(d.getDate() + i);
    const dayName = i === 0 ? 'Today' : FORECAST_DAYS[d.getDay()];
    const high = Math.floor(Math.random() * 8) + 26;
    const low = high - Math.floor(Math.random() * 6) - 4;
    const item = document.createElement('div');
    item.className = 'forecast-item';
    item.innerHTML = `<span class="fc-day">${dayName}</span><span class="fc-weather-icon">${icons[i]}</span><span class="fc-temp-range"><span class="fc-high">${high}°</span> / ${low}°</span><span class="fc-rain-chance">💧${Math.floor(Math.random() * 40)}%</span>`;
    grid.appendChild(item);
  }
}

function initWeather() {
  const weatherTitle = document.getElementById('weather-title');
  if (!weatherTitle) return; // Prevent errors on login page

  // Load live weather on init — default to Lucknow
  loadWeatherForLocation('Lucknow');

  const changeBtn = document.getElementById('changeLocationBtn');
  const searchContainer = document.getElementById('citySearchContainer');
  const searchInput = document.getElementById('citySearchInput');
  const clearBtn = document.getElementById('citySearchClear');
  const suggestionsEl = document.getElementById('citySuggestions');
  const locationBar = document.getElementById('locationBar');
  const currentLocBtn = document.getElementById('currentLocationBtn');

  let searchDebounceTimer = null;
  let activeSuggestionIdx = -1;
  let currentSuggestions = [];

  // Toggle search panel
  if (changeBtn && searchContainer) {
    changeBtn.addEventListener('click', () => {
      const isOpen = searchContainer.classList.toggle('open');
      if (isOpen) {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        suggestionsEl.classList.remove('visible');
        suggestionsEl.innerHTML = '';
        setTimeout(() => searchInput.focus(), 100);
        changeBtn.textContent = TRANSLATIONS[state.lang]?.close_search || 'Close';
      } else {
        changeBtn.textContent = TRANSLATIONS[state.lang]?.change_location || 'Change';
      }
    });
  }

  // City search autocomplete
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      clearBtn.style.display = query.length > 0 ? 'flex' : 'none';

      clearTimeout(searchDebounceTimer);
      activeSuggestionIdx = -1;

      if (query.length < 2) {
        suggestionsEl.classList.remove('visible');
        suggestionsEl.innerHTML = '';
        currentSuggestions = [];
        return;
      }

      // Show loading state
      suggestionsEl.innerHTML = `<li class="city-suggestions-loading">Searching</li>`;
      suggestionsEl.classList.add('visible');

      searchDebounceTimer = setTimeout(async () => {
        try {
          const url = `${WEATHER_API_BASE}/search.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(query)}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error('Search API error');
          const results = await response.json();

          currentSuggestions = results;
          activeSuggestionIdx = -1;

          if (results.length === 0) {
            suggestionsEl.innerHTML = `<li class="city-suggestions-empty">No cities found</li>`;
            suggestionsEl.classList.add('visible');
            return;
          }

          suggestionsEl.innerHTML = results.map((item, i) => `
            <li class="city-suggestion-item" role="option" data-index="${i}"
                data-name="${item.name}" data-region="${item.region || ''}" data-country="${item.country || ''}"
                data-lat="${item.lat}" data-lon="${item.lon}">
              <span class="suggestion-icon">📍</span>
              <div class="suggestion-text">
                <span class="suggestion-name">${item.name}</span>
                <span class="suggestion-region">${item.region ? item.region + ', ' : ''}${item.country || ''}</span>
              </div>
            </li>
          `).join('');
          suggestionsEl.classList.add('visible');

          // Click to select
          suggestionsEl.querySelectorAll('.city-suggestion-item').forEach(li => {
            li.addEventListener('click', () => selectSuggestion(li));
          });

        } catch (err) {
          console.warn('City search failed:', err);
          suggestionsEl.innerHTML = `<li class="city-suggestions-empty">⚠️ Search failed. Try again.</li>`;
          suggestionsEl.classList.add('visible');
        }
      }, 350); // debounce 350ms
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
      const items = suggestionsEl.querySelectorAll('.city-suggestion-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSuggestionIdx = Math.min(activeSuggestionIdx + 1, items.length - 1);
        updateActiveSuggestion(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSuggestionIdx = Math.max(activeSuggestionIdx - 1, 0);
        updateActiveSuggestion(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeSuggestionIdx >= 0 && items[activeSuggestionIdx]) {
          selectSuggestion(items[activeSuggestionIdx]);
        }
      } else if (e.key === 'Escape') {
        searchContainer.classList.remove('open');
        changeBtn.textContent = TRANSLATIONS[state.lang]?.change_location || 'Change';
      }
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      suggestionsEl.classList.remove('visible');
      suggestionsEl.innerHTML = '';
      currentSuggestions = [];
      searchInput.focus();
    });
  }

  function updateActiveSuggestion(items) {
    items.forEach((it, i) => {
      it.classList.toggle('active', i === activeSuggestionIdx);
      if (i === activeSuggestionIdx) it.scrollIntoView({ block: 'nearest' });
    });
  }

  function selectSuggestion(li) {
    const name = li.dataset.name;
    const region = li.dataset.region;
    const lat = li.dataset.lat;
    const lon = li.dataset.lon;

    const displayLabel = region ? `${name}, ${region}` : name;
    showToast(`Fetching weather for ${displayLabel}…`);

    // Use lat,lon for precise query
    loadWeatherForLocation(`${lat},${lon}`);

    // Close search
    searchContainer.classList.remove('open');
    changeBtn.textContent = TRANSLATIONS[state.lang]?.change_location || 'Change';
    suggestionsEl.classList.remove('visible');
    suggestionsEl.innerHTML = '';
    searchInput.value = '';
    clearBtn.style.display = 'none';
    currentSuggestions = [];
  }

  // Close suggestions on outside click
  document.addEventListener('click', (e) => {
    if (searchContainer && !searchContainer.contains(e.target) && e.target !== changeBtn) {
      suggestionsEl.classList.remove('visible');
    }
  });

  // ─── Current Location (GPS) ───
  if (currentLocBtn) {
    currentLocBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        showToast('⚠️ Geolocation is not supported by your browser.');
        return;
      }

      currentLocBtn.classList.add('loading');
      currentLocBtn.title = state.lang === 'hi' ? 'खोज रहे हैं…' : 'Locating…';

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          showToast(state.lang === 'hi' ? '📍 स्थान मिल गया! मौसम ला रहे हैं…' : '📍 Location found! Fetching weather…');
          loadWeatherForLocation(`${latitude},${longitude}`);

          currentLocBtn.classList.remove('loading');
          currentLocBtn.title = 'Use my current location';

          // Close search if open
          searchContainer.classList.remove('open');
          changeBtn.textContent = TRANSLATIONS[state.lang]?.change_location || 'Change';
        },
        (err) => {
          console.warn('Geolocation error:', err);
          let msg = '⚠️ Could not detect location.';
          if (err.code === 1) msg = '⚠️ Location access denied. Please enable GPS.';
          else if (err.code === 2) msg = '⚠️ Location unavailable. Try again.';
          else if (err.code === 3) msg = '⚠️ Location request timed out.';
          showToast(msg);

          currentLocBtn.classList.remove('loading');
          currentLocBtn.title = 'Use my current location';
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
      );
    });
  }
}

function renderWeather(preset) {
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('weatherIcon', preset.icon);
  setEl('weatherTemp', preset.temp);
  setEl('weatherCondition', preset.condition);
  setEl('weatherHumidity', preset.humidity);
  setEl('weatherWind', preset.wind);
  setEl('weatherRain', preset.rain);
  setEl('weatherVis', preset.vis);

  const alertEl = document.getElementById('alertText');
  if (alertEl) {
    const t = TRANSLATIONS[state.lang];
    alertEl.textContent = preset.alert.startsWith('weather_') ? (t[preset.alert] || preset.alert) : preset.alert;
  }
}



/* ─── 12. AI GUIDANCE ─────────────────── */
function initAIGuidance() {
  const btn = document.getElementById('getGuidanceBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const crop = document.getElementById('cropSelect').value;
    const soil = document.getElementById('soilSelect').value;
    const season = document.getElementById('seasonSelect').value;
    const problem = document.getElementById('problemInput').value;

    if (!crop || !soil || !season) {
      showToast('⚠️ Please fill all required fields first.');
      // Shake animation
      const panel = document.querySelector('.ai-input-panel');
      if (panel) {
        panel.style.animation = 'shake 0.4s ease';
        setTimeout(() => panel.style.animation = '', 400);
      }
      return;
    }

    // Loading state
    btn.classList.add('loading');
    btn.disabled = true;
    const btnText = btn.querySelector('.btn-text');
    if (btnText) btnText.textContent = state.lang === 'hi' ? 'विश्लेषण कर रहे हैं' : 'Analysing';

    // Simulate API call
    setTimeout(() => {
      const guidance = generateAIResponse(crop, soil, season, problem);
      renderAIResult(guidance, crop, soil, season);
      btn.classList.remove('loading');
      btn.disabled = false;
      if (btnText) btnText.textContent = TRANSLATIONS[state.lang]['ai_btn'] || 'Get AI Guidance';

      // Scroll to result
      document.getElementById('aiResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 2200);
  });
}

function renderAIResult(guidance, crop, soil, season) {
  const placeholder = document.getElementById('aiPlaceholder');
  const result = document.getElementById('aiResult');
  if (!placeholder || !result) return;

  placeholder.style.display = 'none';
  result.style.display = 'flex';
  result.innerHTML = '';

  // Summary card
  const summary = document.createElement('div');
  summary.className = 'ai-summary fade-enter';
  summary.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
      <div style="font-size:2rem;">🤖</div>
      <div>
        <div style="font-size:0.75rem;color:var(--gray-400);font-weight:500;text-transform:uppercase;letter-spacing:0.05em;">AI Analysis Score</div>
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <span style="font-family:var(--font-display);font-size:2rem;font-weight:500;color:var(--green-600);">${guidance.score}</span>
          <span style="font-size:0.8rem;color:var(--gray-400);">/100</span>
        </div>
      </div>
      <div style="margin-left:auto;background:var(--green-100);border-radius:var(--border-r-sm);padding:0.4rem 0.75rem;">
        <div style="font-size:0.7rem;color:var(--green-700);font-weight:600;">Field Score</div>
      </div>
    </div>
    <div style="height:6px;background:var(--gray-100);border-radius:99px;overflow:hidden;margin-bottom:0.75rem;">
      <div style="height:100%;width:${guidance.score}%;background:var(--green-400);border-radius:99px;transition:width 1.5s ease;"></div>
    </div>
    <h4>${guidance.summary}</h4>
  `;
  result.appendChild(summary);

  // Guidance cards
  guidance.cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = `ai-card ${card.type}`;
    el.style.animationDelay = `${i * 0.15}s`;
    el.innerHTML = `
      <div class="ai-card-header">
        <span class="ai-card-icon">${card.icon}</span>
        <span class="ai-card-title">${card.title}</span>
      </div>
      <div class="ai-card-body">${card.body}</div>
      ${card.tip ? `<div class="ai-tip">💡 ${card.tip}</div>` : ''}
    `;
    result.appendChild(el);
  });
}

/* ─── 13. MARKET ──────────────────────── */
function initMarket() {
  state.marketData = [...MARKET_DATA];
  renderMarket();
  renderTicker();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.getAttribute('data-filter');
      renderMarket();
    });
  });

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.currentSort = sortSelect.value;
      renderMarket();
    });
  }
}

function getFilteredSortedData() {
  let data = [...state.marketData];

  if (state.currentFilter !== 'all') {
    data = data.filter(d => d.category === state.currentFilter);
  }

  if (state.currentSort === 'price-high') data.sort((a, b) => b.price - a.price);
  else if (state.currentSort === 'price-low') data.sort((a, b) => a.price - b.price);
  else if (state.currentSort === 'trend') data = data.filter(d => d.trend === 'up').concat(data.filter(d => d.trend !== 'up'));

  return data;
}

function renderMarket() {
  const grid = document.getElementById('marketGrid');
  if (!grid) return;
  const data = getFilteredSortedData();
  const t = TRANSLATIONS[state.lang];
  grid.innerHTML = '';

  if (data.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--gray-400);">No crops found for this category.</div>`;
    return;
  }

  data.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'market-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="mc-header">
        <div class="mc-crop-info">
          <span class="mc-icon" role="img" aria-label="${item.crop}">${item.icon}</span>
          <div>
            <div class="mc-crop-name">${item.crop}</div>
            <div class="mc-crop-hindi">${item.hindi}</div>
          </div>
        </div>
        <span class="mc-badge ${item.trend}" aria-label="Price trend: ${item.trend}">${item.change}</span>
      </div>
      <div class="mc-price">₹${item.price.toLocaleString('en-IN')}</div>
      <div class="mc-unit">${item.unit}</div>
      <div class="mc-footer">
        <button class="mc-btn mc-btn-primary" onclick="handleSellNow('${item.crop}','${item.hindi}')" aria-label="Sell ${item.crop}">
          ${t['sell_now'] || 'Sell Now'}
        </button>
        <button class="mc-btn mc-btn-secondary" onclick="handleFindBuyers('${item.crop}','${item.hindi}')" aria-label="Find buyers for ${item.crop}">
          ${t['find_buyers'] || 'Find Buyers'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const items = [...MARKET_DATA, ...MARKET_DATA]; // Duplicate for seamless scroll
  const inner = document.createElement('div');
  inner.className = 'ticker-inner';

  items.forEach(item => {
    const span = document.createElement('span');
    span.className = 'ticker-item';
    const cls = item.trend === 'up' ? 'ticker-up' : (item.trend === 'down' ? 'ticker-down' : '');
    span.innerHTML = `${item.icon} ${item.crop} <span class="${cls}">₹${item.price.toLocaleString('en-IN')} ${item.change}</span>`;
    inner.appendChild(span);
  });

  track.appendChild(inner);
}

// Global market action handlers
window.handleSellNow = function (crop, hindi) {
  const t = TRANSLATIONS[state.lang];
  showToast(`${crop} (${hindi}) ${t['listed_for_sale'] || 'listed for sale!'} ✓`);
};

window.handleFindBuyers = function (crop, hindi) {
  const t = TRANSLATIONS[state.lang];
  const buyers = Math.floor(Math.random() * 15) + 3;
  showToast(`${buyers} ${t['buyers_found'] || 'buyers found for'} ${crop} ${hindi} 🤝`);
};

/* ─── 14. TOAST ───────────────────────── */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ─── 15. SHAKE ANIMATION ─────────────── */
if (!document.getElementById('shakeKF')) {
  const s = document.createElement('style');
  s.id = 'shakeKF';
  s.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-5px); }
      80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(s);
}

/* ─── 16. SMOOTH SCROLL ───────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 68; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── 17. MARKET PRICE ANIMATION ─────── */
function startPriceTicker() {
  // Randomly update a price every 5 seconds to simulate live data
  setInterval(() => {
    const idx = Math.floor(Math.random() * state.marketData.length);
    const item = state.marketData[idx];
    const delta = (Math.random() - 0.48) * 60;
    item.price = Math.max(500, Math.round(item.price + delta));
    item.trend = delta > 0 ? 'up' : (delta < -10 ? 'down' : 'stable');
    item.change = `${delta >= 0 ? '+' : ''}${((delta / item.price) * 100).toFixed(1)}%`;
    renderMarket(); // Re-render with updated price
  }, 7000);
}

/* ─── FIREBASE AUTH (GOOGLE - KEEPING YOUR UI FLOW) ─── */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCHmydMWZM3v4VOjSBEJi3zE3jThdabW8M",
  authDomain: "croplynk.firebaseapp.com",
  projectId: "croplynk",
  storageBucket: "croplynk.firebasestorage.app",
  messagingSenderId: "268813782171",
  appId: "1:268813782171:web:57bb7dd22a6615952a0a3e"
};

let firebaseApp = null;
let firebaseAuth = null;

function initFirebaseAuth() {
  try {
    firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
    firebaseAuth = firebase.auth();
    console.log("🔥 Firebase initialized");
  } catch (err) {
    console.warn("Firebase init error:", err);
    return;
  }

  const googleBtn = document.getElementById('googleSignInBtn');
  const stepLogin = document.getElementById('authStepLogin');
  const stepSuccess = document.getElementById('authStepSuccess');

  const isLoginPage = window.location.pathname.includes('login.html');

  function showStep(step) {
    if (stepLogin) stepLogin.style.display = step === 'login' ? 'block' : 'none';
    if (stepSuccess) stepSuccess.style.display = step === 'success' ? 'block' : 'none';
  }

  /* ─── GOOGLE LOGIN CLICK ─── */
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      console.log("👉 Google button clicked");

      const provider = new firebase.auth.GoogleAuthProvider();

      try {
        // ✅ Redirect method (best for all devices)
        await firebaseAuth.signInWithRedirect(provider);
      } catch (err) {
        console.error("❌ Login error:", err);
        showToast('⚠️ Google Sign-In failed');
      }
    });
  }

  /* ─── HANDLE REDIRECT RESULT ─── */
  firebaseAuth.getRedirectResult()
    .then((result) => {
      if (result.user) {
        console.log("✅ Login success:", result.user);

        showStep('success');

        showToast(
          state.lang === 'hi'
            ? '✅ लॉगिन सफल!'
            : '✅ Login successful!'
        );

        setTimeout(() => {
          if (isLoginPage) window.location.replace('index.html');
        }, 1200);
      }
    })
    .catch((err) => {
      console.error("❌ Redirect error:", err);
    });

  /* ─── AUTH STATE LISTENER ─── */
  firebaseAuth.onAuthStateChanged((user) => {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    const loginBtn = document.getElementById('navLoginBtn');

    if (user) {
      if (loginBtn) loginBtn.style.display = 'none';

      navActions.querySelector('.nav-user-info')?.remove();
      navActions.querySelector('.nav-logout-btn')?.remove();

      const name = user.displayName
        ? user.displayName.split(' ')[0]
        : 'Kisan';

      const userInfo = document.createElement('div');
      userInfo.className = 'nav-user-info';
      userInfo.innerHTML = `
        <span class="nav-user-avatar">👤</span>
        <span>${name}</span>
      `;

      const logoutBtn = document.createElement('button');
      logoutBtn.className = 'nav-logout-btn';
      logoutBtn.textContent =
        TRANSLATIONS[state.lang]?.auth_logout || 'Logout';

      logoutBtn.addEventListener('click', () => {
        firebaseAuth.signOut();
        showToast(
          state.lang === 'hi'
            ? 'लॉगआउट हो गया ✓'
            : 'Logged out ✓'
        );
      });

      navActions.appendChild(userInfo);
      navActions.appendChild(logoutBtn);

    } else {
      if (loginBtn) loginBtn.style.display = '';
      navActions.querySelector('.nav-user-info')?.remove();
      navActions.querySelector('.nav-logout-btn')?.remove();
    }
  });
}
/* ─── INIT ────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const isLoginPage = window.location.pathname.includes('login.html');

  initLoader();
  initLanguageToggle();
  initFirebaseAuth();

  if (!isLoginPage) {
    initNavbar();
    createFloatingDots();
    initScrollReveal();
    initWeather();
    initAIGuidance();
    initMarket();
    initSmoothScroll();
    startPriceTicker();

    // Animate progress bars when visible
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.ind-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            requestAnimationFrame(() => {
              setTimeout(() => { bar.style.width = width; }, 100);
            });
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.weather-indicators').forEach(el => barObserver.observe(el));
  }

  console.log('🌾 CropLynk initialized successfully!');
});