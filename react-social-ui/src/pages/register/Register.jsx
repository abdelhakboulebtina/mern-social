import axios from "axios"
import { useRef } from "react"
import "./register.css"
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const username = useRef('')
    const email = useRef('')
    const password = useRef('')
    const passwordAgain = useRef('')
    const navigate=useNavigate()
    const handleClick= async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value!==password.current.value){
            passwordAgain.current.setCustomValidity("Password not match")
        }
        else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            }
            try{
            await axios.post("http://localhost:8800/api/auth/register",user)
            navigate('/login')
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <h3 className="loginLogo"> LamaSocial</h3>
                    <span className="loginDesc">connect with friends and the world around you on Lamasocial.</span>
                </div>
                <div className="loginLeft">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input className="loginInput" required ref={username}  placeholder="Username"/>
                        <input className="loginInput" required ref={email} type="email" placeholder="Email"/>
                        <input className="loginInput" required ref={password} type="password" minLength={6} placeholder="password"/>
                        <input className="loginInput" required ref={passwordAgain} type="password" minLength={6} placeholder="Password Again"/>
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
