import React from "react";
import "./enter_info.css"

export function EnterInfo() {
    return (
        <main>
            <form>
                <div className='demo-box'>
                    <div>
                        <t className="text-field">Cat name:</t>
                        <input type="text" required="true"/>
                    </div>
                    <div>
                        <t className="text-field">Symtoms:</t>
                        <t className="first-check">pain</t><input type="checkbox"/>
                        <t className="onwards-check">throwing up</t><input type="checkbox"/>
                        <t className="onwards-check">yapping</t><input type="checkbox"/>
                    </div>
                    <div>
                        <t className="final-text">Age:</t>
                        <input type="text"/>
                    </div>
                    <button className="btn btn-primary">Done</button>
                </div>  
            </form>
        </main>
    );
}