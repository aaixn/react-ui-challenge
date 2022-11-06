import React, {useState} from "react";
import "../login/login.css"
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorAt, setErrorAt] = useState(false)
    const [errorDot, setErrorDot] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorPassLength, setErrorPassLength] = useState(false)
    const [valid, setValid] = useState(true)


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const checkEmail = () => {
        email === '' ? setErrorEmail(true) : setErrorEmail(false)
        !email.includes('@') ? setErrorAt(true) : setErrorAt(false)
        !email.includes('.') ? setErrorDot(true) : setErrorDot(false)
    }

    const checkPassword = () => {
        password === '' ? setErrorPassword(true) : setErrorPassword(false)
        password.length < 8 ? setErrorPassLength(true) : setErrorPassLength(false)
    }


    return (
        <div className="login">
            <div className="login-form">
                <div className="logo">
                    <img src="https://media.git.generalassemb.ly/user/21811/files/546c2880-af58-11ec-917c-d9bd1e9dbecd"></img>
                </div>
                <input type="text" placeholder="Email Address" className="email" onChange={handleChangeEmail} onBlur={checkEmail} style={{border: errorEmail === false && errorAt === false && errorDot === false ? '1px solid lightgray' : '1px solid red' }}></input>
                {errorEmail ? <p className="error">Must provide an email address.</p> : null}
                {errorAt ? <p className="error">Email should contain an "@" symbol.</p> : null}
                {errorDot ? <p className="error">Email should contain at least one dot.</p> : null}
                <input type="text" placeholder="Password" className="password" onChange={handleChangePassword} onBlur={checkPassword} style={{border: errorPassword === false && errorPassLength === false ? '1px solid lightgray' : '1px solid red' }}></input>
                {errorPassword ? <p className="error">Must provide a password.</p> : null}
                {errorPassLength ? <p className="error">Password should be at least 8 characters long.</p> : null}
                <Link to={errorEmail === false && errorAt === false && errorDot === false && errorPassword === false && errorPassLength === false ? '/home' : null}><button type="buttton">Login</button></Link>
                <div className="login-links">
                    <div className="links">
                        <a href="#">Forgot my password</a>
                        |
                        <a href="#">Sign Up</a>
                    </div>
                    <p>© 2019 A Company</p>
                </div>
            </div>
            <h3>Need help? No problem! Email <a href='mailto: support@acompany'>support@acompany</a> or call 800-377-6915.</h3>
    </div>
    )
}

export default Login