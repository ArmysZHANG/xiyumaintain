import React, { Component } from 'react';
import {Container,Content,List,} from 'native-base'
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";
import ListItem_img_display from '../../component/listitem/ListItem_img_display'
import ListItem_img from '../../component/listitem/ListItem_img'

export default class House_Info extends Component {


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List style={styles.list}>
                        <ListItem_img_display
                            lefttext='业主姓名'
                            righttext='V-zengwx'
                            img={imgs.workOrder.human}/>

                        <ListItem_img_display
                            lefttext='联系电话'
                            righttext='12312312889'
                            img={imgs.workOrder.phoneNumber}/>

                        <ListItem_img_display
                            lefttext='房产类型'
                            righttext='住宅'
                            img={imgs.workOrder.floor}/>

                        <ListItem_img_display
                            lefttext='房间结构'
                            righttext='两房一厅'
                            img={imgs.household.roomStructure}/>

                        <ListItem_img_display
                            lefttext='销售状态'
                            righttext='已出售'
                            img={imgs.household.saleStatus}/>

                        <ListItem_img_display
                            lefttext='标准单价'
                            righttext='10000元/平方'
                            img={imgs.household.standardUnitPrice}/>

                        <ListItem_img_display
                            lefttext='套内单价'
                            righttext='8000元/平方'
                            img={imgs.household.unitSizePrice}/>

                        <ListItem_img_display
                            lefttext='建筑面积'
                            righttext='100平米'
                            img={imgs.household.roomArea}/>

                        <ListItem_img_display
                            lefttext='套内面积'
                            righttext='80平米'
                            img={imgs.household.unitSizeArea}/>

                        <ListItem_img_display
                            lefttext='房价'
                            righttext='10000000元'
                            img={imgs.household.roomPrice}/>

                        <ListItem_img_display
                            lefttext='合同价'
                            righttext='10000000元'
                            img={imgs.household.contractPrice}/>

                        <ListItem_img_display
                            lefttext='签约日期'
                            righttext='2017年10月15日'
                            img={imgs.household.contractDate}/>

                        <ListItem_img_display
                            lefttext='交付日期'
                            righttext='2017年11月15日'
                            img={imgs.household.deliveryDate}/>

                        <ListItem_img
                            lefttext='客户标签'
                            img={imgs.household.customeTag}
                            navigation={this.props.navigation}
                            route='Customer_Tag'/>

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