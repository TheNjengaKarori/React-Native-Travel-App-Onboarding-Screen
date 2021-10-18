import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// screens
import {
  OnBoarding,
} from "./screens";

// screen for stack & tabs
const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              {/* Onboarding screen */}
              <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
