import damas from "../assets/damas.jpeg"


const Trip = () => {
  return (
    <>
    <div className="trip">
        <div className="trip-title">
                <h1> Our Trips</h1>
        </div>

        <div className="trip-items">
        <img className="trip-image" src={damas} alt="" />
        </div>

        <div className="trip-description">
            <ul className="trip-list">
              <li> Asperiores repudiandae at modi velit laborum odit</li>
              <li> Visit to the most beautiful places ever</li>
              <li> There are numerous locations that speak to their heritage. </li>
              <li> We roam your world in search of luxury</li>
            </ul>
            <a className="trip-btn" href="https://www.google.com/travel/flights">
            Explore the culture !
            </a>
            
          </div>

    </div>
    </>
  )
}

export default Trip