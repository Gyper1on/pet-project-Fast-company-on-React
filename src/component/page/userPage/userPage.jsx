import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import getById from "../../../api/fake.api/user.api";
import {useNavigate} from "react-router-dom";

const UserPage = ({userId}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        getById(userId).then((data) => setUser(data));
    }, []);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/users/${userId}/edit`)
    }

    if (user) {
        return (
            <div>
                <h1>Имя: {user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <h3>Встретился раз: {user.completedMeetings}</h3>
                <h3>Рейтинг: {user.rate}</h3>
                {user.qualities.map((item) => (
                    <span key={item._id}
                          className={'badge m-1 bg-' + item.color } style={{ fontSize: "1.2rem" }}>{item.name}</span>
                ))}
                <div><button onClick={handleClick}>Изменить</button></div>
            </div>
        );
    } else {
        return (<h1> loading </h1>);
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default UserPage;