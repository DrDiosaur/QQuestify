import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { useOnboarding } from '@/lib/onboarding-state';
import { spacing } from '@/theme';

export default function QuestZeroScreen() {
  const router = useRouter();
  const { completeOnboarding } = useOnboarding();

  const handleAccept = () => {
    // Mock: accepting Quest 0 completes onboarding and opens the board.
    completeOnboarding();
    router.replace('/(tabs)/quests');
  };

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Quest 0</AppText>
      <AppText variant="caption">The first small action that opens the board.</AppText>
      <Card>
        <AppText variant="subtitle">Placeholder quest</AppText>
        <AppText variant="caption">
          Your first quest will be generated here. Completing it unlocks the full Quest Board.
        </AppText>
      </Card>
      <AppButton title="Accept Quest 0" onPress={handleAccept} style={styles.cta} />
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
