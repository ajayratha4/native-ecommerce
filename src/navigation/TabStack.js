import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Cart from '../screen/Cart';
import Home from '../screen/Home';
import Profile from '../screen/Profile';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#091a6e'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#5872ff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //   tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: '#5872ff'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: '#5872ff'},
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          //   tabBarBadge: 2,
          tabBarBadgeStyle: {backgroundColor: '#5872ff'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
