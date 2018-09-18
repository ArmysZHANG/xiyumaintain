import React, { Component } from 'react';
import {Container,Content,List,Header,Left,Body,Right,Button,Icon,Text,Title,Drawer,} from 'native-base';
import {StyleSheet,TouchableOpacity,Platform,ScrollView,View,Image} from 'react-native'
import ListItem_img from '../../component/listitem/ListItem_img'
import ListItem_Divider from '../../component/listitem/ListItem_divider'
import ListItem_input from '../../component/listitem/ListItem_input'
import ListItem_picker from '../../component/listitem/ListItem_picker'
import Button_Green_Navigation_325 from '../../component/button/Button_Green_Navigation_325'
import Sidebar from '../../component/sidebar/Sidebar'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class New_Work_Order extends Component {
    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    closeDrawer() {
        this.drawer._root.close()
    };

    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        return (
            <Container style={styles.container}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Sidebar/>}
                    onClose={() => this.closeDrawer()}
                    panOpenMask={0.05}
                    side='right'>
                    <Header style={styles.header} iosBarStyle={'light-content'} androidStatusBarColor={skin.color_white}>
                        <Left>
                            <Button transparent
                                    onPress={()=>{this.props.navigation.goBack()}}>
                                <Icon name='arrow-back' style={styles.arrow_back}/>
                                <Text style={styles.back}>{Platform.OS === 'ios' ? '返回' : null}</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.title}>创建维修工单</Title>
                        </Body>
                        <Right>
                            <Button transparent
                                    onPress={() => this.openDrawer()}>
                                <Image source={imgs.index.meum} />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <List style={styles.list}>
                            <ListItem_Divider
                                text='选择房产'/>
                            <ListItem_img
                                lefttext='项目'
                                img={imgs.workOrder.project}/>
                            <ListItem_img
                                lefttext='分期'
                                img={imgs.workOrder.instalment}/>
                            <ListItem_img
                                lefttext='楼栋'
                                img={imgs.workOrder.building}/>
                            <ListItem_img
                                lefttext='楼层'
                                img={imgs.workOrder.floor}/>
                            <ListItem_img
                                lefttext='房间'
                                img={imgs.workOrder.room}/>
                            <ListItem_Divider
                                text='选择报修'/>
                            <ListItem_img
                                lefttext='部位'
                                img={imgs.workOrder.part}/>
                            <ListItem_img
                                lefttext='部件'
                                img={imgs.workOrder.unit}/>
                            <ListItem_img
                                lefttext='问题'
                                img={imgs.workOrder.problem}/>
                            <ListItem_Divider
                                text='填选事项'/>
                            <ListItem_input
                                text='责任单位'
                                placeholder='请输入责任单位'
                                img={imgs.workOrder.responsibleCompany}/>
                            <ListItem_input
                                text='工期'
                                placeholder='请输入工期'
                                img={imgs.workOrder.timeLimit}/>
                            <ListItem_input
                                text='联系人'
                                placeholder='请输入联系人'
                                img={imgs.workOrder.human}/>
                            <ListItem_input
                                text='联系电话'
                                placeholder='请输入联系电话'
                                keyboardType='numeric'
                                img={imgs.workOrder.phoneNumber}/>
                            <ListItem_picker
                                text='紧急程度'
                                img={imgs.workOrder.urgency}/>
                            <ListItem_input
                                text='描述'
                                placeholder='请输入问题描述'
                                img={imgs.workOrder.description}/>
                            <ListItem_img
                                lefttext='图片'
                                righttext='点击添加图片'
                                img={imgs.workOrder.addImg}/>
                        </List>
                            <Button_Green_Navigation_325
                                text='提交工单'
                                navigation={this.props.navigation}
                                route='Work_Order'/>
                    </Content>
                </Drawer>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    container:{
      backgroundColor:skin.color_bgc,
    },
    list:{
        backgroundColor:skin.color_white,
    },
    header:{
        backgroundColor:skin.color_green,
    },
    title:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
    },
    back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
        marginTop:2
    },
    arrow_back:{
        backgroundColor:skin.color_transparent,
        color:skin.color_font_white,
        marginRight:-10,
    },
})
