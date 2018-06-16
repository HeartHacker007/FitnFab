/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView,
    ScrollView,
    Image,
} from 'react-native';
import {images, theme} from '../assets';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

/**
 * App Component
 */
export default class weightlossDiet extends Component {
    static propTypes = {navigation: PropTypes.object}
    /**
     * Constructor
     */
    /**
       * @return {Component}
       */
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.Top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DaietList')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}>  Weight Loss </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={{flex: 1}}>
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.wld} resizeMode="contain" />
                                <Text style={styles.text}>Tips to Loss Weight </Text>
                                <View>                          
                                    <Text style={[styles.text2, theme.style.mts]}>1.  Include Asparagus</Text>
                                    <Text style={[styles.text2]}>2. Eat Cabbage.</Text>
                                    <Text style={[styles.text2]}>3. Drink Trim-milk.</Text>
                                    <Text style={[styles.text2]}>4. Eat more of Whole Grains.</Text>
                                    <Text style={[styles.text2]}>5. Follow Yoga and Workout.</Text>
                                    <Text style={[styles.text2]}>6. Drink Green Tea.</Text>
                                    <Text style={[styles.text2]}>7. Eat More Vegetables and Fruits.</Text>
                                    <Text style={[styles.text2]}>8. Chew Your Food Properly.</Text>
                                    <Text style={[styles.text2]}>9. Say No to soft drinks and Diet Colas. </Text>
                                    <Text style={[styles.text2]}>10.Don't Drink alcohol or Beer.</Text>
                                </View>                               
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/FMO6_fc327c'}}
                                />
                            </View>
                        </ScrollView>                                                                                 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...theme.style.flex,
    },
    Top: {
        flex: 0.1,
        ...theme.style.row,
        ...theme.style.alignCenter,
        ...theme.style.spaceBetween,
        ...theme.style.pm,
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        ...theme.style.black,
        ...theme.style.f5,
        fontWeight: 'bold',
        ...theme.style.mhl,
        ...theme.style.ms,
    },
    text2: {
        color: '#616161',
        fontWeight: 'bold',
        ...theme.style.f4,
        ...theme.style.mbs,
        ...theme.style.mhm,
    },
    text1: {
        color: '#008bc3',
        fontWeight: 'bold',
        ...theme.style.center,
    },
    WebViewContainer: {
        ...theme.style.mtxl,
    },
   
});
