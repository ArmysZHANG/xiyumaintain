import React,{Component} from 'react'
import {Container,Content,Text} from 'native-base'
import {Image,StyleSheet,View} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class About_Us extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header_Green
                    title='关于我们'
                    navigation={this.props.navigation}/>
                <Content>
                    <View style={styles.view}>
                        <Image source={imgs.setting.download} style={styles.img}/>
                        <Text style={styles.text}>扫描此二维码即可安装西域维修易手机客户端</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
var styles=StyleSheet.create({
    container:{
        backgroundColor:skin.color_white,
    },
    view:{
        height:300,
        justifyContent:'center',
        marginTop:80
    },
    img:{
        alignSelf:'center',
    },
    text:{
        textAlign:'center',
        marginTop:40,
        color:skin.color_font_lightGray,
        fontSize:skin.font_sm
    }

})