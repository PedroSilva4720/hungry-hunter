import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';

export const Login = ({ navigation }: { navigation: any }) => {
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
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.newUser}>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};
