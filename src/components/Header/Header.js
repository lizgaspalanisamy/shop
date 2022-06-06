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
        backgroundColor: '#0019ea',
        width: 400,
        height: 150,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        margin: 20,
        color: '#fff'
    },
});

