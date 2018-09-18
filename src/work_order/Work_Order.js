import React, { Component } from 'react';
import {Container,Drawer,Button,Header, Left, Body, Right,Tabs,Tab,Content,Root} from 'native-base'
import {StyleSheet,Image} from 'react-native'
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Footer_Tab from '../../component/tabs/Footer_Tab'
import Sidebar from '../../component/sidebar/Sidebar'
import Button_Header from '../../component/button/Button_Header'
import ActionSheet_OnHead from '../../component/actionsheet/ActionSheet_OnHead'
import Wait_Sent_Order from '../../component/work_order/Wait_Sent_Order'
import Close from '../../component/work_order/Close'
import Complete from '../../component/work_order/Complete'
import Constructing from '../../component/work_order/Constructing'
import Stop from '../../component/work_order/Stop'
import Timeout from '../../component/work_order/Timeout'
import {imgs} from '../../utils/Images'
import {skin} from "../../utils/Styles";


export default class Work_Order extends Component {

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
                                <ActionSheet_OnHead/>
                            </Body>
                            <Right>
                                <Button_Header
                                    route='New_Work_Order'
                                    navigation={this.props.navigation}
                                    img={imgs.workOrder.add}/>
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
                            <Tab heading="待派单" style={styles.tab}>
                                <Content>
                                    <Wait_Sent_Order
                                        navigation={this.props.navigation}
                                      />
                                </Content>
                            </Tab>

                            <Tab heading="施工中" style={styles.tab}>
                                <Content>
                                    <Constructing
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="暂停" style={styles.tab}>
                                <Content>
                                    <Stop
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="完成" style={styles.tab}>
                                <Content>
                                    <Complete
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="关闭" style={styles.tab}>
                                <Content>
                                    <Close
                                        navigation={this.props.navigation}
                                        />
                                </Content>
                            </Tab>

                            <Tab heading="超时" style={styles.tab}>
                                <Content>
                                    <Timeout
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
        backgroundColor:skin.color_bgc,
    },
    tabtext:{
        fontSize:skin.font_xg,
        fontWeight:'bold'
    }
})