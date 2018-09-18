import React, { Component } from 'react';
import {ListItem, Text, Container,Content,List,} from 'native-base';
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from '../../utils/Images'
import Header_Green from '../../component/header/Header_Green'
import ListItem_img from '../../component/listitem/ListItem_img'
import List_Avater from '../../component/listitem/List_Avater'
import ListItem_text from '../../component/listitem/ListItem_text'
import ListItem_img_display_height38 from '../../component/listitem/ListItem_img_display_height38'
import ListItem_onright from '../../component/listitem/ListItem_onright'
import Time_Line from '../../component/timeline/Time_Line'
import Time_Line_Row from '../../component/timeline/Time_Line_Row'
import ListItem_img_group from '../../component/listitem/ListItem_img_group'

export default class Work_Order_Detail extends Component {
    static defaultProps={
        text:''
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header_Green
                    title='工单详情'
                    navigation={this.props.navigation}/>
                <Content>
                    <List style={styles.list}>
                        <ListItem_img
                            lefttext='西域酒店二期B栋B12'
                            navigation={this.props.navigation}
                            img={imgs.workOrder.bed}
                            route='House_Detail'/>
                    </List>
                    <List  style={styles.list2}>
                        <ListItem_onright
                            lefttext='西域物业'
                            img={imgs.workOrder.property}/>
                        <Time_Line_Row/>
                    </List>
                    <List style={styles.list2}>
                        <List_Avater/>
                    </List>
                    <List style={styles.list}>
                        <ListItem_text
                            lefttext='分类'
                            righttext='电力/电器/开关/插座/插线板/遥控器'/>
                        <ListItem_text
                            lefttext='问题'
                            righttext='房间插座坏了'/>
                    </List>
                    <List style={styles.list}>
                        <ListItem_img_display_height38
                            lefttext='预约时间'
                            righttext='2015-2-1 12：31：32'
                            img={imgs.workOrder.appoinment}/>
                        <ListItem_img_display_height38
                            lefttext='联系电话'
                            righttext='12312323123123'
                            img={imgs.workOrder.phoneNumber}/>
                        <ListItem_img_display_height38
                            lefttext='工期'
                            righttext='一天'
                            img={imgs.workOrder.timeLimit}/>
                        <ListItem_img_display_height38
                            lefttext='紧急程度'
                            righttext='一般'
                            img={imgs.workOrder.urgency}/>
                        <ListItem_img_display_height38
                            lefttext='施工单位'
                            righttext='西域物业'
                            img={imgs.workOrder.responsibleCompany}/>
                        <ListItem_img_display_height38
                            lefttext='维修人'
                            righttext='李越有'
                            img={imgs.workOrder.human}/>
                        <ListItem_img_display_height38
                            lefttext='图片'
                            img={imgs.workOrder.addImg}/>
                        <ListItem_img_group/>
                    </List>
                    <List style={styles.list3}>
                        <ListItem_onright
                            lefttext='详细进展'
                            img={imgs.workOrder.progress}/>
                        <Time_Line/>
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
        borderWidth:0.5,
        borderColor:skin.color_transparent  ,
        borderBottomColor:skin.color_border1,
    },
    list2:{
        backgroundColor:skin.color_white,
        borderWidth:0.5,
        borderColor:skin.color_transparent  ,
        borderBottomColor:skin.color_border1,
        marginTop:10,
    },
    list3:{
        backgroundColor:skin.color_white,
        borderWidth:0.5,
        borderColor:skin.color_transparent  ,
        borderBottomColor:skin.color_border1,
        marginTop:10,
        marginBottom:20,
    },
    item:{
        backgroundColor:skin.color_bgc,
    },
})