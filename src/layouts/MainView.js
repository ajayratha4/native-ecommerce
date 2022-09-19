import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';
import {setlogin} from '../redux/settings';
import {getData} from '../utils/asyncStorage';

const MainView = () => {
  console.log('start');
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.settings.isLogin);

  useEffect(() => {
    getData().then(res => {
      if (res) {
        dispatch(setlogin(true));
      }
    });
  }, [dispatch]);

  console.log(isLogin);

  return (
    <>
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>

      {false && (
        <Snackbar
          visible={true}
          //   onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {},
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      )}
    </>
  );
};

export default MainView;
