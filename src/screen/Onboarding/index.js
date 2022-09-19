import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import AuthLayout from '../../components/AuthLayout';
import {setlogin} from '../../redux/settings';
import {storeData} from '../../utils/asyncStorage';

const Onboarding = ({navigation}) => {
  const dispatch = useDispatch();
  const onSkip = () => {
    storeData('null');
    dispatch(setlogin(true));
  };
  return (
    <AuthLayout>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Text>logo</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Button
          style={{width: '80%', height: 50, justifyContent: 'center'}}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Button>

        <Button
          style={{width: '80%', height: 50, justifyContent: 'center'}}
          labelStyle={{fontSize: 18, fontWeight: 'bold'}}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Button>

        <Button
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          onPress={onSkip}
          labelStyle={{fontSize: 18}}
          mode="text">
          skip
        </Button>
      </View>
    </AuthLayout>
  );
};

export default Onboarding;
