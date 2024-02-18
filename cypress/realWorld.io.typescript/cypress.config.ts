import { defineConfig } from 'cypress';
import { onEvents } from './cypress/plugins/onEvents';

export default defineConfig({
  e2e: {
    testIsolation: false, // Should each test clean cache and session data.
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalRunAllSpecs: true, // Allow running multiple tests from UI.

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      onEvents(on);
    },
  },
})
