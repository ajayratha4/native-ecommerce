import {View} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';

const About = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Text>About</Text>
    </View>
  );
};

export default About;
