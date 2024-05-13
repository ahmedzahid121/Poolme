import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native'
import { Feather } from '@expo/vector-icons'
import "@fontsource/maven-pro";
import styleSearch from './styleSearch';
import DestinationSearch from '@/src/Screens/DestinationSearch/DestinationSearch';

const HomeSearch = () => {

    const [searchActive, setSearchActive] = useState(false);

    const handleSearhToggle = () => {
        setSearchActive(!searchActive);
    };

    const handleDestinationSearch = (destination: any) => {
        console.log('Search for Destination:' , destination);
    };

    const handleCancelSearch = () => {
        setSearchActive(false);
    };


  return (
    <View style={styleSearch.SearchContainer}>
         {searchActive ? (
                <DestinationSearch onSearch={handleDestinationSearch} onCancel={handleCancelSearch} />
            ) : (
                    <>
                        <TouchableOpacity onPress={handleSearhToggle} style={styleSearch.inputButton}>
                            <Feather name="search" size={24} color="#ffffff" style={styleSearch.icon} />
                            <Text style={styleSearch.inputText}>Search</Text>
                        </TouchableOpacity>

                    
                
                    <Text style={styleSearch.favourite}>Favorite</Text>

                    <View style={styleSearch.FavContainer}>
                        <View style={styleSearch.logoContainer}>
                            <View style={styleSearch.iconWithText}>
                                <Feather name="home" size={24} color="#374249" style={styleSearch.icon} />
                                <Text style={styleSearch.iconText}>Home</Text>
                            </View>
                            <View style={styleSearch.iconWithText}>
                                <Feather name="briefcase" size={24} color="#374249" style={styleSearch.icon} />
                                <Text style={styleSearch.iconText}>Work</Text>
                            </View>
                            <View style={styleSearch.iconWithText}>
                                <Feather name="shopping-cart" size={24} color="#374249" style={styleSearch.icon} />
                                <Text style={styleSearch.iconText}>Shopping</Text>
                            </View>
                            <View style={styleSearch.iconWithText}>
                                <Feather name="map" size={24} color="#374249" style={styleSearch.icon} />
                                <Text style={styleSearch.iconText}>Travel</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styleSearch.favourite}>Recents</Text>
                    <View style={styleSearch.RecContainer}>
                        <View style={styleSearch.RecentLogo}>
                            <View style={styleSearch.logoItem}>
                                <Feather name="map-pin" size={24} color="#374249" style={styleSearch.icon} />
                                <Text>Auckland CBD</Text>
                            </View>
                            <View style={styleSearch.logoItem}>
                                <Feather name="map-pin" size={24} color="#374249" style={styleSearch.icon} />
                                <Text>Britomart</Text>
                            </View>
                            <View style={styleSearch.logoItem}>
                                <Feather name="map-pin" size={24} color="#374249" style={styleSearch.icon} />
                                <Text>Spark Arena</Text>
                            </View>
                        </View>
                    </View>
                </>
            )}
            
        </View>
  )
}



export default HomeSearch