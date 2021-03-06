/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/Header/Header';
import Product from './src/components/Products/Product';
import Site from './src/components/Sites/Site'
import Camera from './src/components/Camera/Camera';

const App: () => Node = () => {

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: '#B19CD9'}}
      >
        <Header />
        <Camera />
        <Product />
        <Site />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
