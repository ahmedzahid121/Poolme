import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const HomeMap = () => {

  const initialRegion = {
  latitude: -36.8485,
  longitude: 174.7633,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1
  };

  return (
    <View >
      <MapView style={styles.map}
       
        initialRegion={initialRegion}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    
  },
});

export default HomeMap

//style={{ height: 300, backgroundColor: "#a0abff", justifyContent: 'center', alignItems: 'center' }}