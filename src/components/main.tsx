import React from "react";
import Profile from "./profile";
import Network from "./network";
import "../styles/main.css"

const Main: React.FC = () => {
    return (
        <main className="lintreeContainer">
            <div className="linktreeDiv">
                <Profile />
                <Network />
            </div>
        </main>
    );
}

export default Main;