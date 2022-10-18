import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './src/screens/Login';
import { CadastroUsuarios } from './src/screens/CadastroUsuarios';
import { ListaContatos } from './src/screens/ListaContatos';
import { CadastroContato } from './src/screens/CadastroContato';
import { AlteracaoContato } from './src/screens/AlteracaoContato';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CadastroUsuarios" component={CadastroUsuarios}/>
        <Stack.Screen name="ListaContatos" component={ListaContatos}/>
        <Stack.Screen name="CadastroContato" component={CadastroContato}/>
        <Stack.Screen name="AlteracaoContato" component={AlteracaoContato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

