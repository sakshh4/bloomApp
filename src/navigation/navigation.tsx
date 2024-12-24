import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Seeds from '../pages/seeds';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREENS.SEEDS}>
        <Stack.Screen name={SCREENS.SEEDS} component={Seeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
