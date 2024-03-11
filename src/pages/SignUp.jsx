import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../auth'

const SignUp = () => {
    const nav = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [position, setPos] = useState('')
    const [error, setError] = useState('')

    const RegisterAccount = (e) => {
        e.preventDefault()
          if(password.length === 0 && email.length === 0) {
            alert("please type something")
            return
        }else if (password.length < 5) {
            alert("make it 6 or more longer!")
            return
        }
         else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user)
                }).catch((err) => {
                    if (err.code === 'auth/email-already-in-use') {
                        setError(err.errFour);
                    } else {
                        console.error('Error:', err.message);
                    }
                })
        }
    }
    return (
        <div className='signUpCon'>
            {error}
            <form action="submit" onSubmit={RegisterAccount}>
                <div className="signUpText">
                    Sign up
                </div>
                <input type="email" required placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" required placeholder='Enter your password' value={password} onChange={(e) => { setPass(e.target.value) }} />
                <div className="forgotCon">
                    <input type="checkbox" name="check" id="" />
                    <label htmlFor="check">Show password</label>
                </div>
                <select required name="" id="" value={position} onChange={(e) => { setPos(e.target.value) }}>
                    <option value="">Choose your position</option>
                    <option value="Owner">Owner</option>
                    <option value="Employee">Employee</option>
                </select>
                <button>Create account</button>
            </form>
            <div className="already">
                Already have account? <span onClick={() => { nav('/') }}>Sign in here</span>
            </div>
        </div>
    )
}

export default SignUp