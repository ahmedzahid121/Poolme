import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


const SplashScreen = () => {
    return (
      <View style={styles.container}>
        
        <Image source={require('../../assets/images/Logor.jpg')} style={styles.image}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black', // Set your desired background color
    },

    image: {
      width: 100,
      height: 100,
      resizeMode: "cover",
      
    }
  });
  
  export default SplashScreen;