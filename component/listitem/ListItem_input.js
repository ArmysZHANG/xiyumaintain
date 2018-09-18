import React, { Component } from 'react';
import {Content, Input,ListItem,Left,Body,Right,Icon,Form,Text,Dimensions } from 'native-base';
import {StyleSheet,Platform,Image} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class ListItem_input extends Component {
    static defaultProps={
        text:'',
        placeholder:'',
        returnKeyType:'next',
        keyboardType:'default',
        img:imgs.workOrder.urgency
    }
    render() {
        return (

            <ListItem icon
                    style={styles.listitem}>
                <Left>
                    <Image source={this.props.img}/>
                </Left>
                <Body style={styles.body}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </Body>
                <Right style={styles.right}>
                    <Input placeholder={this.props.placeholder}
                           style={styles.input}
                           returnKeyType={this.props.returnKeyType}
                           keyboardType={this.props.keyboardType}
                           placeholderTextColor={skin.color_font_lightGray}
                    />
                </Right>
            </ListItem>
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
        textAlign:'right'
    },
    text:{
        color:skin.color_font_black,
        fontSize:skin.font_md,
    },
    right:{
      flex:2.6
    },
})