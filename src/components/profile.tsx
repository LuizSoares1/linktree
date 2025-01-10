import React, { useState } from "react";
import "../styles/profile.css";

const Profile: React.FC = () => {

    const [imageProfile] = useState<string>("/src/assets/profile.jpg");

    return (
        <div className="ProfileContainer">
            <div className="profilePictureDiv">
                <img src={imageProfile} alt="profile" className="profilePicture"/>
            </div>
            <div className="ProfileTittles">
                <h2 className="profileName">Luiz Ernandes</h2>
            </div>
        </div>
    );
}

export default Profile;