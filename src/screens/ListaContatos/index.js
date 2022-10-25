import React from "react";
import { TouchableOpacity, View, Text,  } from "react-native";
import { Header, Icon, Button, Card, Image,  } from "react-native-elements";

import { styles } from "./styles";

const users = [
  {
     nome: 'brynn',
     numero: '9999',
     avatar: 'https://www.blexar.com/avatar.png'
  }
]

export function ListaContatos({navigation}) {

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24 } }}
        rightComponent={
          <Button icon={<Icon name="add" size={20} color="white" 
          onPress={()=>navigation.navigate('CadastroContato')}/>} />
        }
      />

    <View style={styles.item}>
      <Text>Marco Andrade</Text>
    </View>
    <TouchableOpacity>
      <Card>
        {
          users.map((u, i) => {
            return (
              <View key={i} >
                <Image
                  resizeMode="cover"
                  source={{ uri: "https://www.blexar.com/avatar.png" }}
                />
                <Text>{u.nome}</Text>
                <Text>{u.numero}</Text>
              </View>
            );
          })
        }
      </Card>
    </TouchableOpacity>
      
    </View>
  );
}
