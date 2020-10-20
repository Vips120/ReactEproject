import {USER_REGISTER,ERROR} from "../../action/user/user.type";

export const Registeruser = (state={}, action) => {
    switch(action.type){
        case USER_REGISTER:
            return {...state, item: action.payload};
      case ERROR:
          return { message_error: action.payload}

        default:
            return state;
    }
}