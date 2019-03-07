/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import SettingPage from './SettingPage';
import HomeScreen from './HomeScreen';

// class SettingPage extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Setting page</Text>
//       </View>
//     );
//   }
// }
//
// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SettingPage,
});

export default createAppContainer(AppNavigator);

// export default class App extends Component {
//   render () {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello world!</Text>
//       </View>
//     );
//   }
// }
