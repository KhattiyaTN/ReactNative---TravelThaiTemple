import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Temple from './screen/Temple';
import Home from './Screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Temple"
          component={Temple}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App