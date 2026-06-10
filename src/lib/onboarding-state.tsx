import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

// Mock onboarding state. No persistence yet — flip this flag to preview the
// onboarding-completed state on launch. Real storage arrives in a later task.
export const MOCK_ONBOARDING_COMPLETED = false;

type OnboardingState = {
  completed: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

const OnboardingContext = createContext<OnboardingState | null>(null);

export function OnboardingProvider({ children }: PropsWithChildren) {
  const [completed, setCompleted] = useState(MOCK_ONBOARDING_COMPLETED);

  const value = useMemo(
    () => ({
      completed,
      completeOnboarding: () => setCompleted(true),
      resetOnboarding: () => setCompleted(false),
    }),
    [completed],
  );

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingState {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
