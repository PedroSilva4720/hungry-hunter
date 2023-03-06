import { View, Text } from 'react-native';
import { styles } from './styles';

export const TitleComponent = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Hungry Hunter</Text>
      <Text>Milhares de opções para acabar com a fome</Text>
    </View>
  );
};
