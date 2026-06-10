import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { spacing } from '@/theme';

export default function CharacterBuildScreen() {
  const router = useRouter();

  return (
    <Screen style={styles.container}>
      <AppText variant="title">Your Suggested Build</AppText>
      <AppText variant="caption">
        The Game Master will read your answers and suggest a starting Path here.
      </AppText>
      <Card>
        <AppText variant="subtitle">Placeholder build</AppText>
        <AppText variant="caption">Path, starting stats, and reasoning will appear here.</AppText>
      </Card>
      <AppButton
        title="Adjust Stats"
        onPress={() => router.push('/(onboarding)/stat-adjustment')}
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
