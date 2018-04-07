import React, {Component} from 'react';
import {Text, View} from "react-native";
import {Header} from '../common'
import LoginForm from "./LoginForm";

/**
 * react-native-authenticat-673f5
 */

export default class Login extends Component {


    render() {
        return (
            <View>
                <LoginForm/>
            </View>
        );
    }

}