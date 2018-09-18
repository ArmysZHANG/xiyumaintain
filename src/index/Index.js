import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Title,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet,Platform,Image,ImageBackground} from 'react-native'
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Footer_Tab from '../../component/tabs/Footer_Tab'
import Sidebar from '../../component/sidebar/Sidebar'
import ActionSheet_OnHead from '../../component/actionsheet/ActionSheet_OnHead'
import Month from '../../component/index/Month'
import Date from '../../component/index/Date'
import Year from '../../component/index/Year'
import Week from '../../component/index/Week'
import Season from '../../component/index/Season'
import All from '../../component/index/All'
import Custom from '../../component/index/Custom'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() {
        this.drawer._root.open()
    };

  render() {
    return (
        <Root>
            <Container style={styles.container}>
                <Drawer
                    type='displace'
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Sidebar/>}
                    onClose={() => this.closeDrawer()}
                    panOpenMask={0.05}>
                    <Header style={styles.header} iosBarStyle={'light-content'} androidStatusBarColor={skin.color_white} hasTabs>
                        <Left>
                            <Button
                                onPress={() => this.openDrawer()}
                                transparent
                            >
                                <Image source={imgs.index.meum} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.title}>首页</Title>
                        </Body>
                        <Right>
                            <ActionSheet_OnHead/>
                        </Right>
                    </Header>
                    <Tabs
                        locked={Platform.OS === 'ios' ? false : true}
                        initialPage={0}
                        tabBarBackgroundColor={skin.color_white}
                        tabBarTextStyle={styles.tabtext}
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

                        <Tab heading="自定义" style={styles.tab}>
                            <Content>
                                <Custom/>
                            </Content>
                        </Tab>
                    </Tabs>

                <Footer_Tab
                    navigation={this.props.navigation}/>
                </Drawer>
            </Container>
        </Root>

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
    tab:{
        backgroundColor:skin.color_bgc
    },
    tabtext:{
        fontSize:skin.font_xg,
        fontWeight:'bold',
    },
})
