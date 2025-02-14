import React from "react";
import './about.css'

export function About() {
    return (
        <div className="demo-box">
                <p>This is a gag website do not take any diagnosis as fact. This is purely for fun and practice. This uses an API to get cancer names and random selects the cancer based 
                    on the symtoms you check. This is based off a true interation that my family had with vets being unable to reliably diagnose a cat. It was very frustrating and lead
                to a distrust of vets. This is a photo of the cat by the way.</p>
                <img className='joey-photo' src="Joey.jpg" />
            </div>
    );
}