import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/Pages/Main';
import { Ionicons,Entypo,MaterialIcons } from '@expo/vector-icons';
import Itens from '../src/Pages/Itens';
import SingleItem from '../src/Pages/SingleItem';
import { createStackNavigator } from '@react-navigation/stack';





const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                return<MaterialIcons name="home" size={30} color={color} />
            } else if (route.name === 'Itens') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <MaterialIcons name="shopping-bag" size={30} color={color} />
            }else if(route.name==='Logout'){
               iconName = focused ? 'ios-list-box' : 'ios-list';
              return <MaterialIcons name="logout" size={30} color={color} />
            }else if(route.name==='SingleItem'){
               iconName = focused ? 'ios-list-box' : 'ios-list';
              return <MaterialIcons name="logout" size={30} color={color} />
            }

           
          },
        })}
        tabBarOptions={{
          activeTintColor: '#9C27B0',
	    inactiveTintColor: '#777',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Itens" component={Itens} />
        <Tab.Screen name="Logout" component={Itens} />



      </Tab.Navigator>
     
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   >

        <Stack.Screen name="Home" options={{headerShown:false}}  component={HomeTabs} />
        <Stack.Screen name="SingleItem" options={{headerTitle:''}} component={SingleItem} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}