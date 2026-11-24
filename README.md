# NO RED! — Capacitor starter

This project wraps the tested standalone HTML game in a Capacitor iOS container.

## Important
- `www/index.html` is the current Version 08 game build.
- Proposed bundle identifier: `com.independentstudio.nored`. Check uniqueness before App Store submission; change it if unavailable.
- This starter is source scaffolding only. It is not yet a signed iOS app or an `.ipa`.

## Setup on a cloud macOS build runner
1. Install dependencies with `npm install`.
2. Generate the native iOS project with `npx cap add ios`.
3. Sync web assets with `npx cap sync ios`.
4. Configure Apple signing in the cloud build service before archiving/distribution.

Apple Developer Program membership is required for TestFlight/App Store distribution.
