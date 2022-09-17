import React, {useState} from 'react';
import {SafeAreaView, View, Alert, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import useAxios from '../../apis/useAxios';
import {API} from '../../apis/const';
import {getData, storeData} from '../../utils/asyncStorage';
import {useDispatch} from 'react-redux';
import {setlogin} from '../../redux/settings';

const LoginScreen = ({navigation}) => {
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

            // navigation.navigate('AppStack');
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
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}></View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          value={value.email}
          onChangeText={value => onChange(value, 'email')}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          value={value.password}
          onChangeText={value => onChange(value, 'password')}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />

        <CustomButton label={'Login'} onPress={onLogin} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#091a6e', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
