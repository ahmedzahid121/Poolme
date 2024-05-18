import React from 'react'
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationSearch from '../Screens/DestinationSearch/DestinationSearch'
import resultSearch from '../Screens/Result/resultSearch'


const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
     
      
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="ResultSreach" component={resultSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;