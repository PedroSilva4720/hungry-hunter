import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { TextInputComponent } from '../../components/textInputComponent';
import { SubmitButtonComponent } from '../../components/submitButtonComponent';
import { TitleComponent } from '../../components/titleComponent';
import { axiosInstance } from '../../axios';

export const Login = ({ navigation }: { navigation: any }) => {
  const [userEmail, setUserEmail] = React.useState<string>();
  const [userPassword, setUserPassword] = React.useState<string>();

  const handleSubmit = () => {
    axiosInstance
      .post(
        '/user/',
        {},
        {
          auth: {
            username: userEmail!,
            password: userPassword!,
          },
        }
      )
      .then(response => {
        console.log(response);
      });
  };

  return (
    <View style={styles.container}>
      <TitleComponent />
      <Text>Entrar</Text>
      <View style={styles.form}>
        <TextInputComponent
          label='Email'
          value={userEmail}
          setValue={setUserEmail}
        />
        <TextInputComponent
          label='Senha'
          passwordSecure
          value={userPassword}
          setValue={setUserPassword}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <SubmitButtonComponent label='Login' submitFunction={handleSubmit} />
        <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.newUser}>Não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};
