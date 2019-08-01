import React , {Component} from 'react';
import {View, Image, Text , TouchableOpacity ,StyleSheet} from  'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class VehcleItem extends Component {
    
    render(){
        return (
            <TouchableOpacity
                style = {styles.container}
                onPress = {this.props.onPress}
            >
                <Image style={styles.image}
                    source = {{
                        uri : this.props.image
                    }}
                />
                <View style = {{flexDirection:'column'}} >
                    <Text style = {{fontSize:22,color:'#333',fontWeight:'400' }}>
                        {this.props.vin}
                    </Text>
                    <View style = {{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons 
                            style={{marginRight:5}}
                            color = {'#666'}
                            size = {15}
                            name = {'ios-calendar'}
                            />
                        <Text style ={{fontSize:12 , color:'#333',fontWeight:'300'}}>
                            {this.props.manufacturer}
                        </Text>
                        <Text style={{marginLeft:5, fontSize:12 , color:'#666',fontWeight:'400'}}>
                            {this.props.year}
                        </Text>
                    </View>
                </View>
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

