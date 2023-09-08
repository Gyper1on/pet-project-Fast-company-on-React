import React from "react";
import {Params, useParams} from "react-router-dom";
import UserPage from "../component/page/userPage/userPage";
import UsersListPage from "../component/page/usersListPage/usersListPage";

const Users = () => {

    const params = useParams()
    const {userId} = params

    return ( <>
        {userId? <UserPage userId={userId}/> : <UsersListPage/>}
        </>
    )
}


export default Users