import * as React from 'react';
import {View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCardList = ({item, onclickProduct}) => {
  const {name, price, image, review} = item;

  return (
    <Card style={{flex: 1, margin: 5}} onPress={() => onclickProduct(item)}>
      <View style={{flexDirection: 'row'}}>
        <Card.Cover style={{flex: 1}} source={{uri: image[0]}} />
        <Card.Content style={{flex: 1}}>
          <Text variant="bodyLarge">{name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{textDecorationLine: 'line-through', marginRight: 2}}>
                {price.actualPrice}
              </Text>
              <Text>₹{price.discountPrice}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="star-sharp" />
              <Ionicons name="star-sharp" />
              <Ionicons name="star-sharp" />
              <Ionicons name="star-sharp" />
            </View>
          </View>
          <Button
            mode="Outlined"
            size="small"
            style={{alignItems: 'center', justifyContent: 'center'}}>
            remove
          </Button>
        </Card.Content>
      </View>
    </Card>
  );
};

export default ProductCardList;
