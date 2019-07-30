import React , {Component} from 'react';
import {View , TextInput , StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default class IconTextInput extends Component {
    static defaultProps = {
        iconName : 'person',
        placeholder : '입력해주세요',
        type:'text',
        colorName : 'gray'

    }

    render(){
        return (
            <View style={[styles.container , this.props.style]}>
                    <MaterialIcons 
                        style = {styles.icon}
                        name = {this.props.iconName}
                        size = {20}
                        color = {this.props.colorName}
                    />
                    <TextInput 
                        autoFocus={this.props.autoFocus}
                        placeholder = {this.props.placeholder}
                        returnKeyType = {this.props.returnKeyType}
                        keyboardType = {this.props.keyboardType}
                        defaultValue = {this.props.defaultValue}
                        editable = {this.props.editable}
                        blurOnSubmit = {this.props.blurOnSubmit}
                        onSubmitEditing = {this.props.onSubmitEditing}
                        onChangeText ={
                            text =>{
                                this.props.onChange && this.props.onChange(text)
                            }
                        }
                        style ={{
                            flex:1,
                            height:'100%'
                        }}
                    />

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
