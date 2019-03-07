import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Page1 extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}></Text>
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