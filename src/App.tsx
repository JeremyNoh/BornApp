import React from 'react';
import {
  FormScreen,
  MapScreen,
  SelectActionScreen,
  PrintFormScreen,
} from './components/screens';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        defaultScreenOptions={{
          headerShown: false,
        }}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={SelectActionScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Maps"
          component={MapScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Form"
          component={FormScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="PrintForm"
          component={PrintFormScreen}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
