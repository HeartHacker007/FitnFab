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
export default class daietdetails extends Component {
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
                    <Text style={{color: '#008bc3', fontSize: 30}}>  Yogic Vegan Diet </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={{flex: 1}}>
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.YogaDaiet} resizeMode="contain" />
                                <Text style={styles.text}>How can I ensure that I get essential nutrients and maintain high energy levels when changing to a vegan diet? </Text>
                                <View>                          
                                    <Text style={[styles.text2, theme.style.mts]}>There are a myriad of reasons why so many people are choosing to adopt a plant-based diet. Whether you’re concerned about animal welfare, climate change, global starvation, your health, or all of the above, moving towards a vegan diet can be beneficial to both yourself and the world around you.</Text>
                                    <Text style={[styles.text2]}>As a naturopath and nutritionist, I see many clients who are considering a transition to a vegan diet but are concerned about maintaining healthy nutrient levels and continuing to have the energy they need to get things done. The good news? It can easily be done! Here are some easy-to-follow tips to live vegan, be healthy and feel amazing!</Text>
                                    <Text style={[styles.text2]}>Move towards veganism slowly and steadily. It’s important to be well prepared in order to make your transition as successful as possible. Stock your pantry with essential staples, gather a collection of healthy and delicious recipes, and find yourself a support network, whether this be friends, family, or a friendly internet community.</Text>
                                    <Text style={[styles.text2]}> Breakfast being the most important meal of the day is not just some old cliché! Get out of bed on the right side with a nourishing breakfast that’ll keep you going until lunch time.</Text>
                                    <Text style={[styles.text2]}>Focus on nutrient-dense foods for long-lasting energy. A meal consisting of wholegrain, fibrous foods, healthy fats and plant-based proteins will assist in maintaining healthy blood glucose levels which translate to long-lasting energy, a balanced appetite and a reduction in pesky sugar cravings, which means less 3pm visits to the vending machine.</Text>
                                    <Text style={[styles.text2]}>What’s the best (and most fun) way to ensure you’re getting a full spectrum of nutrients in every meal? A rainbow diet! Tick off your reds, yellows, oranges, greens and purples when getting your meals together to ensure you’re gaining a wide variety of vitamins, minerals and antioxidants.</Text>
                                    <Text style={[styles.text2]}>Mindful eating not only helps you appreciate and properly enjoy your meals, but improves the digestive process and absorption of important nutrients. Take time with your meals, ensure you are chewing not gulping (no matter how delicious the food!), and do your best to separate meal times from other activities.</Text>
                                    <Text style={[styles.text2]}>Blood tests. They’re not pleasant, but they are essential to keeping track of your health. Having a blood test every year or so (more often if you have any deficiencies) is the best way to keep an eye on the state of your health and ensure your Lidia Bier, is a Naturopath, Nutritionist and Herbalist based insides are behaving themselves.</Text>
                                    
                                </View>                               
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
        width: 400,
        height: 300,
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
