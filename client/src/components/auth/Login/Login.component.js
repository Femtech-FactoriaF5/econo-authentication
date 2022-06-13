import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_PROFILE } from '../../../constants/routes';
const Login = () => {

  const [token, setToken] = useState(null);
  const [error,setError] =useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const user = {
      email:"mi@mail.com",
      password:"1234"
    }

    axios.post('http://localhost:3000/login',user).then(
      result => {
        setToken(result.data.accessToken)
        localStorage.setItem('token',result.data.accessToken)

        if(result.data.accessToken){
          navigate(USER_PROFILE,{replace:true});
        } else {
          setError('Hubo un error')
        }}
    ).catch(error =>  setError('Hubo un error'));


  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <button>Login</button>

      </form>
      {error}
    </>
  );
};

export default Login