import React from 'react'
import { View, Text } from 'react-native'
import styleDes from './styleDes'
import { Feather } from '@expo/vector-icons'
import { GooglePlaceData } from 'react-native-google-places-autocomplete'

interface PlaceRowProps {
    data: GooglePlaceData;
  }
  
  const PlaceRow: React.FC<PlaceRowProps> = ({ data }) => {
    return (
      <View style={styleDes.row}>
        <View style={styleDes.iconContainer}>
          <Feather name="search" size={24} color="#374249" style={styleDes.iconSearch} />
        </View>
        <Text style={styleDes.locationText}>{data.description}</Text>
      </View>
    );
  };
  
  export default PlaceRow;