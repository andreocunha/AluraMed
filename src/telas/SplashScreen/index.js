import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import splashAluraMed from '../../assets/splash-aluramed.json';
import { CommonActions } from '@react-navigation/native';

export default function SplashScreen({ navigation }) {

  function irParaOnboarding() {
    navigation.reset({
      index:0,
      routes:[ { name:"Onboarding" } ],
    });
  }

  return (
    <View style={styles.container}>
      <LottieView 
        source={splashAluraMed} 
        autoPlay 
        loop={false} 
        onAnimationFinish={irParaOnboarding}
      />
    </View>
  )
}