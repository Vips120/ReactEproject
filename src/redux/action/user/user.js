import {USER_REGISTER,ERROR} from "./user.type";
import {userRegister} from "../../api/register";


export const UserRegister = (item) => {
    return async dispatch => {
        try {
        let response = await userRegister(item);
        console.log(response.data);
       dispatch({type: USER_REGISTER, payload:response.data});
       alert("registration Done"); 
        }
        catch(error){
         
          dispatch({type: ERROR, payload: error.response.data})
        }
    }
}