import React from "react";
import videoBg from "../assets/videoBg.mp4"

const Main = () => {
    return (
        <div className="main">
            <div className="overlay">

            </div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h1>Welcome</h1>
                <p>To my site.</p>
                <p className="phrase"> Here is a simple live background for hero section</p>
            </div>
        </div>
    )
}

export default Main;