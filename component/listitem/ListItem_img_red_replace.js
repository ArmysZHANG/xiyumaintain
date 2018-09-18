import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { ListItem, Text, Left, Body, Right,Icon } from 'native-base';
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class ListItem_img_red_replace extends Component {
    static defaultProps={
        lefttext:'',
        righttext:'',
        route:'',
        img:imgs.workOrder.urgency,
    }
    render() {
        return (
            <ListItem
                onPress={()=>{this.props.navigation.replace(this.props.route)}}
                icon>
                <Left>
                    <Image source={this.props.img} />
                </Left>
                <Body>
                <Text style={styles.title}>{this.props.lefttext}</Text>
                </Body>
                <Right>
                    <Text style={styles.subtitle}>{this.props.righttext}</Text>
                    <Icon name="arrow-forward"  style={styles.arrow}/>
                </Right>
            </ListItem>
        );
    }
}
var  styles = StyleSheet.create({
    title:{
        color:skin.color_font_red,
        fontSize:skin.font_md,
    },
    subtitle:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_md,
    },
    arrow:{
        color:skin.color_font_red,
        fontSize:skin.font_md,
    }
})