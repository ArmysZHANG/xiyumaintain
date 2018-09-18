import React, { Component } from 'react';
import {Item, Input,} from 'native-base';
import {Image,StyleSheet,} from 'react-native'
import {skin} from "../../utils/Styles";
export default class HeaderIconExample extends Component {
    static defaultProps={
        placeholder:null,
        img:{},
    }
    render() {
        return (
            <Item
                style={styles.item}>
                <Image source={this.props.img} style={styles.inputimg}/>
                <Input placeholder={this.props.placeholder}
                       style={styles.input}
                       placeholderTextColor={skin.color_font_lightGray}
                       returnKeyType='next'/>
            </Item>
        );
    }
}
var styles = StyleSheet.create({
    item:{
        marginTop:20,
        borderBottomWidth:0.5,
        borderBottomColor:skin.color_transparent,
        backgroundColor:skin.color_bgc,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:4,
        height:40,
    },
    input:{
        fontSize:skin.font_lg,
    },
    inputimg:{
        marginRight:4
    },
})