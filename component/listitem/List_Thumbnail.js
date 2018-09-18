import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Right,Icon } from 'native-base';
import {StyleSheet} from 'react-native'
import {imgs} from "../../utils/Images";
import {skin} from "../../utils/Styles";

export default class List_Thumbnail extends Component {
    static defaultProps={
        route:'',
    }
    render() {
        return (
            <ListItem
                onPress={()=>{this.props.navigation.navigate(this.props.route)}}>
                <Thumbnail square size={40} source={imgs.setting.thumbnail} style={styles.thumbnail} />
                <Body style={styles.body}>
                    <Text style={styles.title}>张三</Text>
                    <Text note style={styles.text}>集团客服部</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward"  style={styles.arrow}/>
                </Right>
            </ListItem>

        );
    }
}
var styles = StyleSheet.create({
    thumbnail:{
      borderRadius:4
    },
    title:{
        fontSize:skin.font_xg,
        color:skin.color_font_black,
        fontWeight:'bold',
    },
    text:{
        fontSize:skin.font_xs,
        color:skin.color_font_lightGray,
        marginTop:12,
    },
    arrow:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_md,
    },
    body:{
        marginLeft:8,
    }
})