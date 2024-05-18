import Activity from '@/components/FooterComponent/Activity/Activity'
import Notification from '@/components/FooterComponent/Notification/Notification'
import Settings from '@/components/FooterComponent/Settings/Settings'
import React from 'react'
import { View, Text } from 'react-native-reanimated/lib/typescript/Animated'

const Footer = () => {
    return (
      <View>
        <Notification />
        <Settings />
        <Activity />
      </View>
    )
  }
  
  export default Footer

  // Search for Tab.Navigator to put all these three screens into the navigation component to switch screens between