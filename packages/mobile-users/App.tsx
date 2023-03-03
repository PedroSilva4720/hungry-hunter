import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hungry Hunter</Text>
        <Text>Milhares de opções para acabar com a fome</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            autoCapitalize='none'
            style={styles.input}
            keyboardType='email-address'
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Senha</Text>
          <TextInput
            autoCapitalize='none'
            secureTextEntry={true}
            style={styles.input}
            keyboardType='email-address'
          ></TextInput>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Não possui cadastro?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.newUser}>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 86,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newUser: {
    fontFamily: 'Inter_300Light',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    left: 0,
    width: '100%',
  },
  forgotPassword: {
    fontFamily: 'Inter_300Light',
    fontSize: 12,
  },
  form: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#222831',
    borderWidth: 1,
    borderColor: '#222831',
    padding: 10,
    width: '100%',
  },
  text: {
    color: '#222831',
    fontFamily: 'Inter_500Medium',
  },
  buttonText: {
    color: '#eeeeee',
    fontFamily: 'Inter_500Medium',
  },
  title: {
    color: '#ff0000',
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
  },
  loginButton: {
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#ff0000',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
});
