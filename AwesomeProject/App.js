import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RouterComponent from './src/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/reducers';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    {/*<Header headerText={'Home'}/>*/}
                    {/*<AlbumList/>*/}
                    <RouterComponent/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    text: {
        color: 'red'
    }
});
