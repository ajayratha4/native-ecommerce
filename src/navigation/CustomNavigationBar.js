import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {StackActions} from '@react-navigation/native';

const CustomNavigationBar = props => {
  const {colors} = useTheme();

  const {navigation, back, route} = props;

  const backAction = () => {
    navigation.dispatch(StackActions.pop(1));
    // navigation.goBack
  };

  return (
    back && (
      <Appbar.Header style={{backgroundColor: colors.background}}>
        <Appbar.BackAction onPress={backAction} />
        <Appbar.Content title={route.name} />
        <Feather
          onPress={() => navigation.navigate('Cart')}
          size={25}
          name="shopping-bag"
          style={{marginRight: 8}}
        />
      </Appbar.Header>
    )
  );
};

export default CustomNavigationBar;
