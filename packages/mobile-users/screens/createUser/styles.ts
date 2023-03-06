import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
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
});
