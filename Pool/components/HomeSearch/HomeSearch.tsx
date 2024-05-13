import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import "@fontsource/maven-pro";

const HomeSearch = () => {
  return (
    <View style={styles.SearchContainer}>
        <View style={styles.inputButton}>
            <Feather name="search" size={24} color="#ffffff" style={styles.icon} />

            <Text style={styles.inputText}>Search </Text>

            

        </View>

        <Text style={styles.favourite}>Favorite</Text>

        <View style={styles.FavContainer}>
            <View style={styles.logoContainer}>
              <View style={styles.iconWithText}>
                <Feather name="home" size={24} color="#374249" style={styles.icon} />
                <Text style={styles.iconText}>Home</Text>
              </View>
              <View style={styles.iconWithText}>
                <Feather name="briefcase" size={24} color="#374249" style={styles.icon} />
                <Text style={styles.iconText}>Work</Text>
              </View>
              <View style={styles.iconWithText}>
                <Feather name="shopping-cart" size={24} color="#374249" style={styles.icon} />
                <Text style={styles.iconText}>Shopping</Text>
              </View>
              <View style={styles.iconWithText}>
                <Feather name="map" size={24} color="#374249" style={styles.icon} />
                <Text style={styles.iconText}>Travel</Text>
              </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    SearchContainer:{
        backgroundColor: '#ffffff',
        margin: 0,
        borderRadius: 25,
        height: 900,

    },
 
    inputButton:{
        backgroundColor: '#7B18E3',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
    },

    inputText:{
        color: 'white',
        fontFamily: 'Maven Pro',
    },

    FavContainer:{
        borderRadius: 25,
        padding: 20,
        borderWidth: 2,
        borderColor: '#7B18E3',
        margin: 20,
    },

    logoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    iconText:{
        marginTop: 5,
    },

    iconWithText: {
        alignItems: 'center',
    },

    favourite:{
        color: '#696969',
        fontWeight: 'bold',
        margin: 2,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: -10
    }
  

  
});

export default HomeSearch