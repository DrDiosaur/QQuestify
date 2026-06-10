import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { useOnboarding } from '@/lib/onboarding-state';
import { spacing } from '@/theme';

export default function CharacterScreen() {
  const router = useRouter();
  const { resetOnboarding } = useOnboarding();

  const handleReset = () => {
    // Dev helper for previewing the onboarding-not-completed state.
    resetOnboarding();
    router.replace('/');
  };

  return (
    <Screen scroll>
      <AppText variant="title">Character</AppText>
      <AppText variant="caption">Your Path, stats, and progress will appear here.</AppText>
      <Card>
        <AppText variant="subtitle">Placeholder character</AppText>
        <AppText variant="caption">
          Path identity, Path XP, stats, titles, and achievements land in a later task.
        </AppText>
      </Card>
      <AppButton title="Dev: reset onboarding" variant="ghost" onPress={handleReset} style={styles.reset} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  reset: {
    marginTop: spacing.xl,
  },
});
