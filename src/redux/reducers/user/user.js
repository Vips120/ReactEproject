import {USER_REGISTER,ERROR, LOGIN_USER} from "../../action/user/user.type";

export const Registeruser = (state={}, action) => {
    switch(action.type){
        case USER_REGISTER:
            return {...state, item: action.payload};
      case ERROR:
          return { message_error: action.payload}

        default:
            return state;
    }
};

export const Loginuser = (state={}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload}
    case ERROR:
        return {message_error: action.payload}
default:
    return state;
    }
}