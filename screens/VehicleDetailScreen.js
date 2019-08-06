import React, { Component } from 'react';
import { View, Text , Image , ScrollView , StyleSheet ,SectionList} from 'react-native';
import IconText from '../components/IconText';
import RoundButton from '../components/RoundButton';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment'


const mockData = [
  {
    vin:'abc',
    manufacturer:'Tesla',
    model:'Model 3',
    year:2019
  }
]

export default class VehicleDetailScreen extends Component {
  constructor(props) {
    super(props);
    const vehicle = this.props.navigation.getParam('vehicle')
    this.state = {
      vehicle , 
      refreshing : false,
      offers :[],
      isForsale:true
    };
  }

  getOffers = ()=>{
      fetch('http://13.124.6.135:3000/api/Offer')
      .then(res=>res.json())
      .then(resData =>{
        console.log(resData)
        this.setState({
          offers : resData
        })
      })
  }
  componentDidMount(){
      this.getOffers()
  }

  static navigationOptions =({navigation})=>{
    const params = navigation.state.params || {}

    return {
      title : params.title
    }
  }
  render() {
    return (
      <View>
        <Text> VehicleDetailScreen </Text>
      </View>
    );
  }
}
