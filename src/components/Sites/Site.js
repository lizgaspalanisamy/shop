import {View, StyleSheet, Text, Button} from 'react-native';
import type {Node} from 'react';
import React from 'react';

export default Site = (): Node => {

  const getSites = () => { 
    let url = new URL('https://api2.shop.com/AffiliatePublisherNetwork/v2/products');
    url.search = new URLSearchParams({
      publisherId: process.env.PUBLISHER_ID,
      locale: 'en_US',
      wite: 'shop',
      shipCountry: 'US',
      term: 'dog',
    })
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('The products are', json.products);
        return json.products;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        <Button
          style={[styles.button]}
          title="Sites"
          onPress={() => getSites()}
        >
          🏞️
        </Button>
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
  button: {
    backgroundColor: 'purple'
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
