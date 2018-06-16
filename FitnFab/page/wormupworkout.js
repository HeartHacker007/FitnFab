/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
export default class wormupworkout extends Component {
   
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkOutList')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{ color: '#008bc3', fontSize: 30 }}> Warm-up Exercise  </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{ color: '#008bc3', alignItems: 'flex-start' }} name='home' size={30} />
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
                                <Image style={styles.image} source={images.pressup} resizeMode="contain" />
                                <Text style={styles.text}> Press-up </Text>
                                <View>
                                    <Text style={styles.text1}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Get down into a press-up position with your hands placed shoulder-width apart and back flat,
                                    so a straight line forms from your head to heels, via your glutes.
                                    Lower your body until your chest is an inch from the ground then explosively drive up by fully extending your arms.
                                    That is on rep.</Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of  Press-up:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This move uses multiple muscle groups for maximum growth and strengthens your shoulder joints.
                                    Easily done as an exercise at home, this prepares you for progression to the more demanding shoulder exercises you will face in a gym,
                                    like the incline bench press. </Text>
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.plank} resizeMode="contain" />
                                <Text style={styles.text}> Plank </Text>
                                <View>
                                    <Text style={styles.text1}>How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Get in a press-up position, but rest on your forearms rather than your hands.
                                    Make sure your back is straight and tense your abs and glutes.
                                    Hold without allowing your hips to sag.</Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Plank:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Endless crunches put pressure on your spine and, when done incorrectly, can give you a set of weird, distended abs.
                                    Planks are perfect for working your core in a way that keeps you injury-free and builds the flat six-pack you are after.</Text>
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>

                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Deadbug} resizeMode="contain" />
                                <Text style={styles.text}> Deadbug </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Lie on your back with hands above you and feet up so your knees are at 90 degrees.
                                    Straighten your leg until your heel is an inch from the floor and then return to the start position.
                                    Repeat with the other leg.</Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Deadbug:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>By extending your legs and hovering your heels you work on your core stabilisers, not just your abs.
                                    That means you are building muscle you can use on the sports field, not just see in the mirror.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>

                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Sideplank} resizeMode="contain" />
                                <Text style={styles.text}> Side plank </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhm]}>Lie on your left side with your legs straight and prop yourself onto your elbow.
                                    Brace your core and raise your hips until your body forms a straight line.
                                    Hold this position while breathing deeply.
                                    Roll over and repeat on the other side. </Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Side plank:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhm]}>Excellent for targeting a small muscle in your lower back, the quadratus lumborum.
                                    Strengthening it is crucial for spine health and will help you avoid the notorious beginners back pain.
                                    Diamond-cut obliques are a bonus.</Text>
                                </View>
                            </View>
                    

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Benchdips} resizeMode="contain" />
                                <Text style={styles.text}> Bench dips </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Stand facing away from a bench,grab it with both hands at shoulder-width.
                                    Extend your legs out in front of you.
                                    Slowly lower your body by flexing at the elbows until your arm at forearm create a 90 degree angle.
                                    Using your triceps lift yourself back to the starting position.</Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Bench dips:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This is easy to do on a chair, stair or coffee table. It works the arms, 
                                    chest and shoulders and is great if you want people to notice that you have started working out as it builds triceps effectivley.</Text>
                                </View>
                            </View>
                    

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Crunch} resizeMode="contain" />
                                <Text style={styles.text}> Crunch </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Lie flat on your back with your knees bent at a 90-degree angle. Place your hands on either side of your head.
                                    Push your lower back into the floor as you lift your shoulders a few inches off the floor – make sure your lower back stays in contact with the ground at all times. Tense your abs hard at the top point of the movement,
                                    then return under control to the start position. </Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Crunch:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>The first port of call for any abs workout this is a must-do.
                                    By lifting your legs you place extra weight on the stomach muscles and reduce the momentum that could make this easier.
                                    See our variations to keep the burn.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Lowerbackcurl} resizeMode="contain" />
                                <Text style={styles.text}> Lower back curl </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Lie down flat with your arms by your sides.
                                    Slowly raise your chest upwards, with your arms down. Keep your head up during the move.
                                    Once you have reached the furthest point up, lower yourself back down. </Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Lower back curl:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>People often forget the importance of back workouts, but they are vital to develop all other muscle groups.
                                    This curl is great as it works the whole back and also alleviates back pain from days at the desk.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.shadowboxgif} resizeMode="contain" />
                                <Text style={styles.text}> Shadow boxing </Text>
                                <View>
                                    <Text style={styles.text1}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Adopt a fighting stance and bounce on your toes as you shadow box.
                                    Dip and weave to your heart is content.</Text>
                                </View>
                                <View>
                                    <Text style={styles.text1}> Benefits of Shadow boxing:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This can help consolidate the rest of your workout as it benefits cardio strength, legas, core and arms. 
                                    Jog on the spot between low- and high-intensity punching for a HIIT style cardio workout.</Text>
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
        backgroundColor: 'white',
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
        color: '#008bc3',
        ...theme.style.mhl,
        ...theme.style.ms,
    },
    text1: {
        color: '#008bc3',
        ...theme.style.f4,
        fontWeight: 'bold',
        ...theme.style.pm,
        ...theme.style.mhm,
        ...theme.style.mtm,
    },
    text2: {
        color: '#616161',
        ...theme.style.f3,
        fontWeight: 'bold',
        ...theme.style.pm,
        ...theme.style.mhm,
        ...theme.style.pm,
    },
   
});
