import React, { Component } from 'react';
import {StyleSheet,Image,TouchableOpacity} from 'react-native'
export default class Button_Header extends Component {
    static defaultProps={
        route:'',
        img:{},
    }
    render() {
        return (
            <TouchableOpacity block style={styles.button}
                    onPress={()=>{this.props.navigation.navigate(this.props.route)}}>
                <Image
                    source={this.props.img}
                    style={styles.img}/>
            </TouchableOpacity>
        );
    }
}
var styles = StyleSheet.create({

    img:{
        marginRight:2
    },


})