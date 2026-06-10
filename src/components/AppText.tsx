import { StyleSheet, Text, type TextProps } from 'react-native';

import { colors, fontSize } from '@/theme';

type Variant = 'title' | 'subtitle' | 'body' | 'caption';

type AppTextProps = TextProps & {
  variant?: Variant;
};

export function AppText({ variant = 'body', style, ...rest }: AppTextProps) {
  return <Text style={[styles[variant], style]} {...rest} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  body: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
});
