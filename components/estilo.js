import * as React from 'react';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container_azul: {
    flex: 1,
    backgroundColor: '#60a3d9',
    borderBottomColor: '#000',
    borderBottomWidth: 5,
    //maxHeight: "70%",
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  fundoimg: {
    //borderRadius: 50,
    height: 150,
  },
  titulo: {
    color: '#000',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationColor: '#2e8bc0',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  titulo_home: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  subtitulo_home: {
    color: '#000',
    fontSize: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  blocoEstilo: {
    //backgroundColor: '#FAF',
    //shadowColor: '#FAF',
    //shadowRadius: 15,
    maxWidth: 300,
    maxHeight: 200,
    textAlign: 'center',
    justifyContent: 'center',
  },
  carrosel: {
    borderRadius: 3,
    borderWidth: 2,
    marginHorizontal: 30,
    
    //padding: 5,
    //width: 300,
    //shadowColor: '#FAF',
    //shadowRadius: 15,
  },
  txtStyle: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    //color: '#00F',
    //fontWeight: 'bold',
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 200,
    maxHeight: 300,
    marginHorizontal: 35,
    marginVertical: 20,
    //borderStyle: '',
  }
});

export default estilo;