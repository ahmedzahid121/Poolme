import React from 'react'
import { Text, View, Dimensions } from 'react-native';
import Map from '@/components/HomeMap/Map';
import CarTypes from '@/components/CarpoolTypes/carTypes';

const resultSearch = () => {
  return (
    <View style={{display:'flex'}}>

      <View style={{height: Dimensions.get('window').height- 600}}>
        <Map/>
      </View>

      <View style={{height:600, backgroundColor: '#C0B9F7', width:'100%'}}>
        <CarTypes/>
      </View>


    </View>
  )
}

export default resultSearch