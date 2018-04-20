import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import EmployeeList from "./components/Employee/EmployeeList";

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 12}}>
            <Scene key="root">
                <Scene key={'auth'} hideNavBar={true}>
                    <Scene key="login" component={LoginForm} hideNavBar={false} initial title="Login"/>
                </Scene>
                <Scene key={'main'} hideNavBar={true}>
                    <Scene key="employeeList" hideNavBar={false} component={EmployeeList} title="Employees"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;