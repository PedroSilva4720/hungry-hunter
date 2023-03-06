import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';

export const TextInputComponent = ({
  label,
  passwordSecure = false,
  value,
  setValue,
}: {
  label: string;
  passwordSecure?: boolean;
  value: string | undefined;
  setValue: (arg0: string) => void;
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        secureTextEntry={passwordSecure}
        autoCapitalize='none'
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType='email-address'
      ></TextInput>
    </View>
  );
};
