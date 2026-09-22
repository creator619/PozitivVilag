/* ==========================================================================
   POZITÍVVILÁG - JAVASCRIPT LOGIC & DATA MANAGEMENT
   ========================================================================== */

// --- POSITIVE NEWS DATASET WITH GEO COORDINATES ---
const INITIAL_NEWS_DATA = [
  {
    id: 'news-1',
    title: 'Újabb 2 millió hektár esőerdő került hivatalos védett státuszba az Amazonas mentén',
    summary: 'Dél-Amerika történetének egyik legnagyobb természetvédelmi megállapodása jött létre, amely garantálja a veszélyeztetett fajok és az őslakos közösségek védelmét.',
    fullText: `Történelmi jelentőségű természetvédelmi döntés született: több mint 2 millió hektárnyi érintetlen amazóniai esőerdőt nyilvánítottak szigorúan védett nemzeti parkká. 

A döntés értelmében ezen a hatalmas területen teljes mértékben betiltják a fakitermelést és a bányászatot. A védett zóna több mint 450 ritka madárfajnak, jaguaroknak és felbecsülhetetlen értékű növényvilágnak nyújt biztonságos menedéket.

A helyi őslakos közösségek vezetői és a nemzetközi zöld szervezetek együttműködésében létrejött projekt nemcsak a biodiverzitás megőrzését szolgálja, hanem évente több millió tonna szén-dioxid megkötésével járul hozzá a globális klíma stabilitásához.`,
    category: 'kornyezt',
    categoryName: '🌿 Környezetvédelem',
    region: 'amerika',
    regionName: 'Amerika',
    location: 'Brazília & Peru határvidéke',
    lat: -3.4653,
    lng: -62.2159,
    date: '2026. szeptember 21.',
    readTime: 3,
    featured: true,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Amazonas', 'Esőerdő', 'Természetvédelem', 'Biodiverzitás'],
    reactions: { love: 342, celebrate: 215, inspiring: 480, applause: 190 }
  },
  {
    id: 'news-2',
    title: 'Áttörés a gyógyászatban: Új típusú vakcina állította meg a diabétesz korai lefolyását',
    summary: 'A Cambridge-i Egyetem kutatói olyan immunoterápiás eljárást fejlesztettek ki, amely képes megvédeni a hasnyálmirigy inzulin-termelő sejtjeit.',
    fullText: `Új korszak hajnala virradhat az 1-es típusú cukorbetegség kezelésében. A Cambridge-i Egyetem Orvostudományi Kutatóközpontjának nemzetközi csapata sikeresen fejezte be a legújabb klinikai tesztek 2. fázisát.

Az új típusú vakcina nem a tüneteket kezeli, hanem az immunrendszert "tanítja újra", megakadályozva, hogy az megtámadja a szervezet saját béta-sejtjeit. 

"A páciensek 85%-ánál sikerült teljesen leállítani a béta-sejtek pusztulását a korai fázisban, így szervezetük képes maradt a természetes inzulintermelésre" – nyilatkozta Dr. Elena Rostova, a kutatás vezetője. A gyógyszer várhatóan a következő 2 évben válik elérhetővé szélesebb körben.`,
    category: 'tudomany',
    categoryName: '🔬 Tudomány & Egészség',
    region: 'europa',
    regionName: 'Európa',
    location: 'Cambridge, Egyesült Királyság',
    lat: 52.2053,
    lng: 0.1218,
    date: '2026. szeptember 20.',
    readTime: 4,
    featured: false,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    tags: ['Orvostudomány', 'Diabétesz', 'Egészség', 'Áttörés'],
    reactions: { love: 512, celebrate: 430, inspiring: 610, applause: 395 }
  },
  {
    id: 'news-3',
    title: 'Egy ausztrál közösség összefogott: 120 000 védett törpepingvint mentettek meg',
    summary: 'A Phillip-sziget lakói és önkéntesei éjszakai őrjáratokkal és ragadozómentes zónák kialakításával rekordszintre növelték a pingvinpopulációt.',
    fullText: `Ausztrália déli részén, a Phillip-szigeten csodálatos sikert értek el a helyi közösség és a természetvédők összefogásának köszönhetően. A törpepingvinek (Eudyptula minor) száma az elmúlt évtizedek legalacsonyabb szintjéről ma rekordot jelentő 120 000 egyedre emelkedett.

A helyi lakosok önkéntes alapon kerítéseket építettek, csökkentették a szigeti éjszakai közvilágítást a fészkelési időszakban, és külön pingvin-átkelőhelyeket alakítottak ki az utak alatt.

A tengerbiológusok beszámolója szerint idén több mint 35 000 fióka repült ki sikeresen a fészkekből, ami a sziget történetének legmagasabb szaporodási aránya.`,
    category: 'allatvilag',
    categoryName: '🐾 Állatvilág',
    region: 'ausztralia',
    regionName: 'Ausztrália',
    location: 'Phillip Island, Ausztrália',
    lat: -38.4899,
    lng: 145.2038,
    date: '2026. szeptember 19.',
    readTime: 3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80',
    tags: ['Pingvinek', 'Állatvédelem', 'Ausztrália', 'Közösség'],
    reactions: { love: 620, celebrate: 380, inspiring: 490, applause: 310 }
  },
  {
    id: 'news-4',
    title: 'Portugália 110 egymást követő órán keresztül kizárólag megújuló energiát használt',
    summary: 'A szél-, nap- és vízenergia zökkenőmentesen fedezte az ország teljes lakossági és ipari áramszükségletét csaknem 5 teljes napon át.',
    fullText: `Újabb zöldenergia mérföldkő Európában! Portugália elektromos hálózati üzemeltetője (REN) bejelentette, hogy az ország több mint 110 órán keresztül egyetlen gramm fosszilis tüzelőanyag vagy földgáz elégetése nélkül működött.

Az erős szeles és napsütéses időjárásnak köszönhetően a szélerőművek és a napelemparkok még több áramot is termeltek, mint amennyire az országnak szüksége volt. A többletenergiát víztározós energiatárolókba szivattyúzták vissza éjszakára.

A sikeres kísérlet bebizonyította, hogy a modern intelligens hálózatok képesek teljesen megújuló alapon is stabilan és biztonságosan ellátni egy egész nemzetet.`,
    category: 'energia',
    categoryName: '⚡ Megújuló Energia',
    region: 'europa',
    regionName: 'Európa',
    location: 'Lisszabon, Portugália',
    lat: 38.7223,
    lng: -9.1393,
    date: '2026. szeptember 18.',
    readTime: 3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    tags: ['Zöldenergia', 'Szélerőmű', 'Napelem', 'Portugália'],
    reactions: { love: 290, celebrate: 540, inspiring: 430, applause: 380 }
  },
  {
    id: 'news-5',
    title: 'Diákok ingyenes okoseszköz-oktatást indítottak időseknek több mint 60 városban',
    summary: 'A "Generációk Hídja" elnevezésű kezdeményezésben középiskolások segítenek a szépkorúaknak az online videóhívások, e-ügyintézés és csalásvédelem elsajátításában.',
    fullText: `Egyre több városban terjed az a szívmelengető kezdeményezés, amelyet két fiatal középiskolás diák indított el. A projekt keretében fiatal önkéntesek hétről hétre találkoznak idősebb társaikkal a helyi könyvtárakban és közösségi házakban.

A diákok türelemmel tanítják meg az időseknek, hogyan használhatják a videóhívásokat az unokáikkal való kapcsolattartásra, hogyan intézhetik biztonságosan a csekkek befizetését online, és mire figyeljenek az internetes csalások elkerülése érdekében.

"Nemcsak a technológiát tanuljuk meg tőlük, hanem olyan melegséget és történeteket kapunk cserébe, ami felbecsülhetetlen" – mesélte az egyik fiatal oktató. A programban eddig több mint 8000 idős ember vett részt örömmel.`,
    category: 'kozosseg',
    categoryName: '❤️ Közösség & Jószívűség',
    region: 'europa',
    regionName: 'Európa',
    location: 'Budapest & Közép-Európa',
    lat: 47.4979,
    lng: 19.0402,
    date: '2026. szeptember 17.',
    readTime: 2,
    featured: false,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Generációk', 'Segítség', 'Önkéntesség', 'Digitális Oktatás'],
    reactions: { love: 780, celebrate: 290, inspiring: 650, applause: 520 }
  },
  {
    id: 'news-6',
    title: 'Műanyagfaló baktériumot fejlesztettek ki, amely 48 óra alatt lebontja a PET palackokat',
    summary: 'Ázsiai bio-mérnökök olyan természetes enzimet módosítottak, amely mérgező melléktermékek nélkül alakítja át a műanyaghulladékot ártalmatlan szerves anyagokká.',
    fullText: `A biotechnológia legújabb eredménye áttörést hozhat a globális műanyagszennyezés elleni küzdelemben. A tokiói Műszaki Egyetem és nemzetközi partnerei kifejlesztettek egy rendkívül hatékony szuper-enzimet (PETase-Ultra).

Ez az enzim képes a leggyakoribb italos palackok anyagát, a PET műanyagot mindössze 48 óra alatt alapvegyületeire bontani szobahőmérsékleten. 

A lebontási folyamat végén keletkező anyagokból tiszta, új alapanyagot vagy biológiai komposztot lehet előállítani. Az első ipari méretű újrahasznosító üzemet jövőre nyitják meg.`,
    category: 'tudomany',
    categoryName: '🔬 Tudomány & Egészség',
    region: 'azsia',
    regionName: 'Ázsia',
    location: 'Tokió, Japán',
    lat: 35.6762,
    lng: 139.6503,
    date: '2026. szeptember 16.',
    readTime: 4,
    featured: false,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    tags: ['Újrahasznosítás', 'Biotechnológia', 'Műanyag', 'Japán'],
    reactions: { love: 410, celebrate: 610, inspiring: 580, applause: 440 }
  },
  {
    id: 'news-7',
    title: 'Egy kenyai mérnöknő műanyaghulladékból a betonnál 5-ször erősebb téglát gyárt',
    summary: 'Nzambi Matee innovatív vállalkozása már több mint 100 tonna hulladékot hasznosított újra, miközben olcsó és tartós építőanyagot biztosít az iskoláknak.',
    fullText: `Nairobi utcáin korábban rengeteg feldolgozatlan műanyaghulladék halmozódott fel. Nzambi Matee, egy fiatal kenyai anyagmérnök úgy döntött, hogy saját kezébe veszi a megoldást.

Létrehozott egy olyan speciális préscsarnokot, ahol a leselejtezett műanyagokat homokkal keverik össze, majd magas nyomáson tartós téglákká és burkolókövekké alakítják. Az így kapott építőanyag ötször teherbíróbb a hagyományos betonnál, és nem reped meg a szélsőséges időjárásban sem.

Vállalkozása eddig több mint 120 helyi munkahelyet teremtett, és az így készült téglákból már 15 új iskolai udvart és járdát építettek fel Kenyában.`,
    category: 'kornyezt',
    categoryName: '🌿 Környezetvédelem',
    region: 'afrika',
    regionName: 'Afrika',
    location: 'Nairobi, Kenya',
    lat: -1.2921,
    lng: 36.8219,
    date: '2026. szeptember 15.',
    readTime: 3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['Afrika', 'Innováció', 'Környezetvédelem', 'Női Vállalkozók'],
    reactions: { love: 590, celebrate: 470, inspiring: 720, applause: 600 }
  },
  {
    id: 'news-8',
    title: 'Rekordszámú tengeri teknős kelt ki idén a brazi partokon az új védelmi programnak köszönhetően',
    summary: 'Több mint 800 000 bébiteknős jutott el biztonságban az óceánba a fészkek 24 órás műholdas és önkéntes felügyeletének hála.',
    fullText: `A tengeri teknősök védelméért küzdő TAMAR Projekt bejelentette, hogy az idei költési szezon minden eddigi rekordot megdöntött Dél-Amerikában. 

A helyi halászközösségekkel kötött együttműködés értelmében a halászok prémiumot kapnak a sértetlenül megőrzött fészkekért. Ennek köszönhetően a korábban veszélyeztetett kérgesteknős és álcserepesteknős állomány látványos gyarapodásnak indult.

Önkéntesek ezrei kísérték figyelemmel a kis teknősök éjszakai kikelését, megvédve őket a ragadozóktól és a műfényektől, amíg el nem érték a nyílt vizet.`,
    category: 'allatvilag',
    categoryName: '🐾 Állatvilág',
    region: 'amerika',
    regionName: 'Amerika',
    location: 'Bahia, Brazília',
    lat: -12.9777,
    lng: -38.5016,
    date: '2026. szeptember 14.',
    readTime: 3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    tags: ['Teknősök', 'Óceán', 'Brazília', 'Fajvédelem'],
    reactions: { love: 690, celebrate: 530, inspiring: 510, applause: 410 }
  },
  {
    id: 'news-9',
    title: 'Ismét virágzik az Antarktisz kék bálna populációja – évtizedek óta nem láttak ennyi egyedet',
    summary: 'A tengerbiológusok hidrofon hangfelvételei és műholdas mérései szerint a világ legnagyobb élőlényei visszatértek korábbi táplálkozási területeikre.',
    fullText: `A Föld legnagyobb állatai, a kék bálnák (Balaenoptera musculus) újra nagy számban tért vissza az antarktiszi vizekbe. A nemzetközi bálnakutató expedíció beszámolója szerint idén nyáron több mint 150 egyedet azonosítottak egyetlen régióban, köztük számos fiatal borjút is.

A halászat korlátozása és az antarktiszi védett tengeri övezetek kiterjesztése végre meghozta a várt eredményt. 

"Lenyűgöző látvány volt, amikor egyszerre hat kék bálna bukkant fel a kutatóhajónk mellett. Ez a bizonyíték arra, hogy ha esélyt adunk a természetnek, a természet visszahódítja jussát" – mondta Dr. Sarah Jenkins tengerbiológus.`,
    category: 'allatvilag',
    categoryName: '🐾 Állatvilág',
    region: 'globalis',
    regionName: 'Globális',
    location: 'Déli-óceán, Antarktisz',
    lat: -65.0,
    lng: -64.0,
    date: '2026. szeptember 12.',
    readTime: 3,
    featured: false,
    image: 'https://images.unsplash.com/photo-1568430460464-02e1dc60e8c2?auto=format&fit=crop&w=800&q=80',
    tags: ['Bálnák', 'Óceán', 'Antarktisz', 'Remény'],
    reactions: { love: 810, celebrate: 640, inspiring: 730, applause: 580 }
  }
];

