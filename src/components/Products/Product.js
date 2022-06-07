import {View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import type {Node} from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default Product = (): Node => {

  const [modalOpen, setModalOpen] = useState(false);
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!modalOpen) {
      setModalOpen(false)
    }
  }, [modalOpen])

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const getProducts = () => {
    axios({
      method: 'get',
      url: 'https://api2.shop.com/AffiliatePublisherNetwork/v2/products?',
      headers: {
        api_Key: '76b99147dd61464cb77bd62fb3e5ee41',
      },
      params: {
        publisherId: 'AP8232850',
        locale: 'en_US',
        site: 'shop',
        shipCountry: 'US',
        term: 'dog',
      }
    }).then(response => {
      setResults(response.data.brands);
      openModal()
    });
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Products</Text>
      <Text style={[styles.text]}>
        Click button to display products from Shop.com
      </Text>
      <TouchableOpacity
        style={[styles.button]}
        title="Product"
        onPress={() => getProducts()}
      >
        <Text>Product</Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} style={[styles.modalContainer]}>
        <View style={[styles.modalContainer]}>
          <View style={[styles.modal]}>
            <Text style={[styles.modalTitle]}>Products</Text>
            {results.map(i => (
              <View>
                <Text key={i.id} style={[styles.modalText]}>
                  {i.name}
                </Text>
                <Text key={i} style={[styles.modalText]}>
                  Product Count: {i.productCount}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.modalButton]}
            title="Close Modal"
            onPress={() => closeModal()}
          >
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalButton: {
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
    bottom: 110,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    left: 230,
  },
  modalContainer: {
    backgroundColor: '#B19CD9',
    height: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    paddingLeft: 7,
    color: '#fff',
    padding: 20,
  },
  modalText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    paddingLeft: 7,
    color: '#fff',
    padding: 3,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    paddingLeft: 7,
    color: '#fff',
    paddingBottom: 15,
  },
  modal: {
    width: '80%',
    height: '90%',
    backgroundColor: '#00008b',
    margin: 50,
    color: '#fff',
    padding: 25,
    borderRadius: 10,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    shadowRadius: 12,
    shadowOpacity: 0.5,
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
