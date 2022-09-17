import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const MainView = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      <CustomButton label={'Header'} onPress={() => navigation.goBack()} />
      {children}
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
