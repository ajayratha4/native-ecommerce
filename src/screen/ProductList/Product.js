import {View, FlatList, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Chip,
  Text,
  useTheme,
} from 'react-native-paper';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import ProductCard from '../../components/ProductCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Product = ({route, navigation}) => {
  const {colors} = useTheme();
  const {item} = route.params;
  const [product, setProduct] = useState(item);
  const {response, loading, refetch} = useAxios(API.Product, {skip: true});

  useEffect(() => {
    setProduct(item);
    refetch({params: {category: item.category}});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, item._id]);

  const {name, price, image, description, quantity, category, tag, review} =
    product;

  const onclickProduct = item => {
    console.log(item);
    navigation.navigate('Product', {
      item,
    });
  };

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
      <ScrollView>
        <View style={{padding: 10}}>
          <Text variant="headlineLarge">{name}</Text>
          <Image
            style={{width: '100%', marginTop: 5, height: 400, borderRadius: 20}}
            source={{
              uri: image[0],
            }}
          />
        </View>
        <View
          style={{
            margin: 10,
            paddingBottom: 10,
            backgroundColor: colors.secondaryContainer,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text variant="titleMedium">Price ₹ </Text>
              <Text
                variant="headlineSmall"
                style={{
                  textDecorationLine: 'line-through',
                  color: colors.error,
                  marginRight: 2,
                }}>
                {price.actualPrice}
              </Text>
              <Text variant="headlineMedium">{price.discountPrice}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="star-sharp" color={colors.secondary} size={20} />
              <Ionicons name="star-sharp" color={colors.secondary} size={20} />
              <Ionicons name="star-sharp" color={colors.secondary} size={20} />
              <Ionicons name="star-sharp" color={colors.secondary} size={20} />
              <Ionicons name="star-sharp" color={colors.secondary} size={20} />
            </View>
          </View>
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text variant="titleMedium">Quantity : {quantity}</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text variant="titleMedium">Category : </Text>
            <Chip mode="outlined">{category}</Chip>
          </View>

          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text variant="headlineSmall">Product Details</Text>

            <Text variant="titleMedium">{description}</Text>
          </View>
          <View style={{marginLeft: 10, marginTop: 5}}>
            <FlatList
              numColumns={2}
              data={tag}
              renderItem={({item}) => <Chip mode="outlined">{item}</Chip>}
              keyExtractor={item => item}
            />
          </View>
        </View>
        <View
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: colors.secondaryContainer,
            borderRadius: 20,
            marginBottom: 60,
          }}>
          <Text variant="titleMedium">Similar Products</Text>

          <ScrollView horizontal>
            <FlatList
              horizontal
              data={response}
              renderItem={({item}) => (
                <ProductCard onclickProduct={onclickProduct} item={item} />
              )}
              keyExtractor={item => item._id}
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          style={{
            width: '45%',
            height: 50,
            justifyContent: 'center',
            marginRight: 5,
          }}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() =>
            navigation.navigate('AppCart', {
              product,
            })
          }>
          ADD TO CART
        </Button>
        <Button
          style={{
            width: '45%',
            height: 50,
            justifyContent: 'center',
            marginLeft: 5,
          }}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() => navigation.navigate('Checkout')}>
          BUY NOW
        </Button>
      </View>
    </View>
  );
};

export default Product;
