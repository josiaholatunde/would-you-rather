import { SET_LOADING } from "../actions/shared";


export default (state = null, { type, payload }) => {

    switch (type) {
        case SET_LOADING:
            return payload;
        default:
            return state
    };
}