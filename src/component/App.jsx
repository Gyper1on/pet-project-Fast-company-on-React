import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Users from "../layouts/users";
import Main from "../layouts/main";
import Login from "../layouts/login";
import NavBar from "./navBar";
import NotFound from "./notFound";


function App() {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/users/:userId?" element={<Users/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={ <Navigate to = "/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;