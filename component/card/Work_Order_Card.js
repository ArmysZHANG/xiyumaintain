import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,View} from 'react-native'
import {imgs} from '../../utils/Images'
import {skin} from "../../utils/Styles";

export default class Work_Order_Card extends Component {
    static defaultProps={
        title:'',
        toptime:'',
        midtitle:'',
        midcontent1:'',
        midcontent2:'',
        buttomcontent:'',
        buttomtime:'',
        route:''
    }
    render() {
        return (
            <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate(this.props.route)}}
                activeOpacity={0.5}>
                <View  style={styles.card}>
                    <View style={styles.status}>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.top}>
                            <Image source={imgs.workOrder.property}/>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text style={styles.toptime}>{this.props.toptime}</Text>
                        </View>
                        <View style={styles.mid}>
                            <Text style={styles.midtitle}>{this.props.midtitle}</Text>
                            <Text style={styles.midcontent}>{this.props.midcontent1}</Text>
                            <Text style={styles.midcontent}>{this.props.midcontent2}</Text>
                        </View>
                        <View style={styles.buttom}>
                            <Text style={styles.buttomcontent}>{this.props.buttomcontent}</Text>
                            <Text style={styles.buttomtime}>{this.props.buttomtime}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    card:{
        backgroundColor:skin.color_white,
        flexDirection:'row',
        marginBottom:10,
        marginLeft:6,
        marginRight:6,
        borderRadius:4,
        shadowOffset: {width: 0, height: 3},
        shadowColor: skin.color_shadow_black,
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3,
    },
    title:{
        flex:1,
        marginLeft:10,
        color:skin.color_font_gray,
        fontSize:skin.font_md

    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:32,
        borderWidth:0.5,
        borderColor:skin.color_transparent,
        borderBottomColor:skin.color_border1,
        alignItems:'center',
    },
    content:{
        paddingLeft:10,
        paddingRight:10,
        flex:75,
    },
    status:{
        flex:1,
        backgroundColor:skin.color_red,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
    },
    toptime:{
        flex:1,
        textAlign:'right',
        color:skin.color_font_red,
        fontSize:skin.font_sm,
    },
    mid:{
        height:75,
        borderWidth:0.5,
        borderColor:skin.color_transparent,
        borderBottomColor:skin.color_border1,
        justifyContent:'space-between',
    },
    midtitle:{
        fontSize:skin.font_lg,
        color:skin.color_font_black,
        flex:10,
        marginTop:5,
    },
    midcontent:{
        flex:9,
        fontSize:skin.font_sm,
        color:skin.color_font_gray,
        letterSpacing:1
    },
    buttom:{
        height:31,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    buttomcontent:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_xs,
    },
    buttomtime:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_xs,
    },
})