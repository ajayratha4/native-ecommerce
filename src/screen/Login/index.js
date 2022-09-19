import React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {API} from '../../apis/const';
import useAxios from '../../apis/useAxios';
import AuthLayout from '../../components/AuthLayout';
import useSnackbar from '../../components/hooks/useSnackbar';
import {setlogin} from '../../redux/settings';
import {storeData} from '../../utils/asyncStorage';

const SignInScreen = ({navigation}) => {
  const {showAlert} = useSnackbar();
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  const {loading, refetch} = useAxios(API.Login, {skip: true});

  const onCompleted = async (res, err) => {
    if (err) {
      showAlert(err.message);
    } else if (res?.data?.token) {
      storeData(res.data.token);
      dispatch(setlogin(true));
    }
  };
  const onLogin = () => {
    const {email, password} = value;

    if (!email || !password) {
      showAlert('Email / Password should not be empty!');
      return null;
    }

    refetch({
      params: {
        email,
        password,
      },
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

        <Button
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 15,
          }}
          labelStyle={{fontSize: 18}}
          mode="text">
          Forgot password?
        </Button>
        <Button
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          labelStyle={{fontSize: 18}}
          mode="text"
          onPress={() => navigation.navigate('Register')}>
          New to the app? Register
        </Button>

        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Button
            style={{width: '80%', height: 50, justifyContent: 'center'}}
            loading={loading}
            disabled={loading}
            labelStyle={{fontSize: 18, fontWeight: 'bold'}}
            mode="contained"
            onPress={onLogin}>
            Sign In
          </Button>
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignInScreen;
