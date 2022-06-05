import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import type { Node } from 'react';

export default Camera = (): Node => {
    return (
        <View style={[styles.view]}>
            <Button title="Take Picture" styles={[styles.button]} onPress={() => Alert.alert('Hi!')}>
            Take Picture</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
    },
    view: {
        backgroundColor: 'white',
        height: 100,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'blue',
    },
});

