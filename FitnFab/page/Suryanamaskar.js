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
                    <Text style={{color: '#008bc3', fontSize: 30}}> Surya Namaskara</Text>
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
                        <ScrollView>
                            <View style={[theme.style.center, theme.style.pm]}>
                                <Image style={styles.image} source={images.SuryaNamaskar} resizeMode="contain" />
                                <Text style={styles.text}> Surya Namaskara </Text>
                                <View>
                                    <Text style={[styles.text, theme.style.mtm, {fontWeight: 'bold'}]}> How to do Surya Namaskara (The Sun Salutation)? </Text>
                                    <Text style={[styles.text2, theme.style.mts]}>Surya Namaskara is series of 12 postures done in sequence.
                                    The first 7 postures are unique. The posture 8 is a repetition of posture 5.
                                    Posture 9 is a repetition of posture 4. Similarly, posture 10 is same as posture3;
                                    posture 11 is same as posture 2 and posture 12 is same as posture 1.</Text>
                                    <Text style={[styles.text, theme.style.mts, {fontWeight: 'bold'}]}>The 12 postures and their corresponding mantras is given below:</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Pranamasana or the Prayer pose: Stand erect with folded hands close to the chest. 
                                    Relax and breathe normally. The mantra to be chanted is “Om Mitraya Namaha”.</Text>
                                    <Text style={[styles.text2]}>2. Hasta Uttanasana or the Raised Arms pose: Raise both the hands above the head. Inhale while raising your hands. Bend the trunk and neck slightly backwards. 
                                    The mantra to be chanted is “Om Ravaye Namaha”.</Text>
                                    <Text style={[styles.text2]}>3. Padahastasana or the Hand to Foot pose: Bend forward till your hands touch the floor. Breathe out while bending forward. If it doesn’t touch, go as far as possible without straining. 
                                    Try to touch the knees with the forehead. The mantra to be chanted is “Om Suryaya Namaha”.</Text>
                                    <Text style={[styles.text2]}>4. Ashwa Sanchalanasana or the Equestrian pose: Stretch the left leg as far back as possible while inhaling in. At the same time, bend the right knee. The hands should be kept straight with fingers touching the floor. Arch the back a little with head tilted back. 
                                    Look straight ahead. The mantra to be chanted is “Om Bhanave Namaha”.</Text>
                                    <Text style={[styles.text2]}>5. Parvatasana or the Mountain pose: While exhaling, take the right leg backward and place it along the left leg. Raise the buttocks. Let the hands be straight supporting the weight of the body. The head should be placed between the hands.
                                    The pose looks like a mountain from the side. The mantra to be chanted is “Om Khagaya Namaha”.</Text>
                                    <Text style={[styles.text2]}>6. Ashtanga Namaskara or the Eight-Limbed Salutation: Lower the body to the ground in such a way that it touches the floor in eight locations – The two feet, the two knees, 
                                    the two hands, the chest and the head.
                                    The mantra to be chanted is “Om Pushne Namaha”.</Text>
                                    <Text style={[styles.text2]}>7. Bhujangasana or the Cobra pose: Raise the body by using the hands. Arch the head backwards. This position looks like the cobra which has raised its hood. 
                                    The mantra to be chanted is “Om Hiranya Garbhaya Namaha”. </Text>
                                    <Text style={[styles.text2]}>8. Parvatasana or the Mountain pose: This is same as pose 5.
                                    The mantra to be chanted is “Om Marichaye Namaha”.
                                    </Text>
                                    <Text style={[styles.text2]}>9. Ashwa Sanchalanasana or the Equestrian pose: This is same as pose 4.The mantra to be chanted is “Om Adityaya Namaha”.</Text>
                                    <Text style={[styles.text2]}>10. Padahastasana or the Hand to Foot pose: This is same as pose 3. The mantra to be chanted is “Om Savitre Namaha”.</Text>
                                    <Text style={[styles.text2]}>11. Hasta Uttanasana or the Raised Arm pose: This is same as pose 2. The mantra to be chanted is “Om Arkaya Namaha”.</Text>
                                    <Text style={[styles.text2]}>12. Pranamasana or the Prayer pose: This is same as pose 1. The mantra to be chanted is “Om Bhaskaraya Namaha”.</Text>
                                </View>
                                <View>
                                    <Text style={[styles.text, theme.style.mtm, theme.style.mts, {fontWeight: 'bold'}]}> Benefits of Surya Namaskara (The Sun Salutation):</Text>
                                    <Text style={[styles.text2, theme.style.mts]}>1. Surya Namaskara comprehensively includes asana, pranayama, mantra and meditative awareness. Hence it is good to start the morning yoga practice with Surya Namaskara.</Text>
                                    <Text style={[styles.text2]}>2. The sequence of asanas induces deep and rhythmic breathing.</Text>
                                    <Text style={[styles.text2]}>3. It loosens up the joints in the body.</Text>
                                    <Text style={[styles.text2]}>4. It tones the muscles and the internal organs..</Text>
                                    <Text style={[styles.text2]}>5. Surya Namaskara activates the Pingala nadi or the Surya nadi which enhances the energy level in the body.</Text>
                                    <Text style={[styles.text2]}>6. It removes lethargy and makes the mind alert.</Text>
                                    <Text style={[styles.text2]}>7. It helps to strengthen the back muscles.</Text>
                                    <Text style={[styles.text2]}>8. It balances the respiratory, circulatory, reproductive and the endocrine system.</Text>
                                    <Text style={[styles.text2]}>9. Surya Namaskara, when done briskly, is good practice to burn extra fat in the body.</Text>
                                </View>
                            </View>
                            <View style={{height: 300, margin: 10}}>
                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/J1ScTelqoXU'}}
                                />
                            </View>

                        </ScrollView>
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
        ...theme.style.pm,
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
