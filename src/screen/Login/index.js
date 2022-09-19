import React from 'react';
import {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';

import {Button, TextInput, Text, useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {API} from '../../apis/const';
import useAxios from '../../apis/useAxios';
import AuthLayout from '../../components/AuthLayout';
import {setlogin} from '../../redux/settings';
import {getData, storeData} from '../../utils/asyncStorage';

const SignInScreen = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  const {loading, refetch} = useAxios(API.Login, {skip: true});

  const onLogin = () => {
    const {email, password} = value;
    console.log(email, password, 'email, password');
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

  return (
    <AuthLayout>
      <View>
        <TextInput
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

        <TouchableOpacity style={{marginTop: 20}}>
          <Text style={{color: colors.text, marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 50}}>
          <Button
            style={{width: '100%'}}
            loading={loading}
            disabled={loading}
            labelStyle={{fontSize: 18, fontWeight: 'bold'}}
            mode="contained"
            onPress={onLogin}>
            Sign In
          </Button>
        </View>

        <Button
          style={{marginTop: 15}}
          mode="text"
          onPress={() => navigation.navigate('Register')}>
          New to the app? Register
        </Button>
      </View>
    </AuthLayout>
  );
};

export default SignInScreen;
