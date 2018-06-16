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
export default class postPregnancyyoga extends Component {
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
                    <Text style={{color: '#008bc3', fontSize: 30}}> After Pregnancy Yoga</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={{flex: 1}}>
                    <Swiper showsButtons={true} autoplay={true} autoplayTimeout={60} >
                     
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.kandhasan} resizeMode="contain" />
                               
                                <Text style={styles.text}> Kandharasana  </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Kandharasana? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Lie down flat on the back on the floor on your yoga mat.</Text>
                                    <Text style={[styles.text2]}>2. Bend the legs at the knees and bring the feet close to the buttocks.</Text>
                                    <Text style={[styles.text2]}>3. Grab the ankles with the hands and pull it backwards till the feet touches the buttocks.</Text>
                                    <Text style={[styles.text2]}>4. Retain the breath inside and raise the buttocks. Also arch the back upwards. The feet and the shoulder portion should remain on the ground.</Text>
                                    <Text style={[styles.text2]}>5. In this position, the body weight is supported by the feet, the shoulders, the arms, the neck and the head.</Text>
                                    <Text style={[styles.text2]}>6. This is the final pose. Retain it for as long as you are comfortable.</Text>
                                    <Text style={[styles.text2]}>7. To release the asana, bring down the buttocks back to the ground. The knees can remain in the bend position.</Text>
                                    <Text style={[styles.text2]}>8. Repeat this for 5 to 10 times depending on strength and convenience.</Text>
                                    <Text style={[styles.text2]}>9. After performing the asana it is good to do a forward bending counter pose like Paschimottansana.</Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Kandharasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Kandharasana strengthens the female reproductive organs. It should be practiced After pregnancy.</Text>
                                    <Text style={[styles.text2]}>2. It can prevent miscarriage by improving the health of the uterus.</Text>
                                    <Text style={[styles.text2]}>3. It can correct some vertebral disc problems and remove back ache.</Text>
                                    <Text style={[styles.text2]}>4. It strengthens the shoulders.</Text>
                                    <Text style={[styles.text2]}>5. Kandharasana tones all the organs in the abdomen.</Text>
                                </View>
                            </View>

                        </ScrollView>
                        
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.Tadasana} resizeMode="contain" />
                                <Text style={styles.text}> Tadasana  </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Tadasana ? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Stand erect with legs slightly apart with the hands on the sides.</Text>
                                    <Text style={[styles.text2]}>2. Raise the hand above the head and look straight.</Text>
                                    <Text style={[styles.text2]}>3. Interlock the fingers and turn it upwards. The palms should be facing the sky.</Text>
                                    <Text style={[styles.text2]}>4. The gaze can be adjusted to look slightly above the horizontal level.</Text>
                                    <Text style={[styles.text2]}>5. Take a deep breath and stretch the arms, shoulders and chest upwards.</Text>
                                    <Text style={[styles.text2]}>6. Raise the heels so that the weight of the body is borne by the toes.</Text>
                                    <Text style={[styles.text2]}>7. Stretch the whole body from the feet to the head.</Text>
                                    <Text style={[styles.text2]}>8. Remain in this position for few seconds.</Text>
                                    <Text style={[styles.text2]}>9. Bring down the heels while breathing out. </Text>
                                    <Text style={[styles.text2]}>10. This is one round. One can practice up to 10 rounds. </Text>
                                    <Text style={[styles.text2]}>11. During the whole practice the eyes should remain steadily fixed in front little above the head level. </Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Tadasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Tadasana gives a good stretch to the arms, chest, abdomen, spine and the legs.</Text>
                                    <Text style={[styles.text2]}>2. It creates a sense of physical and mental balance. This sense of balance can be enhanced if one practices the same with closed eyes.</Text>
                                    <Text style={[styles.text2]}>3. Tadasana can help to increase height.</Text>
                                    <Text style={[styles.text2]}>4. Women during early stages of pregnancy can be benefited due to the gentle stretch of the abdomen.</Text>
                                    <Text style={[styles.text2]}>5. Tadasana can also be performed before and after inverted poses like Sirsasana to redistribute the blood in the body. During Sirsasana the blood accumulates in the head. Beginners especially can see their eyes getting red as it gets filled with excess blood. Tadasana when performed rapidly helps to bring down the accumulated blood from the head and redistributes it in the body.</Text>
                                    <Text style={[styles.text2]}>6. Tadasana is one of the poses used during the practice of Shankaprakshalana or the cleaning of the stomach and intestine. This quickly moves the saline water which one drinks during the process to the lower intestine and rectum, thereby quickening the cleansing process.</Text>

                                </View>
                            </View>
                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.bujangasan} resizeMode="contain" />
                                <Text style={styles.text}> Bujangasan </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Bhujangasana? </Text>
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
                                    <Text style={styles.text1}> Benefits of Chakrasana (Wheel Pose):</Text>
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
        ...theme.style.f5,
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
    },
   
    WebViewContainer: {
        ...theme.style.mtxl,
    },
});
