/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import HomeScreen from './Components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" Component={HomeScreen} />
        <Stack.Screen name="Details" Component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
