# PROJECT_CONTEXT.md

# Project: QQuestify

QQuestify is a mobile real-life RPG app.

Users create a Character, receive real-world quests from an AI Game Master, complete those quests in real life, and grow through Path XP, stats, achievements, titles, and Storylines.

The app should feel like a personal urban-fantasy RPG layer over real life — not a habit tracker, not a productivity dashboard, and not a generic fantasy game.

# Current Build Stage

We are starting the first technical prototype.

The current goal is **not** to build the full app.

The current goal is to build a clean Expo mobile app shell and then gradually add the core loop:

Onboarding → Character Build → Quest 0 → Quest Log → Quest Completion → Rewards → Character Progression.

# Build Target

This is a mobile app.

Target platforms:

* iOS and Android from the start.
* If platform prioritization becomes necessary, prioritize iOS first.

Do not build this as a web app.

# Recommended Stack

Use:

* Expo
* React Native
* TypeScript
* Expo Router
* NativeWind if setup is straightforward

If NativeWind setup causes friction, use plain React Native StyleSheet/components and leave a TODO.

Later:

* Supabase for backend/database/auth
* OpenAI first for AI structured outputs
* Claude later as a provider comparison
* Zod for schema validation
* Sentry/PostHog later during beta

Do not add yet:

* Supabase
* auth
* real AI API calls
* payments
* Stripe
* Polar
* RevenueCat
* Render
* Better Auth
* analytics
* push notifications

# Important Workflow Rule

Do not build the whole app at once.

Work in small, testable tasks.

Each task should:

1. have a narrow goal,
2. create/modify only the files needed,
3. run without errors,
4. summarize what changed,
5. suggest the next task.

# Notion Context Rules

The project has a Notion project library.

If Notion MCP is available, use it only for reading/searching product context.

Do not edit Notion.
Do not create Notion pages.
Do not update Notion pages.
Do not delete or restructure Notion content.

The implementation source of truth is the **MVP Product Spec**, not the broader Project Bible.

The Project Bible is conceptual and long-term.
The MVP Product Spec is build-specific.

When there is a conflict:

1. Current user instruction wins.
2. MVP Product Spec wins.
3. Project Bible is background context only.

# Authoritative MVP Pages To Read

When using Notion MCP, prefer these MVP Product Spec pages:

* 01 — MVP Goal And Success Criteria
* 02 — MVP Scope
* 05 — Character Build Rules
* 06 — Quest System Rules
* 08 — Rewards And Progression
* 09 — AI Game Master Outputs
* 10 — Screens And UX Requirements
* 11 — Data Requirements
* 12 — Safety Requirements
* 13 — Prototype Plan
* 14 — Build Readiness Checklist
* 14 — Claude Code / Codex Build Brief

Do not use similarly named Project Bible pages as implementation requirements unless explicitly instructed.

# MVP Navigation

After onboarding, the MVP uses 2 bottom tabs:

1. Quests
2. Character

No Map tab in MVP.
No Journey tab in MVP.
No Social/Guild tab in MVP.
No Shop.
No Inventory.
No Leaderboard.

# First Prototype Scope

The first prototype should include:

* Expo project shell
* Expo Router setup
* basic folder structure
* placeholder theme
* onboarding-not-completed state
* onboarding-completed state
* placeholder onboarding flow
* placeholder Quest 0 screen
* placeholder Quest Log tab
* placeholder Character tab
* placeholder Quest Detail route
* placeholder Quest Completion route

No backend.
No auth.
No real AI.
No Supabase.
No payments.
No Storyline system yet.

# Required First Screens

Create placeholder versions of:

1. Opening / loading screen
2. Onboarding screen
3. Character Build Suggestion screen
4. Stat Adjustment screen
5. Quest 0 screen
6. Quest Log tab
7. Character tab
8. Quest Detail route
9. Quest Completion route

# Suggested Route Structure

```txt
/app
  _layout.tsx
  /(onboarding)
    index.tsx
    character-build.tsx
    stat-adjustment.tsx
    quest-0.tsx
  /(tabs)
    _layout.tsx
    quests.tsx
    character.tsx
  quest
    [id].tsx
  completion
    [id].tsx

/src
  /components
  /features
    /character
    /quests
    /progression
    /storylines
    /rewards
    /ai
  /lib
    /storage
    /validation
  /schemas
  /types
  /theme
```

This is a draft structure and can be adjusted if Expo Router requires a cleaner structure.

# Basic Reusable Components

Create simple reusable components:

* Screen
* AppText
* AppButton
* Card

Keep components simple.

Do not over-engineer the design system yet.

# Visual Direction

The UI should feel:

* modern
* clean
* subtle urban fantasy
* calm but game-like
* slightly mysterious
* mobile-first

Avoid:

* generic fantasy RPG visuals
* swords/scrolls/gems aesthetic
* productivity dashboard feeling
* corporate SaaS UI
* childish mobile game UI
* therapy-app tone

# Placeholder Copy

Opening:
“Reading the signals…”

Onboarding:
“Create your Character”
“Answer a few questions and the Game Master will shape your starting path.”

Quest 0:
“Quest 0”
“The first small action that opens the board.”

Quest Log:
“Quest Board”
“Your current routes are waiting.”

