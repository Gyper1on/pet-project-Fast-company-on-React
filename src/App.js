import React, {useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Users from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./component/ui/navBar";
import NotFound from "./component/common/notFound";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const QualityContext = React.createContext()

 export const useQualitys = () => {
    return useContext(QualityContext)
}

const qualitys = { _id: 231, name: "Andrey"}
function App() {

    return (
        <div>
            <NavBar/>
            <QualityContext.Provider value={qualitys}>
            <Routes>
                <Route path="/users/:userId?/:edit?" element={<Users/>}/>
                <Route path="/login/:type?" element={<Login/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={ <Navigate to = "/404"/>}/>
            </Routes>
            <ToastContainer/>
                </QualityContext.Provider>
        </div>
    );
}

export default App;