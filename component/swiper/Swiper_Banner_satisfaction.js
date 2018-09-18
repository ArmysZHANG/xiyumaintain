import React, { Component } from 'react';
import {View,ListItem} from 'native-base';
import {StyleSheet,Text,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import {skin} from "../../utils/Styles";
import Chart_bar_satisfaction from '../chart/Chart_bar_satisfaction'
import Table_satisfaction from '../table/Table_satisfaction'
export default class Swiper_Banner_satisfaction extends Component {
    static defaultProps={
        lefttext1:'',
        righttext1:'',
        lefttext2:'',
        righttext2:'',
    }
    render() {
        return (
            <Swiper style={styles.wrapper}
                    height={220}
                    dot={<View style={{backgroundColor: skin.color_font_inactive, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor:skin.color_font_green, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{bottom: 7}}>
                <View>
                    <ListItem itemDivider style={styles.listitem}>
                        <Text style={styles.text}>{this.props.lefttext1}</Text>
                        <TouchableOpacity>
                            <Text style={styles.text}>{this.props.righttext1}</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <Chart_bar_satisfaction/>
                </View>
                <View>
                    <ListItem itemDivider style={styles.listitem}>
                        <Text style={styles.text}>{this.props.lefttext2}</Text>
                        <TouchableOpacity>
                            <Text style={styles.text}>{this.props.righttext2}</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <Table_satisfaction/>
                </View>
            </Swiper>
        );
    }
}
var styles = StyleSheet.create({
    wrapper:{
        backgroundColor:skin.color_white
    },
    listitem:{
        justifyContent:'space-between',
        backgroundColor:skin.color_bgc,
    },
    text:{
        fontSize:skin.font_md,
        color:skin.color_font_black,
    }
})