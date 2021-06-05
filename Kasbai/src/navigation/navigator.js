import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/home';
import Login from '../Login/login';
const isLogin = false
const HomeStack = createStackNavigator();
function HomeTabs() {
    if (isLogin) {
        return (
            <HomeStack.Navigator
              IntialScreen="homeScreen">
              <HomeStack.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{ headerShown: true }}
              />
            
            </HomeStack.Navigator>
        
          );
    } else {
       return (
           <HomeStack.Navigator>
               <HomeStack.Screen
               name='Login' component={Login}>
               </HomeStack.Screen>
               <HomeStack.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{ headerShown: true }}
              />
            
           </HomeStack.Navigator>
       ) 
    }

}

export default HomeTabs