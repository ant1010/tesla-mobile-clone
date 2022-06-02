import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';



const CarItem= (props) => {

    const {name, tagline,taglineCTA, image} = props.cars;
    return(
        <View style = {styles.carContainer}>
        <ImageBackground source = {image} style = {styles.image}/>
        <View style = {styles.titles}>
          <Text style = {styles.title}>{name}</Text>
          <Text style = {styles.subtitle}>{tagline} <Text style = {styles.subtitleCTA}>{taglineCTA}</Text></Text>
        </View>
        <View style = {styles.buttonsContainer}>
        <StyledButton type = "primary" content = "custom order" onPress = {()=>(console.warn('custom order was pressed'))}></StyledButton>
        <StyledButton type = "secondary" content = "existing inventory" onPress = {()=>(console.warn('Existing inventory was pressed'))} ></StyledButton>
        </View>
        
        </View>
    );

};

export default CarItem;