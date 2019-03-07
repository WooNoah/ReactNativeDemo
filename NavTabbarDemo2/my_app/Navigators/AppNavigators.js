
import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import {Button, Platform} from 'react-native';
import HomePage from '../Page/HomePage'
import Page1 from '../Page/Page1'
import Page2 from '../Page/Page2'
import Page3 from '../Page/Page3'
import Page4 from '../Page/Page4'
import Page5 from '../Page/Page5'
import Ionicons from 'react-native-vector-icons/Ionicons';

const  AppTopNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'iOS'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: 'React Native'
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            tabBarLabel: 'Devio'
        }
    },
},{
    tabBarOptions: {
        tabStyle: {mindWidth: 50},
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
            backgroundColor: '#678'
        },
        indicatorStyle: {
            height: 2,
            backgroundColor: 'white',
        },
        labelStyle: {
            fontSize: 13,
            marginBottom: 6,
            marginTop: 6,
        },
    },
});

const  AppBottomNavigator = createBottomTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page4444: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: '我们',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-aperture'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
    },{
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
);

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions:({navigation})=> ({
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'This is Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions:(props)=> {
            const {navigation}=props;
            const {state, setParams}=navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'This is Page3',
                headerRight:(
                    <Button
                        title={params.mode==='edit'?'保存':'编辑'}
                        onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}
                    />
                )
            }
        }
    },
    Page4444: {
        screen: Page4,
        // navigationOptions: ({navigation})=> ({
        //   title: `${navigation.state.params.tttt}`
        // })
        // navigationOptions: (props) => {
        //     const {params} = props.state;
        //     return {
        //         title: params.tttt?params.tttt:'Page Four',
        //     }
        // }
    },
    Bottom: {
        screen: AppBottomNavigator,
        title: 'BottomNavigator'
    },
    Top: {
        screen: AppTopNavigator,
        title: 'TopNavigator'
    }
});

export default createAppContainer(AppStackNavigator);