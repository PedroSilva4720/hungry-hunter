import { Text, View } from 'react-native';
import { SubmitButtonComponent } from '../../components/submitButtonComponent';
import { TextInputComponent } from '../../components/textInputComponent';
import { TitleComponent } from '../../components/titleComponent';
import { styles } from './styles';

export const CreateUser = () => {
  return (
    <View style={styles.container}>
      <TitleComponent />
      <Text>Dados do novo usuário</Text>
      <View style={styles.form}>
        <TextInputComponent label='Name' />
        <TextInputComponent label='Email' />
        <TextInputComponent label='Senha' passwordSecure />
        <TextInputComponent label='Confirmar senha' passwordSecure />
        <SubmitButtonComponent label='Criar usuário' />
      </View>
    </View>
  );
};
