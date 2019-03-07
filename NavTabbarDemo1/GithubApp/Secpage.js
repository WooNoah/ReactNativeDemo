import React, {Component} from 'react';
import
{
  View,
  Text,
} from 'react-native';

class SecPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Second page</View>
      </View>
    );
  }
}

export default SecPage;
