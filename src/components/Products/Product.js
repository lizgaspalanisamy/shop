import {View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import type {Node} from 'react';
import React from 'react';

export default Product = (): Node => {

  const getProducts = () => { 
    let url = new URL('https://api2.shop.com/AffiliatePublisherNetwork/v2/products');
    url.search = new URLSearchParams({
      publisherId: 'AP8232850',
      locale: 'en_US',
      site: 'shop',
      shipCountry: 'US',
      term: 'dog',
    });
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('The products are', json);
        Alert.alert(`The products api returns: ${json.error.message}, using the following search params: 
        publisherId: 'AP8232850',
      locale: 'en_US',
      site: 'shop',
      shipCountry: 'US',
      term: 'dog'`);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Products</Text>
      <Text style={[styles.text]}>Click button to display products from Shop.com</Text>
      <TouchableOpacity
        style={[styles.button]}
        title="Product"
        onPress={() => getProducts()}
      >
        <Text>Product</Text>
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
    width: 70,
    shadowColor: '#000',
    padding: 5,
    backgroundColor: '#B19CD9',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    paddingLeft: 7,
    color: '#fff',
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
