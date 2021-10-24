import * as React from 'react';
import { Dimensions, ImageBackground, View, Text, StyleSheet } from 'react-native';
import Carousel from "react-native-reanimated-carousel";
import estilo from '../../components/estilo';

const { width } = Dimensions.get('window');

const data = [
  { imagem: require('../../assets/Images/a.jpg') },
  { imagem: require('../../assets/Images/b.jpg') },
  { imagem: require('../../assets/Images/c.jpg') },
];


export default function Musica() {
  const [index, setIndex] = React.useState('0');
  const r = React.useRef(1);
  return (
    <View style={estilo.container_azul}>
      <View style={estilo.container_azul}>
        <Text style={estilo.titulo_home}>Jago</Text>
        <Text style={estilo.subtitulo_home}>Ready you go!</Text>
        <View style={estilo.blocoEstilo} >
          <Carousel
            timingConfig={{ duration: 500 }}
            autoPlayInterval={5000}
            autoPlay={true}
            ref={r}
            mode="parallax"
            width={width}
            data={data}
            onSnapToItem={(index) => {
              console.log('current index:', index);
            }}
            renderItem={({ imagem }, index) => {
              return (
                <View style={estilo.carrosel}>
                <ImageBackground
                  source={imagem}
                  style={estilo.fundoimg}
                  resizeMode="cover">
                </ImageBackground>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={estilo.container}>
      <Text style={estilo.titulo}>Serviços</Text>
      </View>
    </View>


  );
}

