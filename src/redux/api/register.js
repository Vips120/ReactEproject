import axios from "axios";

const REGISTER_ENDPOINT = "http://localhost:4800/api/register";

let config = {
    headers: {
        "Content-type":"application/json"
    }
}

export const userRegister = (data) => {
    return axios.post(REGISTER_ENDPOINT, JSON.stringify(data), config);
}

//convert javascript object data into json --> json.stringify();
//convert json object data into javascript ---> json.parse();