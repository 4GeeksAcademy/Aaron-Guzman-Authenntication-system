import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom';

const Private = () => {
  const {store} = useContext(Context)
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(!token){
      alert("You ddo not have access to this page, please log in or create an account")
      navigate('/')
    }
  }, [navigate])

// No entiendo porque tengo que poner este afuera
  const token = sessionStorage.getItem('token');

  return (
    <div>
      {token ? (<h1>Hola mundo</h1>) : (<h1>No tienes acceso</h1>) }
    </div>
  )
}

export default Private