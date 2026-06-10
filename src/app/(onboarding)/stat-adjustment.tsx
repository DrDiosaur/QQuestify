import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { spacing } from '@/theme';

export default function StatAdjustmentScreen() {
  const router = useRouter();

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Adjust Your Stats</AppText>
      <AppText variant="caption">
        Fine-tune the suggested starting stats before your journey begins.
      </AppText>
      <Card>
        <AppText variant="subtitle">Placeholder stats</AppText>
        <AppText variant="caption">
          Body · Mind · Social · Courage · Creativity · Exploration · Discipline
        </AppText>
      </Card>
      <AppButton
        title="Continue to Quest 0"
        onPress={() => router.push('/(onboarding)/quest-0')}
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
