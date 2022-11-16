import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';

import { styles } from './styles';

import { firebaseConfig } from '../../config/firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export function CadastroUsuarios({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [getSenha, setSenha] = useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, getEmail, getSenha)
    .then(userCredential => {
      alert('Conta criada!')
      userCredential.user;
    })
    .catch(error => alert(error.message))
  }
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Usuário", style: { color: "#fff", fontSize:24 }}}
          leftComponent={
            <Button icon={<Icon name="home" size={20} color="white" 
            onPress={()=>navigation.navigate('Login')}/>} />
          }
        />

        <View style={{marginTop:50}}> 
          
          <Input
            label='Email'
            placeholder='Email'
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setEmail(text)}
            value={getEmail}
          />
          
          <Input
            secureTextEntry={true}
            label='Senha'
            placeholder='Senha'
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setSenha(text)}
            value={getSenha}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button title='Salvar' buttonStyle={{width:290}}
            onPress={cadastrar}
          />
        </View>
      </View>
    </ScrollView>
  );
}