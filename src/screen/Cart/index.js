import {View, ScrollView} from 'react-native';
import React from 'react';
import {ActivityIndicator, Button, Text, useTheme} from 'react-native-paper';
import ProductCardList from '../../components/ProductCardList';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';

const Cart = ({navigation}) => {
  const {colors} = useTheme();

  const {response = [], loading} = useAxios(API.GetOrders, {
    params: {status: 'cart'},
  });

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, backgroundColor: colors.background}}
        size={50}
        animating={true}
      />
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>Cart</Text>
      <ScrollView>
        {response.map(item => (
          <ProductCardList
            item={item.productId}
            onclickProduct={i => {
              console.log(i);
            }}
          />
        ))}
      </ScrollView>
      <View style={{marginTop: 5, alignItems: 'center'}}>
        <Button
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
