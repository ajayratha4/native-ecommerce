import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthStack from './src/navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        {true ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
