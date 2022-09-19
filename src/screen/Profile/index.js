import {View, Text} from 'react-native';
import React from 'react';
import MainView from '../../layouts/AppView';
import CustomButton from '../../components/CustomButton';
import {removeValue} from '../../utils/asyncStorage';
import {useDispatch} from 'react-redux';
import {setlogin} from '../../redux/settings';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setlogin(false));
    removeValue();
  };
  return (
    <MainView navigation={navigation}>
      <View>
        <Text>Profile</Text>
        <CustomButton label={'Logout'} onPress={logOut} />
      </View>
    </MainView>
  );
};

export default Profile;
