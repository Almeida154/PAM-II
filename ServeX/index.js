/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Removing the warning

// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);
// console.disableYellowBox = true;
