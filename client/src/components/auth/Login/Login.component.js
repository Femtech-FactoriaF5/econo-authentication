import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/auth.service";
import {EXPERIENCES} from '../../../constants/routes';
const Login = ({onLogin}) => {
  const navigate = useNavigate(null);
  // const [token, setToken]=useState(null);
  /* const [ctx,setCtx]=useContext({}) */
  const handleSubmit= async (e)=>{
    e.preventDefault();

    try {
      const user = {
        email:'mi@mail.com',
        password:'1234'
      }
      const result = await authService.login(user);
      console.log(result);
      window.localStorage.setItem('token',result.data.accessToken);
      console.log('token',localStorage.getItem('token'));
      navigate(EXPERIENCES,{replace:true});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login