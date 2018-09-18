import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Icon,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import {skin} from "../../utils/Styles";
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import House_Info from '../../component/house/House_Info';
import Digital_Project from '../../component/house/Digital_Project';
import Maintain from '../../component/house/Maintain';
import Complaint from '../../component/house/Complaint';
import Consulting from '../../component/house/Consulting';
import Praise from '../../component/house/Praise';
import Sell from '../../component/house/Sell';
import Survey from '../../component/house/Survey';


export default class House_Detail extends Component {


    render() {
        return (

                <Container style={styles.container}>
                    <Header_Green
                        title='房间信息'
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
                        <Tab heading="房产信息" style={styles.tab}>
                            <Content>
                                <House_Info
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="数字工程" style={styles.tab}>
                            <Content>
                                <Digital_Project
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="维修" style={styles.tab}>
                            <Content>
                                <Maintain
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="投诉" style={styles.tab}>
                            <Content>
                                <Complaint
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="咨询" style={styles.tab}>
                            <Content>
                                <Consulting
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="表扬" style={styles.tab}>
                            <Content>
                                <Praise
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="销售" style={styles.tab}>
                            <Content>
                                <Sell
                                    navigation={this.props.navigation}
                                />
                            </Content>
                        </Tab>

                        <Tab heading="调研" style={styles.tab}>
                            <Content>
                                <Survey
                                    navigation={this.props.navigation}
                                />
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
        color:skin.color_white,
    },
    back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_white,
        marginRight:-10,
        marginTop:2
    },
    arrow_back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_white,
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