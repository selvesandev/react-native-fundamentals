import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/reducers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Welcome
                    </Text>
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
    },
});
