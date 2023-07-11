import React, {useState, useEffect} from "react";
import api from "../api";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import GroupList from "./groupList";



const Users = () => {

    const [users, setUsers] = useState(api.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))}, [])



    const pageSize = 4
    const filteredUsers = selectedProf? users.filter((user) => user.profession === selectedProf): users
    const userCrop = paginate(filteredUsers, currentPage, pageSize)
    const count = filteredUsers.length

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handleDelete = (userId) =>
        setUsers(users.filter((user) => user._id !== userId))

    const renderPhase = (number) => {
        if (number > 4 && number < 15) {
            return ' человек встретится'
        } else {
            return ' человека встретится'
        }
    }

    const handleFavorite = (id) => {
        setUsers(users.map(user => user._id === id ? {...user, bookmark: !user.bookmark} : user))
    }

    const handleItemSelect = (item) => {
        setSelectedProf(item)
    }

    const clearFilter = () => {
        setSelectedProf()
    }


    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '100px'
            }}>
                {professions && (
                    <>
                    <GroupList
                        selectedItem ={selectedProf}
                        items={professions}
                        onItemSelect={handleItemSelect}
                    />
                        <button  className = 'btn btn-secondary m-2' onClick={clearFilter}>Очистить</button>
                    </>
                )}
            </div>

        <span style={{
            display: "block",
            width: `${users.length === 0 ? '900px' : '500px'}`,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: '10px',
            marginTop: `${users.length === 0 ? '300px' : '10px'}`,
            fontSize: `${users.length === 0 ? '40px' : '20px'}`
        }}
              className={'badge bg-' + (users.length > 0 ? 'success' : 'danger')}>
            {users.length > 0 ? ` ${users.length} ${renderPhase(users.length)} с тобой сегодня!` : ' к сожалению сегодня нет желающих'}
        </span>

            {count > 0 &&

                <table className="table">

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
                                        onClick={() => handleFavorite(user._id)}></button>
                            </td>
                            <td>
                                <button className={'btn btn-danger'}
                                        onClick={() => handleDelete(user._id)}> Попрощаться
                                </button>
                            </td>
                        </tr>

                    ))}

                    </tbody>
                </table>
            }
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )
};

export default Users