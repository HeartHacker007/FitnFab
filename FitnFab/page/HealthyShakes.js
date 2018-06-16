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
    alert,
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
export default class HealthyShakes extends Component {
    myPressFun = () => {
        alert('clicked');
    }
    static propTypes = {navigation: PropTypes.object}

    /**
     * Lifecycle method
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
                    <Text style={{color: '#008bc3', fontSize: 30}}>Healthy Shakes  </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    />
                <View style={{flex: 1}}>
                    <Swiper showsButtons={true}>
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.juice} resizeMode="contain" />
                               
                                <Text style={styles.text}> Kale, apple and yoghurt hunger-beater </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Recipes:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 handful of kale</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 apple, core removed</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 pink grapefruit, peeled</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 cup of water</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1/2 cup natural yoghurt</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1tbsp. honey</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Green juices are synonymous with foul-tasting health drinks you have to pinch your nose and suffer through, 
                                    but this kale smoothie tastes as good as it makes you feel.
                                    Dark leafy greens are a great source of calcium,
                                    which research shows plays a key role in helping regulate body fat levels. 
                                    However, it's the protein packed into a 1/2 cup of low-fat natural yoghurt that'll keep you trim.
                                    The protein increases satiety, helping you avoid snacks between meals, 
                                    and minimises the loss of muscle most men suffer when dieting for fat loss.</Text>   
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.teacup} resizeMode="contain" />
                                <Text style={styles.text}> Orange, ginger and green tea recovery shake </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Recipes:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 orange</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 scoop of whey protein</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Pinch of ginger</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>400 ml cold green tea</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Handful of ice cubes</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Oranges are packed with vitamin C, 
                                    which helps combat the oxidative stress that causes DOMS, 
                                    and researchers at the University of Georgia also found the anti-inflammatory properties in ginger help reduce muscle soreness after exercise. 
                                    Green tea, as well as giving you a much-needed caffeine boost post-gym, 
                                    contains the antioxidant ECGC,which has the power to boost fat oxidisation. 
                                    Recovery is an undervalued part of every weight loss programme, 
                                    but with the correct nutrtion you can keep your muscles fresh and maintain the motivation to burn maximum calories every time you hit the gym.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.chilli} resizeMode="contain" />
                                <Text style={styles.text}> Berries, honey and chilli fat-burner </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Recipes: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 cup mixed frozen berries </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 very small pinch of chilli powder </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>400 ml milk </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>200 ml cold green tea </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1 tbsp honey </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Researchers at the University of California found the chemical capsaicin, 
                                    which is found in chilli peppers, increases fat loss by raising your body temperature and energy expenditure. 
                                    Other studies have shown that it can help suppress appetite too. Berries are an ideal addition to a low calorie, 
                                    fat burning shake; they are rich in vitamins, high in fibre and some research has shown they can also improve blood sugar control, 
                                    staving off diabetes.Rememeber, weight loss should also be about improving your health, 
                                    not just restricting calories. </Text>
                                   
                                </View>
                            </View>
                        </ScrollView>              
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...theme.style.container,
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
        ...theme.style.f4,
        fontWeight: 'bold',
        ...theme.style.mhl,
        ...theme.style.ms,
    },
    text2: {
        color: '#616161',
        ...theme.style.f3,
        fontWeight: 'bold',
        ...theme.style.mhm,
    },
    text1: {
        color: '#008bc3',
        fontWeight: 'bold',
        ...theme.style.center,
    },
});
