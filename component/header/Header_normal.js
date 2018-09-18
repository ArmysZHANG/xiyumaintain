import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
import { Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
export default class Header_normal extends Component {
    static defaultProps={
        title:'',
    }
    render() {
        return (
            <Header style={styles.header} iosBarStyle={'light-content'} androidStatusBarColor={skin.color_white} noShadow>
                <Left>

                </Left>
                <Body>
                    <Title style={styles.title}>{this.props.title}</Title>
                </Body>
                <Right>

                </Right>
            </Header>
        );
    }
}
var styles = StyleSheet.create({
    header:{
        backgroundColor:skin.color_green,
        borderColor:skin.color_green,
    },
    title:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
    },
})