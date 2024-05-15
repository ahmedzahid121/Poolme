import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'
import Map from '@/components/HomeMap/Map'
import HomeSearch from '@/components/HomeSearch/HomeSearch'

const HomeScreen = () => {
  return (
    <View >
      <View style={{height: Dimensions.get('window').height - 600}} >
        <Map/>
      </View>

      <View >
        <HomeSearch/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
 
  
});

export default HomeScreen

//style={{ flex: 1, backgroundColor: '#B48EDC', paddingTop: 40 }}