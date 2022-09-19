import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const AppView = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      <CustomButton label={'Header'} onPress={() => navigation.goBack()} />
      {children}
    </View>
  );
};

export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
