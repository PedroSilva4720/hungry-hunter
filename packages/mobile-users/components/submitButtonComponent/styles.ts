import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  loginButton: {
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: theme.colors.red.standard,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.white.standard,
    fontFamily: 'Inter_500Medium',
  },
});
