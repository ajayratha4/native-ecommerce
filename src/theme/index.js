import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 2,
  dark: false,
  colors: {
    ...MD3LightTheme.colors,
    background: '#f7f7f7',
    primary: '#6b5dd3',
    secondary: '#4388ff',
    onPrimary: '#f7f7f7',
  },
};
export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...MD3DarkTheme.colors,
    background: '#22252f',
    primary: '#6b5dd3',
    secondary: '#4388ff',
    onPrimary: '#f7f7f7',
  },
};
