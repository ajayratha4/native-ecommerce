import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from '../screen/Cart';
import Feather from 'react-native-vector-icons/Feather';
import Profile from '../screen/Profile';
import {useTheme} from 'react-native-paper';
import About from '../screen/About';
import ProductList from '../screen/ProductList';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: colors.background},
        tabBarInactiveTintColor: colors.outline,
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={ProductList}
        options={{
          //   tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: colors.primary},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'red'},
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
          tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          //   tabBarBadge: 2,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
