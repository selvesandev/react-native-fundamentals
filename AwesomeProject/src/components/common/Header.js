import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const Header = (props) => {
    const {headerFont, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={headerFont}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerFont: {
        fontSize: 30,
        textAlign: 'center',
        color: '#777'
    },
    viewStyle: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f8f8f8',
        height: 80,
        paddingTop: 35,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    }
});

export {Header};