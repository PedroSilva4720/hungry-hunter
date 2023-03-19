import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SubmitButtonComponent } from '../../components/submitButtonComponent';
import { TextInputComponent } from '../../components/textInputComponent';
import { TitleComponent } from '../../components/titleComponent';

import { axiosInstance } from '../../axios';
import { styles } from './styles';

export const CreateUser = () => {
  const [userName, setUserName] = React.useState<string>();
  const [userEmail, setUserEmail] = React.useState<string>();
  const [userPassword, setUserPassword] = React.useState<string>();
  const [confirmUserPassword, setConfirmUserPassword] =
    React.useState<string>();

  const handleSubmit = () => {
    try {
      if (userPassword == confirmUserPassword) {
        axiosInstance
          .post('user/create', {
            name: userName,
            email: userEmail,
            unHashedPassword: userPassword,
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(response => console.log(response));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TitleComponent />
      <Text>Dados do novo usuário</Text>
      <View style={styles.form}>
        <TextInputComponent
          label='Name'
          value={userName}
          setValue={setUserName}
        />
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
        <TextInputComponent
          label='Confirmar senha'
          passwordSecure
          value={confirmUserPassword}
          setValue={setConfirmUserPassword}
        />
        <SubmitButtonComponent
          label='Criar usuário'
          submitFunction={handleSubmit}
        />
      </View>
    </View>
  );
};
