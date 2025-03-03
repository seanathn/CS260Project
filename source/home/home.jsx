import React from "react";
import './home.css';
import {useNavigate} from "react-router-dom";

export function Home() {

    const navigate = useNavigate();

    const [cats, setCats] = React.useState([]);

    React.useEffect(() => {
        const catNames = localStorage.getItem('cats');
        if (catNames) {
            setCats(JSON.parse(catNames));
        }
    },[]);

    const catsRow = [];
    if (cats.length) {
        for (const [i, cat] of cats.entries()) {
            const cancerOrUI = JSON.parse(localStorage[cat] || null)[4];
            catsRow.push(
                <tr key={i} onClick={() => {removeCat(cat)}}>
                    <td>{cat}</td>
                    <td>{cancerOrUI}</td>
                </tr>
            )
        }
    } else {
        catsRow.push(
          <tr key={0}>
            <td colSpan='4'>Enter a cat to populate</td>
          </tr>
        );
      }

    function LogOut() {
        localStorage.removeItem('user')
        navigate('/')
    }

    function catAddition() {
        navigate('/enter_info')
    }

    function removeCat(name) {
        localStorage.removeItem(name);
        cats.pop(name);
        localStorage.setItem('cats', JSON.stringify(cats));
        location.reload();
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
                                {catsRow}
                            </tbody>
                        </table>
                    </div>
                    <div>Click on row to delete</div>
                </section>
                <button className="btn btn-outline-dark" onClick={catAddition}>add new cat</button>
            </div>
        </div>
    );
}