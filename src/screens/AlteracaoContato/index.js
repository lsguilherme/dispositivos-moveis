import React from 'react';
import { View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

import { styles } from './styles';

export function AlteracaoContato() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={
          <Button icon={<Icon name="add" size={20} color="white" 
          onPress={()=>navigation.navigate('CadastroContato')}/>} />
        }
      />
    </View>
  );
}