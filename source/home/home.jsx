import React from "react";
import './home.css';
import {useNavigate} from "react-router-dom";

export function Home() {

    const navigate = useNavigate();

    const [cats, setCats] = React.useState([]);

    React.useEffect(() => {
        // const catNames = localStorage.getItem('cats');
        // if (catNames) {
        //     setCats(JSON.parse(catNames));
        // }
        fetch('/api/cats')
        .then((response) => response.json())
        .then((allCats) => {
            console.log(allCats);
            setCats(allCats);
            console.log(cats);
        });
    },[]);

    const catsRow = [];
    if (cats.length) {
        for (const [i, cat] of cats.entries()) {
            const cancerOrUTI = cat[5];
            catsRow.push(
                <tr key={i} onClick={() => {removeCat(cat)}}>
                    <td>{cat[0]}</td>
                    <td>{cancerOrUTI}</td>
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
        // localStorage.removeItem('user');
        fetch(`/api/auth/logout`, {
            method: 'delete',
          })
            .catch(() => {
              // Logout failed. Assuming offline
            })
            .finally(() => {
              localStorage.removeItem('userName');
              () => onAuthChange(userName, AuthState.Unauthenticated).onLogout();
            });
        navigate('/');
        location.reload();
    }

    function catAddition() {
        navigate('/enter_info');
    }

    function removeCat(name) {
        // localStorage.removeItem(name);
        // cats.pop(name);
        // localStorage.setItem('cats', JSON.stringify(cats));
        // {name: name, symtoms: [pain, throwing, yapping], age: age, diagnosis:cancerType};
        const catInfo = {name: name[0], symtoms: [name[1], name[2], name[3]], age: name[4], diagnosis: name[5]};
        fetch(`/api/cats`, {
            method: 'DELETE',
            body: JSON.stringify(catInfo),
            headers:  { 'content-type': 'application/json'},
        })

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