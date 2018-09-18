import React, { Component } from 'react';
import {Button,Footer,FooterTab} from 'native-base';
import {StyleSheet,Text} from 'react-native'
import {skin} from "../../utils/Styles";

export default class Button_Change_Password extends Component {
    static defaultProps={
        text:'',
        route:'',
    }
    render() {
        return (
            <Button block style={styles.button}
                    onPress={()=>{this.props.navigation.navigate(this.props.route)}}>
                <Text style={styles.buttontext}>{this.props.text}</Text>
            </Button>
        );
    }
}
var styles = StyleSheet.create({
    button:{
        backgroundColor:skin.color_button_green,
        alignSelf:'center',
        width:325,
        height:40,
        marginBottom:40,
        marginTop:40,
    },
    buttontext:{
        color:skin.color_font_white,
        fontSize:skin.font_xxg,
    },

})