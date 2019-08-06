import React, { Component } from 'react';
import { View, Text , TouchableOpacity , FlatList , StyleSheet} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons'
import VehicleItem from '../components/VehcleItem'

const mockData = [
  {
    vin: 'abc',
    manufacturer: 'Tesla',
    model: 'Model 3',
    year: 2018,
    image:
      'https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801',
  },
  {
    vin: 'abc123',
    manufacturer: 'Tesla',
    model: 'Model 3',
    year: 2017,
    image:
      'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524',
  },
];

export default class MyVehicleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing : false
    };
  }
static navigationOptions = ({navigation})=>{
  const params = navigation.state.params || {};

  return {
    headerRight:(
      <TouchableOpacity
        style={{padding:5, paddingRight:15}}
        onPress={()=>{ navigation.navigate('VehicleEditorStack')}}
      >
      <SimpleLineIcons name={'plus'} size={28} color={'white'}/>
      </TouchableOpacity>
    ),
   title : 'My Cars'   
  }
}
  render() {
    return (
      <View>
        <Text> MyVechicleScreen </Text>
      </View>
    );
  }
}
