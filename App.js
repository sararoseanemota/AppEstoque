import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <Text>CARREGANDO FONTES...</Text>;
  }else{
  return (
    <View style={styles.container}>
      {/*<StatusBar style="auto" />*/}

      <LinearGradient
      colors={['rgba(255, 137, 27, 1)', 'rgba(251, 164, 84, 1)']}
      style={styles.headerGradient}>
      <View style={styles.row1}>
        <Entypo name="menu" size={24} color="white" />
        <MaterialIcons name="logout" size={24} color="white" />
      </View>
        <Text style={styles.txtWelcome}>Bem-vindo(a), {'\n'}Usuário </Text> 
      </LinearGradient>   
      
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerGradient:{
    width: '100%',
    height: '30%',
    padding: 20,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  row1:{
    flexDirection: 'row',
    justifyContent:'space-between',
    margin: 20,
    alignItems: 'center',
  },
  txtWelcome:{
    color: 'white',
    fontSize: 28,
    fontFamily: 'Inter_900Black',
    marginLeft: 30

  }
});
