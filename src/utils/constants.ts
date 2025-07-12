// Application constants and configuration
import type { NavigationItem, ServiceCategory, Project } from './types';

// Site configuration
export const SITE_CONFIG = {
  name: 'PLANY',
  description: 'Własny zespół 20+ specjalistów eliminuje problemy koordynacji. 17 lat doświadczenia w wykończeniach komercyjnych. Jeden telefon załatwia sprawę.',
  url: 'https://panartek.github.io/PLANYv2',
  author: 'PLANY',
  keywords: 'kompleksowy wykonawca wykończeń, wykończenia pod klucz, wykonawca instalacji, fit-out, wykończenia medyczne, wykończenia biurowe',
} as const;

// Navigation items
export const NAVIGATION: NavigationItem[] = [
  { label: 'Strona główna', href: '/' },
  { label: 'Projekty', href: '/#realizacje' },
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'O nas', href: '/#o-nas' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

// Service categories - zgodnie z PRD (konkretne usługi z korzyściami)
export const SERVICES: ServiceCategory[] = [
  {
    id: 'medical',
    title: 'Wykończenia Medyczne',
    description: 'Właśni elektricy i instalatorzy - znamy wymagania sanitarne',
    icon: 'Heart',
    category: 'medical',
    features: [
      'Własni elektricy znający specyfikę medyczną',
      'Instalacje elektryczne zgodne z normami medycznymi', 
      'Systemy wentylacji z filtracją HEPA',
      'Materiały antybakteryjne i łatwe w czyszczeniu'
    ]
  },
  {
    id: 'education',
    title: 'Wykończenia Edukacyjne',
    description: 'Terminowo, bez zakłócania zajęć - znamy specyfikę szkół',
    icon: 'GraduationCap',
    category: 'education',
    features: [
      'Harmonogram dostosowany do roku szkolnego',
      'Własni akustycy - idealna akustyka sal',
      'Bezpieczeństwo - materiały certyfikowane dla dzieci',
      'Instalacje dostosowane do potrzeb edukacyjnych'
    ]
  },
  {
    id: 'office',
    title: 'Wykończenia Biurowe',
    description: 'Od open space po sale konferencyjne - produktywność i well-being',
    icon: 'Building2',
    category: 'office',
    features: [
      'Własni projektanci open space i stref prywatnych',
      'Instalacje HVAC i klimatyzacji własnym zespołem',
      'Systemy elektroinstalacyjne dla nowoczesnych biur',
      'Akustyka - komfort pracy w open space'
    ]
  },
  {
    id: 'retail',
    title: 'Wykończenia Handlowe',
    description: 'Customer experience - więcej sprzedaży dzięki przemyślanym rozwiązaniom',
    icon: 'ShoppingBag',
    category: 'retail',
    features: [
      'Oświetlenie produktów - własni elektrycy',
      'Wytrzymałe materiały na duży ruch klientów',
      'Szybka realizacja - minimalne przerwy w działalności',
      'Funkcjonalne rozwiązania techniczne'
    ]
  },
  {
    id: 'installations',
    title: 'Instalacje Kompleksowe',
    description: 'Własny zespół wszystkich branż - elektryka, HVAC, wod-kan, SSP',
    icon: 'Zap',
    category: 'installations',
    features: [
      'Instalacje elektryczne i teletechniczne - własni elektrycy',
      'HVAC i wentylacja - projektujemy i montujemy',
      'Wodno-kanalizacyjne - pełen zakres',
      'SSP (systemy sygnalizacji pożaru) - certyfikowani monterzy'
    ]
  },
  {
    id: 'turnkey',
    title: 'Realizacje "Pod Klucz"',
    description: 'Od wizji lokalnej po odbiór - pełna odpowiedzialność za całość',
    icon: 'Key',
    category: 'turnkey',
    features: [
      'Wizja lokalna i szczegółowa wycena',
      'Koordynacja wszystkich prac własnym zespołem',
      'Harmonogram i terminowa realizacja',
      'Odbiór z 24-miesięczną gwarancją'
    ]
  }
] as const;

// Mock portfolio projects data (10 projects as specified)
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'klinika-stomatologiczna-warszawa',
    title: 'Klinika Stomatologiczna - Warszawa',
    category: 'medical',
    year: 2024,
    location: 'Warszawa, Mokotów',
    area: 280,
    image: '/images/portfolio/klinika-stomatologiczna.jpg',
    description: 'Nowoczesna klinika stomatologiczna z 6 gabinetami zabiegowymi zgodna z najwyższymi standardami medycznymi.',
    tags: ['stomatologia', 'gabinety zabiegowe', 'sterylizacja', 'recepcja'],
    challenge: 'Adaptacja przestrzeni handlowej na cele medyczne z zachowaniem wymogów sanitarnych',
    solution: 'Zastosowanie specjalistycznych materiałów antybakteryjnych i system wentylacji z filtracją HEPA'
  },
  {
    id: 'szkola-podstawowa-krakow',
    title: 'Szkoła Podstawowa - Kraków',
    category: 'education',
    year: 2024,
    location: 'Kraków, Nowa Huta',
    area: 1200,
    image: '/images/portfolio/szkola-podstawowa.jpg',
    description: 'Kompleksowa modernizacja 20 sal lekcyjnych z zastosowaniem nowoczesnych rozwiązań edukacyjnych.',
    tags: ['sale lekcyjne', 'akustyka', 'bezpieczeństwo', 'kolory'],
    challenge: 'Poprawa akustyki i oświetlenia w starym budynku szkolnym',
    solution: 'Panele akustyczne, energooszczędne oświetlenie LED i kolorystyka wspierająca koncentrację'
  },
  {
    id: 'centrum-handlowe-gdansk',
    title: 'Butik Modowy - Gdańsk',
    category: 'retail',
    year: 2024,
    location: 'Gdańsk, Centrum',
    area: 150,
    image: '/images/portfolio/butik-modowy.jpg',
    description: 'Ekskluzywny butik odzieżowy z systemem ekspozycji produktów i strefą przymierzalni.',
    tags: ['ekspozycja', 'oświetlenie', 'przymierzalnie', 'design'],
    challenge: 'Maksymalizacja przestrzeni ekspozycyjnej przy zachowaniu elegancji',
    solution: 'Modułowy system ekspozycji i strategiczne oświetlenie akcentujące produkty'
  },
  {
    id: 'biuro-it-wroclaw',
    title: 'Biuro IT - Wrocław',
    category: 'office',
    year: 2023,
    location: 'Wrocław, Business Garden',
    area: 600,
    image: '/images/portfolio/biuro-it.jpg',
    description: 'Nowoczesne biuro IT z open space, salami konferencyjnymi i strefą relaksu dla 80 pracowników.',
    tags: ['open space', 'sale konferencyjne', 'strefa relaksu', 'ergonomia'],
    challenge: 'Stworzenie przestrzeni wspierającej kreatywność i współpracę w zespole',
    solution: 'Elastyczne strefy pracy, akustyczne boksy oraz kolorystyka inspirująca innowacje'
  },
  {
    id: 'przychodnia-lekarska-poznan',
    title: 'Przychodnia Lekarska - Poznań',
    category: 'medical',
    year: 2023,
    location: 'Poznań, Grunwald',
    area: 400,
    image: '/images/portfolio/przychodnia-lekarska.jpg',
    description: 'Przychodnia wielospecjalistyczna z 10 gabinetami lekarskimi i laboratorium.',
    tags: ['gabinety lekarskie', 'laboratorium', 'poczekalnia', 'rejestracja'],
    challenge: 'Optymalizacja przepływu pacjentów i zapewnienie prywatności',
    solution: 'Przemyślany układ korytarzy, system kolejkowy i materiały tłumiące hałas'
  },
  {
    id: 'uniwersytet-lodz',
    title: 'Aula Uniwersytecka - Łódź',
    category: 'education',
    year: 2023,
    location: 'Łódź, Centrum',
    area: 300,
    image: '/images/portfolio/aula-uniwersytecka.jpg',
    description: 'Modernizacja auli uniwersyteckiej dla 200 studentów z systemem audiowizualnym.',
    tags: ['aula', 'akustyka', 'AV', 'siedliska'],
    challenge: 'Poprawa akustyki w historycznym budynku uniwersyteckim',
    solution: 'Nowoczesny system nagłośnienia, panele akustyczne i ergonomiczne siedziska'
  },
  {
    id: 'restauracja-kielce',
    title: 'Restauracja Fine Dining - Kielce',
    category: 'other',
    year: 2023,
    location: 'Kielce, Centrum',
    area: 200,
    image: '/images/portfolio/restauracja.jpg',
    description: 'Elegancka restauracja z otwartą kuchnią i salą bankietową.',
    tags: ['restauracja', 'kuchnia', 'sala bankietowa', 'elegancja'],
    challenge: 'Połączenie funkcjonalności kuchni z elegancją sali restauracyjnej',
    solution: 'Otwarta kuchnia jako element ekspozycyjny, materiały premium i oświetlenie klimatyczne'
  },
  {
    id: 'salon-optyczny-lublin',
    title: 'Salon Optyczny - Lublin',
    category: 'retail',
    year: 2023,
    location: 'Lublin, Plaza',
    area: 80,
    image: '/images/portfolio/salon-optyczny.jpg',
    description: 'Nowoczesny salon optyczny z gabinetem badań wzroku i strefą ekspozycji okularów.',
    tags: ['optyka', 'gabinet', 'ekspozycja', 'oświetlenie'],
    challenge: 'Precyzyjne oświetlenie do badań wzroku i atrakcyjna ekspozycja produktów',
    solution: 'Specjalistyczne oświetlenie medyczne i system ekspozycji z regulacją natężenia światła'
  },
  {
    id: 'coworking-katowice',
    title: 'Przestrzeń Coworking - Katowice',
    category: 'office',
    year: 2022,
    location: 'Katowice, Centrum',
    area: 500,
    image: '/images/portfolio/coworking.jpg',
    description: 'Elastyczna przestrzeń coworkingowa z biurami prywatnymi i strefami wspólnymi.',
    tags: ['coworking', 'biura prywatne', 'strefy wspólne', 'elastyczność'],
    challenge: 'Stworzenie elastycznej przestrzeni dostosowującej się do różnych potrzeb użytkowników',
    solution: 'Modułowe systemy mebli, akustyczne separatory i technologia smart booking'
  },
  {
    id: 'fizjoterapia-szczecin',
    title: 'Centrum Fizjoterapii - Szczecin',
    category: 'medical',
    year: 2022,
    location: 'Szczecin, Centrum',
    area: 350,
    image: '/images/portfolio/fizjoterapia.jpg',
    description: 'Centrum rehabilitacji z salą ćwiczeń grupowych i gabinetami terapii indywidualnej.',
    tags: ['fizjoterapia', 'sala ćwiczeń', 'rehabilitacja', 'ergonomia'],
    challenge: 'Zaprojektowanie przestrzeni wspierającej proces rehabilitacji pacjentów',
    solution: 'Ergonomiczne wyposażenie, podłogi antypośliznowe i system nawigacji dla osób niepełnosprawnych'
  }
] as const;

// Contact form options
export const PROJECT_TYPES = [
  { value: 'medical', label: 'Placówka medyczna' },
  { value: 'education', label: 'Instytucja edukacyjna' },
  { value: 'office', label: 'Przestrzeń biurowa' },
  { value: 'retail', label: 'Lokal handlowy' },
  { value: 'other', label: 'Inne' }
] as const;

export const BUDGET_RANGES = [
  { value: 'under-200k', label: 'Do 200 tys. zł' },
  { value: '200k-500k', label: '200-500 tys. zł' },
  { value: '500k-1m', label: '500 tys. - 1 mln zł' },
  { value: 'over-1m', label: 'Powyżej 1 mln zł' },
  { value: 'flexible', label: 'Do ustalenia' }
] as const;

export const TIMELINES = [
  { value: 'asap', label: 'Jak najszybciej' },
  { value: '1-3months', label: '1-3 miesiące' },
  { value: '3-6months', label: '3-6 miesięcy' },
  { value: '6months+', label: 'Powyżej 6 miesięcy' }
] as const;