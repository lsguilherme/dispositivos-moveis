import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header, Icon, Button, ListItem, Avatar,  } from "react-native-elements";

import axios from "axios";

import { styles } from "./styles";


export function ListaContatos({route, navigation}) {
  const [getData, setData] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    
    async function resgatarDados(){
      const result = await axios(
        'http://professornilson.com/testeservico/clientes',
      )
      setData(result.data);
    }
    resgatarDados();
  }, [load])

  const getUser = ({ item: user }) => (
    <ListItem 
      bottomDivider
      onPress={()=>navigation.navigate('CadastroContato', {nome: user.nome, telefone: user.telefone, cpf: user.cpf, id: user.id, alterar:true})}
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
