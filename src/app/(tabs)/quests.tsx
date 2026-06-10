import { useRouter } from 'expo-router';

import { AppText } from '@/components/AppText';
import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';

// Placeholder quest entries. Real mock data models arrive in Task 2.
const PLACEHOLDER_QUESTS = [
  { id: 'daily-1', title: 'Daily Quest placeholder', type: 'Daily' },
  { id: 'daily-2', title: 'Daily Quest placeholder', type: 'Daily' },
  { id: 'weekly-1', title: 'Weekly Quest placeholder', type: 'Weekly' },
];

export default function QuestsScreen() {
  const router = useRouter();

  return (
    <Screen scroll>
      <AppText variant="title">Quest Board</AppText>
      <AppText variant="caption">Your current routes are waiting.</AppText>
      {PLACEHOLDER_QUESTS.map((quest) => (
        <Card key={quest.id} onPress={() => router.push(`/quest/${quest.id}`)}>
          <AppText variant="subtitle">{quest.title}</AppText>
          <AppText variant="caption">{quest.type} · tap to view details</AppText>
        </Card>
      ))}
    </Screen>
  );
}
