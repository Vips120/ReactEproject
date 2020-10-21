import {USER_REGISTER,ERROR,LOGIN_USER} from "./user.type";
import {userRegister,userLogin} from "../../api/register";
import {history} from "../../../shared/helpers/history/index";

export const UserRegister = (item) => {
    return async dispatch => {
        try {
        let response = await userRegister(item);
        console.log(response.data);
       dispatch({type: USER_REGISTER, payload:response.data});
       alert("registration Done"); 
       history.push("/signin");
       window.location.reload();
        }
        catch(error){
         
          dispatch({type: ERROR, payload: error.response.data})
        }
    }
};


export const LoginUser = (item) => {
  return async (dispatch) => {
    try {
     let response = await userLogin(item);
     dispatch({type: LOGIN_USER, payload: response.data});
     alert("LOGIN Done!!!"); 
     history.push("/home");
     window.location.reload();
    }
catch(error){
  dispatch({type: ERROR, payload: error.response.data});
}

  }
}