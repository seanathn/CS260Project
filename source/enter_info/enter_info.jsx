import React from "react";
import "./enter_info.css"
import {useNavigate} from "react-router-dom";

export function EnterInfo() {
    // const [cats, setCats] = React.useState(localStorage.getItem('cats') || null);
    // const [result, setResult] = React.useState("");
    
    let name = '';
    let age = '';
    let yapping= false;
    let throwing = false;
    let pain = false;
    // if (cats) {
    //     React.useEffect(() =>{
    //         if (localStorage.getItem('changeCat?')) {
    //             const currentCat = localStorage.getItem('changeCat?');
    //             removable = true;
    //             localStorage.removeItem('changeCat?');
    //         }
    //     }, []);
    // }

    // React.useEffect(() => {
    //         fetchDiagnosis();
    //     },[]);

    async function fetchDiagnosis() {
        let cancerType = "";
        await fetch('https://clinicaltrialsapi.cancer.gov/api/v2/diseases?type=maintype&type_not=grade&include=name', {
            // mode: "no-cors",
            headers: {'x-api-key': 'Psscf8rFjhatJA2L57Q2d1Knh6lw4wPd6Y0ZnNW3'},
        }) // key Psscf8rFjhatJA2L57Q2d1Knh6lw4wPd6Y0ZnNW3
        .then((response) => response.json())
        .then((cancerNames) => {
            // console.log(cancerNames.data);
            const randomIndex = Math.floor(Math.random()*120);
            console.log(randomIndex);
            cancerType = cancerNames.data[randomIndex].name;
            console.log(cancerType);
            // setResult(cancerType);
            // localStorage.setItem("result", result);
        });
        return cancerType;
    }

    const navigate = useNavigate();
    

    function setCatName(e) {
        name = e.target.value;
    }

    function setCatPain() {
        pain = !pain;
    }

    function setCatThrowingUp() {
        throwing = !throwing;
    }

    function setCatYapping() {
        yapping = !yapping;
    }

    function setCatAge(e) {
        age = e.target.value;
    }

    

    async function saveCat(disease) {
        const newCat = {name: name, symtoms: [pain, throwing, yapping], age: age, diagnosis: disease};
        
        await fetch('/api/cats', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newCat),
        });
    }

    async function getDiagnosis() {

        if (Math.random() > 0.3) {
            const temp = await fetchDiagnosis();
            // console.log(temp);
            localStorage.setItem('result', temp);
            saveCat(temp);
        }
        else {
            localStorage.setItem('result', "UI");
            saveCat("UI");
        }


        // console.log(cancerType);
        

        

        navigate('/results');
    }


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