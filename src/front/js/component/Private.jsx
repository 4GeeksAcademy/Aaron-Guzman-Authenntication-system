import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'

const Private = () => {
  const {store, actions} = useContext(Context)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //   await actions.tokenConfirmation()
  //   console.log("Confirmation success", store.userAccess)
  //     }catch(error){
  //       console.error("Error", error)
  //     }
  //   }
  //   fetchData();
  // }, [])

  return (
    <div>
      {store.userAccess ? (<h1>Hola mundo</h1>) : (<h1>No tienes acceso</h1>) }
    </div>
  )
}

export default Private