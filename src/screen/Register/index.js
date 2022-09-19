import React from 'react';
import {useState} from 'react';
import {View, Alert} from 'react-native';

import {Button, TextInput, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {API} from '../../apis/const';
import useAxios from '../../apis/useAxios';
import AuthLayout from '../../components/AuthLayout';
import useSnackbar from '../../components/hooks/useSnackbar';
import {setlogin} from '../../redux/settings';
import {storeData} from '../../utils/asyncStorage';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {showAlert} = useSnackbar();

  const [value, setValue] = useState({});

  const {loading, refetch} = useAxios(API.Create, {skip: true});

  const onCompleted = async (res, err) => {
    console.log(res, err);
    if (err) {
      showAlert(err.message);
    } else if (res?.data?.token) {
      storeData(res?.data?.token);
      dispatch(setlogin(true));
    }
  };
  const onLogin = () => {
    const {email, name, password, confirmPassword} = value;

    if (!email || !name || !password || !confirmPassword) {
      showAlert('Email / Password should not be empty!');
      return null;
    }
    if (password === confirmPassword) {
      showAlert('Password abd Confirm Password should be same!');
      return null;
    }

    refetch({
      body: {name, email, password},
      onCompleted,
    });
  };

  const onChange = (newValue, key) => {
    setValue(previous => ({...previous, [key]: newValue}));
  };

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
          value={value.confirmPassword}
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
            loading={loading}
            disabled={loading}
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
