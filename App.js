import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Open Details" 
              onPress={()=>navigation.navigate('Details')}
      />
    </View>
  )
}
export function DetailScreen() {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color, size})=> {
              let iconName;
              if(route.name === 'Home'){
                iconName = 'home';
              } else if(route.name === 'Details'){
                iconName = 'list';
              }
              return <Icon name={iconName} size={20}  color={color} /> 
            },
            tabBarActiveTintColor: 'red',
            TabBarInactiveTintColor: 'gray',
          })}
        >
      {/* <Stack.Navigator> */}
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Details' component={DetailScreen} />
      {/* <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailScreen} /> */}
      {/* </Stack.Navigator> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}