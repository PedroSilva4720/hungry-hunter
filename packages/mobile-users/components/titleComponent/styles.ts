import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 86,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.red.standard,
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
  },
});
