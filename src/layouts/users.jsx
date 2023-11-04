import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import UserPage from "../component/page/userPage/userPage";
import UsersListPage from "../component/page/usersListPage/usersListPage";
import EditUserPage from "../component/page/editUserPage";
import {useQualitys} from "../App";


const Users = () => {

    const params = useParams();
    const { userId, edit } = params;

    const data = useQualitys()
    console.log("data from form ", data)

    return (
        <>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users