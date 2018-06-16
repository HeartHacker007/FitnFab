import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ListView,
    Platform,
    } from 'react-native';
import {theme,images} from '../assets';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';
/**
 * App Component
 */
export default class meditation extends Component {
  static propTypes = {navigation: PropTypes.object}
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.urls = [
        {
            name: 'Yog Nidra ',
            url: ' https://www.yogapoint.com/mantras/yoga-nidra/yoga-nidra.mp3'
        },
        {
            name: 'Omkar Chanting ',
            url: ' https://www.yogapoint.com/mantras/instrumental/instru3.mp3'
        },
        {
            name: 'Instrumental-1 ',
            url: 'https://www.yogapoint.com/mantras/instrumental/instru1.mp3'
        },
        {
            name: 'Instrumental-2 ',
            url: 'https://www.yogapoint.com/mantras/instrumental/instru2.mp3'
        },
        {
            name: 'OM Exercise track-1 ',
            url: 'http://www.russillpaul.info/yogaofsound/track1.mp3'
        },
        {
            name: 'OM Exercise track-2 ',
            url: 'http://www.russillpaul.info/yogaofsound/track3.mp3'
        },
        {
            name: 'OM Exercise track-3 ',
            url: 'http://www.russillpaul.info/yogaofsound/track5.mp3'
        },
        {
            name: 'Sea Waves ',
            url: 'http://www.noiseaddicts.com/samples_1w72b820/3718.mp3'
        },
        {
            name: 'Rain Falling',
            url: 'http://www.noiseaddicts.com/samples_1w72b820/3711.mp3'
        },
        
    ];
   
    
   
    this.state = {
        dataSource: this.ds.cloneWithRows(this.urls),
        selectedSource: this.urls[0].url
    };
}


render() {
return (    
    <View style={styles.container1}> 
        <View style={styles.Top}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name= 'arrow-left' size={30} />
            </TouchableOpacity>
            <Text style={{color: '#008bc3', fontSize: 30}}> Meditation</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('bmi')} activeOpacity={0.7} >
                <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name= 'arrow-right' size={30} />
            </TouchableOpacity> 
        </View>

        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>

        <View style={{alignItems:'center'}}>
            <Image style={styles.image} source={images.Meditation} resizeMode="contain" />
        </View>

        <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableOpacity onPress={() => {
                            this.setState({selectedSource: rowData.url, dataSource: this.ds.cloneWithRows(this.urls)});
                            ReactNativeAudioStreaming.play(rowData.url, {});
                        }}>
                            <View style={StyleSheet.flatten([
                                styles.row,
                                {backgroundColor: rowData.url == this.state.selectedSource ? '#3fb5ff' : 'white'}
                            ])}>
                                <Text style={styles.icon}>▸</Text>
                                <View style={styles.column}>
                                    <Text style={styles.name}>{rowData.name}</Text>
                                    {/* <Text style={styles.name}>{rowData.url}</Text> */}
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
                    <Player  url={this.state.selectedSource} />
            </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
    container1: {
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
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: Platform.OS === 'ios' ? 30 : 0
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        width: 30,
        textAlign: 'center'
    },
    name: {
        color: '#000',
        
    },
  });




