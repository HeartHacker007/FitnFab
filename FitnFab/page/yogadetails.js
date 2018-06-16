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
export default class yogadetails extends Component {
    myPressFun = () => {
        alert('clicked');
    }
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('YogaList')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}> Basic Yog Aasana</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={{flex: 1}}>
                    <Swiper showsButtons={true} autoplay={true} autoplayTimeout={60} >
                     
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.dhanurasan} resizeMode="contain" />
                                <Text style={styles.text}> Dhanurasan </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Dhanurasana (The Bow Pose) ? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Lie down flat on your stomach with your hands on the side. Relax and breathe normally.</Text>
                                    <Text style={[styles.text2]}>2. Slowly bend your knees backwards as far as possible, almost touching the back of your buttocks.</Text>
                                    <Text style={[styles.text2]}>3. Now arch your head and neck upwards and backwards. Slowly move the hands towards the lower leg. Use both your hands and try to get hold of your lower leg at the ankles. Hold on to the ankles till you complete the asana.</Text>
                                    <Text style={[styles.text2]}>4. Now inhale deeply and expand your chest. At the same time, pull the legs upwards using your hands. Arch your trunk backward and upwards along with your head and neck. When fully stretched, your shape will resemble a bow. Your thighs will be raised above the ground and you will be resting on the abdomen and the lower part of the chest alone.</Text>
                                    <Text style={[styles.text2]}>5. Continue in this position as much as you are comfortable, starting from few seconds up to 30 seconds.</Text>
                                    <Text style={[styles.text2]}>6. Release the pose by letting go of the lower legs and bringing the legs, trunk and head to the original supine position. Exhale during this process of releasing the pose.</Text>
                                    <Text style={[styles.text2]}>7. Dhanurasana gives a very good back bend. It is good to follow it up by a counter pose to stretch the body in the opposite direction. The child’s pose can be a good counter pose for Dhanurasana. To perform the child’s pose, Kneel on the floor and bend forward, putting your head between the knees and the forehead touching the floor. Take your hands behind your buttocks and hold your right wrist with your left hand. Adjust your position to relax all your body parts. Breathe slowly and deeply in this position. Stay as much as you are comfortable.</Text>
                                    <Text style={[styles.text2]}>8. Slowly release the child’s pose and rest in shavasana.</Text>
                                   
                                </View>
                               
                                <View>
                                    <Text style={styles.text1}> Benefits of Dhanurasana (The Bow Pose):</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Dhanurasana improves the strength of the back and the lower abdominal muscles.</Text>
                                    <Text style={[styles.text2]}>2. It gives a good stretch to the shoulders, hands, thorax, thighs and the legs.</Text>
                                    <Text style={[styles.text2]}>3. Dhanurasana massages the abdomen and internal organs.</Text>
                                    <Text style={[styles.text2]}>4. It improves digestion.</Text>
                                    <Text style={[styles.text2]}>5. It massages the pancreas and is good for diabetic patients.</Text>
                                    <Text style={[styles.text2]}>6. Dhanurasana expands the chest and corrects stooping of the back and shoulders.</Text>
                                    
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/MqLqE8yd_uo'}}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.chakrasan} resizeMode="contain" />
                                <Text style={styles.text}> Chakrasan </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Chakrasana (Wheel Pose)? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Lie down on your back with hands on the side.</Text>
                                    <Text style={[styles.text2]}>2. Bend your knees and bring your heels as close to the buttocks as possible. The heels should be about 1 foot apart.</Text>
                                    <Text style={[styles.text2]}>3. Now raise your hands and bring it back next to the ears. Place the palms on the floor with the fingers pointing towards the shoulders.</Text>
                                    <Text style={[styles.text2]}>4. Lift your body up with the support of the palms and the feet.</Text>
                                    <Text style={[styles.text2]}>5. Rotate the head slightly, so that your gaze is towards the floor.</Text>
                                    <Text style={[styles.text2]}>6. Stretch your thighs and shoulders. In the final position your body looks like an arch, almost like a wheel.</Text>
                                    <Text style={[styles.text2]}>7. Maintain this position, according to your capacity.</Text>
                                    <Text style={[styles.text2]}>8. To release the position, lower your body till it touches the ground. Straighten your legs. Hands can go back to the original position to the sides.</Text>
                                    <Text style={[styles.text2]}>9. It should be followed by forward bending poses to counteract the pressure created by the back bend. </Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Chakrasana (Wheel Pose):</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Chakrasana strengthens the back and abdominal muscles.</Text>
                                    <Text style={[styles.text2]}>2. It tones the organs in the abdomen including the digestive, excretory and reproductive organs.</Text>
                                    <Text style={[styles.text2]}>3. It strengthens arms, shoulders, wrists, abdomen and spine.</Text>
                                    <Text style={[styles.text2]}>4. It expands the chest and lungs.</Text>
                                    <Text style={[styles.text2]}>5. It stimulates the thyroid gland.</Text>
                                    <Text style={[styles.text2]}>6. Chakrasana is excellent for those suffering from back pain.</Text>
                                    <Text style={[styles.text2]}>7. It tones the liver, pancreas and kidneys.</Text>
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/NiDhg35OCxI'}}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.bujangasan} resizeMode="contain" />
                                <Text style={styles.text}> Bhujangasana </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Bhujangasana (The Cobra Pose)? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Lie down on your stomach with hands on the side, toes touching together.</Text>
                                    <Text style={[styles.text2]}>2. Bring your hands to the front at the shoulder level, with palms resting on the floor.</Text>
                                    <Text style={[styles.text2]}>3. Slowly raise your trunk and head with the support of the palms alone. The arms should be bent at the elbows.</Text>
                                    <Text style={[styles.text2]}>4. Arch your neck slightly backwards, so that the pose looks like a cobra with raised hood.</Text>
                                    <Text style={[styles.text2]}>5. Breathe normally and feel the stomach press against the floor.</Text>
                                    <Text style={[styles.text2]}>6. Hold the asanas for few seconds in the beginning stages. One may go up to 2 minutes as one progresses.</Text>
                                    <Text style={[styles.text2]}>7. You can release the pose by bringing the hands back to the sides and resting your head on the forehead. Then, place the hands under your head like a pillow. Bend and rest your head on one side and breathe normally.</Text>                                
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Bhujangasana (The Cobra Pose):</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Bhujangasana strengthens the back muscles especially the lower back.</Text>
                                    <Text style={[styles.text2]}>2. It increases flexibility of the spine and the muscles around it.</Text>
                                    <Text style={[styles.text2]}>3. It tones the organs in the lower abdomen, the digestive organs, the urinary and reproductive organs.</Text>
                                    <Text style={[styles.text2]}>4. It tones the buttock muscles.</Text>
                                    <Text style={[styles.text2]}>5. Bhujangasana can correct some of the menstrual irregularities.</Text>
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/DuTVp54Ms4w' }}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>

                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Parvatasan} resizeMode="contain" />
                                <Text style={styles.text}> Parvatasan </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Parvatasana (The Mountain Pose)? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. As part of the Surya Namaskara, Parvatasana is performed after Ashwa Sanchalanasana or the equestrian pose. Hence Ashwa Sanc halanasana becomes the starting pose for Parvatasana.</Text>
                                    <Text style={[styles.text2]}>2. From Ashwa Sanchalanasana, straighten the bend leg and take it backwards. Exhale during this process. Let the right and left foot be together.</Text>
                                    <Text style={[styles.text2]}>3. Raise the buttocks up. Let the two arms be on the floor and support the body weight. Lower the head to be between the two arms. The body makes the shape of a triangle when observed from the sides. It looks like a mountain and hence the name.</Text>
                                    <Text style={[styles.text2]}>4. When done as part of the Surya Namaskara (Sun Salutation exercises) a mantra can be chanted while performing this asana. Parvatasana is done as the 4th pose and the 9th pose. The mantra to be chanted is given below:During 9th pose chant “Om Marichaye Namaha”. It means salutation to the lord of the dawn.</Text>
                                    <Text style={[styles.text2]}>5. During 4th pose chant “Om Khagaya Namaha”. It means salutations to the one who moves in the sky.</Text>
                                    
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Parvatasana (The Mountain Pose):</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1.Parvatasana strengthens the muscles of the arms and legs.</Text>
                                    <Text style={[styles.text2]}>2. It tones the spinal nerves and sends good flow of blood to the spinal region.</Text>
                                    <Text style={[styles.text2]}>3. It increases blood flow to the brain and gives mild benefits similar to inverted asanas.</Text>
               
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/qOVx_YJHFtk'}}
                                />
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
        color: '#008bc3',
        fontWeight: 'bold',
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
    },
   
    WebViewContainer: {
        ...theme.style.mtxl,
    },
});
