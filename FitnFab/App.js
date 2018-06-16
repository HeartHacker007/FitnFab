/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import dasbord from './page/dasbord';
import SplashScreen from 'react-native-splash-screen';

import YogaList from './page/YogaList';
import yogadetails from './page/yogadetails';
import Suryanamaskar from './page/Suryanamaskar';
import weightlossyoga from './page/weightlossyoga';
import prePregnancyyoga from './page/prePregnancyyoga';
import postPregnancyyoga from './page/postPregnancyyoga';

import WorkOutList from './page/WorkOutList';
import wormupworkout from './page/wormupworkout';
import basicworkout from './page/basicworkout';
import bicepworkout from './page/bicepworkout';
import weightlossWorkout from './page/weightlossWorkout';

import DaietList from './page/DaietList';
import daietdetails from './page/daietdetails';
import weightlossDiet from './page/weightlossDiet';
import HealthyShakes from './page/HealthyShakes';

import meditation from './page/meditation';
import bmi from './page/bmi';
import trainer from './page/trainer';

class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
        // setTimeout(function(){}, 300);
    }
  /**
   * @return {component}`
   */
  render() {
      return (
          <AppNavigator/>
      );
  }
}
const AppNavigator = StackNavigator(
  {
    //   WelcomePage: {screen: WelcomePage},
   
      dasbord: {screen: dasbord},
      DaietList: {screen: DaietList},
      daietdetails: {screen: daietdetails},
      YogaList: {screen: YogaList},
      Suryanamaskar: {screen: Suryanamaskar},
      yogadetails: {screen: yogadetails},
      weightlossyoga: {screen: weightlossyoga},
      WorkOutList: {screen: WorkOutList},
      wormupworkout: {screen: wormupworkout},
      basicworkout: {screen: basicworkout},
      weightlossWorkout: {screen: weightlossWorkout},
      bicepworkout: {screen: bicepworkout},
      meditation: {screen: meditation},
      bmi: {screen: bmi},
      weightlossDiet: {screen: weightlossDiet},
      HealthyShakes: {screen: HealthyShakes},
      prePregnancyyoga: {screen: prePregnancyyoga}, 
      postPregnancyyoga : {screen: postPregnancyyoga},
      trainer: {screen: trainer},
  },
  {
      initialRouteName: 'dasbord',
      navigationOptions: {
          header: null,
      },
  });
export default App;