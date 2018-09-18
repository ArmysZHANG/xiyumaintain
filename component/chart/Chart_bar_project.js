import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform,Dimensions} from 'react-native';
import Echarts from 'native-echarts';
import {skin} from "../../utils/Styles";

export default class Chart_bar_project extends Component {
    render() {
        const option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                show:false,
            },
            legend: {
                y: 'bottom',
                data: ['已完成','实施中','待派单','暂停',],
                itemWidth:40,
                itemHeight:20,
                padding:[0,0,30,0],
                textStyle:{
                    fontSize:skin.font_xs,
                    color:skin.color_font_midGray,
                },
            },
            grid: {
                left: '5%',
                right: '2%',
                top: '10%',
                bottom:'25%',
                containLabel: true,
            },
            xAxis:  {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: skin.color_transparent,
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'category',
                data: [
                    {value:'西域网络',
                        textStyle:{
                            color:skin.color_font_black,
                            fontSize: skin.font_sm,
                        }},
                    {value:'西域物业',
                        textStyle:{
                            color:skin.color_font_black,
                            fontSize: skin.font_sm,
                        }},
                ],
                axisLine: {
                    lineStyle: {
                        color: skin.color_transparent,
                    },
                },
            },
            series: [
                {
                    name: '已完成',
                    type: 'bar',
                    stack: '总量',
                    barMinHeight:20,
                    barCategoryGap:'45%',
                    itemStyle: {
                        normal: {color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color:  skin.color_green_liner_gradinets_end // 0% 处的颜色
                                }, {
                                    offset: 1, color: skin.color_green_liner_gradinets_start // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false
                            },
                            barBorderRadius:0,
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: Platform.OS === 'ios' ? 'insideTop':'inside',
                            textStyle:{
                                fontSize:skin.font_sm,
                            }
                        },
                    },
                    data: [500, 600,],
                },
                {
                    name: '实施中',
                    type: 'bar',
                    stack: '总量',
                    barMinHeight:20,
                    barCategoryGap:'45%',
                    itemStyle: {
                        normal: {color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color:  skin.color_red_liner_gradinets_end // 0% 处的颜色
                                }, {
                                    offset: 1, color: skin.color_red_liner_gradinets_start // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius:0}
                    },
                    label: {
                        normal: {
                            show: true,
                            position: Platform.OS === 'ios' ? 'insideTop':'inside',
                            textStyle:{
                                fontSize:skin.font_sm,
                            }
                        },
                    },
                    data: [220, 182,]
                },
                {
                    name: '待派单',
                    type: 'bar',
                    stack: '总量',
                    barMinHeight:20,
                    barCategoryGap:'45%',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color:  skin.color_yellow_liner_gradinets_end // 0% 处的颜色
                                }, {
                                    offset: 1, color: skin.color_yellow_liner_gradinets_start // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius:0}
                    },
                    label: {
                        normal: {
                            show: true,
                            position: Platform.OS === 'ios' ? 'insideTop':'inside',
                            textStyle:{
                                fontSize:skin.font_sm,
                            }
                        },
                    },
                    data: [150, 212,]
                },
                {
                    name: '暂停',
                    type: 'bar',
                    stack: '总量',
                    barMinHeight:20,
                    barCategoryGap:'45%',
                    itemStyle: {
                        normal: {
                            color: skin.color_gary_liner_gradinets,
                            barBorderRadius:0,
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: Platform.OS === 'ios' ? 'insideTop':'inside',
                            textStyle:{
                                fontSize:skin.font_sm,
                            }
                        },
                    },
                    data: [100, 120,]
                }
            ]
        };
        return (
            <Echarts option={option} height={180} width={Dimensions.get('window').width}/>
        );
    }
}
