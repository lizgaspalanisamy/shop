import {View, StyleSheet, Text} from 'react-native';
import type {Node} from 'react';
import React from 'react';

export default Product = (): Node => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        List of Products
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    width: 400,
    height: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
