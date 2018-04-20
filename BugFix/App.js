import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import RouterComponent from './src/Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RouterComponent/>
            </Provider>
        )
    }

    componentWillMount() {
        if (!firebase.apps.length) {
            const config = {
                apiKey: "AIzaSyDdMkWmclITqusHmbwPwgxKLEyG3-AIRFA",
                authDomain: "myapp-29204.firebaseapp.com",
                databaseURL: "https://myapp-29204.firebaseio.com",
                projectId: "myapp-29204",
                storageBucket: "",
                messagingSenderId: "611599220604"
            };
            firebase.initializeApp(config);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
