import React from 'react';
import {View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {Text, useTheme} from 'react-native-paper';

const AuthLayout = ({children}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}>
        <Text variant="displaySmall">Display small</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={{
          flex: 3,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: colors.background,
        }}>
        {children}
      </Animatable.View>
    </View>
  );
};

export default AuthLayout;
