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


export default function Home() {
  const [index, setIndex] = React.useState('0');
  const r = React.useRef(1);
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('../../assets/fundo.jpg')}
        style={estilo.fundoimg}
        resizeMode="cover">
        <View style={{ height: 300 }}>
          <Carousel
            timingConfig={{ duration: 500 }}
            autoPlayInterval={5000}
            autoPlay={true} 
            ref={r}
            mode="default"
            width={width}
            data={data}
            parallaxScrollingScale={0.8}
            onSnapToItem={(index) => {
              console.log('current index:', index);
            }}
            renderItem={({ imagem }, index) => {
              return (
                <ImageBackground
                  source={ imagem }
                  style={estilo.fundoimg}
                  resizeMode="cover">
                </ImageBackground>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>


  );
}

