import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';

const CustomNavigationBar = props => {
  const {colors} = useTheme();

  const {navigation, back, route} = props;
  return (
    back && (
      <Appbar.Header style={{backgroundColor: colors.background}}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={route.name} />
      </Appbar.Header>
    )
  );
};

export default CustomNavigationBar;
