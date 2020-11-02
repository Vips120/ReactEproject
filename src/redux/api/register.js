import axios from "axios";
import {Header} from "../../shared/helpers/header";
const REGISTER_ENDPOINT = "http://localhost:4800/api/register";
const LOGIN_ENDPOINT = "http://localhost:4800/api/auth";
const LOGGEDIN_USER_ENDPOINT = "http://localhost:4800/api/me";


let config = {
    headers: {
        "Content-type":"application/json"
    }
}

export const userRegister = (data) => {
    return axios.post(REGISTER_ENDPOINT, JSON.stringify(data), config);
}

export const userLogin = (data) => {
    return axios.post(LOGIN_ENDPOINT, JSON.stringify(data), config);
}

export const userLoggedin = () => {
    return axios.get(LOGGEDIN_USER_ENDPOINT, {headers:Header(),config});
}



//convert javascript object data into json --> json.stringify();
//convert json object data into javascript ---> json.parse();