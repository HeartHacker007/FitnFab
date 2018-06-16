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
export default class bicepworkout extends Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkOutList')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}> Bicep Workout  </Text>
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
                                <Image style={styles.image} source={images.ZottmanCurls} resizeMode="contain" />
                               
                                <Text style={styles.text}> Zottman Curls </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Stand holding two dumbbells with your arms fully extended, palms facing forwards. 
                                    Curl the weights up to shoulder height, taking care to move only your forearms. At the top position, while squeezing your biceps, 
                                    rotate your wrists until your palms are facing away from your body. Lower back down to the start position and, at the end of the move, 
                                    again rotate your wrists so your palms are facing out.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Zottman Curls:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Named after a famous strongman, the Zottman curl's pronated (downward-facing) grip on the way down ensures you're not just working on your top guns. 
                                    "The zottman helps work your underdeveloped forearm muscles," says Ignite PT's Jason Patmore. Work the forearms further by using the pronated grip on an EZ bar during preacher curls. 
                                    Soon you won't have to do the dishes to find an excuse to roll your sleeves up.</Text>
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.ConcentrationCurls} resizeMode="contain" />
                                <Text style={styles.text}> Concentration Curls </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Sit down on bench and rest your right arm against your right leg, letting the weight hang down. 
                                    Curl the weight up, pause, then lower. Repeat with the other arm.</Text>
                                   
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Concentration Curls:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>The concentration bicep curl aims to eliminate the 'swinging' motion that makes free curls easier by entirely isolating the bicep. 
                                    "You should only select a lighter weight," says Patmore.  "I use this for creating the shape, particularly the peak, of the bicep." Patmore's right on the money: biceps are actually made up of two muscles, the 'long' and the 'short' head. Concentration curls hit the short head, 
                                    responsible for bulking the bicep to create that bodybuilder's peak.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.HammerCurl} resizeMode="contain" />
                                <Text style={styles.text}> Hammer Curl </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold a dumbbell in each hand at your sides, palms facing your hips. 
                                    Curl the weights up until your thumbs are near your shoulders, then lower. 
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Hammer Curl:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>"Because the position differs from traditional bicep curls, you wrist and finger flexors are also getting a workout," Patmore tells us. The hammer curl is a great way to 'even out' the biceps, 
                                    engaging both the 'long head' muscle to add general size, and the peak-building 'short head' muscle.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.BarDragCurl} resizeMode="contain" />
                                <Text style={styles.text}> EZ Bar Drag Curl </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold the EZ bar in front of your thighs with an underhand, shoulder-width grip. Curl the bar and as your hands rise, drive your elbows back so the bar stays as close to your torso as possible. 
                                    Squeeze your biceps at the top, then lower under control.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Bench Press:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> "Because the elbows are not moving forwards but backwards, this places more stress on the bicep," says Patmore.  "The EZ bar bicep curl is a perfect exercise for adding size." Because the bar is travelling directly up your body rather than out in a curling motion, more weight can be added, 
                                    creating even more stress for the bicep. A sure-fire way to shirt-bursting sleeves. </Text>
                                   
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
