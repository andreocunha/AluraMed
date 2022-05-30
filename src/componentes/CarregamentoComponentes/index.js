import React from 'react';
import { View, Image } from 'react-native';
import styles from '../CardConsulta/styles';
import shimmerImg from '../../assets/shimmer.gif';

export function ShimmerCardConsulta(){

  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
      <Image
        source={shimmerImg}
        style={[styles.foto, { overlayColor: '#fff' }]}
      />
        <View style={styles.informacoes}>
          <Image
            source={shimmerImg}
            style={{ overlayColor: '#fff', width: 200, height: 25 }}
          />
          <View style={styles.consultaArea}>
            <Image
              source={shimmerImg}
              style={{ overlayColor: '#fff', width: 100, height: 15, marginVertical: 5 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image
          source={shimmerImg}
          style={{ overlayColor: '#fff', width: 50, height: 10 }}
        />
        <View style={styles.botoesArea}>
          <Image
            source={shimmerImg}
            style={{ overlayColor: '#fff', width: '100%', height: 50, borderRadius: 8 }}
          />
        </View>
      </View>
    </View>
  )
}