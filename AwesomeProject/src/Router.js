import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from './components/auth/Login';
import EmployeeList from "./components/employee/EmployeeList";
import Home from "./components/home/home";
import AlbumList from "./components/albums/AlbumList";
import TechStack from "./components/tech/TechStack";

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 20, paddingBottom: 65}}>
            <Scene key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key='employeeList' component={EmployeeList} title={'Employee List'}/>
                <Scene key='home' component={Home} initial title={'Home'}/>
                <Scene key='albumList' component={AlbumList} title={'Home'}/>
                <Scene key='techStack' component={TechStack} title={'Tech Stack'}/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;