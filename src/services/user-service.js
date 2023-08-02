import axios from "axios";
import authHeader from "./auth-header";

const URL = 'http://localhost:8080';

class UserService {

    login(data) {
        return axios.post(URL+"/login", data, {headers: authHeader()})
    }


}

export default UserService;