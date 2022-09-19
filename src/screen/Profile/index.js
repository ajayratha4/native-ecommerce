import {View} from 'react-native';
import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import {removeValue} from '../../utils/asyncStorage';
import {useDispatch} from 'react-redux';
import {setlogin} from '../../redux/settings';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const {colors} = useTheme();

  const logOut = () => {
    dispatch(setlogin(false));
    removeValue();
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>Profile</Text>
      <Button
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        labelStyle={{fontSize: 18}}
        mode="text"
        onPress={logOut}>
        logOut
      </Button>
    </View>
  );
};

export default Profile;
