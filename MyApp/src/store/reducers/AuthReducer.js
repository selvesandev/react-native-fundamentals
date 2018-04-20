import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case actionTypes.PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
                loading: false
            };
        case actionTypes.LOGIN_USER_FAILED:
            return {
                ...state,
                error: 'Authentication Failed',
                loading: false,
                password: ''
            };
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                loading: action.payload,
                error: ''
            };
        default:
            return state;
    }
}