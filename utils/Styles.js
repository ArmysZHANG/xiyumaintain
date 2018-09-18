import {Platform} from 'react-native'
export const skin = {

//控制字体大小(用于适配Android和iOS)
    font_xxxxxxxxxxxxxg: Platform.OS === 'ios'?28:26,
    font_xxxxxxxxxxxxg: Platform.OS === 'ios'?27:25,
    font_xxxxxxxxxxxg: Platform.OS === 'ios'?26:24,
    font_xxxxxxxxxg: Platform.OS === 'ios'?25:23,
    font_xxxxxxxxg: Platform.OS === 'ios'?24:22,
    font_xxxxxxxg: Platform.OS === 'ios'?23:21,
    font_xxxxxxg: Platform.OS === 'ios'?22:20,
    font_xxxxxg: Platform.OS === 'ios'?21:19,
    font_xxxxg: Platform.OS === 'ios'?20:18,
    font_xxxg: Platform.OS === 'ios'?19:17,
    font_xxg: Platform.OS === 'ios'?18:16,
    font_xg: Platform.OS === 'ios'?17:15,
    font_lg: Platform.OS === 'ios'?16:14,
    font_md: Platform.OS === 'ios'?15:13,
    font_sm: Platform.OS === 'ios'?14:12,
    font_xs: Platform.OS === 'ios'?13:11,
    font_ms: Platform.OS === 'ios'?12:10,
    font_mms:Platform.OS === 'ios'?11:9,
    font_mmms:Platform.OS === 'ios'?10:8,
    font_mmmms:Platform.OS === 'ios'?9:7,

//背景的色值(专用于背景色)
    color_green: '#2ec58d',//'#333',
    color_red: '#f53f3f',
    color_yellow:'#e7b234',
    color_gray: '#666',
    color_midGray:'#808080',
    color_lightGray:'#999',
    color_black: '#000',
    color_white: '#fff',//'#333',
    color_transparent: "transparent",
    color_placeholder: '#999',
    color_border1: '#f2f2f2',//'#676767',
    color_border2: '#b3b3b3',//'#676767',
    color_active: '#000',
    color_bgc: '#f7f7f7',//'#282828',

//文字的色值(专用于文字颜色)
    color_font_green: '#2ec58d',
    color_font_red: '#f53f3f',
    color_font_yellow:'#e7b234',
    color_font_white: '#fff',
    color_font_black: '#000',//'#fff',
    color_font_gray: '#666',//'#999',
    color_font_midGray:'#808080',
    color_font_lightGray:'#999',//'#666',
    color_font_inactive: '#c2ccc9',//'#666',

//投影的颜色值(专用于投影)
    color_shadow_black:'#000',

//登录页面和修改密码页面的按钮背景颜色
    color_button_green:'#2ec58d',//'#4d4d4d'

//渐变的背景颜色值
    color_green_liner_gradinets_start:'#2ad978',//'#1fa65c',
    color_green_liner_gradinets_end:'#2ab399',//'#1f806c',
    color_red_liner_gradinets_start:'#f67660',//'#c25b4c',
    color_red_liner_gradinets_end:'#c53333',//'#912626',
    color_yellow_liner_gradinets_start:'#e8f182',//'#b8bf67',
    color_yellow_liner_gradinets_end:'#e7c230',//'#b58b28',
    color_gary_liner_gradinets:'#ccc',//'#999'
}