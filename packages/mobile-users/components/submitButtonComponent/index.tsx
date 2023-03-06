import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const SubmitButtonComponent = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
