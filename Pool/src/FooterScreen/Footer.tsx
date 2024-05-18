import Activity from '@/components/FooterComponent/Activity/Activity'
import Notification from '@/components/FooterComponent/Notification/Notification'
import Settings from '@/components/FooterComponent/Settings/Settings'
import React from 'react'
import { View, Text } from 'react-native-reanimated/lib/typescript/Animated'
import HomeScreen from '../Screens/HomeScreen/Home'
import HomeFoot from '@/components/FooterComponent/Home/HomeFoot'
import styleFoot from './styleFoot'

const Footer = () => {
    return (
      <View style = {styleFoot.FooterContainer}>
        <HomeFoot style = {styleFoot.FooterHome}/>
        <Activity style = {styleFoot.FooterActivity} />
        <Notification style = {styleFoot.FooterNotification} />
        <Settings  style = {styleFoot.FooterSetting}/>
        
      </View>
    )
  }
  
  export default Footer

  // Search for Tab.Navigator to put all these three screens into the navigation component to switch screens between