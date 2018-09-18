import React, { Component } from "react";
import {  Header, Title , Button, Icon, Right, Body, Left, Picker, Form ,ListItem,Text} from "native-base";
import {StyleSheet,Image} from 'react-native'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class ListItem_picker extends Component {
    static defaultProps={
        pickerheadtext:'请选择',
        placeholder:'请选择',
        text:'text',
        img:imgs.workOrder.urgency
    }
    constructor(props) {
        super(props);
        this.state = {
            selected1: null
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
            <ListItem icon>
                <Left>
                    <Image source={this.props.img} />
                </Left>
                <Body>
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </Body>
                <Right>
                    <Picker
                        renderHeader={backAction =>
                            <Header style={{ backgroundColor:skin.color_green}} iosBarStyle={'light-content'} androidStatusBarColor={skin.color_white}>
                                <Left>
                                    <Button transparent onPress={backAction}>
                                        <Icon name="arrow-back" style={{ color:skin.color_font_white }} />
                                        <Text style={{color:skin.color_font_white,marginLeft:-12,marginBottom:-2}}>返回</Text>
                                    </Button>
                                </Left>
                                <Body style={{ flex: 3 }}>
                                    <Title style={{ color:skin.color_font_white}}>{this.props.pickerheadtext}</Title>
                                </Body>
                                <Right />
                            </Header>}
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-forward"/>}
                        placeholder={this.props.placeholder}
                        placeholderStyle={{fontSize:skin.font_md,color:skin.color_font_lightGray}}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        itemStyle={{justifyContent:'space-between'}}
                        itemTextStyle={{ color:skin.color_font_black,fontSize:skin.font_md,justifyContent:'space-between' }}
                        textStyle={{ marginRight:-20,fontSize:skin.font_md,color:skin.color_font_black,}}
                        placeholderIconColor={skin.color_font_lightGray}
                    >
                        <Picker.Item label="Wallet" value="key0" />
                        <Picker.Item label="ATM Card" value="key1"  />
                        <Picker.Item label="Debit Card" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                </Right>
            </ListItem>

        );
    }
}
var  styles= StyleSheet.create({
    text:{
        fontSize:skin.font_md,
        color:skin.color_font_black,
    },
})