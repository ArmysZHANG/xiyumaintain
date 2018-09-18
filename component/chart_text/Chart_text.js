import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {skin} from "../../utils/Styles";

export default class Chart_text extends Component {
    render() {
        return (
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>总单</Text>
                    <Text style={styles.content}>770</Text>
                </View>
                <View style={styles.border}>
                    <Text style={styles.title}>已完成</Text>
                    <Text style={styles.content}>596</Text>
                </View>
                <View>
                    <Text style={styles.title}>关单率</Text>
                    <Text style={styles.content}>77%</Text>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title:{
        textAlign:'center',
        fontSize:skin.font_ms,
        color:skin.color_font_lightGray,
    },
    content:{
        textAlign:'center',
        fontSize:skin.font_xxxxxxxxxg,
        color:skin.color_font_green,
        marginTop:4,
    },
})