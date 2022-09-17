import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const Home = ({navigation}) => {
  return (
    <View>
      <CustomButton
        label={'Login'}
        onPress={() => navigation.navigate('Settings')}
      />
      <Text> Home</Text>
    </View>
  );
};

export default Home;
