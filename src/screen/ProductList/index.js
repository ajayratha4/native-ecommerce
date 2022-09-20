import {View, FlatList} from 'react-native';
import React from 'react';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import ProductCard from '../../components/ProductCard';
import {ActivityIndicator, useTheme} from 'react-native-paper';

const ProductList = ({navigation}) => {
  const {colors} = useTheme();

  const {response, loading} = useAxios(API.Product);

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, backgroundColor: colors.background}}
        size={50}
        animating={true}
      />
    );
  }

  const onclickProduct = item => {
    navigation.navigate('Product', {
      item,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        numColumns={2}
        data={response}
        renderItem={({item}) => (
          <ProductCard onclickProduct={onclickProduct} item={item} />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ProductList;
