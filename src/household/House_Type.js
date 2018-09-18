import React, { Component } from 'react';
import {Container,Content,List,Text} from 'native-base'
import {StyleSheet,Dimensions,View,Image} from 'react-native'
import Header_Green from '../../component/header/Header_Green'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class House_Type extends Component {


    render() {
        return (
            <Container style={styles.container}>
                <Header_Green
                    title='户型图'
                    navigation={this.props.navigation}/>
                <Content>
                    <View style={styles.View}>
                        <Image source={imgs.household.emptyImg}/>
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
        height:600,
        width:Dimensions.get('window').width,
        justifyContent:'center',
        alignItems:'center',
    },
})