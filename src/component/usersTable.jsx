import React from "react";
import PropTypes from "prop-types";

const UserTable = ({userCrop, onDelete, onFavorite}) => {
    return <table className="table">

        <thead>
        <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th/>
        </tr>
        </thead>

        <tbody>

        {userCrop.map((user) => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.qualities.map((item => (
                    <span key={item._id}
                          className={'badge m-1 bg-' + item.color}>{item.name}</span>)))}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button className={user.bookmark ? "bi bi-bookmark-star-fill" : "bi bi-bookmark-star"}
                            onClick={() => onFavorite(user._id)}></button>
                </td>
                <td>
                    <button className={'btn btn-danger'}
                            onClick={() => onDelete(user._id)}> Попрощаться
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
}


UserTable.propTypes = {
    userCrop: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired
}
export default UserTable