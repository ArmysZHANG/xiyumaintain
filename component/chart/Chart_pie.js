import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform,Dimensions} from 'react-native';
import Echarts from 'native-echarts';
import {skin} from "../../utils/Styles";

export default class chart_pie extends Component {
    render() {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'middle',
                data:['已完成 60%','实施中 10%','待派单 15%','暂停 15%',],
                itemGap:24,
                itemWidth:40,
                itemHeight:20,
                padding:[0,26,0,0],
                textStyle:{
                    fontSize:skin.font_lg,
                    color:skin.color_font_midGray,
                },
            },
            series: [
                {
                    name:'工单状态',
                    type:'pie',
                    radius: ['57%', '80%'],
                    center: ['28%', '50%'],
                    clockWise: true,
                    avoidLabelOverlap: false,
                    selectedOffset:20,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: skin.font_xxxg,
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                        value: 60,
                        name: '已完成 60%',
                        itemStyle: {
                            normal: {color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  skin.color_green_liner_gradinets_start // 0% 处的颜色
                                    }, {
                                        offset: 1, color: skin.color_green_liner_gradinets_end // 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }},
                        },
                    }, {
                        value: 10,
                        name: '实施中 10%',
                        itemStyle: {
                            normal: {color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  skin.color_red_liner_gradinets_start // 0% 处的颜色
                                    }, {
                                        offset: 1, color: skin.color_red_liner_gradinets_end // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }}
                        },
                    },{
                        value: 15,
                        name: '待派单 15%',
                        itemStyle: {
                            normal: {color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  skin.color_yellow_liner_gradinets_start // 0% 处的颜色
                                    }, {
                                        offset: 1, color: skin.color_yellow_liner_gradinets_end // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }}
                        },
                    }, {
                        value: 15,
                        name: '暂停 15%',
                        itemStyle: {
                            normal: {
                                color: skin.color_gary_liner_gradinets
                            }
                        },
                    }],

                }
            ],

        };
        return (
            <Echarts option={option} height={225} width={Dimensions.get('window').width}/>
        );
    }
}
