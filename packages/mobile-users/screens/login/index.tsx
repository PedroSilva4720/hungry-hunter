import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';
import { TextInputComponent } from '../../components/textInputComponent';
import { SubmitButtonComponent } from '../../components/submitButtonComponent';
import { TitleComponent } from '../../components/titleComponent';

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
      <TitleComponent />
      <Text>Entrar</Text>
      <View style={styles.form}>
        <TextInputComponent label='Email' />
        <TextInputComponent label='Senha' passwordSecure />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <SubmitButtonComponent label='Login' />
        <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.newUser}>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};
