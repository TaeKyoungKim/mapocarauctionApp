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

  renderItem=({item})=>{
    return(
      <View style = {{flexDirection:'row', justifyContent:'space-between', padding:10,paddingLeft:15}}>
        <Text style ={{fontSize :18, color:'#333'}}>
          {item.bidPrice}
        </Text>
        <View style={{flexDirection:'column' , marginRight: 5}}>
          <Text style ={{fontSize :13, color:'#aaa'}}>\
          {moment(item.timestemp).fromNow()}
          </Text>
        </View>
      </View>
    )
  }
  renderSectionHeader = ({ section: { title, data } }) => {
    if (title === 'info') {
      return (
        <View style={{ flexDirection: 'column' }}>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Image
              source={{ uri: this.state.vehicle.image }}
              style={{
                width: '100%',
                height: 150,
                resizeMode: 'cover',
              }}
            />
          </ScrollView>
          <View style={{ flexGrow: 1, paddingLeft: 10 }}>
            <View
              style={{
                position: 'absolute',
                height: '70%',
                width: StyleSheet.hairlineWidth,
                left: '50%',
                top: '15%',
                backgroundColor: '#aaa',
              }}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <IconText iconName={'ios-barcode'}>
                {this.state.vehicle.vin}
              </IconText>
              <IconText iconName={'ios-construct'}>
                {this.state.vehicle.manufacturer}
              </IconText>
              <IconText iconName={'ios-car'}>
                {this.state.vehicle.model}
              </IconText>
              <IconText iconName={'ios-calendar'}>
                {this.state.vehicle.year}
              </IconText>
            </View>
          </View>
        </View>
      );
    } else if (title === 'listing') {
      if (this.state.isForSale) {
        return (
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              marginTop: 30,
            }}
          >
            <Text style={{ color: 'tomato' }}>
              {this.state.isForSale ? '경매 진행중' : ''}
            </Text>
          </View>
        );
      } else {
        return (
          <View
            style={{
              marginTop: 30,
              paddingLeft: 15,
              paddingRight: 15,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#333' }}>진행중인 경매가 없습니다.</Text>
            <RoundButton
              style={{ marginTop: 10 }}
              iconName={'ios-trending-up'}
              title={'이 차를 경매에 등록하기'}
              onPress={() => {
                this.props.navigation.navigate('ListingEditor');
              }}
            />
          </View>
        );
      }
    }
  };
  refreshData = () => {
    this.setState({
      refreshing: true,
    });
    fetch('http://13.124.6.135:3000/api/Offer')
      .then(r => r.json())
      .then(result => {
        console.log(result);
        this.setState({
          vehicleListing: result,
          refreshing: false,
        });
      });
  };
  render() {
    return (
      <SectionList
        onRefresh={this.refreshData}
        refreshing={this.state.refreshing}
        sections={[
          {
            title: 'info',
            data: [],
          },
          {
            title: 'listing',
            data: this.state.offers,
          },
        ]}
        keyExtractor={item => item.transactionId}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              marginLeft: 20,
              width: '100%',
              backgroundColor: 'gray',
            }}
          />
        )}
      />
    );
  }
}

