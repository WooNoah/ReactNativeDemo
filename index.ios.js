/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class demmmmmo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.cell}>
          <Image source={{uri: "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super"}} style={styles.iconImg}/>
          <View style = {styles.rightContainer}>
            <Text style = {styles.title}>Title</Text>
            <Text style = {styles.detailTitle}>detailTitle</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'pink',
  },
  cell: {
    marginTop: 120,
    backgroundColor: 'lightgray',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  iconImg: {
    // flex: 1,
    borderColor: 'white',
    borderWidth: 0.5,
    width: 100,
    height: 40,
    backgroundColor: 'orange',
  },
  rightContainer: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },

  title: {
    fontSize: 15,
    color: 'black',
    marginTop: 20,
  },
  detailTitle: {
    fontSize: 10,
    color: 'orange',
    marginBottom: 20,
  },
  viewSize: {
    width: 30,
    height: 30,
  },
  leftMargin10: {
    marginLeft: 10,
  },
  blue: {
    backgroundColor: 'blue',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
});

AppRegistry.registerComponent('demmmmmo', () => demmmmmo);
