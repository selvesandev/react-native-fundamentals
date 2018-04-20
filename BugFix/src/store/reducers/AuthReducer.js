import * as ActionTypes from './../actions/actionTypes';

const INITIAL_STATES = {
    email: 'selvesan@gmail.com',
    password: 'selvesan',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATES, action) => {
    switch (action.type) {
        case ActionTypes.EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case ActionTypes.PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ActionTypes.LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication Failed',
                loading: false,
                password: ''
            };
        case ActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload
            };
        default:
            return state;
    }
}