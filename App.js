import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import Navigation from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  console.log('start');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
