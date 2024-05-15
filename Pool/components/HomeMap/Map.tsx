import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

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
       
        initialRegion={initialRegion}
        >
          <Marker
            coordinate={{ latitude: -36.8485, longitude: 174.7633 }}
            title="Driver Marker"
            description="Some description" 
          >
            <Image
          source={require('../../assets/images/Cars/CarMarker.png')}
          style={styles.DriverMarker}/>
          </Marker>



          <Marker
            coordinate={{ latitude: -36.73126161975735,  longitude: 174.7285423446079 }}
            title="My Marker"
            description="Some description"
            
            
          >

          <Image
          source={require('../../assets/images/Cars/Marker.png')}
          style={styles.CustomerMarker}/>
          </Marker>



          

      </MapView>
         
         
          
     
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

  DriverMarker: {
    width: 50,
    height: 50,
  },
  CustomerMarker: {
    width: 50,
    height: 50,
  },
});

export default HomeMap

//Use Flatlist to render real life data of the drivers and the Customer from the Back-end


