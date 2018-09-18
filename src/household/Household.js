import React,{Component} from 'react'
import {Container,Content,Text,} from 'native-base'
import {StyleSheet} from 'react-native'
import Footer_Tab from '../../component/tabs/Footer_Tab'
import Header_normal from '../../component/header/Header_normal'
import {skin} from "../../utils/Styles";
import House_Card from '../../component/card/House_Card'
import Gap_10 from '../../component/gap/Gap_10'

export default class Household extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header_normal
                    title='一户一档'/>
                <Content>
                    <Gap_10/>
                    <House_Card
                        title='两室一厅'
                        toptime='已出售'
                        midtitle='西域酒店 一期 1F 101'
                        midcontent1='业主：曾卫新'
                        midcontent2='电话：12312312312'
                        midcontent3='房产类型：住宅'
                        buttomtime='交付日期：2018-04-03'
                        buttomcontent='签约日期：2018-04-03'
                        area='120㎡'
                        route='House_Detail'
                        navigation={this.props.navigation}/>
                </Content>
                <Footer_Tab
                    navigation={this.props.navigation}/>
            </Container>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    }
})