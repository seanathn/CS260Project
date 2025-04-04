import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login'
import { About } from './about/about';
import { EnterInfo } from './enter_info/enter_info';
import { Results } from './results/results'
import { Home } from './home/home';
import { AuthState } from './login/authState';

export default function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

    return (
      <BrowserRouter>
       <div className='body'>
        <header className="sticky-top">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><h1>Cancer or Urinary Track Infection</h1></div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {userName && <NavLink className="nav-link" to="home">Home</NavLink> }
                  {!userName && <NavLink className="nav-link" to="/">Home</NavLink> }
                </li>
                <li className="nav-item">
                  {userName && <NavLink className="nav-link" to="enter_info">Enter Cat</NavLink>}
                </li>
                <li className="nav-item">
                  {userName && <NavLink className="nav-link" to="results">Results</NavLink>}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} exact />
          <Route path='/home' element={<Home/>} exact />
          <Route path='/results' element={<Results/>} exact />
          <Route path='/enter_info' element={<EnterInfo/>} exact />
          <Route path='/about' element={<About/>} exact />
          <Route path='*' element={<NotFound/>} exact />
        </Routes>

        <footer className="footer">
            <nav className="navbar bg-light">
              <div className="container-fluid ">
               <p className="text-muted">Sean Brown </p> 
               <a href="https://github.com/seanathn/CS260Project">Git</a>
              </div>
              </nav>
          </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main >404: Return to sender. Address unknown</main>
}