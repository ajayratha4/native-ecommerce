import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screen/Settings';
import TabStack from './TabStack';
import About from '../screen/About';
import CustomNavigationBar from './CustomNavigationBar';
import ProductList from '../screen/ProductList';
import Product from '../screen/ProductList/Product';
import Checkout from '../screen/Checkout';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default AppStack;

// import * as React from 'react';
// import {useState} from 'react';
// import {BottomNavigation} from 'react-native-paper';
// import Cart from '../screen/Cart';

// const AppStack = () => {
//   const [index, setIndex] = useState(0);
//   const routes = [
//     {
//       key: 'product',
//       title: 'Product',
//       focusedIcon: 'gift',
//       unfocusedIcon: 'gift-outline',
//     },
//     {key: 'cart', title: 'Cart', focusedIcon: 'album'},
//     {key: 'settings', title: 'Settings', focusedIcon: 'history'},
//   ];

//   const renderScene = BottomNavigation.SceneMap({
//     product: Product,
//     cart: Cart,
//     settings: Settings,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{index, routes}}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

// export default AppStack;
