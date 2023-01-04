import damas from "../../assets/damas.jpeg"
import "./Trip.css";


const Trip = () => {
  return (
    
    <div className="trip col-lg-12">
      <div className="main-trip col-lg-10">
          <div className="trip-title col-lg-12">
                  <h1> Our Trips</h1>
          </div>

        <div className="trip-items col-lg-12">
          <img className="trip-image col-lg-6 " src={damas} alt="" />
          

            <div className="trip-description ">
              <ul className="trip-list">
                <li> Asperiores repudiandae at modi velit laborum odit</li>
                <li> Visit to the most beautiful places ever</li>
                <li> There are numerous locations that speak to their heritage.</li>
                <li> We roam your world in search of luxury</li>
              </ul>
              <a className="trip-btn" href="https://www.google.com/travel/flights">
              Explore the culture !
              </a>
              
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Trip