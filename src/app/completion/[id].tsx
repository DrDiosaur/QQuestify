import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { spacing } from '@/theme';

export default function QuestCompletionScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Quest Complete</AppText>
      <AppText variant="caption">Quest id: {id}</AppText>
      <Card>
        <AppText variant="subtitle">Placeholder rewards</AppText>
        <AppText variant="caption">+15 Path XP · +Stat tags will appear here.</AppText>
      </Card>
      <AppButton
        title="Back to Quest Board"
        onPress={() => router.dismissTo('/(tabs)/quests')}
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
