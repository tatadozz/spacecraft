import { RootScreen as App } from './src/screens/RootScreen';
import StorybookUIRoot from './storybook';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;