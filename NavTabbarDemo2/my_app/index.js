/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import AppNavigatorTool from './Navigators/AppNavigators';

// const AppStackNavigatorContainer = createAppContainer(AppNavigators);
AppRegistry.registerComponent(appName, () => AppNavigatorTool);
