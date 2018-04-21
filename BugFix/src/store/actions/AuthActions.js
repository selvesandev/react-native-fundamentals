import * as ActionTypes from './actionTypes';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const emailChanged = (text) => {
    return {
        type: ActionTypes.EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (password) => {
    return {
        type: ActionTypes.PASSWORD_CHANGED,
        payload: password
    }
};

export const loginUser = ({email, password}) => {
    // console.log(email, password);
    return (dispatch) => {
        dispatch({type: ActionTypes.LOGIN_USER, payload: true});
        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            loginUserSuccess(dispatch, response);
        }).catch((err) => {
            console.log(err);
            loginUserFailed(dispatch);
        })
    }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: ActionTypes.LOGIN_USER_SUCCESS, payload: user});
    Actions.employeeList({type: 'reset'});
};

const loginUserFailed = (dispatch, user) => {
    dispatch({type: ActionTypes.LOGIN_USER_FAIL});
};