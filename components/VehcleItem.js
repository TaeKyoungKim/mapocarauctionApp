import React , {Component} from 'react';
import {View, Text , TouchableOpacity ,StyleSheet} from  'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class VehcleItem extends Component {
    
    render(){
        return (
            <TouchableOpacity
                onPress = {this.props.onPress}
            >

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        height:90,
        flexDirection:'row',
        alignItems : 'center'
    },
    image :{
        height : 90,
        width : 90,
        resizeMode:'contain',
        marginRight : 10 ,
        marginLeft : 20
    },
    contents : {
        marginLeft : 5 ,
        fontSize : 12 ,
        color :'#666',
        fontWeight : '400'
    }
})

