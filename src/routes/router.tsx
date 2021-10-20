import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from '../../src/screens/StartPage';
import List from '../screens/main/List';
import Stores from "../../src/screens/main/Stores";
import Audio from "../screens/main/Audio";
import RegisterPage from '../../src/screens/auth/RegisterPage';
import LoginPage from '../../src/screens/auth/LoginPage';
//icons
import { Octicons, FontAwesome, Feather } from '@expo/vector-icons';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth: boolean) => {
    
    if (!isAuth) {
      return <MainStack.Navigator>
        <MainStack.Screen options={{
          headerShown: true
        }}
          name='Start'
          component={StartPage} />
        <MainStack.Screen options={{
          headerShown: false
        }}
          name='Login'
          component={LoginPage} />
        <MainStack.Screen options={{
          headerShown: false
        }} name='Register' component= {RegisterPage} />
      </MainStack.Navigator> 
  }

  return  <MainTab.Navigator screenOptions={{tabBarShowLabel: false}}>
            <MainTab.Screen name='List' component={List}
                options={{ headerShown: false,
                    tabBarIcon: ({ focused, size, color }) =>
                        <Octicons name="book" size={focused ? 35 : size} color={color} />
                }} />
            <MainTab.Screen name='Audio' component={Audio}
            options={{
          tabBarIcon: ({ focused, size, color }) =>
              <FontAwesome name="audio-description" size={focused ? 35 : size} color={color} />
          }} />
            <MainTab.Screen name='Stores' component={Stores} options={{
          tabBarIcon: ({ focused, size, color }) =>
              <Feather name="shopping-cart" size={focused ? 35 : size} color={color} />
          }} />
          </MainTab.Navigator>
}

export default useRoute;
