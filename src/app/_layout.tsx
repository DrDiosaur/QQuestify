import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { OnboardingProvider } from '@/lib/onboarding-state';
import { colors } from '@/theme';

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </OnboardingProvider>
  );
}
