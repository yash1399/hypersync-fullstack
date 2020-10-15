/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  ScrollView,
  View,
} from 'react-native';



import Login from './components/Login';
import Register from './components/Register';
import Task from './components/Task';

const App: () => React$Node = () => {
  return (
    <>
      <View>
        <ScrollView>
          <Login></Login>
        </ScrollView>
      </View>
    </>
  );
};

export default App;


