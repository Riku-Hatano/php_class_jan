import React, { useState } from "react"

function Home() {
    const [firstName, setFname] = useState();
    const [color, setColor] = useState();
    const [randColor, setRandColor] = useState();
    let val = ""
    const clickFun = (fname, lname) => {
        alert(`hey ${fname} ${lname}`)
    }

    const inputF = (e) => {
        console.log(e)
        switch(e.type) {
            case "focus": 
                e.target.style.backgroundColor = "yellow"
                e.target.value = ""
                break;
            case "blur":
                e.target.style.backgroundColor = "white"
                e.target.value = ""
                break;
        }
    }
    const changeColor = (e) => {
        setColor(e.target.value);
    }

    const changeRandColor = () => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let randColorBox = [];
        randColorBox.push(r)
        randColorBox.push(g)
        randColorBox.push(b)
        setRandColor(randColorBox.join(","))
        console.log(randColor)
    }

    return (
        <>
        {/* <div style={{backgroundColor: `rgb(${randColor})`}}> */}
        <h1 style={{backgroundColor: `rgb(${randColor})`}}>{firstName}</h1>
        {/* <h1 style={{backgroundColor: `rgb(2, 2, 2)`}}>{firstName}</h1> */}
        <h1 style={{backgroundColor: color}}>{firstName}</h1>

        <button onClick={() => clickFun("riku", "hatano")}>click me</button>
        <input type="text" onChange={changeColor} onFocus={inputF} onBlur={inputF}></input>
        <input type="text" onChange={(e) => setFname(e.target.value)} onFocus={inputF} onBlur={inputF}></input>
        <input type="text" onChange={changeRandColor} onFocus={inputF} onBlur={inputF}></input>
        {/* </div> */}
        </>
    )
}

export default Home