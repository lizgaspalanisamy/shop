import {View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import type {Node} from 'react';
import React from 'react';
import axios from 'axios';

export default Site = (): Node => {

  const getSites = () => {
    axios({
      method: 'get',
      url: 'https://api2.shop.com/AffiliatePublisherNetwork/v2/sites',
      headers: {
        api_Key: '76b99147dd61464cb77bd62fb3e5ee41',
      },
    }).then(response => {
      for (let i = 0; i < 5; i++) {
        Alert.alert(response.data.sites[i])
      }
    });
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Sites</Text>
      <Text style={[styles.text]}>
        Click button to display available sites from shop.com
      </Text>
      <TouchableOpacity
        style={[styles.button]}
        title="Sites"
        onPress={() => getSites()}
      ><Text>Sites</Text>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: '#000',
    margin: 10,
    marginBottom: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 12,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    height: 30,
    width: 50,
    shadowColor: '#000',
    padding: 5,
    backgroundColor: '#B19CD9',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    color: '#fff',
    paddingLeft: 7,
    padding: 20,
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
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
