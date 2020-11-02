import {USER_REGISTER,ERROR, LOGIN_USER, PRE, PRE_LOADER, LOGGED_USER} from "../../action/user/user.type";

const INITIAL_STATE = () => {
    let user =  JSON.parse(localStorage.getItem("currentuser"));
    return user ? {loggedin:true, user} : {};
}


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

export const Loginuser = (state=INITIAL_STATE(), action) => {
    switch(action.type){
        case PRE_LOADER:
            return {loggedin:true};
        case LOGIN_USER:
            return {...state, user: action.payload,loggedin:false}
            case LOGGED_USER:
                return {currentuserdata: action.payload, loggedin:false}
    case ERROR:
        return {message_error: action.payload}
default:
    return state;
    }
}