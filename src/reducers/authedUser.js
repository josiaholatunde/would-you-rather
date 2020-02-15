import { SET_AUTHED_USER } from "../actions/authedActions"


export default (state=null, {type, user}) => {

    switch (type) {
        case SET_AUTHED_USER:
            return user.id;
        default:
        return state
    };
}