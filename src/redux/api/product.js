import axios from "axios";

const PRODUCT_ENDPOINT = "http://localhost:4800/api/fetchallproduct";
const PRODUCT_ENDPOINT_BYID = "http://localhost:4800/api/fetchproductbyid/";
let config = {
    headers: {
        "Content-type":"application/json"
    }
}

export const fetchProduct = (data) => {
    return axios.get(PRODUCT_ENDPOINT, JSON.stringify(data), config);
};

export const fetchProductById = (id) => {
    return axios.get(PRODUCT_ENDPOINT_BYID + id, config );
}

