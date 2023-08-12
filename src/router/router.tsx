/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Detail, Home } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const Router: FC = () => {
    return <NavigationContainer>
        <Navigator initialRouteName="Home">
            <Screen name={'Home'} component={Home} options={{ headerShown: false }} />
            <Screen name={'Detail'} component={Detail} options={{ headerShown: false }} />
        </Navigator>
    </NavigationContainer>;
};
