import React, {useState, useEffect} from "react";
import api from "../api";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import GroupList from "./groupList";
import UsersTable from "./usersTable";
import LoadingSpiner from "./loadingSpiner";
import _ from 'lodash'




const UsersList = () => {

    const [users, setUsers] = useState(api.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({path: 'name', order: 'asc'})


    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))}, [])



    const pageSize = 4
    const filteredUsers = selectedProf? users.filter((user) => user.profession === selectedProf): users
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)


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

    const handleSort = (item) => {
        setSortBy(item)
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '100px'
            }}>
                {professions ?  (
                    <>
                    <GroupList
                        selectedItem ={selectedProf}
                        items={professions}
                        onItemSelect={handleItemSelect}
                    />
                        <button  className = 'btn btn-secondary m-2' onClick={clearFilter}>Очистить</button>
                    </>
                ) : <LoadingSpiner/>}
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

                <UsersTable
                    onDelete = {handleDelete}
                    onFavorite = {handleFavorite}
                    userCrop={userCrop}
                    onSort={handleSort}
                    selectedSort={sortBy}
                    users ={users}
                />
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

export default UsersList