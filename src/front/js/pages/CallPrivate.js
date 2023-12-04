import React, { useState, useEffect } from 'react'
import Private from '../component/Private.jsx'

const CallPrivate = () => {

  const [userAccess, setUserAcces] =useState(false)

  
  return (
    <div>
        <Private/>
    </div>
  )
}

export default CallPrivate