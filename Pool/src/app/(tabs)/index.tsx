import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreen from '@/src/Screens/HomeScreen/Home';
import Root from '@/src/Navigation/Root';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
