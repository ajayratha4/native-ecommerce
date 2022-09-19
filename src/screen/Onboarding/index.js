import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import AuthLayout from '../../components/AuthLayout';

const Onboarding = ({navigation}) => {
  return (
    <AuthLayout>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Text>logo</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Button
          style={{width: '100%'}}
          labelStyle={{fontSize: 18}}
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Button>

        <Button
          style={{width: '100%'}}
          labelStyle={{fontSize: 18}}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Button>

        <Button
          style={{width: '100%'}}
          labelStyle={{fontSize: 18}}
          mode="text"
          onPress={() => {}}>
          skip
        </Button>
      </View>
    </AuthLayout>
  );
};

export default Onboarding;
