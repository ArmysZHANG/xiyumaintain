import React,{Component} from 'react'
import {Container,Content,Text,Header,Left,Body,Right,Button,Icon,Title,View,List} from 'native-base'
import {Image,StyleSheet} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import ListItem_floating_input from '../../component/listitem/ListItem_floating_input'
import Button_Change_Password from '../../component/button/Button_Change_Password'
import {skin} from "../../utils/Styles";

export default class Change_Password extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header_Green
                    title='修改密码'
                    navigation={this.props.navigation}/>
                <Content>
                    <List style={styles.list}>
                        <ListItem_floating_input
                            text='旧密码'/>
                    </List>
                    <List style={styles.list}>
                        <ListItem_floating_input
                            text='新密码'/>
                    </List>
                    <List style={styles.list}>
                        <ListItem_floating_input
                            text='再次输入新密码'/>
                    </List>
                    <Button_Change_Password
                        navigation={this.props.navigation}
                        text='确定'
                        route='Setting'/>
                </Content>
            </Container>
        )
    }
}
var styles=StyleSheet.create({
    container:{
        backgroundColor:skin.color_white,
    },
    list:{
        backgroundColor:skin.color_white,
        paddingTop:20,
        paddingBottom:20,
        marginLeft:25,
        marginRight:25,
    },
})