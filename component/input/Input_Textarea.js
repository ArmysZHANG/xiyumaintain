import React, { Component } from "react";
import { Textarea, Form } from "native-base";
import {StyleSheet} from 'react-native'
import {skin} from "../../utils/Styles";

export default class Input_Textarea extends Component {
    render() {
        return (
            <Form style={styles.form}>
                <Textarea rowSpan={5}
                          bordered placeholder="请输入您的意见"
                          style={styles.text}
                          placeholderTextColor={skin.color_placeholder}/>
            </Form>

        );
    }
}
var styles = StyleSheet.create({
    form:{
        marginTop:30,
    },
    text:{
      backgroundColor:skin.color_white,
        marginLeft:25,
        marginRight:25,
        color:skin.color_font_black,
        fontSize:skin.font_md,
        height:200,
        borderRadius:4,
    }
})