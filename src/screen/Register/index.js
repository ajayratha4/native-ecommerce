import React from 'react';
import {useState} from 'react';
import {View, Alert} from 'react-native';

import {Button, TextInput, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {API} from '../../apis/const';
import useAxios from '../../apis/useAxios';
import AuthLayout from '../../components/AuthLayout';
import {setlogin} from '../../redux/settings';
import {getData, storeData} from '../../utils/asyncStorage';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  const {loading, refetch} = useAxios(API.Login, {skip: true});

  const onLogin = () => {
    const {email, name, password, confirmPassword} = value;

    if (email && password) {
      refetch({
        params: {
          email,
          password,
        },
        onCompleted: async (res, err) => {
          console.log(res, err);

          if (err) {
            console.log(err);
            Alert.alert(err.message);
          } else {
            storeData(res.token);
            dispatch(setlogin(true));
            console.log(res);
            const checkLogin = await getData();

            console.log(checkLogin);
          }
        },
      });
    } else {
    }
  };

  const onChange = (newValue, key) => {
    setValue(previous => ({...previous, [key]: newValue}));
  };

  if (loading) {
    <Text>loading</Text>;
  }

  return (
    <AuthLayout>
      <View>
        <TextInput
          label="Name"
          mode="outlined"
          placeholder="Your Name"
          value={value.name}
          onChangeText={newValue => onChange(newValue, 'name')}
          left={<TextInput.Icon icon="account" />}
        />

        <TextInput
          style={{marginTop: 20}}
          label="Email"
          mode="outlined"
          placeholder="Your Email"
          value={value.email}
          onChangeText={newValue => onChange(newValue, 'email')}
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          style={{marginTop: 20}}
          label="Password"
          mode="outlined"
          placeholder="Your Password"
          value={value.password}
          onChangeText={newValue => onChange(newValue, 'password')}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          style={{marginTop: 20}}
          label="Confirm Password"
          mode="outlined"
          placeholder="Confirm Password"
          value={value.password}
          onChangeText={newValue => onChange(newValue, 'confirmPassword')}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />
        <Button
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          labelStyle={{fontSize: 18}}
          mode="text"
          onPress={() => navigation.navigate('Login')}>
          New to the app? Register
        </Button>

        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Button
            style={{width: '80%', height: 50, justifyContent: 'center'}}
            labelStyle={{fontSize: 18, fontWeight: 'bold'}}
            mode="contained"
            onPress={onLogin}>
            Sign Up
          </Button>
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignInScreen;
