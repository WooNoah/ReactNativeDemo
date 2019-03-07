import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import SettingPage from './SettingPage';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SettingPage,
});

export default createAppContainer(AppNavigator);
