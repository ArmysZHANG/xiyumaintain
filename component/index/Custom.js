import React, { Component } from 'react';
import {Container,Content,View,Text } from 'native-base';
import {StyleSheet,} from 'react-native'
import Swiper_Banner_project from '../swiper/Swiper_Banner_project'
import Swiper_Banner_satisfaction from '../swiper/Swiper_Banner_satisfaction'
import {skin} from "../../utils/Styles";
import Chart_circle from '../chart/Chart_pie'
import Chart_text from '../chart_text/Chart_text'
export default class Custom extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <View>
                        <View style={styles.View}>
                            <Chart_circle/>
                            <Chart_text/>
                        </View>
                    </View>
                    <Swiper_Banner_project
                        lefttext1='本月项目排名图'
                        righttext1='项目'
                        lefttext2='本月项目排名表'
                        righttext2='项目'/>
                    <Swiper_Banner_satisfaction
                        lefttext1='本月满意度排名图'
                        righttext1='项目'
                        lefttext2='本月满意度排名表'
                        righttext2='项目'/>
                    <View style={styles.view}>
                        <View style={styles.border}></View>
                        <Text style={styles.bottomtext}>西域维修易2.0</Text>
                        <View style={styles.border}></View>
                    </View>
                </Content>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    },
    View:{
        height:280,
        backgroundColor:skin.color_white,
        marginTop:20,
    },
    wrapper:{
        backgroundColor:skin.color_white,
    },
    view:{
        height:60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingRight:30,
        paddingLeft:30,
    },
    bottomtext:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_sm,
    },
    border:{
        borderWidth:0.5,
        borderColor:skin.color_border2,
        width:100,
        height:1,
    },
})