/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src/App';
import 'react-native-console-time-polyfill';
import {name as appName} from './app.json';

if (global.HermesInternal) {
  console.log('================= HERMES ENABLED =================');
} else {
  console.log('================= HERMES DISABLED =================');
}

AppRegistry.registerComponent(appName, () => App);
