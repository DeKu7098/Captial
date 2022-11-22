import React from 'react'
import { useHistory } from 'react-router-dom'


const LogoutButton = () => {
    const history=useHistory()
    const LogoutButtonHandler=()=>{
        localStorage.removeItem('userData')
        history.replace('/')
    }
  return (
    <div>
      <button onClick={LogoutButtonHandler}>Logout</button>
    </div>
  )
}

export default LogoutButton;