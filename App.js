import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
    
      <CarItem name = {"Model X"} tagLine = {"Starting at 99,500"} image = {require("./assets/images/ModelX.jpeg")}/>
      <CarItem name = {"Model 3"} tagLine = {"Order Online for "} taglineCTA = {"Touchless Delivery"}image = {require("./assets/images/Model3.jpeg")}/>
      <CarItem name = {"Model S"} tagLine = {"Starting at 69,420"} image = {require("./assets/images/ModelS.jpeg")}/>
      <CarItem name = {"Model Y"} tagLine = {"Starting at 60,500"} image = {require("./assets/images/ModelY.jpeg")}/>


   
      
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
