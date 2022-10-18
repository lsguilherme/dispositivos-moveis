import React from 'react';
import { View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

import { styles } from './styles';

export function CadastroUsuarios({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        leftComponent={
          <Button icon={<Icon name="home" size={20} color="white" 
          onPress={()=>navigation.navigate('Login')}/>} />
        }
      />
    </View>
  );
}