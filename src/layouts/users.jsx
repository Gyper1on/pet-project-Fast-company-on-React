import React from "react";
import {Params, useParams} from "react-router-dom";
import UserPage from "../component/userPage";
import UsersList from "../component/usersList";

const Users = () => {

    const params = useParams()
    const {userId} = params

    return ( <>
        {userId? <UserPage userId={userId}/> : <UsersList/>}
        </>
    )
}


export default Users