import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../auth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const nav = useNavigate()
    const Logout = (e) => {
        e.preventDefault()
        signOut(auth)
        .then(() => {
            console.log('Logged out')
        nav('/')
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div className='logOut' onClick={Logout}>Logout <ion-icon name="log-out-outline"></ion-icon></div>
  )
}

export default Logout