import axios from "axios";
import { authAxios } from "../http";
let localHost: string = 'http://localhost:3000'
class AuthController { 
    login(email:string,password:string){
        return axios.post(`${localHost}/login`,{email,password}).then(res=>{ return res.data})
    }
    getMe(){
        return authAxios.get(`${localHost}/getMe`).then(res =>{return res.data})
    }
}
export const authController = new AuthController();