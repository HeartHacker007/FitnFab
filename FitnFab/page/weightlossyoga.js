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
export default class weightlossyoga extends Component {
    myPressFun = () => {
        alert('clicked');
    }
    static propTypes = {navigation: PropTypes.object}

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
                    <Text style={{color: '#008bc3', fontSize: 30}}> Weight-Loss Yoga </Text>
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
                                <Image style={styles.image} source={images.PrasaritaPadottanasana} resizeMode="contain" />                              
                                <Text style={styles.text}>Prasarita Padottanasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Traditionally, your hands should be touching the floor in front of you in this pose, but we like the extra shoulder stretch!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Spread your feet 3-4 feet apart, and bend forward at the HIPS, not the waist.  This means that your back should be as straight as possible when you bend, and you should not simply “hunch” forward.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>If you’re bending properly, you will actually feel a strong stretch in the hamstrings.  Practice in front of the mirror to try to get the correct form.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 5-6 breaths. If you feel comfortable enough, clasp the hands behind the back.  Try to bring them up towards the ceiling to give the arms and shoulders an extra stretch.</Text>
                                                            
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.sarvangasan} resizeMode="contain" />                               
                                <Text style={styles.text}>Sarvangasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This is considered an inversion because your body is upside down!  
                                    Inversions such as headstand, forearm stand, and handstand can make yoga practice very fun!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}> Begin with your back on the ground, your knees slightly bent, and your feet in the air.  Press your hands flat on the ground, and use them to roll yourself backward on your upper back.  As you do this, bring the hands to your lower back, 
                                    just above your hips, to keep yourself upright.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Slowly extend your legs toward the ceiling.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Beginner Modification: If you’re having difficulty staying up, 
                                    place your hands on your hips to help support your weight better.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 5-6 breaths, and work towards 30 seconds.</Text>                          
                                </View>
                            </View>
                        </ScrollView>

                         <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.natarajasana} resizeMode="contain" />                              
                                <Text style={styles.text}>Natarajasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This is one of the more beginner yoga asanas for weight loss, but it works and feels great to stretch in!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>From a standing position, take hold of your left ankle with your left hand.  Shift your weight forward, and place your right hand on your right knee for support.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>As you lean forward, arch your back, and press outward with your left foot.  Tilt your tailbone back to support the arch in the back.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Slowly raise your right arm forward when you feel that you are comfortable in the position.  Make sure that the left leg is completely straight.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 30 seconds.  Repeat on the other side.</Text>                          
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/5qf-Y2VUCy8'}}
                                />
                            </View>
                        </ScrollView>

                         <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.Anjaneyasana} resizeMode="contain" />                              
                                <Text style={styles.text}>Anjaneyasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>This is one of the best poses for stretching the hips.  Many people tend to have tight hips from sitting in front of a computer all day.  It will also help increase your flexibility for the splits if that happens to be one of your goals.</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Keep in mind that your hands can be wherever you want them to be in this asana, and their location often determines what muscles you are stretching.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>If you raise the arms up and tilt them backward, you will bring this stretch into the back as well as the hips.  You can also bring the arms down to your sides and behind you a bit to stretch the lower back.  The third option is to rest them on the knee in front of you, although you won’t get as deep of a stretch in the hips.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Make sure your front knee is as close to 90 degrees as possible.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 30 seconds, and repeat on the other side.</Text>                          
                                </View>
                            </View>
                        </ScrollView>

                         <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.Vasisthasana} resizeMode="contain" />                              
                                <Text style={styles.text}>Vasisthasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>It’s no wonder that some form of the “plank” made this list of yoga asanas for weight loss.  The plank and all of its variations are great for the abs!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Begin in regular plank position with your palms face down on the yoga mat, shoulder-width apart, and your toes together on the mat.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Tilt your feet to the left so that the outer right side of your right foot is touching the mat and the left foot is on top of the right (as pictured above).</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Your hips and shoulders should be “stacked” in this pose, meaning that they should directly in line with each other and not leaning forward or backward.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 30 seconds, and repeat on the other side.</Text>                          
                                </View>
                            </View>
                        </ScrollView>

                         <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.treeasana} resizeMode="contain" />                              
                                <Text style={styles.text}>Vriksasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Don’t be fooled by Vriksasana.  It’s harder to balance in this pose than it looks!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Twist your chest to face the forward direction again.  Bring your arms straight out in front of you for balance.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Beginners to yoga will probably need to bring the back leg up closer to the front to stay balanced before lifting it.  Bring your palms together at your chest as you begin to lift your leg up in the air because it helps tremendously with balance.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Once you get into position, slowly raise your arms out in front of you.  Note that the back toes should actually be pointed for true form, but beginners can work on that from the photo above.</Text>                      
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>It will take time, strength, and flexibility to improve your form in this asana.  Practice in front of a mirror, and practice it often.</Text>   
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Try to hold for 30 seconds, and then repeat the entire vinyasa on the other side of the body.</Text>   
                                
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/fHC1vmGXpSs'}}
                                />
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.warriorthree} resizeMode="contain" />                              
                                <Text style={styles.text}>Virabhadrasana  </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Virabhadrasana is the most difficult of this vinyasa.  It may look easy enough, but holding this pose with the right form for more than a few seconds can be quite difficult for beginners!</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Bring your left foot in to rest on the inside of your left thigh.  Keep your back straight.  Your body may have a tendency to lean forward when trying to balance but bring your shoulders back up.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Keep your hands pressed together at your heart to help with balance, then try lifting them above your head with your hands pointed towards the ceiling.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 30 seconds, and repeat on the other side.</Text>                      
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/ZFsH2MgSnhA'}}
                                />
                            </View>
                        </ScrollView>
                        
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.lungevariationpose} resizeMode="contain" />                              
                                <Text style={styles.text}>Parivrtta Anjaneyasana </Text>
                                <View>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>How to do it:</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>If you need to, keep the right hand on the floor next to the left foot for support while getting into this pose.</Text>
                                    <Text style={[styles.text2, theme.style.mtm, theme.style.mhl]}>Try to keep your front knee bent at a 90-degree angle and your outstretched leg straight.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Bring your right elbow to rest on your left knee, and bring the hands together.  Press the hands into each other to increase the stretch in the back and shoulders.</Text>
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Tighten your core while in this pose for an extra workout in the abs!</Text>                      
                                    <Text style={[styles.text2, theme.style.mts, theme.style.mhl]}>Hold for 5-6 breaths or up to 30 seconds, and repeat on the other side.</Text>    
                                
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
    WebViewContainer: {
        ...theme.style.mtxl,
    },
});
