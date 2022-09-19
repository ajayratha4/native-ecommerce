// import {DefaultTheme} from 'react-native-paper';
// import {
//   NavigationContainer,
//   DarkTheme as NavigationDarkTheme,
//   DefaultTheme as NavigationDefaultTheme,
// } from '@react-navigation/native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 2,
  dark: false,
  colors: {
    ...MD3LightTheme.colors,
    // primary: '#3333cc',
  },
};
export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...MD3DarkTheme.colors,
    // primary: '#3333cc',
  },
};
