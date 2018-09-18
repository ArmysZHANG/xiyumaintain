import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text,Platform } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {skin} from "../../utils/Styles";

const thirdIndicatorStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize:10,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: skin.color_font_green,
    stepStrokeWidth: 5,
    stepStrokeFinishedColor: skin.color_font_green,
    stepStrokeUnFinishedColor: skin.color_font_inactive,
    separatorFinishedColor: skin.color_font_inactive,
    separatorUnFinishedColor: skin.color_font_inactive,
    stepIndicatorFinishedColor: skin.color_font_green,
    stepIndicatorUnFinishedColor: skin.color_font_white,
    stepIndicatorCurrentColor: skin.color_font_white,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: skin.color_transparent,
    stepIndicatorLabelFinishedColor: skin.color_transparent,
    stepIndicatorLabelUnFinishedColor: skin.color_transparent,
    labelColor: skin.color_font_inactive,
    labelSize: skin.font_sm,
    currentStepLabelColor: skin.color_font_green,
}

export default class Time_Line_Row extends Component {

    constructor() {
        super();
        this.state = {
            currentPage:0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator stepCount={4} customStyles={thirdIndicatorStyles}
                                   currentPosition={this.state.currentPage}
                                   labels={["待处理","预约派单","维修中","完成"]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: skin.color_font_white,
        marginTop:30,
    },
    stepIndicator: {
        marginTop: Platform.OS === 'ios' ? -10:0,
        paddingBottom:8,
        backgroundColor:skin.color_white,
    },
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});