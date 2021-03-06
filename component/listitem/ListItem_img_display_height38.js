import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { ListItem, Text, Icon, Left, Body, Right,} from 'native-base';
import {skin} from "../../utils/Styles";

export default class ListItem_img_display_height38 extends Component {
    static defaultProps={
        lefttext:'',
        righttext:'',
        img:{},
    }
    render() {
        return (
            <ListItem icon style={styles.listitem}>
                <Left>
                    <Image source={this.props.img}/>
                </Left>
                <Body style={styles.border}>
                    <Text style={styles.title}>{this.props.lefttext}</Text>
                </Body>
                <Right style={styles.border}>
                    <Text style={styles.subtitle}>{this.props.righttext}</Text>
                </Right>
            </ListItem>
        );
    }
}
var  styles = StyleSheet.create({
    title:{
        color:skin.color_font_black,
        fontSize:skin.font_sm,
    },
    subtitle:{
        color:skin.color_font_gray,
        fontSize:skin.font_sm,
    },
    border:{
        borderColor:skin.color_transparent,
    },
    listitem:{
        height:38,
    },
})