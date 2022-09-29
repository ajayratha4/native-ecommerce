import {View, ScrollView} from 'react-native';
import React from 'react';
import {ActivityIndicator, Button, Text, useTheme} from 'react-native-paper';
import ProductCardList from '../../components/ProductCardList';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';

const Cart = ({navigation}) => {
  const {colors} = useTheme();

  const {
    response = [],
    loading,
    refetch,
  } = useAxios(API.GetOrders, {
    params: {status: 'cart'},
  });

  const {loading: removeLoading, refetch: removeRefetch} = useAxios(
    API.RemoveOrder,
    {
      skip: true,
    },
  );

  const onRemove = id => {
    removeRefetch({
      body: {
        status: 'cart',
        _id: id,
      },
      onCompleted: res => {
        refetch();
      },
    });
  };

  if (loading || removeLoading) {
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
        {response?.res?.map(item => (
          <ProductCardList
            quantity={item.quantity}
            item={item.productId}
            onClickRemove={() => onRemove(item._id)}
            onclickProduct={i => {
              console.log(i);
            }}
          />
        ))}
        <View>
          <Text>Total :{response.totalPrice}</Text>
        </View>
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
          onPress={() =>
            navigation.navigate('Checkout', {item: response?.res})
          }>
          checkout
        </Button>
      </View>
    </View>
  );
};

export default Cart;
