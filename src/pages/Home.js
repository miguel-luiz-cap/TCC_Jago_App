import * as React from 'react';
import { Dimensions, ImageBackground, View, Text, StyleSheet } from 'react-native';
import Carousel from "react-native-reanimated-carousel";
import estilo from '../../components/estilo';
import ContatoBar from '../../components/contatoBar';

const { width } = Dimensions.get('window');

const data = [
  { imagem: require('../../assets/Images/b.jpg'), texto: "Mais rápidez" },
  { imagem: require('../../assets/Images/c.jpg'), texto: "Mais Qualidade" },
  { imagem: require('../../assets/Images/a.jpg'), texto: "Sem filas" },
];

export default function Home() {
  //const [index, setIndex] = React.useState('0');
  //const r = React.useRef(0);
  return (
    <><View style={estilo.container_azul}>
      <ImageBackground
        source={require('../../assets/logo2.png')}
        style={estilo.img_logo}
        resizeMode="cover">
      </ImageBackground>
      <Text style={estilo.titulo_home}>JaGo</Text>
      <Text style={estilo.subtitulo_home}>Ready you go!</Text>
      <View style={estilo.blocoEstilo}>
        <Carousel
          timingConfig={{ duration: 500 }}
          autoPlayInterval={5000}
          autoPlay={true}
          //ref={r}
          mode="parallax"
          width={width}
          data={data}
          /*onSnapToItem={(index) => {
            console.log('current index:', index);
          }}*/
          renderItem={({ imagem, texto }) => {
            return (
              <View style={estilo.carrosel}>
                <ImageBackground
                  source={imagem}
                  style={estilo.img}
                  resizeMode="cover">
                </ImageBackground>
                <Text style={estilo.txtHome}>{texto}</Text>
              </View>
            );
          } } />
      </View>
    </View><ContatoBar /></>
  );

}

