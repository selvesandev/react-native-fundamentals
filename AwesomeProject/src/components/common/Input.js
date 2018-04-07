import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secure}) => {
    const {inputStyles, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                underlineColorAndroid='transparent'
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeText}
                style={inputStyles}
            />
        </View>
    );
};

export {Input};


const styles = {
    inputStyles: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};