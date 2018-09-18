import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Tabs,Tab,Content,Root,Title} from 'native-base'
import {StyleSheet,Image} from 'react-native'
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Footer_Tab from '../../component/tabs/Footer_Tab'
import Sidebar from '../../component/sidebar/Sidebar'
import Finish from '../../component/task/Finish'
import Stop from '../../component/task/Stop'
import Turn_Over from '../../component/task/Turn_Over'
import Close from '../../component/task/Close'
import {imgs} from "../../utils/Images";
import {skin} from "../../utils/Styles";


export default class Task extends Component {

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
                                <Title style={styles.title}>任务</Title>
                            </Body>
                            <Right>
                            </Right>
                        </Header>

                        <Tabs
                            initialPage={0}
                            tabBarTextStyle={styles.tabtext}
                            tabBarBackgroundColor={skin.color_white}
                            tabBarActiveTextColor={skin.color_font_black}
                            tabBarInactiveTextColor={skin.color_font_inactive}
                            tabBarUnderlineStyle={{backgroundColor:skin.color_font_green,height:2}}
                            renderTabBar={() => <ScrollableTabBar />}
                        >
                            <Tab heading="申请完成" style={styles.tab}>
                                <Content>
                                    <Finish
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="暂停申请" style={styles.tab}>
                                <Content>
                                    <Stop
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="申请移交" style={styles.tab}>
                                <Content>
                                    <Turn_Over
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="申请关闭" style={styles.tab}>
                                <Content>
                                    <Close
                                        navigation={this.props.navigation}
                                        />
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