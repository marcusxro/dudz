import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../auth'
import { useNavigate } from 'react-router-dom'
import Logout from '../comp/Logout'
import Header from '../comp/Header'
import Table from '../comp/Table'
const System = () => {
    const nav = useNavigate()
    const [uid, setUid] = useState()
    const [email, setEmail] = useState()
    useEffect(() => {
        const Iden = onAuthStateChanged(auth, (acc) => {
            if(acc) {
                setEmail(acc.email)
            } else {
                nav("/")
            }
        })
        return () => {Iden()}
    }, [email])
  return (
    <div className='systemCon'>
        <Header />
        <Table />
    </div>
  )
}

export default System