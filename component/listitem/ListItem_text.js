import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, } from 'native-base';
import {View,StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";

export default class ListItem_text extends Component {
    static defaultProps={
        lefttext:'',
        righttext:'',
    }
    render() {
        return (
            <ListItem style={styles.itemlist}>
                <Left style={styles.left}>
                    <Text style={styles.textleft}>{this.props.lefttext}</Text>
                </Left>
                <Right style={styles.right}>
                    <Text style={styles.textright}>{this.props.righttext}</Text>
                </Right>
            </ListItem>

        );
    }
}
var styles = StyleSheet.create({
    itemlist:{
        borderColor:skin.color_transparent,
    },
    left:{
        flex:1,
    },
    right:{
        flex:3,
    },
    textleft:{
        fontSize:skin.font_md,
        color:skin.color_font_black,
    },
    textright:{
        color:skin.color_font_gray,
        fontSize:skin.font_md,
        textAlign:'right',
    }
})