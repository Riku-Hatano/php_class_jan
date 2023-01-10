import { useState } from "react";
import loginSrv from "../services/loginSrv";
import $ from 'jquery';

function Login() {
    const [result, setResult] = useState();

    const login = (event) => {
        event.preventDefault();
        const logForm = $(event.target)
        // console.log(logForm.serialize())
        console.log(logForm)

        loginSrv.login(logForm.serialize())
            .then(resp => {
                console.log(resp.data);
                setResult(resp.data);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <h1>{result}</h1>
        <form method="POST" action="http://localhost:8080/backend_class/test.php" onSubmit={login}>
            <input placeholder="pass" name="pass" required></input>
            <input placeholder="name" name="name" required></input>
            {/* <input placeholder="pass" name="pass" value="riku hatano" required></input>
            <input placeholder="name" name="name" value="aaiekk04efal" required></input> */}
            <input type="submit" value="submit"></input>
        </form>
        </>

    )
}


const obj = {
    name: obj,
    score: 9
}

const func = () => {   
}


export default Login