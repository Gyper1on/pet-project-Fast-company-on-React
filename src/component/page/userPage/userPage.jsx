import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import getById from "../../../api/fake.api/user.api";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";


const UserPage = ({userId}) => {
    const [user, setUser] = useState();


    useEffect(() => {
        getById(userId).then((data) => setUser(data));
    }, []);


    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3 mt-3">
                        <UserCard user={user} userId={userId} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default UserPage;