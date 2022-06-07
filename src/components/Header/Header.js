import { View, StyleSheet, Text } from 'react-native';
import type { Node } from 'react';
import React from 'react';

export default Header = (): Node => {
    return (
        <View style={[styles.view]}>
            <Text
                style={[
                    styles.text
                ]}>
                Welcome to
        {'\n'}
                Shop
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#02055a',
        height: 150,
        width: '100%',
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Thonburi',
        margin: 20,
        color: '#fff'
    },
});

