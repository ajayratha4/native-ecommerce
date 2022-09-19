import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import Navigation from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log('start');

  return (
    <Provider store={store}>
      <PaperProvider theme={() => theme(isDarkMode)}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
