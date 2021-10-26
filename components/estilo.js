import * as React from 'react';
import { StyleSheet } from 'react-native';

/*import { useFonts } from 'expo-font';
let [fontsLoaded] = useFonts({
  'Nunito': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
});*/

const estilo = StyleSheet.create({
  container_azul: {
    flex: 1,
    backgroundColor: '#60a3d9',
    alignItems: 'center',
    //borderBottomColor: '#000',
    //borderBottomWidth: 5,
    //maxHeight: "70%",
    //justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#EFF',
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
    color: '#FFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  subtitulo_home: {
    color: '#FF0',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textDecorationLine: 'underline'
  },
  blocoEstilo: {
    maxWidth: 500,
    maxHeight: 200,
    textAlign: 'center',
    justifyContent: 'center',
  },
  carrosel: {
    marginHorizontal: 20,
  },
  txtHome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
  txtStyle: {
    fontSize: 15,
    //margin: 4,
    textAlign: 'justify',
    padding: 10,
    paddingHorizontal: 20,
  },
  img: {
    height: 260,
    marginVertical: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  img_logo: {
    height: 100,
    width: 100,
    textAlign: 'center',
    tintColor: "#FFF",
    marginTop: 35,
  },
  card: {
    //shadowColor: '#000',
    //shadowRadius: 5,
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
  },

  card_title: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card_desc: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    //marginBottom: 10,
  },
  card_button: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    backgroundColor: "#00FFFF",
    opacity: 0.8,
    borderRadius: 20,
    //shadowColor: '#000',
    //shadowRadius: 5,
    borderWidth: 1,
  },
  img_card: {
    height: 300,
    margin: 5,
  },

  contato_box: {
    borderTopWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-end',
    backgroundColor: "#FFE",
  },
  txt_contato: {
    fontSize: 10,
  },
  img_contato: {
    height: 30,
    width: 30, 
  },
});
export default estilo;