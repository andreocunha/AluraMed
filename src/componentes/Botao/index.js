import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Botao({ texto, state, setState, navigation }){
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => state === true ? 
        navigation.navigate('Principal') 
        : 
        setState(true)}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}