import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './screens/login';
import { CreateUser } from './screens/createUser';

import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_300Light,
} from '@expo-google-fonts/inter';
import { Home } from './screens/home';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreateUser' component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
