/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
    Image,
    ImageBackground,
    Dimensions,
} from 'react-native';
import {images, theme} from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

/**
 * App Component
 */
export default class bmi extends Component {

  static propTypes = {navigation: PropTypes.object}
    /**
     * Constructor
     */
    constructor(props){
        super(props);
        this.state={
        res: 0,
        a: 0,
        b: 0,
        };
    };

    getNum1(event){
    this.setState({a: event.nativeEvent.text})
    }
    getNum2(event){
    this.setState({b: event.nativeEvent.text})
    } 

    add(){
    this.setState({res: parseInt(this.state.a) / (parseInt(this.state.b) * parseInt(this.state.b)) })
    } 
    
  /**
     * @return {Component}
     */
  render() {
      return (
            <View style={styles.container}>
                <View style={styles.Top}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}> BMI Calculator</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('trainer')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name='arrow-right' size={30} />
                    </TouchableOpacity>
                </View >
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
            
                <View style={[theme.style.justifyCenter,]}>
                    {/* Weight */}
                    <Text style={styles.text}>Weight:</Text>
                    <TextInput
                        onChange={(event)=>{this.getNum1(event)}}
                        style={styles.txtbox}
                        underlineColorAndroid="transparent"
                        keyboardType='numeric'
                        placeholder={'Put You Weight in kilograms'}/>

                      {/* Height :*/ }   
                    <Text style={styles.text}>Height:</Text>
                    <TextInput
                        onChange={(event)=>{this.getNum2(event)}}
                        style={styles.txtbox}
                        keyboardType='numeric'
                        placeholder={'Put Your Height in meters'}		
                        underlineColorAndroid="transparent" />
                   
                    {/* btnlogin*/}
                    <TouchableOpacity 
                        style={styles.btnbmi} 
                        onPress={()=>{this.add()} }         
                        activeOpacity={0.7}>
                            <Text style={{color: 'white', fontSize: 15}}> Compute My BMI</Text>
                    </TouchableOpacity>

                    {/* Result*/}
                    <Text style={styles.text}>Your BMI Is: {this.state.res}</Text>   
                    {this.state.res < 18.5 ? <Text style={styles.text}>you are Underweight</Text> :  this.state.res > 25 ? <Text style={styles.text}>you are over weight</Text>:<Text style={styles.text}>you are Healthy </Text>}
                   
                    
                </View>
            </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        ...theme.style.container,
    },
    txtbox: {
        color: '#008bc3',
        opacity: 0.5,
        borderColor: '#008bc3',
        borderWidth: 1,
        fontWeight: 'bold',
        ...theme.style.mhxl,
        ...theme.style.mm,
        ...theme.style.f4,
        ...theme.style.brs,
        ...theme.style.plxxl,
    },
    btnbmi: {
        height: 55,
        borderWidth: 0.9,
        backgroundColor: '#008bc3',
        borderColor: '#c0bfbe',
        ...theme.style.mtm,
        ...theme.style.mhxl,
        ...theme.style.center,
        ...theme.style.brs,
    },
    Top:{
        flex: 0.1,
        ...theme.style.row,
        ...theme.style.alignCenter,
        ...theme.style.spaceBetween,
        ...theme.style.pm,
    },
    text:{
        color: '#008bc3',
        fontSize: 20,
        marginLeft:20,
    },
});
