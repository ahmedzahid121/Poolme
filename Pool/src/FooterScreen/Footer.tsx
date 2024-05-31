import Activity from '@/components/FooterComponent/Activity/Activity'
import Notification from '@/components/FooterComponent/Notification/Notification'
import Settings from '@/components/FooterComponent/Settings/Settings'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../Screens/HomeScreen/Home'
import HomeFoot from '@/components/FooterComponent/Home/HomeFoot'
import styleFoot from './styleFoot'

const Footer = () => {
    return (
      <View style = {styleFoot.FooterContainer}>

        <View style = {styleFoot.FooterHome}>
        <HomeFoot />
        </View>
        
        <View style = {styleFoot.FooterActivity}>
        <Activity  />
        </View>
        
        <View style = {styleFoot.FooterNotification}> 
        <Notification  />
        </View>
        
        <View style = {styleFoot.FooterSetting}>
        <Settings  />
        </View>
        
        
      </View>
    )
  }
  
  export default Footer

  // Search for Tab.Navigator to put all these three screens into the navigation component to switch screens between