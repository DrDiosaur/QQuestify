import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { AppText } from '@/components/AppText';
import { Screen } from '@/components/Screen';
import { useOnboarding } from '@/lib/onboarding-state';
import { colors, spacing } from '@/theme';

// Opening / loading placeholder. Mimics a brief "boot" before routing
// to onboarding or the main app based on the mocked onboarding state.
export default function OpeningScreen() {
  const router = useRouter();
  const { completed } = useOnboarding();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (completed) {
        router.replace('/(tabs)/quests');
      } else {
        router.replace('/(onboarding)');
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [completed, router]);

  return (
    <Screen style={styles.center}>
      <ActivityIndicator color={colors.accent} />
      <AppText variant="caption">Reading the signals…</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
});
