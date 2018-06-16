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
export default class weightlossWorkout extends Component {
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
                    <Text style={{color: '#008bc3', fontSize: 30}}> Weight-Loss Workout </Text>
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
                                <Image style={styles.image} source={images.romanian} resizeMode="contain" />
                               
                                <Text style={styles.text}>Deadlift </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Stand behind a grounded barbell. Bend your knees slightly to grab it, keeping your shins, back and hips straight. Without bending your back, push your hips forwards to lift the bar. From upright,
                                     push your hips back to lower the bar, bending your knees only slightly.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Deadlift:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>It’s a sure-fire way to stoke your body into a fat-burning furnace. 
                                    Just make sure you start the move with the weight to manage 10 reps before gradually levelling up to the full heart-pumping calorie-vaporising zone of your one rep max.</Text>
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.benchpress} resizeMode="contain" />
                                <Text style={styles.text}> Barbell Bench Press </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Lie back on a flat bench holding a barbell in the rack above you with a shoulder-width, overhand grip. Lift the bar off the rack and position it above your chest with arms fully extended. From the starting position, breathe in and lower the bar slowly until it skims the middle of your chest.
                                     Push the bar back to the starting position explosively as you breathe out. That’s one rep.</Text>
                                   
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Barbell Bench Press:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This move sends your testosterone levels into blubber-burning overdrive by engaging your arms, chest and shoulders simultaneously. 
                                    And the more you push, the more calories you burn with this move, according research published in the Journal of Strength and Conditioning Research, making this move a great exercise to lose weight.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.lunge} resizeMode="contain" />
                                <Text style={styles.text}> Barbell Lunge </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Choose an appropriate weight and place the barbell across your back. Step forward with your right foot and sink into a lunge, so both legs are bent with your back knee as close to the floor as possible. 
                                    Drive yourself back up and repeat on the other side. 
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Barbell Lunge:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>One of the key elements of purging your fat stores is taking your body to the limit and 12-15 lunges on each leg will push your quadriceps, glutes and hamstrings to the absolute edge. 
                                    It'll hurt, but your super-charged metabolism will thank you later.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.bentoverrow} resizeMode="contain" />
                                <Text style={styles.text}> Bent Over Rows </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Holding a dumbbell in each hand bend your knees slightly and hinge at the hip so your upper body is almost parallel to the floor. 
                                    Keep your core tight and your back straight as you row the weights up to your chest. Lower and repeat.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Bench Press:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Ever seen an obese rower (who’s not about to capsize)? Thought not. That’s because rowing actions activates muscles throughout the body – from your back’s Latissimus dorsi to your biceps brachii, spreading your fat-burning power across the board. Any kind of compound lift, working multiple muscle groups at the same time, 
                                    will be a better exercsie to lose weight than isolation moves like bicep curls.</Text>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.situps} resizeMode="contain" />
                                <Text style={styles.text}>  Sit-Ups </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Lie down on the floor with your knees bent and, if possible, hook your feet under something that will prevent them from moving. Place your hands behind your head and tense your core as you lift your torso up so your upper body forms a V-shape with your thighs. 
                                    Lower under control back to the start position.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of   Sit-Ups:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Keeping it simple and fighting your bodyweight is the ideal challenge to burn fat. You don’t lose any time heading to the weights rack, 
                                    meaning you’ll keep your heart rate up and your body burning. </Text>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.bastards} resizeMode="contain" />
                                <Text style={styles.text}> Burpees</Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Start with your feet shoulder-width apart and squat down until your thighs are parallel to the floor. From the bottom of the squat, place your hands on the floor and kick your legs out behind you into a press-up position. Push up until your arms straight and then tuck in your legs at the bottom of the squat position. 
                                    Drive upwards through your heels until you are 6 inches off the floor and then repeat.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Burpees:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> It hasn't earned its name for nothing. Yes, burpees might leave you in a sweaty mess on the gym floor, but this brutal full-body exercise stresses every major muscle group to further spike the hormonal response you’re after. 
                                    A few burpees will prime your body for fat burning by working your abs, arms, chest, legs and shoulders all at once.</Text>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.barbellsquat} resizeMode="contain" />
                                <Text style={styles.text}> Barbell Squats</Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Start with your feet shoulder-width apart and squat down until your thighs are parallel to the floor. From the bottom of the squat, place your hands on the floor and kick your legs out behind you into a press-up position. Push up until your arms straight and then tuck in your legs at the bottom of the squat position. 
                                    Drive upwards through your heels until you are 6 inches off the floor and then repeat.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Barbell Squats:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>  Squats are big, powerful movements than require a lot of energy and use a wide range of muscles. 
                                    Plus, a study in Medicine and Science in Sports and Exercise found the squat is far superior at burning calories when compared to its machine-based rival, the leg press. </Text>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.cleannpress} resizeMode="contain" />
                                <Text style={styles.text}> Clean and Press</Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Squat down with a straight back and grab the barbell with an overhand grip. In one swift movement, lift the barbell to your shoulders and sink back down into a squat. Push up through your heels and extend your arms to press the barbell above your head. 
                                    Lower safely to your shoulders and drop back to the floor while maintaining a straight back. </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Burpees:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Not hitting your goals? Need to exercise to lose weight fast before a wedding? The clean and press is your best friend. It works your entire body,
                                     it’s intense and – here’s the best bit –it optimise your hormones to detonate body fat. It’ll also push your lactic acid levels through the roof, reducing your oestrogen and better regulate your insulin.</Text>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.battlerope} resizeMode="contain" />
                                <Text style={styles.text}> Battle ropes</Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Anchor the rope at its centre 15-20 feet away. Take an end in each hand with your arms extended at your side. Initiate the movement by rapidly raising one arm to shoulder level as quickly as you can. As you let that arm drop to the starting position, raise the opposite side. 
                                    Continue alternating your left and right arms, whipping the ropes up and down as fast as you can. </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Battle ropes:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> The battling ropes may have been labelled as another fitness fad, but there's method to the noisy twine-slamming in the corner of most well-equipped gyms. 
                                    The Journal of Strength and Conditioning Research found that ten 15-second bursts of battle ropes upped participant's heart rate to 180 BPM – the same as cycling or an all-out full-body sprint.</Text>
                                   
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
        ...theme.style.mhm,
        ...theme.style.ms,
    },
    text2: {
        color: '#616161',
        ...theme.style.f3,
        fontWeight: 'bold',
        ...theme.style.pm,
        ...theme.style.mhm,
    },
    text1: {
        color: '#008bc3',
        fontWeight: 'bold',
        ...theme.style.center,
    },
});
