import { SET_AUTHED_USER } from "../actions/authedActions"


export default (state=null, {type, id}) => {

    switch (type) {
        case SET_AUTHED_USER:
            return id;
        default:
        return state
    };
}