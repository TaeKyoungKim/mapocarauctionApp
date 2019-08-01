import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen  from './screens/LoginScreen'
import AuctionListScreen from './screens/AuctionListScreen';


export default function App() {

  return (
    <View style = {styles.container}>
      
      <AuctionListScreen />
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    alignSelf : 'center',
    flexDirection : 'column',
    padding : 30,
    alignItems: 'center',
  },
});
