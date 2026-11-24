import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.independentstudio.nored',
  appName: 'NO RED!',
  webDir: 'www',
  bundledWebRuntime: false,
  ios: {
    contentInset: 'automatic'
  }
};

export default config;
