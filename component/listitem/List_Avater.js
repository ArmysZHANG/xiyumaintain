import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text, List } from 'native-base';
import {StyleSheet} from 'react-native'
import {imgs} from '../../utils/Images'
import {skin} from "../../utils/Styles";

export default class List_Avater extends Component {
    render() {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={imgs.workOrder.avater} small />
                </Left>
                <Body style={styles.transparentline}>
                    <Text style={styles.text}>毛红萍</Text>
                    <Text note style={styles.time}>2018/5/20/ 12:12:12</Text>
                </Body>
                <Right style={styles.transparentline}>
                    <Text note style={styles.timetext}>21分钟前</Text>
                </Right>
            </ListItem>
        );
    }
}
var styles = StyleSheet.create({
    transparentline:{
        borderColor:skin.color_transparent,
    },
    time:{
        marginTop:6,
        fontSize:skin.font_xs,
        color:skin.color_font_lightGray,
    },
    timetext:{
        fontSize:skin.font_xs,
        color:skin.color_font_lightGray,
    },
    text:{
        fontSize:skin.font_lg,
        color:skin.color_font_black,
    }
})