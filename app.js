const translations = {
  en: {
    brand: "Talibenah",
    search: "Search any city for a scenic forecast",
    cityInput: "Talibenah, Gilan",
    condition: "Mist and light rain",
    feels: "Feels",
    rain: "Rain",
    wind: "Wind",
    sources: "Weather sources",
    mock: "Prototype",
    hourly: "Hourly forecast",
    details: "Details",
    detailsTitle: "Details",
    humidity: "Humidity",
    pressure: "Pressure",
    uv: "UV index",
    visibility: "Visibility",
    dew: "Dew point",
    moon: "Moon",
    moonValue: "Waxing",
    daily: "7 day forecast",
    photoCaption: "Scenic forecast view for {city}",
    supportKicker: "Community funded",
    supportTitle: "Support Talibenah",
    supportCopy: "Small contributions help keep forecasts clean, fast, and ad-free.",
    supportNote: "Prices are shown in your detected local currency. Checkout will use Google Play Billing in the Android app.",
    supportSelected: "{amount} selected. The real app will open the secure Play Billing sheet.",
    tiers: ["Small help", "Kind support", "Mountain boost"],
    days: ["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  fa: {
    brand: "تالیبنه",
    search: "جستجوی هر شهر برای دیدن پس‌زمینه گردشگری",
    cityInput: "تالیبنه، گیلان",
    condition: "مه و باران سبک",
    feels: "حس واقعی",
    rain: "بارش",
    wind: "باد",
    sources: "منابع هواشناسی",
    mock: "نمونه اولیه",
    hourly: "پیش‌بینی ساعتی",
    details: "جزئیات",
    detailsTitle: "جزئیات",
    humidity: "رطوبت",
    pressure: "فشار",
    uv: "شاخص UV",
    visibility: "دید",
    dew: "نقطه شبنم",
    moon: "ماه",
    moonValue: "افزاینده",
    daily: "پیش‌بینی ۷ روزه",
    photoCaption: "نمای گردشگری پیش‌بینی هوا برای {city}",
    supportKicker: "حمایت مردمی",
    supportTitle: "حمایت از تالیبنه",
    supportCopy: "کمک‌های کوچک باعث می‌شود پیش‌بینی‌ها سریع، تمیز و بدون تبلیغ بمانند.",
    supportNote: "مبلغ‌ها با واحد پول تشخیص‌داده‌شده برای کشور شما نمایش داده می‌شوند. در اپ اندروید پرداخت امن از طریق Google Play انجام می‌شود.",
    supportSelected: "{amount} انتخاب شد. در نسخه واقعی، صفحه پرداخت امن Google Play باز می‌شود.",
    tiers: ["کمک کوچک", "حمایت دوستانه", "تقویت کوهستانی"],
    days: ["امروز", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
  },
  ro: {
    brand: "Talibenah",
    search: "Caută orice oraș pentru o prognoză scenică",
    cityInput: "Talibenah, Gilan",
    condition: "Ceață și ploaie ușoară",
    feels: "Resimțită",
    rain: "Ploaie",
    wind: "Vânt",
    sources: "Surse meteo",
    mock: "Prototip",
    hourly: "Prognoză pe ore",
    details: "Detalii",
    detailsTitle: "Detalii",
    humidity: "Umiditate",
    pressure: "Presiune",
    uv: "Indice UV",
    visibility: "Vizibilitate",
    dew: "Punct de rouă",
    moon: "Lună",
    moonValue: "În creștere",
    daily: "Prognoză pe 7 zile",
    photoCaption: "Vedere scenică pentru prognoza din {city}",
    supportKicker: "Susținut de comunitate",
    supportTitle: "Susține Talibenah",
    supportCopy: "Contribuțiile mici ajută prognozele să rămână rapide, curate și fără reclame.",
    supportNote: "Prețurile sunt afișate în moneda locală detectată. În aplicația Android, plata va folosi Google Play Billing.",
    supportSelected: "{amount} selectat. Aplicația reală va deschide plata securizată Google Play.",
    tiers: ["Ajutor mic", "Sprijin prietenos", "Impuls montan"],
    days: ["Azi", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"],
  },
};

Object.assign(translations.en, {
  customizeKicker: "Your layout",
  customizeTitle: "Customize home",
  resetLayout: "Reset",
  widgetTitle: "Widget preview",
  mapTitle: "Live satellite map",
  radarTitle: "Rain radar",
  sections: {
    widget: "Widget",
    support: "Support",
    map: "Map",
    sources: "Sources",
    hourly: "Hourly",
    details: "Details",
    daily: "Daily",
  },
});

Object.assign(translations.fa, {
  customizeKicker: "چیدمان شما",
  customizeTitle: "شخصی‌سازی خانه",
  resetLayout: "بازنشانی",
  widgetTitle: "پیش‌نمایش ویجت",
  mapTitle: "نقشه ماهواره‌ای زنده",
  radarTitle: "رادار بارش",
  sections: {
    widget: "ویجت",
    support: "حمایت",
    map: "نقشه",
    sources: "منابع",
    hourly: "ساعتی",
    details: "جزئیات",
    daily: "روزانه",
  },
});

Object.assign(translations.ro, {
  customizeKicker: "Aranjarea ta",
  customizeTitle: "Personalizează ecranul",
  resetLayout: "Resetare",
  widgetTitle: "Previzualizare widget",
  mapTitle: "Hartă satelit live",
  radarTitle: "Radar ploaie",
  sections: {
    widget: "Widget",
    support: "Susținere",
    map: "Hartă",
    sources: "Surse",
    hourly: "Pe ore",
    details: "Detalii",
    daily: "Zilnic",
  },
});

const hourlyData = [
  ["Now", 18],
  ["10", 19],
  ["11", 20],
  ["12", 21],
  ["13", 21],
  ["14", 20],
  ["15", 19],
];

const dailyData = [
  [18, 22, 72],
  [17, 23, 78],
  [16, 24, 62],
  [18, 26, 86],
  [19, 27, 68],
  [18, 25, 54],
  [17, 23, 48],
];

const cityVisualQueries = new Map([
  ["talibenah", "Gilan,mountains,forest,landscape"],
  ["talybeneh", "Gilan,mountains,forest,landscape"],
  ["تالیبنه", "Gilan,mountains,forest,landscape"],
  ["رشت", "Rasht,Iran,landmark,tourism"],
  ["rasht", "Rasht,Iran,landmark,tourism"],
  ["tehran", "Tehran,Iran,landmark,tourism"],
  ["تهران", "Tehran,Iran,landmark,tourism"],
  ["isfahan", "Isfahan,Iran,mosque,landmark"],
  ["اصفهان", "Isfahan,Iran,mosque,landmark"],
  ["shiraz", "Shiraz,Iran,garden,landmark"],
  ["شیراز", "Shiraz,Iran,garden,landmark"],
  ["yazd", "Yazd,Iran,old city,landmark"],
  ["یزد", "Yazd,Iran,old city,landmark"],
  ["tabriz", "Tabriz,Iran,landmark,tourism"],
  ["تبریز", "Tabriz,Iran,landmark,tourism"],
  ["mashhad", "Mashhad,Iran,landmark,tourism"],
  ["مشهد", "Mashhad,Iran,landmark,tourism"],
  ["lahijan", "Lahijan,Gilan,landscape,tourism"],
  ["لاهیجان", "Lahijan,Gilan,landscape,tourism"],
  ["anzali", "Bandar Anzali,Gilan,lagoon,tourism"],
  ["انزلی", "Bandar Anzali,Gilan,lagoon,tourism"],
  ["bucharest", "Bucharest,Romania,landmark,tourism"],
  ["bucuresti", "Bucharest,Romania,landmark,tourism"],
  ["bucurești", "Bucharest,Romania,landmark,tourism"],
  ["paris", "Paris,France,landmark,tourism"],
  ["london", "London,landmark,tourism"],
  ["istanbul", "Istanbul,landmark,tourism"],
]);

const marketProfiles = {
  US: { currency: "USD", locale: "en-US", amounts: [1, 2, 5] },
  CA: { currency: "CAD", locale: "en-CA", amounts: [2, 3, 7] },
  GB: { currency: "GBP", locale: "en-GB", amounts: [1, 2, 4] },
  EU: { currency: "EUR", locale: "en-IE", amounts: [1, 2, 5] },
  RO: { currency: "RON", locale: "ro-RO", amounts: [2, 5, 10] },
  IR: { currency: "IRR", locale: "fa-IR", amounts: [600000, 1200000, 3000000] },
  TR: { currency: "TRY", locale: "tr-TR", amounts: [35, 70, 175] },
  AE: { currency: "AED", locale: "ar-AE", amounts: [4, 8, 20] },
  AU: { currency: "AUD", locale: "en-AU", amounts: [2, 3, 8] },
};

const europeMarkets = new Set([
  "AT",
  "BE",
  "CY",
  "DE",
  "EE",
  "ES",
  "FI",
  "FR",
  "GR",
  "HR",
  "IE",
  "IT",
  "LT",
  "LU",
  "LV",
  "MT",
  "NL",
  "PT",
  "SI",
  "SK",
]);

const localFallbackPhoto = "assets/talibenah-mountain.png";
const knownLocations = new Map([
  ["talibenah", { name: "Talibenah, Gilan", latitude: 37.2103, longitude: 49.4919, timezone: "Asia/Tehran", country: "Iran" }],
  ["talybeneh", { name: "Talibenah, Gilan", latitude: 37.2103, longitude: 49.4919, timezone: "Asia/Tehran", country: "Iran" }],
]);
const weatherIcons = {
  clear: "assets/weather/clear.svg",
  partly: "assets/weather/partly-cloudy.svg",
  cloudy: "assets/weather/cloudy.svg",
  fog: "assets/weather/fog.svg",
  rain: "assets/weather/rain.svg",
  thunder: "assets/weather/thunder.svg",
  snow: "assets/weather/snow.svg",
};
const layoutSections = ["widget", "support", "map", "sources", "hourly", "details", "daily"];
const defaultLayoutState = Object.fromEntries(layoutSections.map((section) => [section, true]));
const root = document.documentElement;
const hero = document.querySelector(".hero");
const heroPhoto = document.querySelector("#heroPhoto");
const conditionIcon = document.querySelector("#conditionIcon");
const citySearch = document.querySelector("#citySearch");
const cityInput = document.querySelector("#cityInput");
const locationLabel = document.querySelector("#locationLabel");
const photoCaption = document.querySelector("#photoCaption");
const conditionLabel = document.querySelector(".condition");
const currentTemp = document.querySelector("#currentTemp");
const feelsLike = document.querySelector("#feelsLike");
const rainChance = document.querySelector("#rainChance");
const windSpeed = document.querySelector("#windSpeed");
const humidityValue = document.querySelector("#humidityValue");
const pressureValue = document.querySelector("#pressureValue");
const uvValue = document.querySelector("#uvValue");
const visibilityValue = document.querySelector("#visibilityValue");
const dewValue = document.querySelector("#dewValue");
const dataStatus = document.querySelector("#dataStatus");
const satelliteFrame = document.querySelector("#satelliteFrame");
const radarImage = document.querySelector("#radarImage");
const radarStatus = document.querySelector("#radarStatus");
const mapTime = document.querySelector("#mapTime");
const layoutToggles = document.querySelector("#layoutToggles");
const resetLayout = document.querySelector("#resetLayout");
const widgetLocation = document.querySelector("#widgetLocation");
const widgetTemp = document.querySelector("#widgetTemp");
const widgetIcon = document.querySelector("#widgetIcon");
const widgetCondition = document.querySelector("#widgetCondition");
const hourlyList = document.querySelector("#hourlyList");
const dailyList = document.querySelector("#dailyList");
const donationGrid = document.querySelector("#donationGrid");
const supportNote = document.querySelector("#supportNote");
const languageButtons = document.querySelectorAll("[data-lang]");

let activeLanguage = "en";
let selectedCity = translations.en.cityInput;
let activeMarket = detectLocaleMarket();
let selectedDonationIndex = 1;
let photoRequestId = 0;
let currentWeatherCode = 61;
let currentLocation = knownLocations.get("talibenah");
let layoutState = loadLayoutState();
let lastWeather = null;

function normalizeCity(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function stableHash(value) {
  return Array.from(value).reduce((hash, character) => {
    return (hash * 31 + character.charCodeAt(0)) % 9973;
  }, 17);
}

function loadLayoutState() {
  try {
    const saved = JSON.parse(localStorage.getItem("talibenahLayout") || "{}");
    return { ...defaultLayoutState, ...saved };
  } catch {
    return { ...defaultLayoutState };
  }
}

function saveLayoutState() {
  localStorage.setItem("talibenahLayout", JSON.stringify(layoutState));
}

function applyLayoutState() {
  layoutSections.forEach((section) => {
    const node = document.querySelector(`[data-section="${section}"]`);

    if (node) {
      node.hidden = !layoutState[section];
    }
  });
}

function renderLayoutToggles() {
  const labels = translations[activeLanguage].sections || translations.en.sections;

  layoutToggles.innerHTML = layoutSections
    .map((section) => {
      const isOn = layoutState[section];

      return `
        <button class="layout-toggle ${isOn ? "is-on" : ""}" type="button" data-layout-section="${section}" aria-pressed="${isOn}">
          <span>${labels[section]}</span>
          <i class="switch-track" aria-hidden="true"></i>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-layout-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.layoutSection;
      layoutState[section] = !layoutState[section];
      saveLayoutState();
      applyLayoutState();
      renderLayoutToggles();
    });
  });
}

function roundNumber(value, fallback = "--") {
  return Number.isFinite(value) ? Math.round(value) : fallback;
}

function getConditionText(code) {
  const dictionary = {
    en: {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime fog",
      51: "Light drizzle",
      53: "Drizzle",
      55: "Dense drizzle",
      61: "Light rain",
      63: "Rain",
      65: "Heavy rain",
      71: "Light snow",
      73: "Snow",
      75: "Heavy snow",
      80: "Rain showers",
      81: "Rain showers",
      82: "Violent showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Thunderstorm with hail",
    },
    fa: {
      0: "آسمان صاف",
      1: "اغلب صاف",
      2: "نیمه‌ابری",
      3: "ابری",
      45: "مه",
      48: "مه یخ‌زده",
      51: "نم‌نم باران",
      53: "باران ریز",
      55: "باران ریز شدید",
      61: "باران سبک",
      63: "باران",
      65: "باران شدید",
      71: "برف سبک",
      73: "برف",
      75: "برف شدید",
      80: "رگبار",
      81: "رگبار",
      82: "رگبار شدید",
      95: "رعدوبرق",
      96: "رعدوبرق و تگرگ",
      99: "رعدوبرق و تگرگ",
    },
    ro: {
      0: "Cer senin",
      1: "În mare parte senin",
      2: "Parțial noros",
      3: "Acoperit",
      45: "Ceață",
      48: "Ceață cu chiciură",
      51: "Burniță slabă",
      53: "Burniță",
      55: "Burniță densă",
      61: "Ploaie slabă",
      63: "Ploaie",
      65: "Ploaie puternică",
      71: "Ninsoare slabă",
      73: "Ninsoare",
      75: "Ninsoare puternică",
      80: "Averse",
      81: "Averse",
      82: "Averse puternice",
      95: "Furtună",
      96: "Furtună cu grindină",
      99: "Furtună cu grindină",
    },
  };

  return dictionary[activeLanguage]?.[code] || dictionary.en[code] || dictionary.en[2];
}

function getConditionIcon(code) {
  if ([0, 1].includes(code)) return weatherIcons.clear;
  if (code === 2) return weatherIcons.partly;
  if (code === 3) return weatherIcons.cloudy;
  if ([45, 48].includes(code)) return weatherIcons.fog;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return weatherIcons.snow;
  if ([95, 96, 99].includes(code)) return weatherIcons.thunder;
  return weatherIcons.rain;
}

function formatHourLabel(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return new Intl.DateTimeFormat(activeLanguage === "fa" ? "fa-IR" : activeLanguage === "ro" ? "ro-RO" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatDayLabel(value, index) {
  if (index === 0) {
    return translations[activeLanguage].days[0];
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return translations[activeLanguage].days[index] || "--";
  }

  return new Intl.DateTimeFormat(activeLanguage === "fa" ? "fa-IR" : activeLanguage === "ro" ? "ro-RO" : "en-US", {
    weekday: "short",
  }).format(date);
}

function detectLocaleMarket() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const locale = navigator.languages?.[0] || navigator.language || "en-US";
  const region = locale.split("-").pop()?.toUpperCase();

  if (timezone === "Europe/Bucharest") {
    return "RO";
  }

  if (region && marketProfiles[region]) {
    return region;
  }

  if (region && europeMarkets.has(region)) {
    return "EU";
  }

  return "US";
}

function getMarketProfile() {
  return marketProfiles[activeMarket] || marketProfiles.US;
}

function formatDonation(amount) {
  const profile = getMarketProfile();

  return new Intl.NumberFormat(profile.locale, {
    style: "currency",
    currency: profile.currency,
    maximumFractionDigits: profile.currency === "IRR" ? 0 : 2,
  }).format(amount);
}

function renderDonationOptions() {
  const profile = getMarketProfile();
  const tiers = translations[activeLanguage].tiers;

  donationGrid.innerHTML = profile.amounts
    .map((amount, index) => {
      const formatted = formatDonation(amount);
      const isSelected = index === selectedDonationIndex;

      return `
        <button class="donation-option ${isSelected ? "is-selected" : ""}" type="button" data-donation-index="${index}">
          <span>${tiers[index]}</span>
          <strong>${formatted}</strong>
        </button>
      `;
    })
    .join("");

  supportNote.textContent = translations[activeLanguage].supportNote;

  document.querySelectorAll("[data-donation-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDonationIndex = Number(button.dataset.donationIndex);
      const amount = formatDonation(profile.amounts[selectedDonationIndex]);

      renderDonationOptions();
      supportNote.textContent = translations[activeLanguage].supportSelected.replace("{amount}", amount);
    });
  });
}

async function geocodeCity(city) {
  const normalized = normalizeCity(city);
  const known = knownLocations.get(normalized);

  if (known) {
    return known;
  }

  const params = new URLSearchParams({
    name: city,
    count: "1",
    language: activeLanguage === "fa" ? "fa" : activeLanguage === "ro" ? "ro" : "en",
    format: "json",
  });
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Geocoding failed");
  }

  const data = await response.json();
  const result = data.results?.[0];

  if (!result) {
    throw new Error("City not found");
  }

  return {
    name: [result.name, result.admin1, result.country].filter(Boolean).join(", "),
    latitude: result.latitude,
    longitude: result.longitude,
    timezone: result.timezone || "auto",
    country: result.country,
  };
}

async function fetchLiveWeather(location) {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,surface_pressure,wind_speed_10m,dew_point_2m,visibility,uv_index",
    hourly: "temperature_2m,precipitation_probability,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: "7",
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Forecast failed");
  }

  return response.json();
}

function getCurrentRainChance(weather) {
  const current = weather.current || {};
  const hourly = weather.hourly;

  if (hourly?.time && hourly.precipitation_probability) {
    const matchIndex = hourly.time.indexOf(current.time);
    const index = matchIndex >= 0 ? matchIndex : 0;
    const probability = hourly.precipitation_probability[index];

    if (Number.isFinite(probability)) {
      return probability;
    }
  }

  return null;
}

function updateLiveWeatherUI(weather) {
  lastWeather = weather;
  const current = weather.current || {};
  currentWeatherCode = current.weather_code ?? currentWeatherCode;
  conditionLabel.textContent = getConditionText(currentWeatherCode);
  conditionIcon.src = getConditionIcon(currentWeatherCode);
  widgetCondition.textContent = getConditionText(currentWeatherCode);
  widgetIcon.src = getConditionIcon(currentWeatherCode);
  currentTemp.textContent = roundNumber(current.temperature_2m);
  widgetTemp.textContent = roundNumber(current.temperature_2m);
  feelsLike.textContent = `${roundNumber(current.apparent_temperature)}\u00b0`;
  const chance = getCurrentRainChance(weather);
  rainChance.textContent = Number.isFinite(chance) ? `${chance}%` : "--";
  windSpeed.textContent = `${roundNumber(current.wind_speed_10m)} km/h`;
  humidityValue.textContent = `${roundNumber(current.relative_humidity_2m)}%`;
  pressureValue.textContent = `${roundNumber(current.surface_pressure)} hPa`;
  uvValue.textContent = `${roundNumber(current.uv_index, 0)}`;
  visibilityValue.textContent = `${roundNumber((current.visibility || 0) / 1000)} km`;
  dewValue.textContent = `${roundNumber(current.dew_point_2m)}\u00b0`;

  if (current.time) {
    dataStatus.textContent = `Updated ${formatHourLabel(current.time)}`;
  }

  renderHourly(weather.hourly);
  renderDaily(weather.daily);
}

async function updateWeatherMap(location) {
  const lat = Number(location.latitude).toFixed(4);
  const lon = Number(location.longitude).toFixed(4);
  satelliteFrame.src = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&width=650&height=450&zoom=5&level=surface&overlay=satellite&product=satellite&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1`;
  mapTime.textContent = "Live";

  try {
    const response = await fetch("https://api.rainviewer.com/public/weather-maps.json");
    const data = await response.json();
    const frame = data.radar?.past?.at(-1);

    if (!frame) {
      throw new Error("No radar frame");
    }

    radarImage.src = `${data.host}${frame.path}/512/6/${lat}/${lon}/2/1_1.png`;
    radarStatus.textContent = `RainViewer radar ${formatHourLabel(frame.time * 1000)}`;
  } catch {
    radarStatus.textContent = "Radar frame unavailable";
  }
}

async function updateLiveCity(city) {
  dataStatus.textContent = "Updating";

  try {
    const location = await geocodeCity(city);
    currentLocation = location;
    setLocation(location.name);
    updateHeroPhoto(location.name);
    updateWeatherMap(location);
    const weather = await fetchLiveWeather(location);
    updateLiveWeatherUI(weather);
  } catch (error) {
    dataStatus.textContent = error.message === "City not found" ? "City not found" : "Live data unavailable";
  }
}

function cityToVisualQuery(city) {
  const normalized = normalizeCity(city);
  const directMatch = cityVisualQueries.get(normalized);

  if (directMatch) {
    return directMatch;
  }

  const cityName = city.split(",")[0].trim() || translations[activeLanguage].cityInput;
  return `${cityName},landmark,tourism,city`;
}

function makePhotoUrl(city) {
  const query = cityToVisualQuery(city);
  const path = query
    .split(",")
    .map((part) => encodeURIComponent(part.trim()))
    .join(",");
  const lock = stableHash(query);

  return `https://loremflickr.com/900/1300/${path}/all?lock=${lock}`;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.onerror = reject;
    image.src = url;
  });
}

async function fetchCommonsPhoto(city) {
  const query = cityToVisualQuery(city).replace(/,/g, " ");
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrlimit: "12",
    gsrsearch: `${query} landmark tourism filemime:image/jpeg`,
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "900",
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Commons image search failed");
  }

  const data = await response.json();
  const pages = Object.values(data.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
  const match = pages.find((page) => {
    const image = page.imageinfo?.[0];
    return image?.thumburl && image?.mime?.startsWith("image/");
  });

  if (!match) {
    throw new Error("No Commons photo found");
  }

  return match.imageinfo[0].thumburl;
}

function setPhotoCaption(city) {
  photoCaption.textContent = translations[activeLanguage].photoCaption.replace("{city}", city);
}

function setLocation(city) {
  selectedCity = city;
  cityInput.value = city;
  locationLabel.textContent = city;
  widgetLocation.textContent = city.split(",")[0].trim() || city;
  setPhotoCaption(city);
}

async function updateHeroPhoto(city) {
  const requestId = ++photoRequestId;
  hero.classList.add("is-loading");

  try {
    const commonsUrl = await fetchCommonsPhoto(city);
    const loadedUrl = await loadImage(commonsUrl);

    if (requestId === photoRequestId) {
      heroPhoto.src = loadedUrl;
      heroPhoto.alt = `${city} scenic landmark`;
    }
  } catch {
    try {
      const fallbackUrl = await loadImage(makePhotoUrl(city));

      if (requestId === photoRequestId) {
        heroPhoto.src = fallbackUrl;
        heroPhoto.alt = `${city} scenic view`;
      }
    } catch {
      if (requestId === photoRequestId) {
        heroPhoto.src = localFallbackPhoto;
        heroPhoto.alt = "Talibenah mountain landscape";
      }
    }
  } finally {
    if (requestId === photoRequestId) {
      hero.classList.remove("is-loading");
    }
  }
}

function applyCity(city) {
  const cleanedCity = city.trim();

  if (!cleanedCity) {
    return;
  }

  setLocation(cleanedCity);
  updateHeroPhoto(cleanedCity);
  updateLiveCity(cleanedCity);
}

function translate(language) {
  const dictionary = translations[language];
  activeLanguage = language;
  root.lang = language;
  root.dir = language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = dictionary[node.dataset.i18nPlaceholder];
  });

  if (selectedCity === translations.en.cityInput || selectedCity === translations.fa.cityInput || selectedCity === translations.ro.cityInput) {
    setLocation(dictionary.cityInput);
  } else {
    setPhotoCaption(selectedCity);
  }

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  conditionLabel.textContent = getConditionText(currentWeatherCode);
  widgetCondition.textContent = getConditionText(currentWeatherCode);
  renderDonationOptions();
  renderLayoutToggles();
  applyLayoutState();
  renderHourly(lastWeather?.hourly || null);
  renderDaily(lastWeather?.daily || null);
}

function renderHourly(hourly = null) {
  const list = hourly
    ? hourly.time.slice(0, 12).map((time, index) => ({
        time: formatHourLabel(time),
        temp: hourly.temperature_2m[index],
        code: hourly.weather_code[index],
      }))
    : hourlyData.map(([time, temp]) => ({ time, temp, code: 2 }));

  hourlyList.innerHTML = list
    .map(
      ({ time, temp, code }) => `
        <article class="hour-card">
          <span>${time}</span>
          <img class="mini-weather" src="${getConditionIcon(code)}" alt="" />
          <strong>${roundNumber(temp)}\u00b0</strong>
        </article>
      `,
    )
    .join("");
}

function renderDaily(daily = null) {
  const list = daily
    ? daily.time.map((time, index) => ({
        label: formatDayLabel(time, index),
        low: daily.temperature_2m_min[index],
        high: daily.temperature_2m_max[index],
        chance: daily.precipitation_probability_max[index] || 0,
        code: daily.weather_code[index],
      }))
    : dailyData.map(([low, high, width], index) => ({
        label: translations[activeLanguage].days[index],
        low,
        high,
        chance: width,
        code: 2,
      }));

  dailyList.innerHTML = list
    .map(({ label, low, high, chance, code }) => {
      return `
        <article class="day-row">
          <strong>${label}</strong>
          <img class="mini-weather" src="${getConditionIcon(code)}" alt="" />
          <span>${roundNumber(low)}\u00b0 / ${roundNumber(high)}\u00b0</span>
          <span class="temp-bar" aria-hidden="true"><i style="width:${Math.max(8, chance)}%"></i></span>
        </article>
      `;
    })
    .join("");
}

citySearch.addEventListener("submit", (event) => {
  event.preventDefault();
  applyCity(cityInput.value);
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cityInput.blur();
  }
});

document.querySelectorAll("[data-city]").forEach((button) => {
  button.addEventListener("click", () => applyCity(button.dataset.city));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => translate(button.dataset.lang));
});

document.querySelectorAll(".provider").forEach((provider) => {
  provider.addEventListener("click", () => {
    document.querySelectorAll(".provider").forEach((item) => item.classList.remove("is-selected"));
    provider.classList.add("is-selected");
  });
});

resetLayout.addEventListener("click", () => {
  layoutState = { ...defaultLayoutState };
  saveLayoutState();
  applyLayoutState();
  renderLayoutToggles();
});

renderHourly();
translate(activeLanguage);
updateLiveCity(selectedCity);
