import React, { Component } from 'react';
import { View, Text , Image , ScrollView , StyleSheet } from 'react-native';
import IconText from '../components/IconText';
import RoundButton from '../components/RoundButton';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment' 

export default class VehicleDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> VehicleDetailScreen </Text>
      </View>
    );
  }
}
