import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return <div className='body bg-dark text-light'>
        <header className="sticky-top">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><h1>Cancer or Urinary Infection</h1></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="home.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="enter_info.html">Enter Cat</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="results.html">Results</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </header>

        <main className="container-fluid"> App components go here </main>

        <footer className="footer">
            <nav className="navbar bg-light">
              <div className="container-fluid ">
               <p className="text-muted">Sean Brown </p> 
               <a href="https://github.com/seanathn/CS260Project">Git</a>
              </div>
              </nav>
          </footer>
  </div>;
}