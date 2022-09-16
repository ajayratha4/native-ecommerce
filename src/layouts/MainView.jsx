import {StyleSheet, View} from 'react-native';
import React from 'react';
import Home from '../screen/Home';

const MainView = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
