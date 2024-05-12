import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Zahid</Text>
        <Image />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', // Set your desired background color
    },
  });
  
  export default SplashScreen;