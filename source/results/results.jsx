import React from "react";
import './results.css'

export function Results() {
     const [result, setResult] = React.useState(localStorage.getItem('result'));
     const textForResult = result;
     localStorage.removeItem('result');

    function shareResults() {
        // nothing for now
    }

    return (
        <div className="demo-box">
                <h1>Results</h1>
                <section>
                    <h2 className="headings">{"Diagnosis - " + textForResult}</h2>
                </section>
                <form>
                    <button className="btn btn-outline-dark" onClick={shareResults}>Share Results</button>
                    <h2 className="headings">Placeholder for WebSocket</h2>
                </form>
            </div>
    );
}