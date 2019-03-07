import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class Page1 extends React.Component {
    constructor(){
        super();
    }
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page 1</Text>
                <Button
                    title={'GO Back'}
                    onPress={()=> {
                        navigation.goBack();
                    }}
                />
                <Button
                    title={'跳转到页面4'}
                    onPress={()=>{
                        navigation.push('Page4444', {tttt: 'Four'});
                    }}
                />
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