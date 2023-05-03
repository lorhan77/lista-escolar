//import { StatusBar } from 'expo-status-bar';
import { TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  let listaInicial = [ 'Caderno', 'Lapis', 'Caneta Azul']
  let [listaMateriais, definirListaMateriais] =  useState(listaInicial)

  let Valor = ['10', '5', '7']
  let [valorMateriais, definirValorMateriais] =  useState(Valor)
  return (
    <View style={styles.container}>
      <Text>Lista de Material Escolar 2023</Text>
      <TextInput  style={styles.input}
        placeholder={'Inserir Novo Item'} 
        onSubmitEditing={({nativeEvent})=>
        definirListaMateriais(listaMateriais.concat(nativeEvent.text))
        }
      /> 
         <TextInput  style={styles.input}
        placeholder={'Inserir Preço'}
        onSubmitEditing={({nativeEvent})=>
        definirValorMateriais(valorMateriais.concat(nativeEvent.text))
        }
      />
     <FlatList
       data = {[listaMateriais,valorMateriais] }
       renderItem = {({item, index}) => <Text style={styles.nome}> {item} {index}</Text>} 
       />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18
  },
  preco: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 10
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'stretch'
  }
 
});
