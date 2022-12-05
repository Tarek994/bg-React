import React from "react";
import videoBg from "../assets/videoBg.mp4"

const Main = () => {
    return (
        <div className="main">
            
            <div className="overlay">

            </div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h2>Welcome</h2>
                <p>To <span className="web-name"> Super Trip</span></p>
                <p className="phrase"> Get to know one of the most important tourist destinations ever.</p>
            </div>
            
            
            
        </div>
    )
}

export default Main;