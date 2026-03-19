import type { Theme } from '../types'

export const lightTheme: Theme = {
  bg: '#f4f6f3', surface: '#ffffff', surfaceHover: '#f7faf6',
  border: '#e2e8df', borderStrong: '#c8d4c3',
  text: '#1a1f18', textMuted: '#5a6657', textSubtle: '#3d4a3a',
  headerBg: '#ffffff',
  shadow: '0 2px 8px rgba(26,60,20,0.07)',
  shadowLg: '0 12px 36px rgba(26,60,20,0.13)',
  inputBg: '#ffffff',
  accentBg: '#f0f7ee', accentBorder: '#b8d4b2', accentText: '#1a5c12',
  pillBg: '#eef4ec', pillText: '#3a5436',
  bGreen:  ['#dcfce7', '#166534'],
  bBlue:   ['#dbeafe', '#1e40af'],
  bAmber:  ['#fef9c3', '#854d0e'],
  bPurple: ['#f3e8ff', '#6b21a8'],
  tagBg: '#f1f5f0', tagText: '#4a5e47',
}

export const darkTheme: Theme = {
  bg: '#0d1410', surface: '#162014', surfaceHover: '#1c2a18',
  border: '#2a3d26', borderStrong: '#3a5434',
  text: '#e8f0e5', textMuted: '#8aab82', textSubtle: '#b8ceb4',
  headerBg: '#111a0e',
  shadow: '0 2px 12px rgba(0,0,0,0.4)',
  shadowLg: '0 16px 48px rgba(0,0,0,0.5)',
  inputBg: '#162014',
  accentBg: '#0c2010', accentBorder: '#2d5228', accentText: '#6fcf62',
  pillBg: '#1a2e16', pillText: '#8fcf86',
  bGreen:  ['#14532d', '#86efac'],
  bBlue:   ['#1e3a5f', '#93c5fd'],
  bAmber:  ['#451a03', '#fcd34d'],
  bPurple: ['#2e1065', '#c4b5fd'],
  tagBg: '#1a2e16', tagText: '#8aab82',
}
