import {View, FlatList} from 'react-native';
import React from 'react';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import ProductCard from '../../components/ProductCard';
import {ActivityIndicator} from 'react-native-paper';

const Product = () => {
  const {response, loading} = useAxios(API.Product);

  if (loading) {
    return <ActivityIndicator size={50} style={{flex: 1}} animating={true} />;
  }

  return (
    <View>
      <FlatList
        numColumns={2}
        data={response}
        renderItem={ProductCard}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Product;
