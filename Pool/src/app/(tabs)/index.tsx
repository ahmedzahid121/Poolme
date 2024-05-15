import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import ResultSearch from '@/src/Screens/Result/resultSearch';




export default function app() {
  
  return (
    
    <>
      <ResultSearch/>
    </>
   
   
    
  );
}

const styles = StyleSheet.create({
 
 
  
});

