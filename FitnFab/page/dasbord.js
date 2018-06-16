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
    ScrollView,
    Image,
} from 'react-native';
import {images, theme} from '../assets';
import PropTypes from 'prop-types';

/**
 * App Component
 */
export default class dasbord extends Component {
  static propTypes = {navigation: PropTypes.object}
  /**
   * Constructor
   */
  
  /**
     * Lifecycle method
     */
   

  /**
   * @return {Component}
   */
  render() {
      return (
          <View style={styles.container}>
              <View style={styles.Head}>
                  <Image source={images.logo} style={{height: 100, width: 50,}} />
                  <Text style={styles.text}>DASHBOARD</Text>
              </View>

              <ScrollView style={styles.Top}>
                  <TouchableOpacity style={styles.topbtn} onPress={()=> this.props.navigation.navigate('WorkOutList')} activeOpacity={0.7}>
                      <Image source={images.gym} style={{flex: 1}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topbtn} onPress={()=> this.props.navigation.navigate('YogaList')} activeOpacity={0.7}>
                      <Image source={images.yoga} style={{flex: 1}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topbtn} onPress={()=> this.props.navigation.navigate('DaietList')} activeOpacity={0.7}>
                      <Image source={images.diet} style={{flex: 1}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topbtn}onPress={()=> this.props.navigation.navigate('meditation')} activeOpacity={0.7}>
                      <Image source={images.medi} style={{flex: 1}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topbtn}onPress={()=> this.props.navigation.navigate('bmi')} activeOpacity={0.7}>
                      <Image source={images.bmi} style={{flex: 1}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.topbtn}onPress={()=> this.props.navigation.navigate('trainer')} activeOpacity={0.7}>
                      <Image source={images.trainer} style={{flex: 1}} />
                  </TouchableOpacity>
              </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        ...theme.style.containerNoBg,
        backgroundColor: '#0a8c44',
    },
    Head: {
        flex: 0.3,
        ...theme.style.row,
        ...theme.style.center,
        backgroundColor: '#616161',
    },
    text:
    {
        color: 'white',
        ...theme.style.f5,
        fontWeight: 'bold',
        ...theme.style.ms,
        textShadowColor:'blue'
      

    },
    Top: {
        flex: 0.8,
    },
    topbtn: {
        ...theme.style.row,
        height: 150,
        ...theme.style.mhm,
        ...theme.style.mm,
        ...theme.style.center,
    },

});
