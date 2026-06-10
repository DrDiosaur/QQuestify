import { Pressable, StyleSheet, type ViewStyle } from 'react-native';

import { AppText } from '@/components/AppText';
import { colors, radius, spacing } from '@/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'ghost';
  style?: ViewStyle;
};

export function AppButton({ title, onPress, variant = 'primary', style }: AppButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.ghost,
        pressed && (isPrimary ? styles.primaryPressed : styles.ghostPressed),
        style,
      ]}>
      <AppText style={isPrimary ? styles.primaryLabel : styles.ghostLabel}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  primary: {
    backgroundColor: colors.accent,
  },
  primaryPressed: {
    backgroundColor: colors.accentPressed,
  },
  ghost: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghostPressed: {
    backgroundColor: colors.surface,
  },
  primaryLabel: {
    color: colors.onAccent,
    fontWeight: '600',
  },
  ghostLabel: {
    color: colors.textSecondary,
    fontWeight: '600',
  },
});
