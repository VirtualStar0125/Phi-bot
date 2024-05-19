import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import SecondPage from '../screens/SecondPage';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
    <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }} />
    </Stack.Navigator>
    );
};

export default Navigation;
