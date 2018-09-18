import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title, Text,Picker,} from 'native-base';
export default class Header_Drawer_Picker extends Component {
    static defaultProps={
        title:'',
        lefttext:'返回',
        pickerheadtext:'请选择年份',
    }
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }


    render() {
        return (
            <Header style={styles.header} iosBarStyle={'light-content'} androidStatusBarColor={'#fff'} hasTabs={true}>
                <Left>
                    <Button
                            onPress={() => this.openDrawer()}
                            transparent
                            >
                            <Icon name='menu' style={styles.title} />
                    </Button>
                </Left>
                <Body>
                <Title style={styles.title}>{this.props.title}</Title>
                </Body>
                <Right>
                    <Picker
                        renderHeader={backAction =>
                            <Header style={{ backgroundColor: "#2ec58d" }} iosBarStyle={'light-content'} androidStatusBarColor={'#fff'}>
                                <Left>
                                    <Button transparent onPress={backAction}>
                                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                                        <Text style={{color:'#fff',marginLeft:-12,marginBottom:-2}}>{this.props.lefttext}</Text>
                                    </Button>
                                </Left>
                                <Body style={{ flex: 3 }}>
                                <Title style={{ color: "#fff" }}>{this.props.pickerheadtext}</Title>
                                </Body>
                                <Right />
                            </Header>}
                        mode="dropdown"
                        style={{ marginRight:-12 }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        textStyle={{ color: "#fff" }}
                        itemStyle={{ justifyContent:'space-between'}}
                        itemTextStyle={{ color: '#000',fontSize:15 }}

                    >
                        <Picker.Item label="实时" value="key0" />
                        <Picker.Item label="2017年" value="key1" />
                        <Picker.Item label="2018年" value="key2" />
                    </Picker>
                </Right>
            </Header>
        );
    }
}
var styles = StyleSheet.create({
    header:{
        backgroundColor:'#2ec58d',
    },
    title:{
        backgroundColor:'transparent',
        color:'#fff',
    },
    back:{
        backgroundColor:'transparent',
        color:'#fff',
        marginRight:-10,
        marginTop:2
    },
    arrow_back:{
        backgroundColor:'transparent',
        color:'#fff',
        marginRight:-10,
    },

})