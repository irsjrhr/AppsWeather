import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home_page from './Page/Home_page';
import OpenWeather_page from './Page/OpenWeather_page';
import Mateo_page from './Page/Mateo_page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home_page" component={Home_page} />
            <Stack.Screen name="Mateo_page" component={Mateo_page} />
            <Stack.Screen name="OpenWeather_page" component={OpenWeather_page} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}




