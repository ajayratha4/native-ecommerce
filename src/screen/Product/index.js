import {View, Image, FlatList, Text} from 'react-native';
import React from 'react';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';

const Product = () => {
  const {response} = useAxios(API.Product);

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>

      <Image
        style={{width: 300, height: 500}}
        source={{
          uri: item?.image && item.image[0],
        }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={response}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Product;
