import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import "@fontsource/maven-pro";
import styleSearch from './styleSearch';

const HomeSearch = () => {
  return (
    <View style={styleSearch.SearchContainer}>
        <View style={styleSearch.inputButton}>
            <Feather name="search" size={24} color="#ffffff" style={styleSearch.icon} />

            <Text style={styleSearch.inputText}>Search </Text>

            

        </View>

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
    </View>
  )
}



export default HomeSearch