import React, { Component } from 'react';
import {Tabs,Tab,Content} from 'native-base'
import {StyleSheet} from 'react-native'
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Month from '../../component/index/Month'
import Date from '../../component/index/Date'
import Year from '../../component/index/Year'
import Week from '../../component/index/Week'
import Season from '../../component/index/Season'
import All from '../../component/index/All'
import Custom from '../../component/index/Custom'


export default class Tab_Top extends Component {

    render() {
        return (

                    <Tabs
                        initialPage={0}
                        tabBarTextStyle={{fontSize:17}}
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
        );
    }
}

var styles = StyleSheet.create({
    tab:{
        backgroundColor:'#f7f7f7'
    }
})