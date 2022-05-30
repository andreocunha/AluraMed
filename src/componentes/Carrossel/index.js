import React, { useState, useEffect, useRef } from 'react';
import {View, FlatList, Image } from 'react-native';
import styles from './styles';

export function Carrossel({ data, tempoAnimacao = 2500}){
  const [sliderIndex, setSliderIndex] = useState(0);
  const [maxSliderIndex, setMaxSliderIndex] = useState(2);

  const carouselRef = useRef(null);

  function scrollAutomatico(){
    if(sliderIndex < maxSliderIndex){
      setSliderIndex(sliderIndex + 1);
    }else{
      setSliderIndex(0);
    }
  }

  useEffect(() => {
    carouselRef.current.scrollToIndex({ index: sliderIndex });

    const interval = setInterval(() => {
      scrollAutomatico();
    }, tempoAnimacao);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        scrollToIndex={sliderIndex}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Image
            source={item.imagem}
            style={[styles.image,
              index === data.length - 1 ? { marginRight: 200 } : null
            ]}
            resizeMode="contain"
            blurRadius={sliderIndex === index ? 0 : 5}
          />
        )}
        ref={carouselRef}
      />
    </View>
  )
}