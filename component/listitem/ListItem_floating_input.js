import React, { Component } from 'react';
import {Content, Input,ListItem,Left,Body,Right,Icon,Form,Text,Item,Label } from 'native-base';
import {StyleSheet,Platform,Image} from 'react-native'
import {skin} from "../../utils/Styles";

export default class ListItem_floating_input extends Component {
    static defaultProps={
        text:'',
        returnKeyType:'next',
        keyboardType:'default',
        secureTextEntry:true
    }
    render() {
        return (


                <Item floatingLabel>
                    <Label style={styles.label}>{this.props.text}</Label>
                    <Input
                        style={styles.input}
                        returnKeyType={this.props.returnKeyType}
                        keyboardType={this.props.keyboardType}
                        secureTextEntry={this.props.secureTextEntry}/>
                </Item>

        );
    }
}
var styles = StyleSheet.create({
    item:{
        backgroundColor:skin.color_white,
    },
    input:{
        color:skin.color_font_black,
        fontSize:skin.font_md,
    },
    text:{
        color:skin.color_font_black,
        fontSize:skin.font_md,
    },
    label:{
        color:skin.color_font_black,
        fontSize:skin.font_md,
    },
})