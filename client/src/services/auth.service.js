import axios from 'axios';

export const authService = {
    login(user){
    console.log(process.env.REACT_APP_URL_BASE+"/login")
       return axios.post(process.env.REACT_APP_URL_BASE+"/login",user);
    },
    register(user){
        return axios.post(process.env.REACT_APP_URL_BASE+"/register",user);
     },
}