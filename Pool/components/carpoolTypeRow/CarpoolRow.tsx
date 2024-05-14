import React from 'react'
import { View, Text, Image } from 'react-native'
import StyleRow from './Rowstyle';
import { Feather } from '@expo/vector-icons';

const CarpoolRow = () => {
    return (
      <View style={StyleRow.Container}>
        <View style={StyleRow.Sedan}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/Sedan.png')} />
          <View style={StyleRow.Price}><Text>Price</Text></View>
          <Text style={StyleRow.Text}>Location</Text>
          <Text style={StyleRow.Text}>Time</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
          </View>
        </View>
  
        <View style={StyleRow.Van}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/Van.png')} />
          <View style={StyleRow.Price}><Text>Price</Text></View>
          <Text style={StyleRow.Text}>Location</Text>
          <Text style={StyleRow.Text}>Time</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
          </View>
        </View>
  
        <View style={StyleRow.SUV}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/SUV.png')} />
          <View style={StyleRow.Price}><Text>Price</Text></View>
          <Text style={StyleRow.Text}>Location</Text>
          <Text style={StyleRow.Text}>Time</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#374249" style={StyleRow.iconUser} />
          </View>
        </View>
      </View>
    );
  }
  
  export default CarpoolRow;

