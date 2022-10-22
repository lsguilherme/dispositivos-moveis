import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Header, Icon, Button, ListItem } from "react-native-elements";

import { styles } from "./styles";


export function ListaContatos({navigation}) {
  
  const list = [
    {
      nome: 'Amy Farha',
      numero: 'Vice President',
      avatar_url: "https://www.blexar.com/avatar.png",
    },
    {
      nome: 'Chris Jackson',
      numero: 'Vice Chairman',
      avatar_url: "https://www.blexar.com/avatar.png",
    },
  ]

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24 } }}
        rightComponent={
          <Button icon={<Icon name="add" size={20} color="white" 
          onPress={()=>navigation.navigate('CadastroContato')}/>} />
        }
      />
      <TouchableOpacity>
        
      </TouchableOpacity>

      <View>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.nome}
            subtitle={l.numero}
            bottomDivider
          />
        ))
        }
      </View>
    </View>
  );
}
