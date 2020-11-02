import {combineReducers} from "redux";
import { addtoCart, showproductDetails, showproductDetailsId } from "../reducers/product/product";
import { Registeruser, Loginuser } from "../reducers/user/user";
import storage from 'redux-persist/lib/storage'
const reducers = combineReducers({register_info: Registeruser,
                                   auth: Loginuser,
                                   products: showproductDetails,
                                   product: showproductDetailsId,
                                   cart: addtoCart
                                });

export default reducers;


export const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart']
    
};