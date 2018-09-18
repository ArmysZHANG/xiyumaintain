import React, { Component } from "react";
import {List, ListItem, Text ,Icon,Body,Right,Left,} from "native-base";
import {StyleSheet,Image} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class ListItem_ItemHeader_First_Arrow extends Component {
    static defaultProps={
        text:'',
        img:imgs.household.contractDate,
    }
    render() {
        return (
            <List>
                <ListItem itemHeader first icon>
                    <Left>
                        <Image source={this.props.img} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>{this.props.text}</Text>
                    </Body>
                    <Right>
                        <Icon style={styles.arrow}
                              name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        );
    }
}
var styles = StyleSheet.create({
    text:{
        fontSize:skin.font_lg,
        color:skin.color_font_black,
    },
    arrow:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_lg,
    }
})