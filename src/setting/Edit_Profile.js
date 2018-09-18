import React,{Component} from 'react'
import {Container,Content,Text,Header,Left,Body,Right,Button,Icon,Title,View,List} from 'native-base'
import {Image,StyleSheet} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import ListItem_img_display from '../../component/listitem/ListItem_img_display'
import List_Thumbnail from '../../component/listitem/List_Thumbnail'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class Edit_Profile extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header_Green
                    title='编辑个人信息'
                    navigation={this.props.navigation}/>
                <Content>
                    <List style={styles.list}>
                        <List_Thumbnail
                            navigation={this.props.navigation}/>
                    </List>

                    <List style={styles.list}>
                        <ListItem_img_display
                            lefttext='姓名'
                            righttext='v-zengwx'
                            img={imgs.workOrder.human}/>
                        <ListItem_img_display
                            lefttext='手机号码'
                            righttext='123123897274'
                            img={imgs.workOrder.phoneNumber}/>
                        <ListItem_img_display
                            lefttext='登录账号'
                            righttext='DSZAFA01.曾卫新'
                            img={imgs.household.identityCardNumber}/>
                        <ListItem_img_display
                            lefttext='所属部门'
                            righttext='集团客服部'
                            img={imgs.workOrder.responsibleCompany}/>
                    </List>
                </Content>
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