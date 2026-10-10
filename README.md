# Expo App Tutorial

This app uses the camera and OCR features, so it should be tested as a native Android or iOS app. Plain Expo Go is not the recommended workflow for this project.

## Prerequisites

### Required for everyone

- Node.js LTS
- npm
- Git
- VS Code or another code editor

### Required for Android

- Android Studio
- Android SDK
- An Android emulator or a physical Android device
- USB debugging enabled on the physical device

### Required for iPhone

- A Mac computer
- Xcode
- iOS simulator or a physical iPhone

> This app depends on native camera access and OCR functionality, so testing must be done on a real mobile environment rather than a browser-only workflow.

---

## Clone and install

```bash
git clone https://github.com/cassianebel/expo-app-tutorial.git
cd expo-app-tutorial
npm install
```

---

## Android: run as a native app

### Option 1: Android emulator

1. Install Android Studio.
2. Open Android Studio and create a virtual device.
3. Start the emulator.
4. In the project folder, run:

```bash
npx expo run:android
```

This builds the native Android app and launches it in the emulator.

### Option 2: Physical Android device

1. Enable Developer Options on the phone.
2. Enable USB debugging.
3. Connect the phone to your computer.
4. Run:

```bash
npx expo run:android
```

The app will install and run on the connected Android device.

### Android notes

- This is the recommended Android test path for the camera and OCR features.
- Expo Go is not the best choice for the final test workflow here.

---

## Apple (iOS): run as a native app

### Requirements

- macOS
- Xcode installed from the App Store
- iOS simulator or a physical iPhone

### Option 1: iOS simulator

1. Open the project in a terminal.
2. Run:

```bash
npx expo run:ios
```

3. Xcode will build the app and launch it in the simulator.

### Option 2: Physical iPhone

1. Connect the iPhone to your Mac.
2. Trust the computer on the device if prompted.
3. Run:

```bash
npx expo run:ios
```

This installs the app on the connected iPhone.

### iOS notes

- iOS development requires a Mac.
- Native camera and OCR testing should be done through the proper iOS build workflow, not through a browser-based shortcut.

---

## Recommended testing workflow

Use the native app workflow on the device you are testing with:

```bash
npx expo run:android
```

or

```bash
npx expo run:ios
```

This is the correct method for testing the camera and OCR behavior in this project.

---

## Useful commands

```bash
npm install
npx expo run:android
npx expo run:ios
npx expo lint
```

---

## Troubleshooting

- If dependencies are missing: run `npm install`
- If Android does not detect a device: check USB debugging and the emulator state
- If iOS does not run: make sure Xcode is installed and the simulator is available
- If the camera fails: allow camera permissions when the app asks
- If OCR does not work: test on a native app build, not a browser-only environment

---

## License

This project is for educational use unless another license is specified.
