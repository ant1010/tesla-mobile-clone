import {View,Text,ImageBackground,FlatList,Dimensions} from 'react-native';
import styles from './styles.js';
import cars from './cars'
import CarItem from '../CarItem';

const CarsList= (props) => {

    
    return(
        
       <View style = {styles.container}><FlatList data = {cars} renderItem = {({item}) => <CarItem cars = {item}/>}keyExtractor={(item, index) => index.toString()}showsVerticalScrollIndicator={false}
       snapToAlignment={'start'}
       decelerationRate={'fast'}
       snapToInterval={Dimensions.get('window').height}/></View>
        )

};

export default CarsList;