import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import Product from '../Product';

const Home = ({navigation}) => {
  return (
    <View>
      <CustomButton
        label={'Login'}
        onPress={() => navigation.navigate('Settings')}
      />
      <Product />
    </View>
  );
};

export default Home;
