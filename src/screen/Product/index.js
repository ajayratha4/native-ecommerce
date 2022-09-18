import {View, Image, FlatList, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import CustomButton from '../../components/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Product = () => {
  const {response} = useAxios(API.Product);
  console.log(response, 'response');

  const renderItem = ({item}) => (
    <View
      style={{
        marginVertical: 5,
        flexDirection: 'row',
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        height: 200,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'red',
          height: '90%',
        }}>
        <Image
          style={{height: '100%', padding: 20, borderRadius: 15}}
          source={{
            uri: item?.image && item.image[0],
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 5,
          paddingVertical: 5,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 20}}>{item.name}</Text>
          <Text>{item.price.actualPrice}</Text>
        </TouchableOpacity>
        <CustomButton label={'Add to cart'} />
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 5,
        marginVertical: 5,
      }}>
      <FlatList
        data={response}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Product;
