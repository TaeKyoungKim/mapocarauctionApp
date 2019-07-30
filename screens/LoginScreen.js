import React, {Component} from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView } from 'react-native';
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'
export default class LoginScreen extends Component {
    render(){
    return (
        <KeyboardAvoidingView style={{
            flex:1, 
            flexDirection:'column',
            justifyContent:'center'
        }}>
            <View style = {styles.container}>
            <Text> This is Loging Iput</Text>
            <IconTextInput 
            style = {{marginTop: 10,}}
            placeholder = {'이름'}
            />
            <IconTextInput
            style = {{marginTop: 10,}}
            iconName = {'email'}
            placeholder = {'메일'}
            colorName= {'red'}
            />
            <RoundButton 
                style = {{marginTop:10}}
                title = {'회원가입/ 로그인'}
                iconName = {'ios-american-football'}
                onPress = {
                    ()=>{
                        this.navigation.goBack(null)
                    }
                }
            />
            </View>
            </KeyboardAvoidingView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignSelf : 'center',
    flexDirection : 'column',
    padding : 30,
    alignItems: 'center',
  },
});
