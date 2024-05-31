import React from 'react'
import { View, Text} from 'react-native'
import HomeScreen from '../Screens/HomeScreen/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationSearch from '../DestinationSearch/DestinationSearch'
import ResultSearch from '../Screens/Result/resultSearch'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator();

const HomeRoot = () => {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
            <Stack.Screen name="ResultSearch" component={ResultSearch} />
        </Stack.Navigator>
    
  );
};

export default HomeRoot;