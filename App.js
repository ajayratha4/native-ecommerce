import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/theme';
import MainView from './src/layouts/MainView';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const isDarkMode = true;

  console.log('start', isDarkMode);

  return (
    <Provider store={store}>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <MainView />
      </PaperProvider>
    </Provider>
  );
};

export default App;
