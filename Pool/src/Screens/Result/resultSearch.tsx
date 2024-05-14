import React from 'react'
import { Text, View } from 'react-native';
import HomeMap from '@/components/HomeMap/Map';
import CarTypes from '@/components/CarpoolTypes/carTypes';

const resultSearch = () => {
  return (
    <View>
        <HomeMap/>

        <CarTypes/>
    </View>
  )
}

export default resultSearch