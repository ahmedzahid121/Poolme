import React from 'react'
import { View, Text, Image } from 'react-native'
import StyleRow from './Rowstyle';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

const CarpoolRow = () => {

    
    return (
      <View style={StyleRow.Container}>
        <View style={StyleRow.Sedan}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/Sedan.png')} />
          <View style={StyleRow.Price}><Text>NZ$30.81</Text></View>
          <Text style={StyleRow.Text}>Preston Road - Britomart Place</Text>
          <Text style={StyleRow.TextTime}>8 min away</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
          </View>
        </View>

        
  
        <View style={StyleRow.Van}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/Van.png')} />
          <View style={StyleRow.Price}><Text>NZ$40.61</Text></View>
          <Text style={StyleRow.Text}>Ormistan - Auckland CBD</Text>
          <Text style={StyleRow.TextTime}>. 5 min away</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
          </View>
        </View>

        <View style={StyleRow.divider}></View>
  
        <View style={StyleRow.SUV}>
          <Image style={StyleRow.image} source={require('../../assets/images/Cars/SUV.png')} />
          <View style={StyleRow.Price}><Text>NZ$20.41</Text></View>
          <Text style={StyleRow.Text}>Albany - Takapuna</Text>
          <Text style={StyleRow.TextTime}>12 min away</Text>
          <View style={{ flexDirection: 'row' }}>
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
            <Feather name="user" size={24} color="#7B18E3" style={StyleRow.iconUser} />
          </View>
        </View>
      </View>

      
    );
  }
  
  export default CarpoolRow;

// further Down the line we have to render each of these Veiws to be connected to real life available cars