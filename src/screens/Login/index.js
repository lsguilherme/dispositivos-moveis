import React, { useState } from "react";

import { Avatar, Button, Input } from "react-native-elements";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";

import { firebaseConfig } from '../../config/firebase';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export function Login({ navigation }) {
  const [getEmail, setEmail] = useState('');
  const [getSenha, setSenha] = useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const entrar = () => {  
  signInWithEmailAndPassword(auth, getEmail, getSenha)
  .then(userCredential => {
    userCredential.user;
    console.log('Entrar na conta', getEmail)
    navigation.navigate('ListaContatos')
    })
    .catch(error => console.log(error))
  }
  return (

    <ScrollView>
      <View style={styles.container}>
        
        <View style={styles.avatar}>
          <Avatar
            rounded
            source={{
              uri: "https://www.blexar.com/avatar.png",
            }}
            size='xlarge'
          />
        </View>

        <View style={{marginTop:10}}>
          <Input 
            label="Login" 
            placeholder="Login"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setEmail(text)}
            value={getEmail}
          />

          <Input
            secureTextEntry={true}
            label="Senha"
            placeholder="Senha" 
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setSenha(text)}
            value={getSenha}
          />
        </View>

        <View >
          <Button 
            title="Entrar" 
            onPress={entrar}
            buttonStyle={styles.button}
          />
          <Button 
            title="Cadastrar-se" 
            onPress={()=>navigation.navigate('CadastroUsuarios')}
            buttonStyle={{backgroundColor:'red', marginTop:10}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
