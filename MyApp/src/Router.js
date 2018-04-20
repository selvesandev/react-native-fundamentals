import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import LoginForm from "./components/auth/LoginForm";


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} initial title="Please Login"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;