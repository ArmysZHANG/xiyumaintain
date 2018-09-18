import React, { Component } from 'react';
import {StyleSheet,Platform} from 'react-native'
import {skin} from "../../utils/Styles";
import { Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
export default class Header_Green extends Component {
    static defaultProps={
        title:'',
        ioslefttext:'返回',
        androidlefttext:'',
    }
    render() {
        return (
            <Header style={styles.header} iosBarStyle={'light-content'} androidStatusBarColor={skin.color_white}>
                <Left>
                    <Button transparent
                            onPress={()=>{this.props.navigation.goBack()}}>
                        <Icon name='arrow-back' style={styles.arrow_back}/>
                        <Text style={styles.back}>{Platform.OS === 'ios' ? this.props.ioslefttext : this.props.androidlefttext}</Text>
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.title}>{this.props.title}</Title>
                </Body>
                <Right>

                </Right>
            </Header>
        );
    }
}
var styles = StyleSheet.create({
    header:{
        backgroundColor:skin.color_green,
    },
    title:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
    },
    back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
        marginTop:2
    },
    arrow_back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
    },
})