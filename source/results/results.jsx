import React from "react";
import './results.css'

export function Results() {

    function shareResults() {
        // fetch(clinicaltrialsapi.cancer.gov/api/v2/diseases?type=maintype&type_not=grade&include=name)
        // nothing for now
    }

    return (
        <div className="demo-box">
                <h1>Results</h1>
                <section>
                    <h2 className="headings">Placeholder for API (Diagnosis)</h2>
                </section>
                <form>
                    <button class="btn btn-outline-dark" onClick={shareResults}>Share Results</button>
                    <h2 className="headings">Placeholder for WebSocket</h2>
                </form>
            </div>
    );
}