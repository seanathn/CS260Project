import React from "react";
import "./enter_info.css"
import {useNavigate} from "react-router-dom";

export function EnterInfo() {
    const [cats, setCats] = React.useState(localStorage.getItem('cats') || null);

    const navigate = useNavigate();

    let catArray = ['', false, false, false, '', ''];
    let name = '';
    let age;
    let yapping= false;
    let throwing = false;
    let pain = false;
    let cancerType = 'placeholder';
    const [catInfo, setCatInfo] = React.useState('');
    

    function setCatName(e) {
        name = e.target.value;
        console.log(name);
    }

    function setCatPain() {
        pain = !pain;
        console.log(pain);
    }

    function setCatThrowingUp() {
        throwing = !throwing;
        console.log(throwing);
    }

    function setCatYapping() {
        yapping = !yapping;
        console.log(yapping);
    }

    function setCatAge(e) {
        age = e.target.value;
        console.log(age);
    }

    function getDiagnosis() {
        navigate('/home');
        
        catArray=[name, pain, throwing, yapping, age, cancerType];

        console.log(catArray);

        setCatInfo(JSON.stringify(catArray));

        console.log(catInfo);

        if (localStorage.getItem('cats')) {
            setCats(localStorage.getItem('cats').push(catInfo));
        }

        if (Math.random() > 0.1) {
            new Promise(); // api call to get name of cancer
        }
        else {
            catArray[5] = "UI"
        }
        
        
    }


    return (
        <main>
            <form>
                <div className='demo-box'>
                    <div>
                        
                        <span className="text-field">Cat name:</span>
                        <input type="text" onChange={setCatName}/>
                    </div>
                    <div>
                        <span className="text-field">Symtoms:</span>
                        <span className="first-check">pain</span><input type="checkbox" onClick={setCatPain}/>
                        <span className="onwards-check">throwing up</span><input type="checkbox" onClick={setCatThrowingUp}/>
                        <span className="onwards-check">yapping</span><input type="checkbox" onClick={setCatYapping}/>
                    </div>
                    <div>
                        <span className="final-text">Age:</span>
                        <input type="text" onChange={setCatAge}/>
                    </div>
                    <button className="btn btn-primary" onClick={getDiagnosis}>Done</button>
                </div>  
            </form>
        </main>
    );
}