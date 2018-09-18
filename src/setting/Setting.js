import React,{Component} from 'react'
import {Container,Content,Text,Header,Left,Body,Right,Button,Icon,Title,View,List} from 'native-base'
import {Image,StyleSheet} from 'react-native'
import Footer_Tab from '../../component/tabs/Footer_Tab'
import Header_normal from '../../component/header/Header_normal'
import ListItem_img from '../../component/listitem/ListItem_img'
import ListItem_img_red_replace from '../../component/listitem/ListItem_img_red_replace'
import ListItem_img_display from '../../component/listitem/ListItem_img_display'
import ListItem_img_switch from '../../component/listitem/ListItem_img_switch'
import List_Thumbnail from '../../component/listitem/List_Thumbnail'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class Setting extends Component{
    render(){
        return(
            <Container style={styles.container}>
                    <Header_normal
                        title='设置'/>
                <Content>
                    <List style={styles.list}>
                        <List_Thumbnail
                            navigation={this.props.navigation}
                            route='Edit_Profile'
                        />
                    </List>

                    <List style={styles.list}>
                        <ListItem_img
                            lefttext='我的奖惩'
                            navigation={this.props.navigation}
                            route='My_Reward_Punishment'
                            img={imgs.setting.myAwardPunishment}/>
                        <ListItem_img
                            lefttext='修改密码'
                            navigation={this.props.navigation}
                            route='Change_Password'
                            img={imgs.setting.changePassword}/>
                    </List>

                    <List style={styles.list}>
                        <ListItem_img
                            lefttext='意见反馈'
                            navigation={this.props.navigation}
                            route='Suggestion_Feedback'
                            img={imgs.workOrder.description}/>
                        <ListItem_img
                            lefttext='关于我们'
                            navigation={this.props.navigation}
                            route='About_Us'
                            img={imgs.household.verifyPersonName}/>
                        <ListItem_img_display
                            lefttext='版本号'
                            righttext='2.5.8'
                            img={imgs.setting.versionNumber}/>
                    </List>

                    <List style={styles.list}>
                        <ListItem_img_switch
                            lefttext='夜间模式'
                            navigation={this.props.navigation}
                            img={imgs.setting.nightMode}
                            route='Login'/>
                    </List>

                    <List style={styles.list}>
                        <ListItem_img_red_replace
                            lefttext='退出登录'
                            navigation={this.props.navigation}
                            img={imgs.setting.exit}
                            route='Login'/>
                    </List>

                </Content>
                <Footer_Tab
                    navigation={this.props.navigation}/>
            </Container>
        )
    }
}
var styles=StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc
    },
    view:{
        height:120,
        backgroundColor:skin.color_green
    },
    list:{
        backgroundColor:skin.color_white,
        marginTop:20,
    },
})