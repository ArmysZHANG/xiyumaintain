import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation'
import Login from './src/login/Login' //登陆
import Index from './src/index/Index' //首页
import Work_Order from './src/work_order/Work_Order' //工单
import Household from './src/household/Household'   //户档
import Task from './src/task/Task'  //任务
import Setting from './src/setting/Setting' //设置
import New_Work_Order from './src/work_order/New_Work_Order' //工单——创建维修工单
import Work_Order_Detail from './src/work_order/Work_Order_Detail' //工单——工单详情
import House_Detail from './src/household/House_Detail' // 户档详情
import Customer_Tag from './src/household/Customer_Tag' // 房间信息——客户标签
import House_Type from './src/household/House_Type' // 房间信息——户型图
import Edit_Profile from './src/setting/Edit_Profile' // 设置——编辑个人信息
import Change_Password from './src/setting/Change_Password' //设置——修改密码
import Suggestion_Feedback from './src/setting/Suggestion_Feedback' //设置——意见反馈
import About_Us from './src/setting/About_Us' //设置——关于我们
import My_Reward_Punishment from './src/setting/My_Reward_Punishment' //设置——我的奖惩

const RootStack = StackNavigator(

    {
        Login: {
            screen: Login,
            navigationOptions:{
                header: null,
            },
        },
        Index: {
            screen: Index,
            navigationOptions:{
                header: null,
            },
        },
        Work_Order: {
            screen: Work_Order,
            navigationOptions:{
                header: null,
            },
        },
        Household: {
            screen: Household,
            navigationOptions:{
                header: null,
            },
        },
        Task: {
            screen: Task,
            navigationOptions:{
                header: null,
            },
        },
        Setting: {
            screen: Setting,
            navigationOptions:{
                header: null,
            },
        },
        New_Work_Order: {
            screen: New_Work_Order,
            navigationOptions:{
                header: null,
            },
        },
        Work_Order_Detail: {
            screen: Work_Order_Detail,
            navigationOptions:{
                header: null,
            },
        },
        House_Detail: {
            screen: House_Detail,
            navigationOptions:{
                header: null,
            },
        },
        Customer_Tag: {
            screen: Customer_Tag,
            navigationOptions:{
                header: null,
            },
        },
        House_Type: {
            screen: House_Type,
            navigationOptions:{
                header: null,
            },
        },
        Edit_Profile: {
            screen: Edit_Profile,
            navigationOptions:{
                header: null,
            },
        },
        Change_Password: {
            screen: Change_Password,
            navigationOptions:{
                header: null,
            },
        },
        Suggestion_Feedback: {
            screen: Suggestion_Feedback,
            navigationOptions:{
                header: null,
            },
        },
        About_Us: {
            screen: About_Us,
            navigationOptions:{
                header: null,
            },
        },
        My_Reward_Punishment: {
            screen: My_Reward_Punishment,
            navigationOptions:{
                header: null,
            },
        },
    },

    {
        initialRouteName: 'Login',
    },
);

export default class MyStackNavigation extends Component  {
    render(){
        return <RootStack/>;

    }
}
