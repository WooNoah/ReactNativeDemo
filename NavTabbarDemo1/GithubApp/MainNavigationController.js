import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';
import SettingPage from './SettingPage';

const FirstTabNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting: SettingPage,
});

const SecondTabNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting: SettingPage,
});

const ThirdTabNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting: SettingPage,
});

const ForthTabNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting: SettingPage,
});

const AppBottomBar = createBottomTabNavigator({
  First: FirstTabNavigator,
  Second: SecondTabNavigator,
  Third: ThirdTabNavigator,
  Forth: ForthTabNavigator,
});

module.exports = createAppContainer(AppBottomBar);
