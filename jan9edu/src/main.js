// import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RegCompo from "./pages/RegCompo";
import Nav from "./pages/Nav";
import Nopage from "./pages/Nopage";

function Main() {
    return(
        <>
        <h1>hello</h1>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='nav' element={<Nav/>}/>
                    <Route path='register' element={<RegCompo/>}/>
                    <Route path='*' element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Main;