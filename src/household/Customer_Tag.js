import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Icon,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import {skin} from "../../utils/Styles";
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Owner from '../../component/customer_tag/Owner';
import Relatives from '../../component/customer_tag/Relatives';


export default class Customer_Tag extends Component {


    render() {
        return (

            <Container style={styles.container}>
                <Header_Green
                    title='客户标签'
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
                    <Tab heading="业主" style={styles.tab}>
                        <Content>
                            <Owner
                                navigation={this.props.navigation}
                            />
                        </Content>
                    </Tab>

                    <Tab heading="亲友" style={styles.tab}>
                        <Content>
                            <Relatives
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
    tab:{
        backgroundColor:skin.color_bgc
    },
    tabtext:{
        fontSize:skin.font_xg,
        fontWeight:'bold',
    }
})