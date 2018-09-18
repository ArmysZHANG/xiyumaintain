import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Right,Icon } from 'native-base';
import {StyleSheet} from 'react-native'
import {imgs} from "../../utils/Images";

export default class ListItem_img_group extends Component {
    static defaultProps={
        route:'',
    }
    render() {
        return (
            <ListItem style={styles.item}>
                <Thumbnail large source={imgs.household.emptyImg} style={styles.thumbnail} />
                <Thumbnail large source={imgs.household.emptyImg} style={styles.thumbnail} />
                <Thumbnail large source={imgs.household.emptyImg} style={styles.thumbnail} />
                <Thumbnail large source={imgs.household.emptyImg} style={styles.thumbnail} />
            </ListItem>
        );
    }
}
var styles = StyleSheet.create({
    thumbnail:{
        borderRadius:4,
        marginBottom:10,
    },
    item:{
        marginTop:-10,
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
})