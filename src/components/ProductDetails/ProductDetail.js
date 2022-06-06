import { View, StyleSheet, Text } from 'react-native';
import type { Node } from 'react';
import React from 'react';

export default ProductDetail = (): Node => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>
                Product Details
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    text: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: 'white',
    },
});
