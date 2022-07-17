import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './Login.css'

const Login = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem('user') || {
    username: '',
    password: '',
  })  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user, 'enviado');

    if(user.password === '' || user.username === ''){
        alert('Los campos no pueden estar vacios')
    }else{
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/home");
    }
  }

  const hadleChange = (e) =>{
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    })
    console.log(user);
  }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name='username' placeholder="Username" onChange={hadleChange}/>
            <input type="text" name='password' placeholder="Password" onChange={hadleChange}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login