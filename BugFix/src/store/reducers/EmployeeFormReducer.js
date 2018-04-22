import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {
    name: '',
    phone: '',
    day: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEE_UPDATE:
            //key interpolation
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case actionTypes.EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case actionTypes.EMPLOYEE_FETCH_SUCCESS:
        case actionTypes.EMPLOYEE_SAVE_SUCCESS:
            return {
                ...state,
            };
        default:
            return {
                ...state
            }
    }
}