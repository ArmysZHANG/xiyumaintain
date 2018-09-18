import React, { Component } from 'react';
import { Container,Header} from 'native-base';
import {Image,StyleSheet,Text,View} from 'react-native'
import Button_Green from '../../component/button/Button_Green_replace_280'
import Input_Icon from '../../component/input/Input_Icon'
import Input_Icon_Password from '../../component/input/Input_Icon_Password'
import {imgs} from '../../utils/Images'
import {skin} from '../../utils/Styles'
export default class HeaderIconExample extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}/>
                <Image
                    source={imgs.login.logo}
                    style={styles.img}>
                </Image>
                <Text style={styles.imgtext}>XIYU 西域</Text>
                <View style={styles.inputarea}>
                    <Input_Icon
                        placeholder='用户名'
                        img={imgs.login.username}
                    />
                        
                    <Input_Icon_Password
                        placeholder='密码'
                        img={imgs.login.password}
                        rightimg={imgs.login.showPassword}
                                />
                </View>

                <Button_Green
                    text='登  录'
                    navigation={this.props.navigation}
                    route='Index'
                />
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    header:{
      backgroundColor:skin.color_white,
      borderBottomColor:skin.color_transparent,
      height:0
    },
    img:{
        alignSelf:'center',
        marginTop:80,
    },
    container:{
        backgroundColor:skin.color_white,
    },
    imgtext:{
        fontSize:16,
        color:skin.color_font_green,
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold',
        letterSpacing:2,
    },
    inputarea:{
        width:280,
        alignSelf:'center',
        marginTop:10,
    },
})