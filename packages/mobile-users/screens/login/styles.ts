import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
