/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {images, theme} from '../assets';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';


type = {};
export default class trainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.logintopbg} style={styles.imageBackground} >
        <ImageBackground source={images.loginbottombg} style={styles.imageBackground} >  
          <View style={[theme.style.center,theme.style.row]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} > 
                <Icon style={{color: '#008bc3',}} name='arrow-left' size={50} />
                <Text  style={{color: '#008bc3',fontSize: 30,}}> Coming Soon... </Text>   
                <Text  style={{color: '#008bc3',fontSize: 10,}}> Jay Nagar </Text>           
            </TouchableOpacity>
          </View>
        </ImageBackground>
        </ImageBackground>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    ...theme.style.container,
  },
  imageBackground:{
    ...theme.style.justifyCenter,
    height: height,
    width: width,
  } 
  
});
