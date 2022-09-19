import * as React from 'react';
import {View} from 'react-native';
import {Button, Card, Title, Paragraph, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = ({item}) => {
  const {name, price, image, review} = item;

  return (
    <Card style={{flex: 1, margin: 5}}>
      <Card.Cover source={{uri: image[0]}} />
      <Card.Content>
        <Text variant="bodyLarge">{name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{textDecorationLine: 'line-through', marginRight: 2}}>
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
      </Card.Content>

      <Button
        mode="Outlined"
        size="small"
        style={{alignItems: 'center', justifyContent: 'center'}}>
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;
