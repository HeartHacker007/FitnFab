import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import {theme} from '../assets';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * App Component
 */
export default class DaietList extends Component {
    static propTypes = {navigation: PropTypes.object}
    /**
     * Constructor
     */
    constructor() {
        super();
        this.state = {date: '15-01-2018'};
        this.state = {
            FlatListItems: [

                {key: 'Yogic Vegan Diet',path:'daietdetails'},
                {key: 'Weight Loss Diet',path:'weightlossDiet'},
                {key: 'Weight Gain  Diet',path:'daietdetails'},
                {key: 'Healthy Shakes',path:'HealthyShakes'},
               
            ]};
    }
    state = {user: ''}
    updateUser = (user) => {
        this.setState({user: user});
    }
    /**
     * @return {Component}
     */
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Top}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('dasbord')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name= 'arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={{color: '#008bc3', fontSize: 30}}> Diet Chart</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('meditation')} activeOpacity={0.7} >
                        <Icon style={{color: '#008bc3', alignItems: 'flex-start'}} name= 'arrow-right' size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.MainContainer}>
                    <FlatList
                        underlineColorAndroid="transparent"
                        data={ this.state.FlatListItems }
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem={({item}) => <TouchableOpacity style={styles.FlatList_Item} 
                        onPress={()=> this.props.navigation.navigate(item.path)} activeOpacity={0.5}>
                        <Text style={styles.itemTxt}> {item.key} </Text></TouchableOpacity>}
                    /> 
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        ...theme.style.container,
    },
    MainContainer: {
        ...theme.style.justifyCenter,
        ...theme.style.flex,
        borderWidth: 2,
        borderColor: '#ebf0f2',
    },
    Top: {
        flex: 0.1,
        ...theme.style.row,
        ...theme.style.alignCenter,
        ...theme.style.spaceBetween,
        ...theme.style.pm,
    },

    FlatList_Item: {
        borderWidth: 1,
        borderColor: '#008bc3',
        height: 100,
        ...theme.style.flex,
        ...theme.style.brs,
        ...theme.style.mm,
        ...theme.style.center,
    },
    itemTxt: {
        color:'#008bc3',
        fontWeight:'bold',
        fontFamily:'verdana',
        ...theme.style.f5,

    }
});
