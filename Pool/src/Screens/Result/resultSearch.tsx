import React from 'react'
import { Text, View, Dimensions } from 'react-native';
import RouteMap from '@/components/RouteMap/RouteMap';
import CarTypes from '@/components/CarpoolTypes/carTypes';
import { useRoute } from '@react-navigation/native';

const resultSearch = () => {

  const route = useRoute();

  console.log(route.params);

  return (
    <View style={{display:'flex'}}>

      <View style={{height: Dimensions.get('window').height- 600}}>
        <RouteMap/>
      </View>

      <View style={{height:600, backgroundColor: '#C0B9F7', width:'100%'}}>
        <CarTypes/>
      </View>


    </View>
  )
}

export default resultSearch