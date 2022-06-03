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
        backgroundColor: 'blue',
        width: 400,
        height: 100,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'blue',
    },
});

