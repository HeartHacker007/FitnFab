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
export default class prePregnancyyoga extends Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('YogaList')}activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}> Pre Pregnancy Yoga</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='home' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={{flex: 1}}>
                    <Swiper showsButtons={true} autoplay={true} autoplayTimeout={60} >
                    <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.pyogatips} resizeMode="contain" />
                             
                                <Text style={styles.text}> Yoga Tips for pregnant women  </Text>
                                <View>
                                    <Text style={styles.text1}> Yoga precautions for pregnant women: </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. During the advanced stages of pregnancy, avoid yoga asanas that put pressure on the abdomen.</Text>
                                    <Text style={[styles.text2]}>2. For the first trimester of pregnancy, do standing yoga poses. This will help strengthen the legs and enhance circulation. It can even reduce leg cramps.</Text>
                                    <Text style={[styles.text2]}>3. During the second and third trimester, reduce the time spent holding asanas to prevent fatigue. Substitute with breathing exercises and meditation.</Text>
                                    <Text style={[styles.text2]}>4. Avoid practicing yoga from the 10th to the 14th week of pregnancy since these are crucial times.</Text>
                                    <Text style={[styles.text2]}>5. Avoid doing inversion poses.</Text>
                                    <Text style={[styles.text2]}>6. Listen to your body and do as much as you can without undue effort.</Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> This Yoga poses to avoid during pregnancy:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Naukasana (Boat Pose),</Text>
                                    <Text style={[styles.text2]}>2. Chakrasana (Wheel Pose),</Text>
                                    <Text style={[styles.text2]}>3. Ardha Matsyendrasana (Sitting Half Spinal Twist),</Text>
                                    <Text style={[styles.text2]}>4. Bhujangasana (Cobra Pose),</Text>
                                    <Text style={[styles.text2]}>5. Viparita Shalabhasana (Superman Pose),</Text>
                                    <Text style={[styles.text2]}>6. Halasana (Plow Pose).</Text>
                                    
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/w9xnmr9u3Ig'}}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.marjariasana} resizeMode="contain" />
                             
                                <Text style={styles.text}> Marjariasana </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Marjariasana? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Come onto your fours. Form a table such that your back forms the table top and your hands and feet form the legs of the table.</Text>
                                    <Text style={[styles.text2]}>2. Keep your arms perpendicular to the floor, with the hands directly under the shoulders and flat on the ground; your knees are hip-width apart.</Text>
                                    <Text style={[styles.text2]}>3. Look straight ahead..</Text>
                                    <Text style={[styles.text2]}>4. As you inhale, raise your chin and tilt your head back, push your navel downwards and raise your tailbone. Compress your buttocks. Do you feel a slight tingle here?</Text>
                                    <Text style={[styles.text2]}>5. Hold the Cat pose and take long, deep breaths.</Text>
                                    <Text style={[styles.text2]}>6. Follow this by a countermovement: As you exhale, drop your chin to your chest and arch your back up as much as you can; relax the buttocks.</Text>
                                    <Text style={[styles.text2]}>7. Hold this pose for a few seconds before you return to the initial table-like stage.</Text>
                                    <Text style={[styles.text2]}>8. Continue five or six rounds before you come out of this yoga posture.</Text>
                                    <Text style={[styles.text2]}>9. When you do the movement slowly and gracefully, its effect is more powerful and meditative. </Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Marjariasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Brings flexibility to the spine.</Text>
                                    <Text style={[styles.text2]}>2. Strengthens wrists and shoulders.</Text>
                                    <Text style={[styles.text2]}>3. Massages the digestive organs and improves digestion.</Text>
                                    <Text style={[styles.text2]}>4. Tones the abdomen.</Text>
                                    <Text style={[styles.text2]}>5. Improves digestion.</Text>
                                    <Text style={[styles.text2]}>6. Relaxes the mind.</Text>
                                    <Text style={[styles.text2]}>7. Improves blood circulation.</Text>
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/wBAxxzlHXcg'}}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>
                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.konasana} resizeMode="contain" />
                                <Text style={styles.text}> Konasana </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Konasana? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Stand straight with feet about hip width distance apart and arms alongside the body.</Text>
                                    <Text style={[styles.text2]}>2. Breathe in and raise the left arm up so that the fingers point towards the ceiling.</Text>
                                    <Text style={[styles.text2]}>3. Breathe out and bend to the right, first from the spine, and then move your pelvis to the left and bend a little more. Keep your left arm pointing up.</Text>
                                    <Text style={[styles.text2]}>4. Turn your head to look up at the left palm. Straighten the elbows.</Text>
                                    <Text style={[styles.text2]}>5. Breathing in, straighten your body back up.</Text>
                                    <Text style={[styles.text2]}>6. Breathing out, bring the left arm down.</Text>
                                    <Text style={[styles.text2]}>7. Repeat with the right arm.</Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Konasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. It helps stretch the sides of the body and the spine.</Text>
                                    <Text style={[styles.text2]}>2. Helps in toning of arms,legs,and abdominal organs.</Text>
                                    <Text style={[styles.text2]}>3. Helpful in relieving back pain.</Text>
                                    <Text style={[styles.text2]}>4. Increases the flexibility of the spine.</Text>
                                    <Text style={[styles.text2]}>5. Helps those who are suffering from constipation.</Text>
                                    <Text style={[styles.text2]}>6. Helpful for people suffering from sciatica.</Text>
              
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/AjE6A276C2c'}}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>

                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.trikonasana} resizeMode="contain" />
                                <Text style={styles.text}> Trikonasana </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Trikonasana? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Stand straight. Separate your feet comfortably wide apart (about 31/2 to 4 feet).</Text>
                                    <Text style={[styles.text2]}>2. Turn your right foot out 90 degrees and left foot in by 15 degrees.</Text>
                                    <Text style={[styles.text2]}>3. Now align the center of your right heel with the center of your arch of left foot.</Text>
                                    <Text style={[styles.text2]}>4. Ensure that your feet are pressing the ground and the weight of your body is equally balanced on both the feet.</Text>
                                    <Text style={[styles.text2]}>5. Inhale deeply and as you exhale, bend your body to the right, downward from the hips, keeping the waist straight, allowing your left hand to come up in the air while your right hand comes down towards floor. Keep both arms in straight line.</Text>
                                    <Text style={[styles.text2]}>6. Rest your right hand on your shin, ankle, or the floor outside your right foot, whatever is possible without distorting the sides of the waist. Stretch your left arm toward the ceiling, in line with the tops of your shoulders. Keep your head in a neutral position or turn it to the left, eyes gazing softly at the left palm.</Text>
                                    <Text style={[styles.text2]}>7. Ascertain that your body is bent sideways and not backward or forward. Pelvis and chest are wide open.</Text>
                                    <Text style={[styles.text2]}>8. Stretch maximum and be steady. Keep taking in long deep breaths. With each exhalation, relax the body more and more. Just be with the body and the breath.</Text>
                                    <Text style={[styles.text2]}>9. As you inhale, come up, bring your arms down to your sides, and straighten your feet. </Text>
                                    <Text style={[styles.text2]}>10.Repeat the same on the other side.</Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Trikonasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Strengthens the legs, knees, ankles, arms and chest</Text>
                                    <Text style={[styles.text2]}>2. Stretches and opens the hips, groins, hamstrings, calves, shoulders, chest and spine.</Text>
                                    <Text style={[styles.text2]}>3. Increases mental and physical equilibrium</Text>
                                    <Text style={[styles.text2]}>4. Helps improve digestion</Text>
                                    <Text style={[styles.text2]}>5. Reduces anxiety, stress, back pain and sciatica</Text>
                                   
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/ieLoRYzfU6I' }}
                                />
                            </View>

                        </ScrollView>
                        <ScrollView>

                            <View style={[theme.style.center]}>
                                <Image style={styles.image} source={images.baddha} resizeMode="contain" />
                                <Text style={styles.text}> Badhakonasana </Text>
                                <View>
                                    <Text style={styles.text1}> How to do Badhakonasana? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Sit with your spine erect and legs spread straight out.</Text>
                                    <Text style={[styles.text2]}>2. Now bend your knees and bring your feet towards the pelvis. The soles of your feet should touch each other.</Text>
                                    <Text style={[styles.text2]}>3. Grab your feet tightly with your hands. You may place the hands underneath the feet for support.</Text>
                                    <Text style={[styles.text2]}>4. Make an effort to bring the heels as close to the genitals as possible.</Text>
                                    <Text style={[styles.text2]}>5. Take a deep breath in. Breathing out, press the thighs and knees downward towards the floor. Make a gentle effort to keep pressing them downward.</Text>
                                    <Text style={[styles.text2]}>6. Now start flapping both the legs up and down like the wings of a butterfly. Start slow and gradually increase the speed. Keep breathing normally throughout.</Text>
                                    <Text style={[styles.text2]}>7. Fly higher and higher, as fast as you comfortably can. Slow down and then stop. Take a deep breath in and as you exhale, bend forward, keeping the chin up and spine erect.</Text>
                                    <Text style={[styles.text2]}>8. Press your elbows on the thighs or on the knees, pushing the knees and thighs closer to the floor.</Text>
                                    <Text style={[styles.text2]}>9. Feel the stretch in the inner thighs and take long, deep breaths, relaxing the muscles more and more.</Text>
                                    <Text style={[styles.text2]}>10. Take a deep breath in and bring the torso up.</Text>
                                    <Text style={[styles.text2]}>11. As you exhale, gently release the posture. Straighten the legs out in front of you and relax.</Text>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                                <View>
                                    <Text style={styles.text1}> Benefits of Badhakonasana:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. A good stretch for the inner thighs, groins and knees, improving flexibility in the groin and hip region</Text>
                                    <Text style={[styles.text2]}>2. Helps in intestine and bowel movement.</Text>
                                    <Text style={[styles.text2]}>3. Removes fatigue from long hours of standing and walking</Text>
                                    <Text style={[styles.text2]}>4. Offers relief from menstrual discomfort and menopause symptoms</Text>
                                    <Text style={[styles.text2]}>5. Helps in smooth delivery if practiced regularly until late pregnancy</Text>
                                    
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/YXOeBUjmERI'}}
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
