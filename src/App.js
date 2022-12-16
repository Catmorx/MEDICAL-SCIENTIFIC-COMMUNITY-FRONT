/* import { useState } from "react";
import LoginClient from "./views/LoginClient"
import Button from "./components/forms/Button"; */
import "./assets/global.css"
import User from './views/User';
import Home from './views/Home';
import Login from "./views/Login";
import Users from './views/Users';


import { Route, Routes } from "react-router-dom"
import Register from "./views/Register";
import Agenda from "./views/Agenda";

export default function App() {

    //const [view, setView] = useState(<LoginClient></LoginClient>);

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/user' element={<Users></Users>}></Route>
                <Route path='/user/:name' element={<User></User>}></Route>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
                <Route path="/agenda" element={<Agenda></Agenda>}></Route>
            </Routes>
        </div>
    )
}


