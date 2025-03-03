import React from "react";
import './home.css';
import {useNavigate} from "react-router-dom";

export function Home() {

    const navigate = useNavigate();
    // React.useEffect();

    function LogOut() {
        localStorage.removeItem('user')
        navigate('/')
    }

    function catAddition() {
        navigate('/enter_info')
    }


    return (
        <div className="container-fluid">
            <div className="demo-box">
                <h3>Saved Cats<span className="margin-left-80"><button className="btn btn-outline-dark" onClick={LogOut}>Sign Out</button></span></h3>
                <section>
                    <div>
                        <h5>Placeholder for DataBase</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Diagnosis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={catAddition}>
                                    <td>s</td>
                                    <td>cancer</td>
                                </tr>
                                <tr>
                                    <td>cat name</td>
                                    <td>cancer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>Click on row to change information</div>
                </section>
                <button className="btn btn-outline-dark" onClick={catAddition}>add new cat</button>
            </div>
        </div>
    );
}