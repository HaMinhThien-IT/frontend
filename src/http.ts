import axios from "axios";
let localHost: string = 'http://localhost:3000'



 const authAxios = axios.create({
  baseURL: localHost,
  timeout: 10000,
})
authAxios.defaults.headers.common['authorization'] = localStorage.getItem('jwt') || "";
authAxios.interceptors.response.use(
  response => response,
  err => {
    if(err.response.status === 401){
      window.location.href="/login"
    }
    
  }
)
export{authAxios}