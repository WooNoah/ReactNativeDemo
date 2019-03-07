import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class HomePage extends React.Component {
    constructor(){
        super();
    }
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to HomePage</Text>
                <Button
                    title={'Go to Page1'}
                    onPress={()=>{
                        navigation.navigate('Page1',{name:'动态的'})
                    }}
                />
                <Button
                    title={'Go to Page2'}
                    onPress={()=>{
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title={'Go to Page3'}
                    onPress={()=>{
                        navigation.navigate('Page3',{title:'devio',mode:'edit'})
                    }}
                />
                <Button
                    title={'Go to Page4'}
                    onPress={()=>{
                        navigation.push('Page4',{tttt: 'hello title'})
                    }}
                />
                <Button
                    title={'Go to Bottom'}
                    onPress={()=>{
                        navigation.push('Bottom')
                    }}
                />
                <Button
                    title={'Go to Top'}
                    onPress={()=>{
                        navigation.push('Top')
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