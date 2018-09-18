import React, { Component } from "react";
import { Container, Content,List,Text,} from "native-base";
import {StyleSheet} from 'react-native'
import ListItem_ItemHeader_First_Arrow from '../listitem/ListItem_ItemHeader_First_Arrow'
import {skin} from "../../utils/Styles";
import {imgs} from "../../utils/Images";

export default class HeaderSpan extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text style={styles.text}>
                    全部
                </Text>
                <Content>
                    <List>
                        <ListItem_ItemHeader_First_Arrow
                            text='西域酒店'
                            img={imgs.sidebar.xiyuHotel}/>
                        <ListItem_ItemHeader_First_Arrow
                            text='西域房地产'
                            img={imgs.sidebar.xiyuHouse}/>
                    </List>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:skin.color_white,
    },
    text:{
        marginLeft:10,
        fontSize:skin.font_xxxxxxxxxxxxxg,
        color:skin.color_font_green,
        letterSpacing:2,
        height:80,
        lineHeight:90,
        marginTop:40
    },
})