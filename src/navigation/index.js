import React from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../utils/asyncStorage';
import {setlogin} from '../redux/settings';
import {useEffect} from 'react';

const Navigation = () => {
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

  return isLogin ? <AppStack /> : <AuthStack />;
};

export default Navigation;
