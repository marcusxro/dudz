import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../auth'
const SignIn = () => {
    const nav = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const signIn = (e) => {
        e.preventDefault()
         if (password.length === 0 && email.length === 0) {
            alert("Please type something");
            return;
        } else if (password.length <= 5) {
            alert("Password should be at least 6 characters long");
            return;
        } 
         else {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log("user logged in", user)
                    nav('/System')
                }).catch((err) => {
                    console.log(err)
                    setError("user not found")
                })
        }

    }
    return (
        <div className='signInCon'>
            <form action="submit" onSubmit={signIn}>
                <div className="signInText">
                    Sign in
                </div>
                {error}
                <input required type="text" placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input required type="password" placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className="bottom">
                    <div className="forgotCon">
                        <input type="checkbox" name="check" id="" />
                        <label htmlFor="check">Show password</label>
                    </div>
                    <div className="forgotCons">
                        forgot password? <span onClick={() => { nav('/Forgot') }}> click here!</span>
                    </div>
                </div>
                <button>Sign in</button>
            </form>
            <div className="bottomNav">
                Don't have account? <span onClick={() => { nav('/SignUp') }}>Sign up here!</span>
            </div>
        </div>
    )
}

export default SignIn