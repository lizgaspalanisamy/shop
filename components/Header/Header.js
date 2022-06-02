import { View, StyleSheet, Text, useColorScheme } from 'react-native';
import React from 'react';
import Colors from './Colors';

const Header = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text
                style={[
                    styles.text,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                Welcome to
        {'\n'}
                Shop
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default Header;