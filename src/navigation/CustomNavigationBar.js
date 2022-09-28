import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const CustomNavigationBar = props => {
  const {colors} = useTheme();

  const {navigation, back, route} = props;
  return (
    back && (
      <Appbar.Header style={{backgroundColor: colors.background}}>
        <Appbar.BackAction onPress={navigation.goBack} />
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
