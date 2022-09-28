import {View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import ProductCardList from '../../components/ProductCardList';

const Cart = ({route, navigation}) => {
  const {colors} = useTheme();
  const {product} = route.params;
  console.log(product.name);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>Cart</Text>
      <ScrollView>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <ProductCardList
            item={product}
            onclickProduct={i => {
              console.log(i);
            }}
          />
        ))}
      </ScrollView>
      <View style={{marginTop: 5, alignItems: 'center'}}>
        <Button
          // loading={loading}
          // disabled={loading}
          style={{
            width: '80%',
            height: 50,
            justifyContent: 'center',
          }}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() => navigation.navigate('Checkout')}>
          checkout
        </Button>
      </View>
    </View>
  );
};

export default Cart;
