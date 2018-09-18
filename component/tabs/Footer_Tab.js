import React, { Component } from 'react';
import {Footer, FooterTab, Button, Text } from 'native-base';
import {StyleSheet,Image,} from 'react-native'
import {imgs} from '../../utils/Images'
import {skin} from '../../utils/Styles'

const tabtext = {
                index:'首页',
                workOrder:'工单',
                household:'户档',
                task:'任务',
                setting:'设置',
}
export default class Footer_Tab extends Component {

    render() {

        return (
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <Button vertical
                            onPress={()=>{this.props.navigation.replace('Index');}}>
                        <Image source={imgs.tab.unselect.index} style={styles.img}/>
                        <Text style={styles.text}>{tabtext.index}</Text>
                    </Button>
                    <Button vertical
                            onPress={()=>{this.props.navigation.replace('Work_Order');}}>
                        <Image source={imgs.tab.unselect.workOrder} style={styles.img}/>
                        <Text style={styles.text}>{tabtext.workOrder}</Text>
                    </Button>
                    <Button vertical
                            onPress={()=>{this.props.navigation.replace('Household');}}>
                        <Image source={imgs.tab.unselect.household} style={styles.img}/>
                        <Text style={styles.text}>{tabtext.household}</Text>
                    </Button>
                    <Button vertical
                            onPress={()=>{this.props.navigation.replace('Task');}}>
                        <Image source={imgs.tab.unselect.task} style={styles.img}/>
                        <Text style={styles.text}>{tabtext.task}</Text>
                    </Button>
                    <Button vertical
                            onPress={()=>{this.props.navigation.replace('Setting');}}>
                        <Image source={imgs.tab.unselect.setting} style={styles.img}/>
                        <Text style={styles.text}>{tabtext.setting}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
var styles = StyleSheet.create({
    footer:{
        backgroundColor:skin.color_white ,
    },
    text:{
        color:skin.color_font_lightGray,
        fontSize:skin.font_mmms,
        marginBottom:-8,
        marginTop:2,
    },
    img:{
        marginTop:2,
    }
})