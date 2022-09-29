import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import ProductCardList from '../../components/ProductCardList';
import {ActivityIndicator, Button, useTheme} from 'react-native-paper';

const Checkout = ({route, navigation}) => {
  const {colors} = useTheme();

  // const {response = [], loading} = useAxios(API.GetOrders, {
  //   params: {status: 'order'},
  // });

  const {item} = route.params;

  // if (loading) {
  //   return (
  //     <ActivityIndicator
  //       style={{flex: 1, backgroundColor: colors.background}}
  //       size={50}
  //       animating={true}
  //     />
  //   );
  // }
  return (
    <View>
      <Text>Order Successful</Text>
      <Text>Total Order</Text>
      <ScrollView>
        {item?.map(item => (
          <ProductCardList
            showRemove={false}
            quantity={item.quantity}
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
          onPress={() => navigation.navigate('Home')}>
          Home Page
        </Button>
      </View>
    </View>
  );
};

export default Checkout;
