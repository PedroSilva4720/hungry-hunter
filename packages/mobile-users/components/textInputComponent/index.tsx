import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';

export const TextInputComponent = ({
  label,
  passwordSecure = false,
}: {
  label: string;
  passwordSecure?: boolean;
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        secureTextEntry={passwordSecure}
        autoCapitalize='none'
        style={styles.input}
        keyboardType='email-address'
      ></TextInput>
    </View>
  );
};
