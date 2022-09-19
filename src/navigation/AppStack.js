import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screen/Settings';
import TabStack from './TabStack';
import About from '../screen/About';
import Product from '../screen/Product';
import CustomNavigationBar from './CustomNavigationBar';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AppStack;
