import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import {NavLink} from "react-router-dom";


const UserTable = ({users,userCrop, onDelete, onFavorite, onSort, selectedSort}) => {

    const columns = {
        name: { path: 'name', name: 'Имя'},
        qualities: { name: 'Качетсва'},
        professions: { path: 'professions', name: 'Профессия'},
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз'},
        rate: { path: 'rate', name: 'Оценка'},
        bookmark: { path: 'bookmark', name: 'Избранное'},
        delete: {}
    }

    return <table className="table">
        <TableHeader {...{onSort, selectedSort, columns}}/>
        <tbody>
        
        {userCrop.map((user) => (
            <tr key={user._id}>
                <td><NavLink to={`/users/${user._id}`}>{user.name}</NavLink></td>
                <td>{user.qualities.map((item => (
                    <span key={item._id}
                          className={'badge m-1 bg-' + item.color}>{item.name}</span>)))}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    {/*<button className={user.bookmark ? "bi bi-bookmark-star-fill" : "bi bi-bookmark-star"}*/}
                    {/*        onClick={() => onFavorite(user._id)}></button>*/}
                    <div className="form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={"flexSwitchCheckDefault" + user._id}
                            checked={user.bookmark}
                            onChange={() => onFavorite(user._id)}
                            role = {"button"}
                        />
                    </div>
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
    onFavorite: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
}
export default UserTable