import React, { Component } from 'react';
import {ListItem, Text } from 'native-base';
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
export default class ListItem_divider extends Component {
    static defaultProps={
        text:''
    }
    render() {
        return (
            <ListItem itemDivider style={styles.item}>
                <Text style={styles.text}>{this.props.text}</Text>
            </ListItem>
        );
    }
}
var styles = StyleSheet.create({
    item:{
        backgroundColor:skin.color_bgc,
    },
    text:{
        color:skin.color_font_midGray,
        fontSize:skin.font_sm,
    }
})