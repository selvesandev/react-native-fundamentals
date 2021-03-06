import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RouterComponent from './src/Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './src/store/reducers';
import ReduxThunk from 'redux-thunk';


export default class App extends Component {
    componentWillMount() {
        // Initialize Firebase

    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={{paddingTop: 14}}>
                    <RouterComponent/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
