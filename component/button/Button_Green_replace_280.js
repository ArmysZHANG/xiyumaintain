import React, { Component } from 'react';
import {Button} from 'native-base';
import {StyleSheet,Text} from 'react-native'
import {skin} from "../../utils/Styles";

export default class Button_Green_replace_280 extends Component {
    static defaultProps={
        text:'',
        route:'',
    }
    render() {
        return (
            <Button block style={styles.button}
                    onPress={()=>{this.props.navigation.replace(this.props.route)}}>
                <Text style={styles.buttontext}>{this.props.text}</Text>
            </Button>
        );
    }
}
var styles = StyleSheet.create({
    button:{
        backgroundColor:skin.color_button_green,
        alignSelf:'center',
        width:280,
        height:40,
        marginTop:60,
        marginBottom:60
    },
    buttontext:{
        color:skin.color_font_white,
        fontSize:skin.font_xxg,
    },
})