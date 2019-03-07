/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomePage from './Page/HomePage';
// import AppNavigators from './Navigators/AppNavigators';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);