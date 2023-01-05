import { useState } from "react";
import loginSrv from "../services/loginSrv";
import $ from 'jquery';

function Assignment() {
    // const [pass, setPass] = useState("password");
    // const [name, setName] = useState("text");

    // const hidePassP = () => {
    //     switch(pass) {
    //         case "text":
    //             setPass("password")
    //             break;
    //         case "password":
    //             setPass("text")
    //             break;
    //     }
    // }
    // const hidePassN = () => {
    //     switch(name) {
    //         case "text":
    //             setName("password")
    //             break;
    //         case "password":
    //             setName("text")
    //             break;
    //     }
    // }

    // const pink = (e) => {
    //     switch(e.type) {
    //         case "focus": 
    //             e.target.style.backgroundColor = "pink";
    //             break;
    //         case "blur":
    //             e.target.style.backgroundColor = "white";
    //             break;
    //     }
    // }
    const [result, setResult] = useState();


    const login = (event) => {
        console.log("done")
        event.preventDefault();
        const logForm = $(event.target)

        loginSrv.login(logForm.serialize)
            .then(resp => {
                console.log(resp);
                setResult(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <form method="POST" action="http://localhost:8080/backend_class/test.php" onSubmit={login}>
            <input placeholder="pass" required></input>
            <input placeholder="name" required></input>
            {/* <input onFocus={pink} onBlur={pink} type={pass} placeholder="pass" required></input>
            <input onFocus={pink} onBlur={pink} type={name} placeholder="name" required></input>
            <input onClick={hidePassP} type="button" value="pass" id="name" required></input>
            <input onClick={hidePassN} type="button" value="name" id="pass" required></input> */}
            <input type="button" value="submit"></input>
        </form>
        </>

    )
}



export default Assignment