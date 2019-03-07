import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  AlertIOS,
} from 'react-native';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';

import ExchangeRateView from "./view";
import { colors } from "./styles";

const client = new ApolloClient({
  uri: `https://48p1r2roz4.sse.codesandbox.io`
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  fetchData() {
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <ExchangeRateView />
      </View>
    </ApolloProvider>
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
