/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './src/navigation/navigator';
class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <HomeTabs></HomeTabs>
      </NavigationContainer>
    )
  }

}

export default App;
