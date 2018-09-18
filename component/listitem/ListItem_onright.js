import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { ListItem, Text, Icon, Left, Body, Right, } from 'native-base';
import {skin} from "../../utils/Styles";
export default class ListItem_onright extends Component {
    static defaultProps={
        lefttext:'',
        img:{},
    }
    render() {
        return (
            <ListItem icon>
                <Left>
                    <Image source={this.props.img}/>
                </Left>
                <Body>
                    <Text style={styles.title}>{this.props.lefttext}</Text>
                </Body>
                <Right>

                </Right>
            </ListItem>
        );
    }
}
var  styles = StyleSheet.create({
    title:{
        color:skin.color_font_black,
        fontSize:skin.font_md,
    },
    subtitle:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_md,
    },
})