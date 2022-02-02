import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import LoginScreen from '../src/screens/LoginScreen';
import TermsScreen from '../src/screens/TermsScreen';
import DetailScreen from '../src/screens/DetailScreen';
import FeedScreen from '../src/screens/FeedScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={Routes.FEED_SCREEN} component={FeedScreen} />
        <Stack.Screen name={Routes.DETAIL_SCREEN} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

