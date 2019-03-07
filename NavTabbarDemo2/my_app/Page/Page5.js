import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Page5 extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page 5</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})