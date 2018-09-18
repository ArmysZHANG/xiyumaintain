import React, { Component } from 'react';
import {Container} from 'native-base'
import Input_Search_Bar from '../../component/input/Input_Search_Bar'
import Work_Order_Card from '../../component/card/Work_Order_Card'
export default class Finish extends Component{
    render(){
        return(
            <Container>
                <Input_Search_Bar
                    placeholder='按姓名/手机号/房号/责任单位查询'/>
                <Work_Order_Card
                    title='西域物业'
                    toptime='超出2小时20分钟'
                    midtitle='西域酒店一期财务室A栋'
                    midcontent1='分类:家具/建材/门/窗'
                    midcontent2='问题:门锁问题'
                    buttomcontent='3分钟前'
                    buttomtime='2017/9/8 10:03:11'
                    navigation={this.props.navigation}
                    route='Work_Order_Detail'/>
            </Container>
        )
    }
}
