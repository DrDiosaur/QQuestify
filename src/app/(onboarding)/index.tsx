import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Screen } from '@/components/Screen';
import { spacing } from '@/theme';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Create your Character</AppText>
      <AppText variant="caption">
        Answer a few questions and the Game Master will shape your starting path.
      </AppText>
      <AppButton
        title="Begin"
        onPress={() => router.push('/(onboarding)/character-build')}
        style={styles.cta}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  cta: {
    marginTop: spacing.lg,
  },
});
