import React, { Component } from 'react';
import {Container,Content,List,} from 'native-base'
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
import ListItem_input from '../../component/listitem/ListItem_input'
import Button_Green_Navigation_325 from '../../component/button/Button_Green_Navigation_325'
import {imgs} from "../../utils/Images";

export default class Relatives extends Component {


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List style={styles.list}>
                        <ListItem_input
                            text='姓名'
                            placeholder='请输入姓名'
                            img={imgs.workOrder.human}/>
                        <ListItem_input
                            text='手机号'
                            placeholder='请输入手机号'
                            keyboardType='numeric'
                            img={imgs.workOrder.phoneNumber}/>
                        <ListItem_input
                            text='身份证'
                            placeholder='请输入身份证号码'
                            keyboardType='numeric'
                            img={imgs.household.identityCardNumber}/>
                    </List>
                    <Button_Green_Navigation_325
                        text='生成二维码'
                        navigation={this.props.navigation}
                        route='Work_Order_Detail'/>
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