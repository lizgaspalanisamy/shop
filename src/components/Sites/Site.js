import {View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import type {Node} from 'react';
import React, { useRef } from 'react';

export default Site = (): Node => {
  let jsonOutput = useRef(null);
  const getSites = () => { 
    let url = new URL('https://api2.shop.com/AffiliatePublisherNetwork/v2/sites');
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('The sites are', json);
        Alert.alert(`The sites api returns: ${json.error.message}`)
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

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
      ><Text>Sites</Text></TouchableOpacity>
      {/* {(jsonOutput != null) ?
      <Text ref={jsonOutput} style={[styles.text]}>
        {jsonOutput}
      </Text> : null } */}
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
