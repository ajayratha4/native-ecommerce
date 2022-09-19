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
          labelStyle={{fontSize: 18}}
          mode="text">
          skip
        </Button>
      </View>
    </AuthLayout>
  );
};

export default Onboarding;
