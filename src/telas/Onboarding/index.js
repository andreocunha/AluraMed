import React, { useState } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import { Botao } from '../../componentes/Botao';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import itens from './cards';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF'/>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo} 
        />
        <View style={styles.carrosselArea}>
          { !fazerLogin && (
          <FlatList
            data={itens}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Image 
                source={item.imagem} 
                style={{ height: '100%', width: 150 }}
                resizeMode="contain"
              />  
            )}
          />)}
        </View>
        <Image 
          source={require('../../assets/medica.png')} 
          style={styles.medicaImg}
        />
        <FundoOndulado height={fazerLogin ? 400 : 250}>
          <View style={styles.infoArea}>
            { fazerLogin ?
            <Formulario 
              titulo="Olá! Acesse sua conta"
              texto="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
            />
            :
            <View>
              <Text style={styles.titulo}>Gerencie as suas consultas</Text>
              <Text style={styles.texto}>
                Você consegue gerenciar todas suas consultas e ver o tempo médio de cada, e a quantidade de consultas realizadas.
              </Text>
            </View>
            }
            <Botao 
              texto={fazerLogin? 'Entrar' : 'Começar'}
              state={fazerLogin}
              setState={setFazerLogin}
              navigation={navigation}
            />  
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}