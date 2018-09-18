import React, { Component } from 'react';
import {Container,Content,List, } from 'native-base';
import {StyleSheet,} from 'react-native'
import ListItem_img_display from '../listitem/ListItem_img_display'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";
export default class Date extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <List style={styles.list}>
                    <ListItem_img_display
                        lefttext='总单数'
                        righttext='0'
                        img={imgs.setting.totalReceipts}/>
                    <ListItem_img_display
                        lefttext='满意度'
                        righttext='100%'
                        img={imgs.setting.satisfactionDegree}/>
                </List>
                <List style={styles.list}>
                    <ListItem_img_display
                        lefttext='奖励金额'
                        righttext='+¥0'
                        img={imgs.setting.awardMoney}/>
                    <ListItem_img_display
                        lefttext='处罚金额'
                        righttext='-¥0'
                        img={imgs.setting.punishMoney}/>
                </List>
                <List style={styles.list}>
                    <ListItem_img_display
                        lefttext='满意'
                        righttext='0'
                        img={imgs.setting.satisfaction}/>
                    <ListItem_img_display
                        lefttext='不满意'
                        righttext='0'
                        img={imgs.setting.yawp}/>
                </List>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    },
    list:{
        backgroundColor:skin.color_white,
        marginTop:20,
    },

})