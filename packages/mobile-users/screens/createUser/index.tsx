import React from 'react';
import { Text, View } from 'react-native';
import { SubmitButtonComponent } from '../../components/submitButtonComponent';
import { TextInputComponent } from '../../components/textInputComponent';
import { TitleComponent } from '../../components/titleComponent';
import { styles } from './styles';

export const CreateUser = () => {
  const [userName, setUserName] = React.useState<string>();
  const [userEmail, setUserEmail] = React.useState<string>();
  const [userPassword, setUserPassword] = React.useState<string>();
  const [confirmUserPassword, setConfirmUserPassword] =
    React.useState<string>();

  const handleSubmit = () => {};

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
