import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';
import type { Node } from 'react';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks'; 

export default CameraModal = (): Node => {

    const [modalOpen, setModalOpen] = useState(false);
    const [{cameraRef}, {takePicture}] = useCamera();

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleCameraClick = async () => {
        try {
            let data = await takePicture();
            console.log(data.uri);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <Modal
        style={[styles.container]}
        visible={modalOpen}
        animationType="fade"
        transparent="true"
      >
        <RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back} style={[styles.camera]}>
          <TouchableOpacity
            title="Take Picture"
            style={[styles.buttonGreen]}
            onPress={() => handleCameraClick()}
          >
            <Text>Take Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Close Camera"
            style={[styles.buttonRed]}
            onPress={() => closeModal()}
          >
            <Text>Close Camera</Text>
          </TouchableOpacity>
        </RNCamera>
      </Modal>
    );
};

const styles = StyleSheet.create({
  buttonGreen: {
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
    width: 105,
    shadowColor: '#000',
    padding: 5,
    backgroundColor: 'green',
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonRed: {
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
    width: 105,
    shadowColor: '#000',
    padding: 5,
    backgroundColor: 'red',
    marginBottom: 20,
    alignItems: 'center',
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
  camera: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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

