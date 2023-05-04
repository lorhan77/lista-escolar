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
      
      <View  style={styles.item}>
     <FlatList 
       data = {listaMateriais }
       renderItem = {({item}) => 
       <Text> {item} </Text>
        } 
        /> 

    <FlatList 
       data = {valorMateriais }
       renderItem = {({item}) => 
       <Text> {item} </Text>
        } 
        /> 
       </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'stretch'
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
 
});
