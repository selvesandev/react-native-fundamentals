import React from 'react';
import {Router, Scene, Stack, Actions, ActionConst} from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import EmployeeList from "./components/Employee/EmployeeList";
import EmployeeCreate from "./components/Employee/EmployeeCreate";
import EmployeeEdit from './components/Employee/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 12}}>
            <Scene key="root" hideNavBar>
                {/*<Scene key={'auth'}>*/}
                {/*<Scene key="login" component={LoginForm} hideNavBar={false} initial title="Login"/>*/}
                {/*</Scene>*/}
                {/*<Scene key={'main'}>*/}
                {/*<Scene*/}
                {/*key={"employeeList"}*/}
                {/*hideNavBar={false}*/}
                {/*rightTitle='Add'*/}
                {/*// onRight={() => {*/}
                {/*//     Actions.cEmployee()*/}
                {/*// }}*/}
                {/*initial*/}
                {/*component={EmployeeList}*/}
                {/*title="Employees"/>*/}
                {/*/!*<Scene*!/*/}
                {/*/!*hideNavBar={false}*!/*/}
                {/*/!*key={'cEmployee'}*!/*/}
                {/*/!*title={'Create Employee'}*!/*/}
                {/*/!*component={EmployeeCreate}/>*!/*/}
                {/*</Scene>*/}
                <Stack hideNavBar={true}>
                    <Scene key="login" component={LoginForm} hideNavBar={false} initial title="Login"/>
                </Stack>
                <Stack hideNavBar={true}>
                    <Scene
                        key={"employeeList"}
                        hideNavBar={false}
                        initial
                        rightTitle='Add'
                        onRight={() => {
                            Actions.cEmployee()
                        }}
                        component={EmployeeList}
                        title="Employees"/>
                    <Scene
                        hideNavBar={false}
                        key={'cEmployee'}
                        title={'Create Employee'}
                        component={EmployeeCreate}/>

                    <Scene
                        hideNavBar={false}
                        key={'employeeEdit'}
                        title={'Edit Employee'}
                        component={EmployeeEdit}/>
                </Stack>
            </Scene>
        </Router>
    );
};

export default RouterComponent;