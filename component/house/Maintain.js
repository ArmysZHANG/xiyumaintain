import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Icon,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet} from 'react-native'
import Maintain_Card from '../card/Maintain_Card'
import {skin} from "../../utils/Styles";
import Gap_10 from '../../component/gap/Gap_10'
export default class Maintain extends Component {


    render() {
        return (

            <Container style={styles.container}>
                <Gap_10/>
                <Maintain_Card
                    title='浴缸漏水'
                    toptime='完成'
                    midtitle='施工单位：西域轻工物业有限公司'
                    midcontent1='部位：水暖'
                    midcontent2='部件：洁具'
                    midcontent3='描述：浴缸下堵水'
                    buttomtime='创建时间：2018-04-03 12：33：12'
                    route='Work_Order_Detail'
                    navigation={this.props.navigation}/>
                <Maintain_Card
                    title='浴缸漏水'
                    toptime='完成'
                    midtitle='施工单位：西域轻工物业有限公司'
                    midcontent1='部位：水暖'
                    midcontent2='部件：洁具'
                    midcontent3='描述：浴缸下堵水'
                    buttomtime='创建时间：2018-04-03 12：33：12'
                    route='Work_Order_Detail'
                    navigation={this.props.navigation}/>
            </Container>

        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
        paddingBottom:10,
    },
})