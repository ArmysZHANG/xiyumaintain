import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {skin} from "../../utils/Styles";

export default class Table_satisfaction extends Component {
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.row}>
                    <Text style={styles.text1}>公司</Text>
                    <Text style={styles.text2}>西域物业</Text>
                    <Text style={styles.text2}>西域网络</Text>
                    <Text style={styles.text2}>合计</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>满意</Text>
                    <Text style={styles.text2_green}>553</Text>
                    <Text style={styles.text2_green}>553</Text>
                    <Text style={styles.text2_green}>1106</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>不满意</Text>
                    <Text style={styles.text2_red}>92</Text>
                    <Text style={styles.text2_red}>92</Text>
                    <Text style={styles.text2_red}>184</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>总单</Text>
                    <Text style={styles.text2_green}>128</Text>
                    <Text style={styles.text2_green}>128</Text>
                    <Text style={styles.text2_green}>154</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>满意率</Text>
                    <Text style={styles.text2_red}>70%</Text>
                    <Text style={styles.text2_red}>70%</Text>
                    <Text style={styles.text2_red}>70%</Text>
                </View>
            </View>

        );
    }
}
var styles = StyleSheet.create({
    view:{
        height:160,
        justifyContent:'space-around',
        flexDirection:'row',
        paddingTop:10
    },
    row:{
        justifyContent:'space-around',
        alignItems:'center'
    },
    text1:{
        fontSize:skin.font_md,
        color:skin.color_font_gray,
    },
    text2:{
        fontSize:skin.font_md,
        color:skin.color_font_black,
    },
    text2_green:{
        fontSize:skin.font_xg,
        color:skin.color_font_green,
    },
    text2_red:{
        fontSize:skin.font_xg,
        color:skin.color_font_red,
    },
    text2_yellow:{
        fontSize:skin.font_xg,
        color:skin.color_font_yellow,
    },
})