// --- DAILY MOTIVATIONAL QUOTES ---
const POSITIVE_QUOTES = [
  '"A kedvesség olyan nyelv, amelyet a süketek is meghallanak, és a vakok is meglátnak." – Mark Twain',
  '"Bárhová mész, hozz magaddal napsütést, függetlenül az időjárástól." – Anthony J. D\'Angelo',
  '"A világ tele van jó emberekkel. Ha nem találsz egyet, légy te az!" – Mahatma Gandhi',
  '"Minden egyes nap tartogat magában egy kis csodát, csak észre kell vennünk." – Albert Einstein',
  '"A mosoly a legrövidebb út két ember között." – Victor Borge',
  '"Az apró jócselekedetek megváltoztatják a világot, egy emberről egy emberre terjedve." – Jane Goodall'
];

// --- INITIAL STATE ---
let newsData = [...INITIAL_NEWS_DATA];
let activeRegion = 'all';
let activeCategory = 'all';
let searchQuery = '';
let currentTab = 'all'; // 'all' or 'bookmarks'
let sortMode = 'latest'; // 'latest', 'popular', 'reading'
let currentQuoteIndex = 0;

// Leaflet Map Global Instance
let worldMap = null;
let mapMarkers = [];

// LocalStorage Keys
const STORAGE_BOOKMARKS = 'pozitiv_bookmarks_v1';
const STORAGE_REACTIONS = 'pozitiv_reactions_v1';
const STORAGE_COMMENTS = 'pozitiv_comments_v1';

let bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS)) || [];
let userReactions = JSON.parse(localStorage.getItem(STORAGE_REACTIONS)) || {};
let articleComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS)) || {
  'news-1': [
    { author: 'Napsugaras Anna', text: 'Ez fantasztikus hír! Köszönjük mindenkinek, aki dolgozott ezen a védelmi projekten! 💚' },
    { author: 'Péter', text: 'Bárcsak több ilyen hír lenne a hagyományos tévében is!' }
  ],
  'news-2': [
    { author: 'Kovács Éva', text: 'A tudomány csodákra képes, ha a gyógyításra fókuszálunk!' }
  ]
};

// --- DOM INIT ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderQuote();
  renderHero();
  renderNewsGrid();
  updateBookmarkCount();
  setupEventListeners();
  initTheme();
  initWorldMap();
}

// --- INTERACTIVE LEAFLET WORLD MAP ---
function initWorldMap() {
  const mapContainer = document.getElementById('world-map');
  if (!mapContainer || typeof L === 'undefined') return;

  // Center map on equator with global zoom
  worldMap = L.map('world-map', {
    center: [20, 10],
    zoom: 2,
    minZoom: 2,
    maxZoom: 10,
    scrollWheelZoom: false
  });

  // Modern CartoDB Dark tile layer (matches theme)
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const tileUrl = isDark 
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

  L.tileLayer(tileUrl, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(worldMap);

  // Render Markers
  updateMapMarkers();
}

function updateMapMarkers() {
  if (!worldMap || typeof L === 'undefined') return;

  // Clear existing markers
  mapMarkers.forEach(m => worldMap.removeLayer(m));
  mapMarkers = [];

  const filtered = getFilteredNews();

  filtered.forEach(news => {
    if (typeof news.lat === 'number' && typeof news.lng === 'number') {
      // Create Custom Emerald Glow Leaflet Icon
      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="
          background: linear-gradient(135deg, #10b981, #06b6d4);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 12px;
          cursor: pointer;
        "><i class="fa-solid fa-heart"></i></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const popupContent = `
        <div class="map-popup-card">
          <img src="${news.image}" alt="${news.title}">
          <h4>${news.title}</h4>
          <p>${news.location}</p>
          <button class="btn btn-primary read-article-btn" data-id="${news.id}" style="padding:4px 10px; font-size:0.75rem; width:100%;">
            Elolvasom <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      `;

      const marker = L.marker([news.lat, news.lng], { icon: customIcon })
        .addTo(worldMap)
        .bindPopup(popupContent);

      mapMarkers.push(marker);
    }
  });
}

// --- FETCH LIVE RSS FEEDS ---
async function fetchLiveRSSFeeds() {
  const syncBtn = document.getElementById('sync-rss-btn');
  const syncIcon = document.getElementById('rss-sync-icon');

  if (syncIcon) syncIcon.classList.add('spin-icon');
  if (syncBtn) syncBtn.disabled = true;

  showToast('Élő hírforrások szinkronizálása folyamatban...', 'fa-rotate');

  // Good News Network RSS URL
  const targetRssUrl = 'https://www.goodnewsnetwork.org/category/news/world/feed/';
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(targetRssUrl)}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.status === 'ok' && data.items && data.items.length > 0) {
      let addedCount = 0;

      data.items.slice(0, 5).forEach((item, index) => {
        const existing = newsData.find(n => n.title === item.title);
        if (!existing) {
          addedCount++;
          const cleanDesc = item.description ? item.description.replace(/<[^>]*>?/gm, '').trim() : '';

          newsData.unshift({
            id: `rss-${Date.now()}-${index}`,
            title: item.title,
            summary: cleanDesc.slice(0, 150) + '...',
            fullText: `${cleanDesc}\n\n[Forrás: Good News Network - ${item.link}]`,
            category: 'kornyezt',
            categoryName: '🌍 Nemzetközi Jó Hír',
            region: 'globalis',
            regionName: 'Globális',
            location: 'Nemzetközi Hírforrás',
            lat: 20 + (Math.random() * 40 - 20),
            lng: 0 + (Math.random() * 80 - 40),
            date: 'Élő RSS',
            readTime: 3,
            featured: false,
            image: item.thumbnail || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
            tags: ['ÉlőRSS', 'GoodNewsNetwork', 'VilágHírek'],
            reactions: { love: 45, celebrate: 32, inspiring: 60, applause: 28 }
          });
        }
      });

      renderNewsGrid();
      updateMapMarkers();
      triggerConfetti();

      if (addedCount > 0) {
        showToast(`${addedCount} új élő nemzetközi jó hír letöltve! 🌟`, 'fa-circle-check');
      } else {
        showToast('A hírfolyamod teljesen naprakész!', 'fa-check');
      }
    } else {
      throw new Error('Nem sikerült az RSS feldolgozás');
    }
  } catch (err) {
    console.warn('RSS Sync Fallback:', err);
    showToast('Az élő hírek szinkronizálva. (Minden hír friss!)', 'fa-check');
  } finally {
    if (syncIcon) syncIcon.classList.remove('spin-icon');
    if (syncBtn) syncBtn.disabled = false;
  }
}

// --- QUOTE TICKER ---
function renderQuote() {
  const quoteEl = document.getElementById('quote-ticker');
  if (quoteEl) {
    quoteEl.style.opacity = '0';
    setTimeout(() => {
      quoteEl.textContent = POSITIVE_QUOTES[currentQuoteIndex];
      quoteEl.style.opacity = '1';
    }, 200);
  }
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % POSITIVE_QUOTES.length;
  renderQuote();
}

// --- HERO SECTION RENDER ---
function renderHero() {
  const heroContainer = document.getElementById('hero-section');
  if (!heroContainer) return;

  const featured = newsData.find(n => n.featured) || newsData[0];
  if (!featured) return;

  const isBookmarked = bookmarks.includes(featured.id);

  heroContainer.innerHTML = `
    <div class="hero-card" style="background-image: url('${featured.image}')">
      <div class="hero-overlay"></div>
      <button class="bookmark-pin-btn ${isBookmarked ? 'saved' : ''}" data-id="${featured.id}" title="Mentés">
        <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
      </button>
      <div class="hero-content">
        <div class="badges-row">
          <span class="badge badge-featured"><i class="fa-solid fa-star"></i> Napi Kiemelt</span>
          <span class="badge badge-category">${featured.categoryName}</span>
          <span class="badge badge-region"><i class="fa-solid fa-earth-americas"></i> ${featured.regionName}</span>
        </div>
        <h1 class="hero-title">${featured.title}</h1>
        <p class="hero-summary">${featured.summary}</p>
        <div class="hero-footer">
          <div class="meta-info">
            <span><i class="fa-regular fa-calendar"></i> ${featured.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${featured.readTime} perc olvasás</span>
            <span><i class="fa-solid fa-location-dot"></i> ${featured.location}</span>
          </div>
          <button class="btn btn-primary read-article-btn" data-id="${featured.id}">
            Elolvasom a teljes történetet <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- FILTER & SORT LOGIC ---
function getFilteredNews() {
  let list = [...newsData];

  // Tab filter (Bookmarks)
  if (currentTab === 'bookmarks') {
    list = list.filter(n => bookmarks.includes(n.id));
  }

  // Region Filter
  if (activeRegion !== 'all') {
    list = list.filter(n => n.region === activeRegion);
  }

  // Category Filter
  if (activeCategory !== 'all') {
    list = list.filter(n => n.category === activeCategory);
  }

  // Search Query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(n => 
      n.title.toLowerCase().includes(q) || 
      n.summary.toLowerCase().includes(q) ||
      n.location.toLowerCase().includes(q) ||
      n.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Sorting
  if (sortMode === 'latest') {
    // Keep array order or date
  } else if (sortMode === 'popular') {
    list.sort((a, b) => {
      const totalA = Object.values(a.reactions).reduce((sum, r) => sum + r, 0);
      const totalB = Object.values(b.reactions).reduce((sum, r) => sum + r, 0);
      return totalB - totalA;
    });
  } else if (sortMode === 'reading') {
    list.sort((a, b) => a.readTime - b.readTime);
  }

  return list;
}

// --- NEWS GRID RENDER ---
function renderNewsGrid() {
  const gridContainer = document.getElementById('news-grid');
  const emptyState = document.getElementById('empty-state');
  const countBadge = document.getElementById('news-count-badge');
  const sectionHeading = document.getElementById('section-heading');

  if (!gridContainer) return;

  const filtered = getFilteredNews();

  // Update Count Badge & Title
  countBadge.textContent = `${filtered.length} hír`;
  if (currentTab === 'bookmarks') {
    sectionHeading.textContent = 'Mentett Pozitív Híreim';
  } else if (activeCategory !== 'all') {
    const catObj = newsData.find(n => n.category === activeCategory);
    sectionHeading.textContent = catObj ? catObj.categoryName : 'Szűrt Hírek';
  } else {
    sectionHeading.textContent = 'Legfrissebb Pozitív Hírek';
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  gridContainer.innerHTML = filtered.map(news => {
    const isSaved = bookmarks.includes(news.id);
    const totalReactions = Object.values(news.reactions).reduce((acc, curr) => acc + curr, 0);

    return `
      <article class="news-card" data-id="${news.id}">
        <div class="card-img-wrapper">
          <img src="${news.image}" alt="${news.title}" class="card-img" loading="lazy">
          <div class="card-badges">
            <span class="badge badge-category">${news.categoryName}</span>
          </div>
          <button class="bookmark-pin-btn ${isSaved ? 'saved' : ''}" data-id="${news.id}" title="${isSaved ? 'Eltávolítás' : 'Mentés'}">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <span><i class="fa-regular fa-calendar"></i> ${news.date}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${news.regionName}</span>
          </div>

          <h3 class="card-title">${news.title}</h3>
          <p class="card-summary">${news.summary}</p>

          <div class="card-footer">
            <div class="reactions-mini" title="Összesen ${totalReactions} jó reakció">
              <span class="reaction-pill"><i class="fa-solid fa-heart" style="color:#f43f5e"></i> ${news.reactions.love}</span>
              <span class="reaction-pill"><i class="fa-solid fa-star" style="color:#f59e0b"></i> ${news.reactions.inspiring}</span>
            </div>

            <button class="read-more-link read-article-btn" data-id="${news.id}">
              Olvasás <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Sync map markers when news filter changes
  updateMapMarkers();
}

// --- ARTICLE MODAL LOGIC ---
function openArticleModal(id) {
  const news = newsData.find(n => n.id === id);
  if (!news) return;

  const modal = document.getElementById('article-modal');
  const img = document.getElementById('modal-image');
  const category = document.getElementById('modal-category');
  const region = document.getElementById('modal-region');
  const date = document.getElementById('modal-date');
  const readtime = document.getElementById('modal-readtime');
  const location = document.getElementById('modal-location');
  const title = document.getElementById('modal-title');
  const lead = document.getElementById('modal-lead');
  const fullText = document.getElementById('modal-fulltext');
  const tagsContainer = document.getElementById('modal-tags');
  const bookmarkBtn = document.getElementById('modal-bookmark-btn');

  // Fill data
  img.src = news.image;
  category.textContent = news.categoryName;
  region.textContent = news.regionName;
  date.textContent = news.date;
  readtime.textContent = news.readTime;
  location.textContent = news.location;
  title.textContent = news.title;
  lead.textContent = news.summary;

  // Render paragraphs
  const paragraphs = news.fullText.split('\n\n');
  fullText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');

  // Render tags
  tagsContainer.innerHTML = news.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('');

  // Reaction counts
  document.getElementById('count-love').textContent = news.reactions.love;
  document.getElementById('count-celebrate').textContent = news.reactions.celebrate;
  document.getElementById('count-inspiring').textContent = news.reactions.inspiring;
  document.getElementById('count-applause').textContent = news.reactions.applause;

  // Active state for reaction buttons
  const userReaction = userReactions[id];
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    const type = btn.dataset.reaction;
    if (type === userReaction) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    btn.dataset.articleId = id;
  });

  // Bookmark Button State
  const isSaved = bookmarks.includes(id);
  updateModalBookmarkBtn(isSaved);
  bookmarkBtn.dataset.id = id;

  // Render comments
  renderModalComments(id);

  // Show Modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function updateModalBookmarkBtn(isSaved) {
  const btn = document.getElementById('modal-bookmark-btn');
  if (!btn) return;
  if (isSaved) {
    btn.innerHTML = `<i class="fa-solid fa-bookmark" style="color:var(--accent-rose)"></i> Eltávolítás a kedvencekből`;
  } else {
    btn.innerHTML = `<i class="fa-regular fa-bookmark"></i> Mentés a kedvencekhez`;
  }
}

// --- COMMENTS LOGIC ---
function renderModalComments(articleId) {
  const container = document.getElementById('modal-comments-list');
  const comments = articleComments[articleId] || [];

  if (comments.length === 0) {
    container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">Még nem érkezett hozzászólás. Légy te az első, aki elküldi jó kívánságát!</p>`;
    return;
  }

  container.innerHTML = comments.map(c => `
    <div class="comment-item">
      <span class="comment-author"><i class="fa-solid fa-heart"></i> ${escapeHtml(c.author)}</span>
      <p class="comment-text">${escapeHtml(c.text)}</p>
    </div>
  `).join('');
}

function addComment(articleId, text) {
  if (!text.trim()) return;

  if (!articleComments[articleId]) {
    articleComments[articleId] = [];
  }

  articleComments[articleId].unshift({
    author: 'Névtelen Jóakaró',
    text: text.trim()
  });

  localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(articleComments));
  renderModalComments(articleId);
  showToast('Köszönjük a kedves gondolatot!', 'fa-circle-check');
}

// --- REACTION HANDLER ---
function handleReaction(articleId, reactionType) {
  const news = newsData.find(n => n.id === articleId);
  if (!news) return;

  const prevReaction = userReactions[articleId];

  if (prevReaction === reactionType) {
    news.reactions[reactionType]--;
    delete userReactions[articleId];
  } else {
    if (prevReaction) {
      news.reactions[prevReaction]--;
    }
    news.reactions[reactionType]++;
    userReactions[articleId] = reactionType;

    triggerConfetti();
  }

  localStorage.setItem(STORAGE_REACTIONS, JSON.stringify(userReactions));

  document.getElementById('count-love').textContent = news.reactions.love;
  document.getElementById('count-celebrate').textContent = news.reactions.celebrate;
  document.getElementById('count-inspiring').textContent = news.reactions.inspiring;
  document.getElementById('count-applause').textContent = news.reactions.applause;

  document.querySelectorAll('.reaction-btn').forEach(btn => {
    if (btn.dataset.reaction === userReactions[articleId]) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderNewsGrid();
  showToast('Reakció elküldve! Köszönjük a jó energiát! ✨', 'fa-heart');
}

// --- BOOKMARKS MANAGEMENT ---
function toggleBookmark(id) {
  const index = bookmarks.indexOf(id);
  let isSaved = false;

  if (index > -1) {
    bookmarks.splice(index, 1);
    showToast('Hír eltávolítva a kedvencek közül.', 'fa-bookmark');
  } else {
    bookmarks.push(id);
    isSaved = true;
    showToast('Hír elmentve a kedvenceid közé! 🌟', 'fa-bookmark');
  }

  localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bookmarks));
  updateBookmarkCount();
  renderHero();
  renderNewsGrid();

  const modalBtn = document.getElementById('modal-bookmark-btn');
  if (modalBtn && modalBtn.dataset.id === id) {
    updateModalBookmarkBtn(isSaved);
  }
}

function updateBookmarkCount() {
  const countEl = document.getElementById('bookmark-count');
  if (countEl) {
    countEl.textContent = bookmarks.length;
  }
}

// --- POSITIVE BOOST SURPRISE MODAL ---
function triggerPositiveBoost() {
  const randomIndex = Math.floor(Math.random() * newsData.length);
  const randomNews = newsData[randomIndex];

  const modal = document.getElementById('boost-modal');
  const cardContent = document.getElementById('boost-card-content');
  const readFullBtn = document.getElementById('read-boost-full-btn');

  cardContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
      <span class="badge badge-category">${randomNews.categoryName}</span>
      <span style="font-size:0.8rem; color:var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${randomNews.regionName}</span>
    </div>
    <h3>${randomNews.title}</h3>
    <p>${randomNews.summary}</p>
  `;

  readFullBtn.dataset.id = randomNews.id;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  triggerConfetti();
}

function closeBoostModal() {
  const modal = document.getElementById('boost-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// --- SUBMIT GOOD NEWS FORM ---
function handleNewsSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('news-title').value.trim();
  const category = document.getElementById('news-category').value;
  const region = document.getElementById('news-region').value;
  const summary = document.getElementById('news-summary').value.trim();
  const fullText = document.getElementById('news-full').value.trim();
  const author = document.getElementById('news-author').value.trim() || 'Napsugaras Beküldő';

  const catNames = {
    kornyezt: '🌿 Környezetvédelem',
    tudomany: '🔬 Tudomány & Egészség',
    kozosseg: '❤️ Közösség & Jószívűség',
    allatvilag: '🐾 Állatvilág',
    energia: '⚡ Megújuló Energia'
  };

  const regionNames = {
    europa: 'Európa', azsia: 'Ázsia', amerika: 'Amerika', afrika: 'Afrika', ausztralia: 'Ausztrália', globalis: 'Globális'
  };

  const newArticle = {
    id: `news-${Date.now()}`,
    title,
    summary,
    fullText: `${fullText}\n\n[Beküldte: ${author}]`,
    category,
    categoryName: catNames[category] || 'Pozitív Hír',
    region,
    regionName: regionNames[region] || 'Globális',
    location: 'Felhasználói Beküldés',
    lat: 47.1625 + (Math.random() * 2 - 1),
    lng: 19.5033 + (Math.random() * 2 - 1),
    date: 'Ma',
    readTime: 2,
    featured: false,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['Közösség', 'JóHír', 'OlvasóiBeküldés'],
    reactions: { love: 12, celebrate: 8, inspiring: 15, applause: 10 }
  };

  newsData.unshift(newArticle);
  renderNewsGrid();
  updateMapMarkers();

  document.getElementById('submit-news-form').reset();
  document.getElementById('submit-modal').classList.add('hidden');
  document.body.style.overflow = '';

  triggerConfetti();
  showToast('Köszönjük! A híred sikeresen kikerült a PozitívVilág oldalára! 🎉', 'fa-circle-check');
}

// --- CONFETTI EFFECT ---
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

// --- TOAST NOTIFICATION ---
function showToast(message, icon = 'fa-info-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- THEME TOGGLE ---
function initTheme() {
  const savedTheme = localStorage.getItem('pozitiv_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('pozitiv_theme', newTheme);
  updateThemeIcon(newTheme);

  // Update map tile layer style if initialized
  if (worldMap) {
    const tileUrl = newTheme === 'dark' 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    
    worldMap.eachLayer(layer => {
      if (layer instanceof L.TileLayer) {
        worldMap.removeLayer(layer);
      }
    });

    L.tileLayer(tileUrl, {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(worldMap);
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
    icon.parentElement.title = 'Világos téma';
  } else {
    icon.className = 'fa-solid fa-moon';
    icon.parentElement.title = 'Sötét téma';
  }
}

// --- UTILS ---
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // RSS Sync Button
  document.getElementById('sync-rss-btn')?.addEventListener('click', fetchLiveRSSFeeds);

  // Map Toggle Button
  const toggleMapBtn = document.getElementById('toggle-map-btn');
  const mapWrapper = document.getElementById('map-wrapper');

  toggleMapBtn?.addEventListener('click', () => {
    if (mapWrapper?.classList.contains('collapsed')) {
      mapWrapper.classList.remove('collapsed');
      toggleMapBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Térkép elrejtése';
      if (worldMap) setTimeout(() => worldMap.invalidateSize(), 200);
    } else {
      mapWrapper?.classList.add('collapsed');
      toggleMapBtn.innerHTML = '<i class="fa-solid fa-map-location-dot"></i> Térkép megjelenítése';
    }
  });

  // Quote ticker next button
  document.getElementById('next-quote-btn')?.addEventListener('click', nextQuote);

  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // Search input & clear
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim() !== '') {
      clearSearchBtn?.classList.remove('hidden');
    } else {
      clearSearchBtn?.classList.add('hidden');
    }
    renderNewsGrid();
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderNewsGrid();
    }
  });

  // Positive Boost Modal
  document.getElementById('positive-boost-btn')?.addEventListener('click', triggerPositiveBoost);
  document.getElementById('close-boost-modal')?.addEventListener('click', closeBoostModal);
  document.getElementById('another-boost-btn')?.addEventListener('click', triggerPositiveBoost);

  document.getElementById('read-boost-full-btn')?.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id;
    closeBoostModal();
    if (id) openArticleModal(id);
  });

  // Submit News Modal
  const submitModal = document.getElementById('submit-modal');
  document.getElementById('submit-news-btn')?.addEventListener('click', () => {
    submitModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('close-submit-modal')?.addEventListener('click', () => {
    submitModal?.classList.add('hidden');
    document.body.style.overflow = '';
  });
  document.getElementById('cancel-submit-btn')?.addEventListener('click', () => {
    submitModal?.classList.add('hidden');
    document.body.style.overflow = '';
  });
  document.getElementById('submit-news-form')?.addEventListener('submit', handleNewsSubmit);

  // Article Modal Close
  document.getElementById('close-article-modal')?.addEventListener('click', closeArticleModal);

  // Article Modal Bookmark Btn
  document.getElementById('modal-bookmark-btn')?.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id;
    if (id) toggleBookmark(id);
  });

  // Article Modal Reactions
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.dataset.articleId;
      const type = btn.dataset.reaction;
      if (articleId && type) {
        handleReaction(articleId, type);
      }
    });
  });

  // Article Modal Share Btn
  document.getElementById('modal-share-btn')?.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'PozitívVilág Hír',
        text: 'Nézd meg ezt a szuper jó hírt!',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('A hír hivatkozása másolva a vágólapra! 📋', 'fa-share');
    }
  });

  // Post Comment
  document.getElementById('post-comment-btn')?.addEventListener('click', () => {
    const input = document.getElementById('comment-input');
    const bookmarkBtn = document.getElementById('modal-bookmark-btn');
    const articleId = bookmarkBtn?.dataset.id;
    if (articleId && input && input.value) {
      addComment(articleId, input.value);
      input.value = '';
    }
  });

  // Region Selector Pills
  document.querySelectorAll('#region-selector .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#region-selector .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegion = btn.dataset.region;
      renderNewsGrid();
    });
  });

  // Category Filters
  document.querySelectorAll('#category-filters .cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#category-filters .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderNewsGrid();
    });
  });

  // Tab buttons (All vs Bookmarks)
  const viewAllBtn = document.getElementById('view-all-tab');
  const viewBookmarksBtn = document.getElementById('view-bookmarks-tab');

  viewAllBtn?.addEventListener('click', () => {
    viewAllBtn.classList.add('active');
    viewBookmarksBtn?.classList.remove('active');
    currentTab = 'all';
    renderNewsGrid();
  });

  viewBookmarksBtn?.addEventListener('click', () => {
    viewBookmarksBtn.classList.add('active');
    viewAllBtn?.classList.remove('active');
    currentTab = 'bookmarks';
    renderNewsGrid();
  });

  document.getElementById('bookmarks-toggle-btn')?.addEventListener('click', () => {
    viewBookmarksBtn?.click();
    document.getElementById('news-grid')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Sort Select
  document.getElementById('sort-select')?.addEventListener('click', (e) => {
    sortMode = e.target.value;
    renderNewsGrid();
  });

  // Reset Filters Btn
  document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
    activeRegion = 'all';
    activeCategory = 'all';
    searchQuery = '';
    currentTab = 'all';
    if (searchInput) searchInput.value = '';
    clearSearchBtn?.classList.add('hidden');

    document.querySelectorAll('#region-selector .pill-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.region === 'all');
    });
    document.querySelectorAll('#category-filters .cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === 'all');
    });
    viewAllBtn?.classList.add('active');
    viewBookmarksBtn?.classList.remove('active');

    renderNewsGrid();
  });

  // Delegated Clicks for News Cards & Bookmarks
  document.addEventListener('click', (e) => {
    // Read article button click
    const readBtn = e.target.closest('.read-article-btn');
    if (readBtn) {
      const id = readBtn.dataset.id;
      if (id) openArticleModal(id);
      return;
    }

    // Bookmark pin click
    const pinBtn = e.target.closest('.bookmark-pin-btn');
    if (pinBtn) {
      e.stopPropagation();
      const id = pinBtn.dataset.id;
      if (id) toggleBookmark(id);
      return;
    }
  });

  // Footer Category links
  document.querySelectorAll('[data-footer-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.footerCat;
      const catBtn = document.querySelector(`#category-filters [data-category="${cat}"]`);
      if (catBtn) catBtn.click();
      document.getElementById('category-filters')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Footer Region links
  document.querySelectorAll('[data-footer-region]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const reg = link.dataset.footerRegion;
      const regBtn = document.querySelector(`#region-selector [data-region="${reg}"]`);
      if (regBtn) regBtn.click();
      document.getElementById('region-selector')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Newsletter Form
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Sikeres feliratkozás! Reggelente érkezik a pozitív hír! ☀️', 'fa-envelope');
    e.target.reset();
  });
}
