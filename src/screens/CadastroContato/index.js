import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { Button, Header, Input } from "react-native-elements";

import axios from "axios";

import { styles } from "./styles";

export function CadastroContato({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getCpf, setCpf] = useState();
  const [getId, setId] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getAlterar, setAlterar] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { cpf } = route.params;
      const { id } = route.params;
      const { email } = route.params;
      const { telefone } = route.params;
      const { alterar } = route.params;

      setNome(nome);
      setCpf(cpf);
      setId(id);
      setEmail(email);
      setTelefone(telefone);
      setAlterar(alterar);
    }
  }, []);

  async function inserirDados() {
    await axios
      .post("http://professornilson.com/testeservico/clientes", {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      })
      .then((response) => {
        setNome('');
        setEmail('');
        setTelefone('');
        alert('Adicionado com sucesso!')
      })
      .catch((error) => console.log(error));
  }

  async function alterarDados() {
    await axios
      .put("http://professornilson.com/testeservico/clientes/" + getId, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      }).then(function(){
        alert('Alterado com sucesso!')
      })
      }

  function excluirDados(){
    axios.delete("http://professornilson.com/testeservico/clientes/" + getId)
    .then(function(response){
      setNome('')
      setEmail('')
      setTelefone('')
      alert('Excluido com sucesso!')
    })
    .catch((error) => console.log(error))
  }



  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: "Contato",
            style: { color: "#fff", fontSize: 24 },
          }}
          leftComponent={
              <TouchableOpacity
              onPress={() => navigation.navigate("ListaContatos")}>
              <Image
                source={require('../../assets/iconBack.png')}
                tintColor="white"
                
              />
          </TouchableOpacity>
            }
        />

        <View style={{ marginTop: 50 }}>
          <Input
            label="Nome"
            placeholder="Nome"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setNome(text)}
            value={getNome}
          />

          <Input
            label="Email"
            placeholder="Email"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setEmail(text)}
            value={getEmail}
          />

          <Input
            label="Telefone"
            placeholder="Telefone"
            containerStyle={styles.inputContainerStyle}
            onChangeText={(text) => setTelefone(text)}
            value={getTelefone}
          />
        </View>
        {!getAlterar ? (
          <Button
            title="Salvar"
            buttonStyle={{ width: 290 }}
            onPress={() => inserirDados()}
          />
        ) : (
          <Button
            title="Alterar"
            buttonStyle={{ width: 290, marginTop:10 }}
            onPress={() => alterarDados()}
          />
        )}

        { getAlterar ? (
          <Button
          title="Excluir"
          buttonStyle={{ width: 290, marginTop: 10, backgroundColor: 'red' }}
          onPress={() => excluirDados()}
        />
        ) : (
          null
        )}
      </View>
    </ScrollView>
  );
}
