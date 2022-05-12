import {types} from "../types/Types";
// const state = {
//     name: 'Milena',
//     logged: true
// }

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }
        default:
            return state;
    }
}
