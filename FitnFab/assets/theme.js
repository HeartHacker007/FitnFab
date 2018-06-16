import {StyleSheet, Platform, Dimensions} from 'react-native';
import _ from 'lodash';

const fontSizes = {
    f1: 12,
    f2: 14,
    f3: 16,
    f4: 20,
    f5: 25,
    f6: 30,
    f7: 35,
    f8: 45,
    f9: 50,
};

const colors = {
    black: 'black',
    white: 'white',
    bgColor: 'white',
    lightWhiteColor: '#e7ecef',
    lightGrayTextColor: '#99a3a9',
    btnYellowColor: '#ffc107',
    btnGreenColor: '#4cb906',
    btnSigninColor: 'transparent',
    darkYellowTextColor: '#925b00',
    bgYellowColor: '#ffd600',
    fbBg: '#3949ab',
    twitterBg: '#4099ff',
    signuptext: '#aaa6a2',
    tnc: '#fecf0a',
    pageBg: '#f6f9fa',
    themeBlue: '#1da1f2',
    txtboxInnerColor: '#ba5c80',
    BgColor: '#ebf0f2',
};


const fontFamilies = {
    balooBhai: 'BalooBhai-Regular',
    heboo: 'Heebo-Regular',
    lato: 'Lato-Regular',
    rubik: 'Rubik-Regular',
    sfuisplay: 'SFUIDisplay-Regular',
    sfuiText: 'SFUIText-Regular',
    sfuiTextMedium: 'SFUIText-Regular',
};

const spaces = {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 30,
    xxxl: 40,
    xxxxl: 50,
    xxxxxl: 60,
    big: 65,
};
const border = {border: 2, borderColor: 'white'};
const style = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerNoBg: {
        flex: 1,
    },
    containerX: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    flex: {
        flex: 1,

    },
    padContainer: {
        paddingHorizontal: 30,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    absolute: {
        ...StyleSheet.absoluteFillObject,
    },
    row: {
        flexDirection: 'row',
    },
    rowReverse:
    {
        flexDirection: 'row-reverse',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    shadow: Platform.OS == 'ios' ? {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.3,
    } : {elevation: 2},
};

_.forIn(fontSizes, (value, key) => style[key] = {fontSize: value});
_.forIn(colors, (value, key) => style[key] = {color: value});
_.forIn(fontFamilies, (value, key) => style[key] = {fontFamily: value});
_.forIn(spaces, (value, key) => style[`m${key}`] = {margin: value});
_.forIn(spaces, (value, key) => style[`mb${key}`] = {marginBottom: value});
_.forIn(spaces, (value, key) => style[`ml${key}`] = {marginLeft: value});
_.forIn(spaces, (value, key) => style[`mr${key}`] = {marginRight: value});
_.forIn(spaces, (value, key) => style[`mt${key}`] = {marginTop: value});
_.forIn(spaces, (value, key) => style[`mv${key}`] = {marginVertical: value});
_.forIn(spaces, (value, key) => style[`mh${key}`] = {marginHorizontal: value});
_.forIn(spaces, (value, key) => style[`p${key}`] = {padding: value});
_.forIn(spaces, (value, key) => style[`pb${key}`] = {paddingBottom: value});
_.forIn(spaces, (value, key) => style[`pl${key}`] = {paddingLeft: value});
_.forIn(spaces, (value, key) => style[`pr${key}`] = {paddingRight: value});
_.forIn(spaces, (value, key) => style[`pt${key}`] = {paddingTop: value});
_.forIn(spaces, (value, key) => style[`pv${key}`] = {paddingVertical: value});
_.forIn(spaces, (value, key) => style[`ph${key}`] = {paddingHorizontal: value});
_.forIn(spaces, (value, key) => style[`br${key}`] = {borderRadius: value});
_.forIn(spaces, (value, key) => style[`br${key}`] = {borderRadius: value});


export default {
    fontSizes,
    colors,
    style,
    fontFamilies,
    border,
};
