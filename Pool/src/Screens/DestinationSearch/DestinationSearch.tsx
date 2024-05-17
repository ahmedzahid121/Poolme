import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styleDes from './styleDes'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlaceRow from './placeRow'

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
        <View style={styleDes.InvincibleCont}>
        <View style={styleDes.Container}>

            
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        setOrigin(data.description);
                    }}
                    query={{
                        key: 'AIzaSyCwk9ijPDzBuSVOeD9CUS3dG41U5OTuTIs',
                        language: 'en',
                    }}
                    styles={{
                        container: styleDes.InputText,
                        textInput: {  height: 40, fontSize: 16 },
                        listView:{
                            position: 'absolute',
                            top: 150,
                            width: 300,
                            right: 5
                        },

                        separator: styleDes.seperator
                    }}

                    renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
                />
            

            <View style={styleDes.divider}></View>

            
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        setDestination(data.description);
                    }}
                    query={{
                        key: 'AIzaSyCwk9ijPDzBuSVOeD9CUS3dG41U5OTuTIs',
                        language: 'en',
                    }}
                    styles={{
                        container: styleDes.InputText,
                        textInput: {  height: 40, fontSize: 16 },

                        listView:{
                            position: 'absolute',
                            top: 98.5,
                            width: 300,
                            right: 5
                        },

                        separator: styleDes.seperator

                    }}
                />

            

            <Feather name="navigation" size={24} color="#374249" style={styleDes.iconArrow} />
            <Feather name="map-pin" size={24} color="#374249" style={styleDes.icon} />

            <TouchableOpacity onPress={handleSearch}>
                {/* Render your search button here */}
            </TouchableOpacity>
        </View>

        
    </View>

        
    );
};

export default DestinationSearch

function onSearch(destination: string) {
    throw new Error('Function not implemented.')
}
