import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPw = () => {
    const nav = useNavigate()
    return (
        <div className='forgotPwCon'>
            <form action="">
                <div className="forgotText">
                    Forgot password
                </div>
                <input type="text" placeholder='Enter your email' />
                <button>Send verification</button>
            </form>
            <div className="forgotBot">
                Go back to <span onClick={() => {nav('/')}}>Sign in</span>
            </div>
        </div>
    )
}

export default ForgotPw