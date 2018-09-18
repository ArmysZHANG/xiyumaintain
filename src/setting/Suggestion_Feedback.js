import React,{Component} from 'react'
import {Container,Content,Text,Header,Left,Body,Right,Button,Icon,Title,View,List} from 'native-base'
import {Image,StyleSheet} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import Input_Textarea from '../../component/input/Input_Textarea'
import Button_Green_Navigation_325 from '../../component/button/Button_Green_Navigation_325'
import {skin} from "../../utils/Styles";

export default class Suggestion_Feedback extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header_Green
                    title='意见反馈'
                    navigation={this.props.navigation}/>
                <Content>
                    <Input_Textarea/>
                    <Button_Green_Navigation_325
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
        backgroundColor:skin.color_bgc,
    },
    list:{
        backgroundColor:skin.color_white,
        marginTop:10,
        marginBottom:20,
    },
})