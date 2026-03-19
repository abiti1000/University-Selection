// ─── Domain ───────────────────────────────────────────────────────────────────

export interface Department {
  id: number
  name: string
  faculty: string
  duration: number
  degree: string
  seats: number
  description: string
  careers: string[]
}

export interface University {
  id: number;
  name: string;
  shortName: string;
  city: string;
  region: string;
  established?: number;
  logo?: string;
  description?: string;
  website?: string;
  departments?: Department[];
}

// ─── App State ────────────────────────────────────────────────────────────────

export type Language = 'en' | 'am' | 'or'
export type View = 'home' | 'universities' | 'uni-detail' | 'search'
export type BadgeColor = 'green' | 'blue' | 'amber' | 'purple'

// ─── Theme ────────────────────────────────────────────────────────────────────

export interface Theme {
  bg: string
  surface: string
  surfaceHover: string
  border: string
  borderStrong: string
  text: string
  textMuted: string
  textSubtle: string
  headerBg: string
  shadow: string
  shadowLg: string
  inputBg: string
  accentBg: string
  accentBorder: string
  accentText: string
  pillBg: string
  pillText: string
  bGreen: [string, string]
  bBlue:  [string, string]
  bAmber: [string, string]
  bPurple:[string, string]
  tagBg: string
  tagText: string
}

// ─── i18n ─────────────────────────────────────────────────────────────────────

export interface Translations {
  appName: string
  tagline: string
  navHome: string
  navUniversities: string
  navSearch: string
  heroTag: string
  heroTitle: string
  heroDesc: string
  heroCTA1: string
  heroCTA2: string
  statUniversities: string
  statDepartments: string
  statRegions: string
  featuredTitle: string
  uniPageTitle: string
  uniPageDesc: (n: number) => string
  searchUniPlaceholder: string
  allRegions: string
  filterByRegion: string
  back: string
  availableDepts: string
  deptPageTitle: string
  deptPageDesc: string
  searchDeptPlaceholder: string
  allFaculties: string
  resultsFound: (n: number) => string
  noResults: string
  careerPaths: string
  viewDepts: string
  established: string
  publicLabel: string
  darkMode: string
  lightMode: string
  departments: string
  years: string
  noUnisFound: string
}

// ─── Shared component props ───────────────────────────────────────────────────

export interface SharedProps {
  th: Theme
  t: Translations
  isMobile: boolean
}
