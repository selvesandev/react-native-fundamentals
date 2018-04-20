import firebase from 'firebase';
import * as actionTypes from './actionTypes';

export const emailChanged = (text) => {
    return {
        type: actionTypes.EMAIL_CHANGED,
        payload: text
    }
};


export const passwordChanged = (password) => {
    return {
        type: actionTypes.PASSWORD_CHANGED,
        payload: password
    }
};


export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: actionTypes.LOGIN_USER, payload: true});

        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            loginUserSuccess(dispatch, response);
        }).catch(err => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
                loginUserSuccess(dispatch, response);
            }).catch((err) => {
                loginUserFail(dispatch);
            });
        })
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: actionTypes.LOGIN_USER_SUCCESS, payload: user});
};

const loginUserFail = (dispatch, user) => {
    dispatch({type: actionTypes.LOGIN_USER_FAILED})
};