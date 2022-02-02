import "./login.css"
import { useRef ,useDispatch, useContext} from "react"
import { login } from "../../apiCalls"
import { AuthContext } from "../../context/authContext"
import { CircularProgress } from "@material-ui/core"
const Login = () => {
 const email = useRef('')
 const password = useRef('')
   const {user,isFetching,error,dispatch} = useContext(AuthContext)
    const handleClick= async (e)=>{
        e.preventDefault();
        
        login({email:email.current.value,password:password.current.value},dispatch)
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
                        <input className="loginInput" ref={email} type='email' required placeholder="Email"/>
                        <input className="loginInput" ref={password} type='password' minLength={6} required placeholder="Password"/>
                        <button className="loginButton" disabled={isFetching}>
                            {isFetching? <CircularProgress color="primary" size={20}/>:'Log In'}
                        </button>
                        <span className="loginForget">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching? (<CircularProgress color="primary" size={20}/>):("Create a New Account")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