Character:
“Character”
“Your Path, stats, and progress will appear here.”

# Core Product Concepts

## Character

The user’s profile in the real-life RPG.

Character includes:

* Character Level
* stats
* Paths
* titles
* achievements
* Storyline progress later

Character Level is secondary.
Path identity is more important.

## Stats

Stats are visible values, not levels.

MVP stats:

* Body
* Mind
* Social
* Courage
* Creativity
* Exploration
* Discipline

Stats have hidden progress internally, but the user does not see exact hidden stat math.

Quest cards show stat names only.

Example:
`+Social, +Courage`

Not:
`+0.35 Social, +0.20 Courage`

## Paths

MVP Paths:

* Creator
* Explorer
* Connector
* Scholar
* Builder
* Challenger

Each quest gives XP to exactly one Main Path.

Hybrid quests do not give secondary Path XP.
Hybrid nature is represented through stats.

Example:
A Creator quest with social courage gives:

* Creator XP
* Creativity
* Courage
* Social

It does not give:

* Creator XP
* Connector XP
* Challenger XP

## Path XP

Path XP is visible and numeric.

Example:
`+15 Connector XP, +Social, +Courage`

Path Levels use increasing XP thresholds.

Exact XP values are placeholders for now.

## Character Level

Character Level grows from milestones, not from every quest.

Examples:

* first Weekly completed
* first Storyline completed
* Path reaches a milestone level
* major achievement unlocked

## Achievements And Titles

Achievements are milestone records.

Minor achievements are mostly badges.
Major achievements can contribute to Character Level.

Titles exist in MVP as identity markers.

Titles can come from:

* Path milestones
* Path combinations
* Storyline completion
* major achievements

## Storylines

Storylines are adaptive quest arcs.

Storyline MVP comes after the basic Quest 0 + Daily/Weekly loop works.

Do not build Storylines in Task 1.

# Quest Types

MVP quest types:

* Quest 0
* Daily Quest
* Weekly Quest
* Storyline Step later

Quest 0:

* first initiation quest
* easy
* same-day
* symbolic
* unlocks full Quest Log

Daily:

* small quests
* generated regularly
* can be completed independently

Weekly:

* larger quest
* more meaningful than Daily

Storyline Step:

* part of an adaptive arc
* later phase, not first prototype

# Completion Philosophy

MVP uses trust-based completion.

No proof required:

* no photo proof
* no location proof
* no social verification
* no friend confirmation

# Reflection Philosophy

Daily/Weekly reflections are optional.

Storyline final reflection is required later.

Reflection should improve personalization.
Reflection should not feel like homework.
Reflection does not guarantee extra XP.

# Safety Requirements Summary

The app can challenge the user, but must not pressure the user into unsafe, inappropriate, or boundary-crossing situations.

Safety principles:

* user control overrides quest creativity
* opt-in categories must be respected
* no shame/guilt mechanics
* no proof/verification in MVP
* no dating/flirting quests in MVP
* no live location quests in MVP
* no public rankings in MVP
* no guild/social pressure systems in MVP

Challenger is an intensity/commitment modifier, not a danger modifier.

Challenger can make quests:

* more decisive
* more visible
* more direct
* slightly uncomfortable

Challenger must not make quests:

* unsafe
* humiliating
* socially aggressive
* physically risky
* boundary-crossing

# AI Direction

Do not implement real AI in Task 1.

Later, AI should use a provider-agnostic adapter.

Conceptual interface:

```ts
interface AiGameMasterProvider {
  generateCharacterBuild(input: CharacterBuildInput): Promise<CharacterBuildOutput>
  generateQuest(input: QuestGenerationInput): Promise<QuestGenerationOutput>
  completeQuest(input: QuestCompletionInput): Promise<QuestCompletionOutput>
  interpretReflection(input: ReflectionInput): Promise<ReflectionInterpretationOutput>
  generateStorylineNextStep(input: StorylineInput): Promise<StorylineProgressionOutput>
}
```

First real implementation later:

* OpenAI first
* Claude later for comparison

The mobile client should never call AI providers directly.
AI calls should be server-side later.

# First Build Task

The first build task is:

Create a new Expo + React Native + TypeScript project shell for QQuestify.

Do:

* create new Expo app
* set up Expo Router
* set up project folders
* create placeholder screens
* create simple reusable components
* create placeholder theme
* implement mock onboarding state
* show onboarding flow when onboarding is not completed
* show 2-tab app when onboarding is completed

Do not:

* add Supabase
* add auth
* add real AI
* add payments
* add analytics
* add Storylines
* add real progression logic
* overbuild architecture

# First Build Acceptance Criteria

The first build is complete when:

* app runs without errors
* TypeScript compiles
* Expo Router routes work
* onboarding placeholder screens are reachable
* main app has two tabs: Quests and Character
* Quest Detail placeholder route exists
* Quest Completion placeholder route exists
* reusable components exist
* folder structure is clean
* no backend/auth/AI/database/payment code is added

# After Task 1

After Task 1, summarize:

1. what files were created,
2. how to run the app,
3. what is mocked,
4. what should be implemented in Task 2.

Task 2 should likely be:

* build mock data models
* add mock Character
* add mock Quest 0
* add mock Quest Log cards
* add basic local quest completion flow
