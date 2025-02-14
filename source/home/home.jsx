import React from "react";
import './home.css'

export function Home() {
    return (
        <div className="container-fluid">
            <div className="demo-box">
                <nav>
                    <h3>Saved Cats<span className="margin-left-80"><button className="btn btn-outline-dark">Sign Out</button></span></h3>
                </nav>
                    <section>
                        <p>
                            <h5>Placeholder for DataBase</h5>
                            <table className="table">
                                <thread>
                                    <tr>
                                        <th>Name</th>
                                        <th>Diagnosis</th>
                                    </tr>
                                </thread>
                                <tbody>
                                    <tr>
                                        <td>cat name</td>
                                        <td>cancer</td>
                                    </tr>
                                    <tr>
                                        <td>cat name</td>
                                        <td>cancer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </section>
                    <button className="btn btn-outline-dark">add new cat</button>
                </div>
            </div>
    );
}