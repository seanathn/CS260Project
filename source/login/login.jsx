import React from "react";
import './login.css';

export function Login() {
    return (
        <main className="container-fluid">
            <div className="demo-box">
                <h1 className="signIn">Sign in/Create Account</h1>
            <form>
                <div className="margin5rem">
                    <div className="margin1rem;">
                        <span className="emailBox">email:</span>
                        <input type="email" placeholder="your@email.com"/>
                    </div>
                    <div className="margin1rem">
                        <span>password:</span>
                        <input type="password" placeholder="password"/>
                    </div>
                </div>
                <div className="margin1rem">
                    <button className="btn btn-primary" type="submit">Login</button>
                    <button className="btn btn-secondary" type="submit">Create</button>
                </div>
            </form>
            </div>
        </main>
    );
}