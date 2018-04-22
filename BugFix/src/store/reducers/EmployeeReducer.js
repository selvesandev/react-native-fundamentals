import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEE_FETCH_SUCCESS:
            // return {
            //     ...state,
            //     [id]: action.payload
            // };
            return action.payload;
        default:
            return {
                ...state
            }
    }
}