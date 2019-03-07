import React,{Component} from 'react';
import {Text, View} from 'react-native';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Setting Page</Text>
      </View>
    );
  }
}
