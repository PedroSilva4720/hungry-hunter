import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const SubmitButtonComponent = ({
  label,
  submitFunction,
}: {
  label: string;
  submitFunction: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={submitFunction}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
