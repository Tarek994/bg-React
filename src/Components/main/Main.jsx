import React from "react";
import videoBg from "../../assets/videoBg.mp4"

const Main = () => {
    return (
        <div className="main col-12 p-0">
          <div className="main-content p-0">
              
            <div className="overlay col-12">

            </div>
            <video className="video p-0 col-12" src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h2>Welcome</h2>
                <p>To <span className="web-name"> Super Trip</span></p>
                <p className="phrase"> Get to know one of the most important tourist destinations ever.</p>
            </div>
            
           </div>
            
        </div>
    )
}

export default Main;