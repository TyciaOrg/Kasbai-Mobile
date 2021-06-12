import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/home';
import Login from '../Login/login';
import AddEntry from '../AddEntry/addEntry';
import SelectType from '../AddEntry/selectType';
import ShowEntries from '../ShowEntry/showEntries';
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
                options={{ headerShown: true, }}
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
                options={{ headerShown: true, headerBackTitleVisible:false  }}
              />
             <HomeStack.Screen
                name="selectType"
                component={SelectType}
                options={{ headerShown: true, headerBackTitleVisible:false, title:'Select Programm'  }}
              />
            <HomeStack.Screen
                name="addEntry"
                component={AddEntry}
                options={{ headerShown: true, headerBackTitleVisible:false, title:'Add Details'  }}
              />
             <HomeStack.Screen
                name="showEntry"
                component={ShowEntries}
                options={{ headerShown: true, headerBackTitleVisible:false  }}
              />
           </HomeStack.Navigator>
       ) 
    }

}

export default HomeTabs