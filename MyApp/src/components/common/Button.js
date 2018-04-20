import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPressCustom, children}) => {
    return (
        <TouchableOpacity onPress={onPressCustom} style={styles.buttonStyles}>
            <Text style={styles.textStyles}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};
export {Button};

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};