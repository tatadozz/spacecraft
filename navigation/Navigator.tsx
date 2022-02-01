import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import LoginScreen from '../src/screens/LoginScreen';
import TermsScreen from '../src/screens/TermsScreen';

type Props = {};

const Stack = createNativeStackNavigator();

export const Navigator = (props: Props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

