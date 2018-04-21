import * as actionTypes from './actionTypes';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: actionTypes.EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const createEmployee = ({name, phone, day}) => {
    const {currentUser} = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({
            name, phone, day
        }).then(() => {
            Actions.main();
        });
    };

};