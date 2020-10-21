import {combineReducers} from "redux";
import { Registeruser, Loginuser } from "../reducers/user/user";

const reducers = combineReducers({register_info: Registeruser, auth: Loginuser});

export default reducers;
