import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Dialog, Paragraph, Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';
import {openAlertSnackbar, setlogin} from '../redux/settings';
import {getData} from '../utils/asyncStorage';
import * as Animatable from 'react-native-animatable';

const MainView = () => {
  console.log('start');
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.settings.isLogin);
  const {open, message} = useSelector(state => state.settings.snackbar);

  // const isLogin = true;
  useEffect(() => {
    getData().then(res => {
      if (res) {
        dispatch(setlogin(true));
      }
    });
  }, [dispatch]);

  return (
    <>
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>

      {open && (
        <Snackbar
          visible={open}
          onDismiss={() => dispatch(openAlertSnackbar(null))}>
          {message}
        </Snackbar>
      )}
      {false && (
        <Dialog
          style={{flex: 1}}
          visible={true}
          onDismiss={() => console.log('lo')}>
          <Animatable.View animation="fadeInUpBig">
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => console.log('lo')}>Done</Button>
            </Dialog.Actions>
          </Animatable.View>
        </Dialog>
      )}
    </>
  );
};

export default MainView;
