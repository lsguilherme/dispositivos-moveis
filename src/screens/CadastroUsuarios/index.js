import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';

import { styles } from './styles';

export function CadastroUsuarios({navigation}) {
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
            label='Nome'
            placeholder='Nome'
            containerStyle={styles.inputContainerStyle}
          />
          
          <Input
            label='CPF'
            placeholder='CPF'
            containerStyle={styles.inputContainerStyle}
          />
          
          <Input
            label='Email'
            placeholder='Email'
            containerStyle={styles.inputContainerStyle}
          />
          
          <Input
            secureTextEntry={true}
            label='Senha'
            placeholder='Senha'
            containerStyle={styles.inputContainerStyle}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button title='Salvar' buttonStyle={{width:290}}
            onPress={()=>navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
}