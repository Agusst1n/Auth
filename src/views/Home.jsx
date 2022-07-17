import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('user')){
     navigate('/')
    }
  },[])

  const handleClose = () =>{
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <>
        <div>Home</div>
        <button onClick={handleClose}>Cerrar sesion</button>
    </>
  )
}

export default Home