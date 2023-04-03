import { theme } from './../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAra: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white.standard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordContainer: {
    left: 0,
    width: '100%',
  },
  forgotPassword: {
    fontFamily: 'Inter_300Light',
    fontSize: 12,
  },
  newUser: {
    fontFamily: 'Inter_300Light',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
