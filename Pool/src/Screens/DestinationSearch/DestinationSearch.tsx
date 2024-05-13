import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styleDes from './styleDes'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'

const DestinationSearch = () => {

    const [destination, setDestination] = useState('');
    const [origin, setOrigin] = useState('');

    const handleOriginChange = (text: string) => {
        setOrigin(text);
    };

    const handleDestinationChange = (text: string) => {
        setDestination(text);
    };

    const handleSearch = () => {
        onSearch(destination);
    }


    return (
        <View style={styleDes.Container}>
            <TextInput
                style={styleDes.InputText}
                placeholder="From"
                onChangeText={handleDestinationChange}
                value={destination}

                
            />
            
            

            <View style={styleDes.divider}></View>
            <TextInput
                style={styleDes.InputText}
                placeholder="Where to?"
                onChangeText={handleDestinationChange}
                value={origin}
            />

            <Feather name="navigation" size={24} color="#374249" style={styleDes.iconArrow} />
            <Feather name="map-pin" size={24} color="#374249" style={styleDes.icon} />
            <TouchableOpacity onPress={handleSearch}>
                
            </TouchableOpacity>
        </View>
    );
};

export default DestinationSearch

function onSearch(destination: string) {
    throw new Error('Function not implemented.')
}
