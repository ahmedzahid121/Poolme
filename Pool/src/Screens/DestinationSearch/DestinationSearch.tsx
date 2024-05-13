import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styleDes from './styleDes'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

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
            <GooglePlacesAutocomplete
                placeholder='From'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR_GOOGLE_API_KEY',
                    language: 'en',
                }}
                styles={{
                    container: styleDes.InputText, // Apply your TextInput styles here
                    textInput: { flex: 1 }, // Adjust as needed
                }}
            />
            
            <View style={styleDes.divider}></View>
            
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR_GOOGLE_API_KEY',
                    language: 'en',
                }}
                styles={{
                    container: styleDes.InputText, // Apply your TextInput styles here
                    textInput: { flex: 1 }, // Adjust as needed
                }}
            />

            <Feather name="navigation" size={24} color="#374249" style={styleDes.iconArrow} />
            <Feather name="map-pin" size={24} color="#374249" style={styleDes.icon} />

            <TouchableOpacity onPress={handleSearch}>
                {/* Render your search button here */}
            </TouchableOpacity>
        </View>
    );
};

export default DestinationSearch

function onSearch(destination: string) {
    throw new Error('Function not implemented.')
}
