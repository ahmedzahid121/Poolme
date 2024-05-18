import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY ='AIzaSyCwk9ijPDzBuSVOeD9CUS3dG41U5OTuTIs'

const RouteMap = () => {

 

  const initialRegion = {
  latitude: -36.8485,
  longitude: 174.7633,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1
  };

  const origin = {
    latitude: -36.73126161975735,
    longitude: 174.7285423446079};

    const destination = {
      latitude: -36.8485,
      longitude: 174.7633,};

  return (
    <View >
      <MapView style={styles.map}
       
        initialRegion={initialRegion}
        >

        <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor='#C0B9F7'
              />

          <Marker
            coordinate={destination}
            title="Destination"
          />

          <Marker
            coordinate={origin}
            title="origin"
          />

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

export default RouteMap

//Use Flatlist to render real life data of the drivers and the Customer from the Back-end through Fetch data in express and node, js


