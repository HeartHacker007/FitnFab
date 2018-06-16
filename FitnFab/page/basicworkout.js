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
export default class basicworkout extends Component {
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
                    <Text style={{color: '#008bc3', fontSize: 30}}> Basic Exercise  </Text>
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
                                <Image style={styles.image} source={images.gym4} resizeMode="contain" />
                                <Text style={styles.text}> Running Exercise </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Start with brisk walking for 15 minutes before the start gym exercise . 
                                    In every 5 min increase your current running speed</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Running:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1. Help to build strong bones</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>2. Strengthen muscles</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>3. Burn plenty of kilojoules</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>4. Help maintain a healthy weight.</Text>
                                </View>
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym6} resizeMode="contain" />
                                <Text style={styles.text}> Skipping Rope Exercise </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1.Jump 1 to 2 inches off floor, giving rope just enough space to slip under feet — only the balls of feet should touch the floor.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>2.Keep elbows close to sides as you turn the rope. The movement comes from the wrists and forearms, not the shoulders.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>3.To find a rope that fits, place one foot in the center of the rope and lift the handles — they shouldn't go past your armpits.</Text>
                                   
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Skipping Rope Exercise:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1.Improves Heart Rate.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>2.Tones Muscles in Lower and Upper Body.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>3.Best Tool for Weight Loss</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>4.Skipping is a Full Body Workout </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>5.Helps Improve the Skin.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>6.Helps Attain Balance, Coordination and Agility.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>7.Keeps a Check on Osteoporosis by Improving Bone Density.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym8} resizeMode="contain" />
                                <Text style={styles.text}> Cycling </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Stand next to your bike and bring the seat to hip height. 
                                    Then, once you're on the bike, your leg should be bent at a 25- to 30-degree angle at the bottom of the pedal stroke, Makely says. 
                                    When you pedal, your knees should be aligned over your toes.To find the right distance between the seat and the handlebars, 
                                    place your elbow at the tip of the seat and adjust the seat forward or backward so that your fingertips just touch the back of the handlebars, 
                                    LaVelle sats.Finally, adjust the handlebar height so it feels comfortable.then start cycling for 15 min.In every 5 min increase your current cycling speed.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Cycling:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1.Increased cardiovascular fitness.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>2.Increased muscle strength and flexibility.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>3.Improved joint mobility.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>4.Decreased body fat levels.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>5.Strengthened bones.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>5.decreased body fat levels.</Text>
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym2} resizeMode="contain" />
                                <Text style={styles.text}> Sit Ups </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>To launch your super strength workout, 
                                        perform five sets of five to six reps — 25 to 30 total reps of each move. 
                                        Always take at least a 90-second to two-minute breather between each set.
                                        Keep the reps and sets the same for four to six weeks, 
                                        but add two to five percent more weight each week. 
                                        Then, to continue challenging the body (using the principle of progressive overload), 
                                        grab an even heavier set of weight and drop down to three reps for seven to eight sets. 
                                        Do this for the next four to six weeks. 
                                        Remember, what doesn’t challenge you won’t change you.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Bench Press:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 1. Maintain Body Health </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 2. Maintain Stability Body Movement </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 3. Maintain Body Balancing</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 4. Maintain Posture </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 5. Maintaining Healthy Muscles</Text>
                                   
                                </View>
                            </View>
                        

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym3} resizeMode="contain" />
                                <Text style={styles.text}> Arm Dumbbell Row </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>To launch your super strength workout, 
                                        perform five sets of five to six reps — 25 to 30 total reps of each move. 
                                        Always take at least a 90-second to two-minute breather between each set.
                                        Keep the reps and sets the same for four to six weeks, 
                                        but add two to five percent more weight each week. 
                                        Then, to continue challenging the body (using the principle of progressive overload), 
                                        grab an even heavier set of weight and drop down to three reps for seven to eight sets. 
                                        Do this for the next four to six weeks. 
                                        Remember, what doesn’t challenge you won’t change you.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Arm Dumbbell Row:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>By extending your legs and hovering your heels you work on your core stabilisers, not just your abs.
                                    That means you are building muscle you can use on the sports field, not just see in the mirror.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym9} resizeMode="contain" />
                                <Text style={styles.text}> Back Squat </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>With a barbell in the racked position, stand under it so the barbell is behind your head and resting on your traps (the muscle in your upper back that runs from your neck to just below your shoulder blade). Grasp the bar with both hands just outside shoulder-width </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 1. Unrack the bar and carefully take one step back with each foot. Feet should be hip-width apart or just slightly wider, toes pointing slightly outward </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 2. Take a big breath into your belly, tighten your abs and drive your elbows toward the floor.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 3. As you hinge at the hips and bend your knees, sit straight down into a squat. Go as low as you can, without your back rounding. Ideally, you want your hip crease lower than the top of your knee.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 4. Stand straight back up, without locking your knees at the top .</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 5. Repeat.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm]}> Benefits of Back Squat:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhm]}>Excellent for targeting a small muscle in your lower back, the quadratus lumborum.
                                    Strengthening it is crucial for spine health and will help you avoid the notorious beginners back pain.
                                    Diamond-cut obliques are a bonus.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym1} resizeMode="contain" />
                                <Text style={styles.text}> Overhead Press </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>To launch your super strength workout, 
                                        perform five sets of five to six reps — 25 to 30 total reps of each move. 
                                        Always take at least a 90-second to two-minute breather between each set.
                                        Keep the reps and sets the same for four to six weeks, 
                                        but add two to five percent more weight each week. 
                                        Then, to continue challenging the body (using the principle of progressive overload), 
                                        grab an even heavier set of weight and drop down to three reps for seven to eight sets. 
                                        Do this for the next four to six weeks. 
                                        Remember, what doesn’t challenge you won’t change you.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Overhead Press:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This is easy to do on a chair, stair or coffee table. It works the arms, 
                                    chest and shoulders and is great if you want people to notice that you have started working out as it builds triceps effectivley.</Text>
                                </View>
                            </View>

                        </ScrollView>
                       
                    
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.gym7} resizeMode="contain" />
                                <Text style={styles.text}> Bench Press </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> How to do it: </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> Lie on your back on a bench with feet planted firmly on the floor.
                                    Your eyes should be directly under the bar </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>1. Grab the bar, with hands just outside shoulder width. Then unrack it and hold it over your chest </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 2. Lower the bar to your chest or just above it if you don’t have the full range of motion </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}> 3. Drive the bar straight up again </Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>4. Repeat before re-racking.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Benefits of Bench Press:</Text>
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
        ...theme.style.pm,
    },
    text1: {
        color: '#008bc3',
        fontWeight: 'bold',
        ...theme.style.center,
    },
});
