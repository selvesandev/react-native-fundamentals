import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, CardSection} from "../common";
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export default class Home extends Component {
    state = {
        loggedIn: null,
    };

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDuVLogd3yYZcTfC4MAr24EXcOdNblE-Rk",
                authDomain: "react-native-authenticat-673f5.firebaseapp.com",
                databaseURL: "https://react-native-authenticat-673f5.firebaseio.com",
                projectId: "react-native-authenticat-673f5",
                storageBucket: "react-native-authenticat-673f5.appspot.com",
                messagingSenderId: "989663961294"
            });
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    getLogInButton() {
        switch (this.state.loggedIn) {
            case true:
                return <CardSection>
                    <Button onPressCustom={() => {
                        firebase.auth().signOut();
                    }}>Log out</Button>
                </CardSection>;
            case false:
                return <CardSection>
                    <Button onPressCustom={() => {
                        Actions.login()
                    }}>Login</Button>
                </CardSection>;
            default:
        }
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Button onPressCustom={() => {
                        Actions.home()
                    }}>Home</Button>
                </CardSection>

                <CardSection>
                    <Button onPressCustom={() => {
                        Actions.techStack()
                    }}>Tech Stack</Button>
                </CardSection>

                <CardSection>
                    <Button onPressCustom={() => {
                        Actions.albumList()
                    }}>Album List</Button>
                </CardSection>
                <CardSection>
                    <Button onPressCustom={() => {
                        Actions.employeeList()
                    }}>Employee List</Button>
                </CardSection>

                {this.getLogInButton()}
            </View>
        );
    }
}