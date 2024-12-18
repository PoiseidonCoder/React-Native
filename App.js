import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTabView from './HomeTabView';
import DetailList from './DetailList';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeScreen({navigation}) {
  return (
    // <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button title="Open Details" 
    //           onPress={()=>navigation.navigate('Details')}
    //   />
    // </View>

    // <HomeTabView />

    // <DetailList />

    <View>
      <Button title="Store Data" onPress={
        () => storeData('myName', 'ThachPham')
      } />
      <Button title="Get Data" onPress={
        () => getData('myName')
      } />
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

const storeData = async ( key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully');
  }catch(error){
    console.log('Error storing data: ', error);
  }
}
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if(value !== null){
      console.log('Data retrieved successfully: ', value);
    }
  }catch(error){
    console.log('Error retrieving data: ', error);
  }
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