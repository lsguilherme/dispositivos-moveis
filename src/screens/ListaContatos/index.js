import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header, Icon, Button, ListItem, Avatar,  } from "react-native-elements";

import axios from "axios";

import { styles } from "./styles";


export function ListaContatos({navigation}) {
  const [getData, setData] = useState([]);

  useEffect(() => {

    async function resgatarDados(){
      const result = await axios(
        'http://professornilson.com/testeservico/clientes',
      )
      setData(result.data);
    }
    resgatarDados();
  }, [])

  console.log(getData);

  const getUser = ({ item: user }) => (
    <ListItem 
      bottomDivider
      onPress={()=>navigation.navigate('AlteracaoContato', user )}
    >
      <Avatar source={{uri:"https://www.blexar.com/avatar.png"}}/>
      <ListItem.Content>
        <ListItem.Title>{user.nome}</ListItem.Title>
        <ListItem.Subtitle>{user.telefone}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (

     <View>
      <Header
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24 } }}
        rightComponent={
          <Button icon={<Icon name="add" size={20} color="white" 
          onPress={()=>navigation.navigate('CadastroContato')}/>} />
        }
      />
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={getData}
        renderItem={getUser}
      />
      
    </View>
  );
}
