import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const UserCard = ({ user,userId }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/user/${userId}/edit`)
    };
    return (
        <div className="card mb-3">
            <div className="card-body">
                <button
                    className="position-absolute top-0 end-0 btn btn-light btn-sm"
                    onClick={handleClick}
                >
                    <i className="bi bi-gear fs-3"></i>
                </button>
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={"https://api.dicebear.com/7.x/big-ears/svg"}

                        // src={`https://avatars.dicebear.com/api/avataaars/${(
                        //     Math.random() + 1
                        // )
                        //     .toString(36)
                        //     .substring(7)}.svg`}
                        className="rounded-circle"
                        width="150"
                    />
                    <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">
                            {user.profession.name}
                        </p>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                            ></i>
                            <span className="ms-2">{user.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;
