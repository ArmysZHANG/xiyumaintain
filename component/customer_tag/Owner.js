import React, { Component } from 'react';
import {Container,Content,List,Text} from 'native-base'
import {StyleSheet,Dimensions,View,Image} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class Owner extends Component {


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.View}>
                        <Image source={imgs.household.emptyImg}></Image>
                        <Text style={styles.text}>扫描二维码签到</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_bgc,
    },
    list:{
        backgroundColor:skin.color_white,
    },
    View:{
        height:500,
        width:Dimensions.get('window').width,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:skin.font_sm,
        color:skin.color_font_lightGray,
        marginTop:40,
    }
})