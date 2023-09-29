import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Users from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./component/ui/navBar";
import NotFound from "./component/common/notFound";


function App() {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/users/:userId?/:edit?" element={<Users/>}/>
                <Route path="/login/:type?" element={<Login/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={ <Navigate to = "/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;