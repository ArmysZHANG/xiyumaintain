import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import {skin} from "../../utils/Styles";

export default class Example extends Component {
    constructor(){
        super()
        this.data = [
            {time: '1天前', title: '待处理', description: '预约上门服务时间为：10月10日 10:45啊实打实大师'},
            {time: '1天前', title: '预约派单', description: '预约上门服务时间为：10月10日 10:45'},
            {time: '1天前', title: '维修中', description: '预约上门服务时间为：10月10日 10:45'},
            {time: '1天前', title: '维修中', description: '预约上门服务时间为：10月10日 10:45'},
            {time: '1天前', title: '完成', description: '预约上门服务时间为：10月10日 10:45'}
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={10}
                    circleColor={skin.color_font_green}
                    lineColor={skin.color_font_green}
                    timeStyle={{color:skin.color_font_gray, padding:0, borderRadius:13,width:60,marginLeft:15,fontSize:skin.font_sm}}
                    descriptionStyle={{color:skin.color_font_gray,paddingBottom:22,fontSize:skin.font_sm}}
                    options={{style:{paddingTop:5}}}
                    titleStyle={{marginTop:-9,fontSize:skin.font_lg,color:skin.color_font_black}}
                    lineWidth={1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:skin.color_white,
        marginTop:16,
        marginBottom:6,
    },
    list: {
        flex: 1,

    },
});