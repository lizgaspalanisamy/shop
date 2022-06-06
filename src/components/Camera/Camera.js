import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import type { Node } from 'react';

export default Camera = (): Node => {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Camera</Text>
        <TouchableOpacity
          title="Take Picture"
          style={[styles.button]}
          onPress={() => Alert.alert('Hi!')}
        >
          <Text>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  button: {
    color: '#000',
    margin: 10,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 12,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    height: 30,
    width: 100,
    shadowColor: '#000',
    padding: 5,
    backgroundColor: '#B19CD9',
  },
  container: {
    margin: 25,
    paddingHorizontal: 24,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: '#00008b',
    shadowRadius: 12,
    shadowOpacity: 0.7,
    cornerRadius: 20,
    shadowColor: '#000',
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});

