import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';

import { styles } from './styles';

export function AlteracaoContato({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Contato", style: { color: "#fff", fontSize:24 } }}
          leftComponent={
            <Button icon={<Icon name="home" size={20} color="white" 
            onPress={()=>navigation.navigate('ListaContatos')}/>} />
          }
        />
      <View style={{marginTop:50}}> 
              <Input
                label='Nome'
                placeholder='Nome'
                containerStyle={styles.inputContainerStyle}
              />
              
              <Input
                label='Email'
                placeholder='Email'
                containerStyle={styles.inputContainerStyle}
              />
              
              <Input
                label='Telefone'
                placeholder='Telefone'
                containerStyle={styles.inputContainerStyle}
              />
            </View>

            <View style={{marginTop: 10}}>
              <Button title='Alterar' buttonStyle={styles.button}
                onPress={()=>navigation.navigate('ListaContatos')}
              />
              <Button title='Excluir' buttonStyle={{backgroundColor:'red'}}
                onPress={()=>navigation.navigate('ListaContatos')}
              />
                
            </View>
      </View>
    </ScrollView>

  );
}