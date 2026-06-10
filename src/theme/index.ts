// QQuestify placeholder theme.
// TODO(NativeWind): styling currently uses plain React Native StyleSheet.
// Revisit NativeWind once the shell is stable; map these tokens to tailwind.config.

export const colors = {
  background: '#0E1116',
  surface: '#171C25',
  surfaceRaised: '#1F2531',
  border: '#2A3140',
  textPrimary: '#ECEDF1',
  textSecondary: '#9AA3B2',
  accent: '#8B7CF6',
  accentPressed: '#7363E0',
  onAccent: '#0E1116',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 28,
} as const;
