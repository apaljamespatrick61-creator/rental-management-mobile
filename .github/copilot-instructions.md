# Copilot Instructions

## Rules

- Use Expo SDK 54 guidance only. Follow https://docs.expo.dev/versions/v54.0.0/ for APIs, config, and package compatibility.
- This project uses React Navigation, not Expo Router. Do not create file-based routes or router-specific code.
- Keep architecture feature-first under src/features/<feature> with folders for components, hooks, model, screens, and services.
- Reuse shared primitives from src/shared before creating new generic UI elements.
- Use TypeScript throughout. Avoid any unless there is a documented reason.
- Keep navigation types in sync when adding or changing routes. Update src/navigation/types.ts and relevant stack or tab configs.
- Keep styling in StyleSheet files and use theme constants from src/shared/constants/theme.ts. Do not hardcode repeated colors or spacing values.
- Use react-native-size-matters for scalable sizing where appropriate to keep layouts consistent across devices.
- Use @tanstack/react-query for server state and async data fetching patterns when applicable.
- Use the existing HTTP layer in src/services/http/client.ts for API calls instead of ad-hoc fetch usage.
- Keep screens and components testable. Add or update Jest + React Native Testing Library tests for new behavior and regressions.
- Add unit tests only to files that need them (logic, branching, integration points, reusable components, or regression-prone behavior). Avoid adding low-value tests for purely presentational wrappers.
- Preserve existing naming and file conventions (index.tsx entry files and colocated styles.ts in feature folders).
- Prefer functional components and React hooks. Keep components small and move non-UI logic into hooks or services.
- Ensure changes work on Android first (primary native target in this repo), and avoid introducing platform-specific code unless required.
- Do not upgrade core package versions or alter build tooling unless explicitly requested.

## Suggested Output Style

- Return minimal, directly usable code changes.
- Include only necessary imports and keep diffs small.
- If a requested change conflicts with Expo 54 or current architecture, explain the conflict and provide a compatible alternative.
