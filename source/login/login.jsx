import React from "react";
import './login.css';
import {useNavigate } from "react-router-dom";

export function Login() {
    const [text, setText] = React.useState('');
    const navigate = useNavigate();

    function loginUser() {
        // console.log('login' + text)
        if (text) {
            localStorage.setItem('user', text);
            navigate('/home');
        }
    }

    function textChange(e) {
        setText(e.target.value)
    }

    return (
        <main className="container-fluid">
            <div className="demo-box">
                <h1 className="signIn">Sign in/Create Account</h1>
                <form id="login">
                    <div className="margin5rem">
                        <div className="margin1rem;">
                            <span className="emailBox">email:</span>
                            <input placeholder="your@email.com" type="email" onChange={textChange}/>
                        </div>
                        <div className="margin1rem">
                            <span>password:</span>
                            <input type="password" placeholder="password" />
                        </div>
                    </div>
                    <div>
                        <div className="margin1rem">
                            <button onClick={loginUser} className="btn btn-primary" >Login</button>
                            <button className="btn btn-secondary" type="submit">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}



