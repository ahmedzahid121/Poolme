import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import HomeMap from '@/components/HomeMap/Map'
import HomeSearch from '@/components/HomeSearch/HomeSearch'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#B48EDC', paddingTop: 40 }}>
      <View >
        <HomeMap/>
      </View>

      <View>
        <HomeSearch/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
 
  
});

export default HomeScreen