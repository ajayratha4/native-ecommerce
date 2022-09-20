import {View, FlatList, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Chip, Text, useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Product = ({route, navigation}) => {
  const {colors} = useTheme();

  const {
    item: {name, price, image, description, quantity, category, tag, review},
  } = route.params;

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView>
        <View>
          <Text variant="headlineLarge">{name}</Text>
          <Image
            style={{width: '100%', height: 400}}
            source={{
              uri: image[0],
            }}
          />
        </View>
        <View
          style={{
            margin: 10,
            paddingBottom: 80,
            backgroundColor: colors.secondaryContainer,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
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
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 10,
          alignItems: 'center',
        }}>
        <Button
          style={{width: '80%', height: 50, justifyContent: 'center'}}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() => navigation.navigate('Cart')}>
          Add To Cart
        </Button>
      </View>
    </View>
  );
};

export default Product;
