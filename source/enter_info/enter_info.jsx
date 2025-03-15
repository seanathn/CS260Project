import React from "react";
import "./enter_info.css"
import {useNavigate} from "react-router-dom";

export function EnterInfo() {
    const [cats, setCats] = React.useState(localStorage.getItem('cats') || null);
    
    let catArray;
    let catsArr = JSON.parse(localStorage["cats"] || null);
    // console.log(catsArr)
    let name = '';
    let age = '';
    let yapping= false;
    let throwing = false;
    let pain = false;
    let cancerType = 'placeholder';
    // let removable = false;

    // if (cats) {
    //     React.useEffect(() =>{
    //         if (localStorage.getItem('changeCat?')) {
    //             const currentCat = localStorage.getItem('changeCat?');
    //             removable = true;
    //             localStorage.removeItem('changeCat?');
    //         }
    //     }, []);
    // }

    const navigate = useNavigate();
    

    function setCatName(e) {
        name = e.target.value;
        // console.log(name);
    }

    function setCatPain() {
        pain = !pain;
        // console.log(pain);
    }

    function setCatThrowingUp() {
        throwing = !throwing;
        // console.log(throwing);
    }

    function setCatYapping() {
        yapping = !yapping;
        // console.log(yapping);
    }

    function setCatAge(e) {
        age = e.target.value;
        // console.log(age);
    }

    async function saveCat() {
        const newCat = {name: name, symtoms: [pain, throwing, yapping], age: age, diagnosis:cancerType};
        
        await fetch('/api/cats', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newCat),
        });
    }

    function getDiagnosis() {

        catArray=[pain, throwing, yapping, age, cancerType];

        if (Math.random() > 0.3) {
            // new Promise(); // api call to get name of cancer
        }
        else {
            catArray[4] = "UI";
        }

        // localStorage.setItem(name, JSON.stringify(catArray));
        
        // if (cats) {
        //     catsArr.push(name);
        //     setCats(catsArr);
        //     localStorage.setItem('cats', JSON.stringify(catsArr));
        // } else {
        //     setCats(JSON.stringify([name]));
        //     localStorage.setItem('cats', JSON.stringify([name]));
        // }

        
        // console.log(newCat);
        saveCat();

        

        navigate('/results');
    }

    // function removeCat() {

    // }


    return (
        <main>
            {/* <form> */}
                <div className='demo-box'>
                    <div>
                        
                        <span className="text-field">Cat name:</span>
                        <input type="text" onChange={setCatName} placeholder={age}/>
                    </div>
                    <div>
                        <span className="text-field">Symtoms:</span>
                        <span className="first-check">pain</span><input type="checkbox" onClick={setCatPain} defaultChecked={pain}/> 
                        <span className="onwards-check">throwing up</span><input type="checkbox" onClick={setCatThrowingUp} defaultChecked={throwing}/>
                        <span className="onwards-check">yapping</span><input type="checkbox" onClick={setCatYapping} defaultChecked={yapping}/>
                    </div>
                    <div>
                        <span className="final-text">Age:</span>
                        <input type="text" onChange={setCatAge} placeholder={age}/>
                    </div>
                    <button className="btn btn-primary" onClick={getDiagnosis}>Done</button>
                </div>  
            {/* </form> */}
        </main>
    );
}