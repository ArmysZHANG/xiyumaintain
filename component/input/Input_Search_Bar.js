import React, { Component } from 'react';
import {Item, Input} from 'native-base';
import {StyleSheet,View,Image} from 'react-native'
import {imgs} from '../../utils/Images'
import {skin} from "../../utils/Styles";


export default class Input_Search_Bar extends Component {
    static defaultProps={
        placeholder:null,
    }

    render() {
        return (
            <View style={styles.content}>
                <Item style={styles.item}>
                    <Image source={imgs.workOrder.search} style={styles.img}/>
                    <Input placeholder={this.props.placeholder}
                           style={styles.input}
                           placeholderTextColor={skin.color_font_midGray}
                           returnKeyType='search'/>
                </Item>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    content:{
        height:50,
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    item:{
        backgroundColor:skin.color_white,
        borderColor:skin.color_transparent,
        borderRadius:4,
    },
    img:{
        marginLeft:10,
        marginTop:1,
    },
    input:{
        height:33,
        fontSize:skin.font_md,
        marginLeft:5,
    },
})