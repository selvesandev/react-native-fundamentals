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
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({
            name, phone, day
        }).then(() => {
            dispatch({type: actionTypes.EMPLOYEE_CREATE});
            Actions.employeeList();
        });
    };
};


export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value', snapshot => {
            dispatch({type: actionTypes.EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
        });
    }
};


export const employeeSave = ({name, phone, day, uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({name, phone, day}).then(() => {
            dispatch({type: actionTypes.EMPLOYEE_SAVE_SUCCESS});
            Actions.employeeList();
        });
    };
};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).remove().then(() => {
        Actions.employeeList();
    });


};
