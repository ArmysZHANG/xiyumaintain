import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Icon,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet} from 'react-native'
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Header_Green from '../../component/header/Header_Green'
import Month from '../../component/My_Reward_Punishment/Month'
import All from '../../component/My_Reward_Punishment/All'
import Date from '../../component/My_Reward_Punishment/Date'
import Season from '../../component/My_Reward_Punishment/Season'
import Week from '../../component/My_Reward_Punishment/Week'
import Year from '../../component/My_Reward_Punishment/Year'

import {skin} from "../../utils/Styles";


export default class My_Reward_Punishment extends Component {


    render() {
        return (

                <Container style={styles.container}>
                    <Header_Green
                        title='我的奖惩'
                        navigation={this.props.navigation}/>

                        <Tabs
                            initialPage={0}
                            tabBarTextStyle={styles.tabtext}
                            tabBarBackgroundColor={skin.color_white}
                            tabBarActiveTextColor={skin.color_font_black}
                            tabBarInactiveTextColor={skin.color_font_inactive}
                            tabBarUnderlineStyle={{backgroundColor:skin.color_font_green,height:2}}
                            renderTabBar={() => <ScrollableTabBar />}
                        >
                            <Tab heading="本月" style={styles.tab}>
                                <Content>
                                    <Month/>
                                </Content>
                            </Tab>

                            <Tab heading="今日" style={styles.tab}>
                                <Content>
                                    <Date/>
                                </Content>
                            </Tab>

                            <Tab heading="本年" style={styles.tab}>
                                <Content>
                                    <Year/>
                                </Content>
                            </Tab>

                            <Tab heading="本周" style={styles.tab}>
                                <Content>
                                    <Week/>
                                </Content>
                            </Tab>

                            <Tab heading="本季" style={styles.tab}>
                                <Content>
                                    <Season/>
                                </Content>
                            </Tab>

                            <Tab heading="总览" style={styles.tab}>
                                <Content>
                                    <All/>
                                </Content>
                            </Tab>
                        </Tabs>
                </Container>


        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    },
    header:{
        backgroundColor:skin.color_green,
    },
    title:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
    },
    back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
        marginTop:2
    },
    arrow_back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
    },
    tab:{
        backgroundColor:skin.color_bgc
    },
    tabtext:{
        fontSize:skin.font_xg,
        fontWeight:'bold'
    }
})