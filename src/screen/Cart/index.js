import {View} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';

const Cart = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;
