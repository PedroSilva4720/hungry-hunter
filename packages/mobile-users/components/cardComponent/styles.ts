import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 380,
    height: 240,
    marginBottom: 24,
    backgroundColor: theme.colors.mauve.mauve1,
    borderRadius: 8,

    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    color: '#000',
    padding: 16,
    justifyContent: 'space-between',
  },
});
