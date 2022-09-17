import {View, Text} from 'react-native';
import React from 'react';
import MainView from '../../layouts/MainView';

const Profile = ({navigation}) => {
  return (
    <MainView navigation={navigation}>
      <View>
        <Text>Profile</Text>
      </View>
    </MainView>
  );
};

export default Profile;
