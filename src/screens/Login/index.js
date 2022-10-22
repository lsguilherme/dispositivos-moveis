import React from "react";

import { Avatar, Button, Input } from "react-native-elements";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";

export function Login({ navigation }) {
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
          />

          <Input
            secureTextEntry={true}
            label="Senha"
            placeholder="Senha" 
            containerStyle={styles.inputContainerStyle}
          />
        </View>

        <View >
          <Button 
            title="Entrar" 
            onPress={()=>navigation.navigate('ListaContatos')}
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
