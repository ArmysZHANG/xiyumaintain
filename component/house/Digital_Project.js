import React, { Component } from 'react';
import {Container,Content,List,} from 'native-base'
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";
import ListItem_img_display from '../../component/listitem/ListItem_img_display'
import ListItem_img from '../../component/listitem/ListItem_img'

export default class Digital_Project extends Component {


    render() {
        return (

            <Container style={styles.container}>
                <Content>
                    <List style={styles.list}>
                        <ListItem_img_display
                            lefttext='用水吨数'
                            righttext='10吨'
                            img={imgs.household.waterTon}/>

                        <ListItem_img_display
                            lefttext='用电度数'
                            righttext='100度'
                            img={imgs.household.electricityDegree}/>

                        <ListItem_img_display
                            lefttext='验房时间'
                            righttext='2017年10月14日'
                            img={imgs.household.houseInspectionTime}/>

                        <ListItem_img_display
                            lefttext='交付维修条数'
                            righttext='2条'
                            img={imgs.household.deliveryMaintainItem}/>

                        <ListItem_img_display
                            lefttext='陪验人员姓名'
                            righttext='韩建立'
                            img={imgs.household.verifyPersonName}/>

                        <ListItem_img
                            img={imgs.workOrder.addImg}
                            lefttext='户型图'
                            navigation={this.props.navigation}
                            route='House_Type'/>

                    </List>
                </Content>
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
    }
})