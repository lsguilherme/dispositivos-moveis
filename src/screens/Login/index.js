import React from "react";

import { Avatar, Button, Input } from "react-native-elements";
import { View } from "react-native";

import { styles } from "./styles";

export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: "https://www.blexar.com/avatar.png",
        }}
      />
      <Input placeholder="BASIC INPUT" />
      <Input placeholder="BASIC INPUT" />

      <Button title="Solid Button" onPress={()=>navigation.navigate('ListaContatos')}/>
      <Button title="Solid Button" onPress={()=>navigation.navigate('CadastroUsuarios')}/>
    </View>
  );
}
