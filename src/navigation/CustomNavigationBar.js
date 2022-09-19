import React from 'react';
import {Appbar} from 'react-native-paper';

const CustomNavigationBar = props => {
  const {navigation, back, route} = props;
  return (
    back && (
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={route.name} />
      </Appbar.Header>
    )
  );
};

export default CustomNavigationBar;
