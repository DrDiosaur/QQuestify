import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { spacing } from '@/theme';

export default function QuestDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Quest Detail</AppText>
      <AppText variant="caption">Quest id: {id}</AppText>
      <Card>
        <AppText variant="subtitle">Placeholder quest detail</AppText>
        <AppText variant="caption">
          Description, Path XP, and stat tags (e.g. +Social, +Courage) will appear here.
        </AppText>
      </Card>
      <AppButton
        title="Complete Quest"
        onPress={() => router.push(`/completion/${id}`)}
        style={styles.cta}
      />
      <AppButton title="Back" variant="ghost" onPress={() => router.back()} />
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
