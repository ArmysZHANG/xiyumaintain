import React, { Component } from "react";
import {StyleSheet,TouchableOpacity} from 'react-native'
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
import {skin} from "../../utils/Styles";

var BUTTONS = ["实时", "2017年", "2018年", "取消"];
var CANCEL_INDEX = 3;
export default class ActionSheet_OnHead extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            title: "请选择年份"
                        },
                        buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                    )}
            >
                <Text style={styles.text}>{BUTTONS[0]}</Text>
            </TouchableOpacity>
        );
    }
}
var styles =StyleSheet.create({
    button:{
        backgroundColor:skin.color_transparent,
    },
    text:{
        color:skin.color_font_white,
        fontSize:skin.font_xg,
        fontWeight:'bold'
    }
})