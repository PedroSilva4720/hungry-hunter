import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    color: theme.colors.brown.standard,
    borderWidth: 1,
    borderColor: theme.colors.brown.standard,
    padding: 10,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
  text: {
    color: theme.colors.brown.standard,
    fontFamily: 'Inter_500Medium',
  },
});
