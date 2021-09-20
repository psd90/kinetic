import React from 'react';


//user profile axios update to get profile image and stats to pass onto stats component


const Side = () => {
    return (
            <div className="side">
                <nav>
                    <ul className="sideMenu">
                        <li><img></img></li>
                        <li className="sideListHome"><a href="/">Home</a></li>
                        <li className="sideList"><a href="#profile">Profile</a></li>
                        <li className="sideList"><a href="#id">ID Badge</a></li>
                        <li className="sideList"><a href="#roles">Roles</a></li>
                        <li className="sideList"><a href="picture">Profile Picture</a></li>
                        <li className="sideList"><a href="#achievements">Achievements</a></li>
                        <li className="sideList"><a href="documents">Documents</a></li>
                    </ul>
                </nav>
            </div>
    )
}
export default Side;