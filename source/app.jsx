import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login'
import { About } from './about/about';
import { EnterInfo } from './enter_info/enter_info';
import { Results } from './results/results'
import { Home } from './home/home';

export default function App() {
    return (
      <BrowserRouter>
       <div className='body bg-dark text-light'>
        <header className="sticky-top">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><h1>Cancer or Urinary Infection</h1></NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="enter_info">Enter Cat</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="results">Results</NavLink>
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
          <Route path='/' element={<Login/>} exact />
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