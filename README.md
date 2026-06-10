# QQuestify

A mobile real-life RPG. Users create a Character, receive real-world quests from an AI Game Master, complete them in real life, and grow through Path XP, stats, achievements, and titles.

This is the **Task 1 app shell**: Expo + React Native + TypeScript + Expo Router, with placeholder screens and mocked onboarding state. See `PROJECT_CONTEXT.md` for the full product context.

## Run

```bash
npm install
npm start        # then press i (iOS simulator), a (Android), or scan the QR with Expo Go
```

## Structure

```
src/app/                 # Expo Router routes
  index.tsx              # Opening / loading placeholder
  (onboarding)/          # Onboarding -> Character Build -> Stat Adjustment -> Quest 0
  (tabs)/                # Quests + Character tabs (post-onboarding)
  quest/[id].tsx         # Quest Detail
  completion/[id].tsx    # Quest Completion
src/components/          # Screen, AppText, AppButton, Card
src/lib/                 # Mock onboarding state (no persistence yet)
src/theme/               # Spacing, radius, font sizes, placeholder colors
```

## Mocked

- Onboarding state lives in memory only (`src/lib/onboarding-state.tsx`); flip `MOCK_ONBOARDING_COMPLETED` to preview the completed state on launch.
- All quests, character data, and rewards are placeholder copy.
- No backend, auth, AI, payments, or analytics.

TODO(NativeWind): styling currently uses plain React Native StyleSheet with theme tokens in `src/theme`.

> Note: app icons/splash use Expo defaults in this shell; custom branded assets land in a later task.
