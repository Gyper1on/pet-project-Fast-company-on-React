import React from "react";
import {useParams} from "react-router-dom";
import UserPage from "../component/page/userPage/userPage";
import UsersListPage from "../component/page/usersListPage/usersListPage";
import EditUserPage from "../component/page/editUserPage";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
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