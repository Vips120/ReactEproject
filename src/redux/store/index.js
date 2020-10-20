import {combineReducers} from "redux";
import { Registeruser } from "../reducers/user/user";

const reducers = combineReducers({register_info: Registeruser});

export default reducers;
