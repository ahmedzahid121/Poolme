import React from 'react'
import { View, Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeRoot from './HomeRoot'


const Stack = createStackNavigator();

const Root = () => {
  return (
    
        <NavigationContainer>

            <HomeRoot/>
            
        </NavigationContainer>

  );
};

export default Root;


// add the Drawer navigator in here and try to create Footer on the screen with the Settings Screen. 