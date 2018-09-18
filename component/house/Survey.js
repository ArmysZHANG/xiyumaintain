import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Icon,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
export default class Survey extends Component {


    render() {
        return (

            <Container style={styles.container}>
            </Container>

        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    },
})