import newimg from "../assets/newimg.webp"


const Services = () => {
  return (
    <>
    <div className="services">
        <div className="services-title">
            <h1>Services</h1>
        </div>

        <div className="services-items">
          <img className="services-image" src={newimg} alt="" />
        

          <div className="services-description">
            <ul className="services-list">
              <li>- Asperiores repudiandae at modi velit laborum odit</li>
              <li>- Visit to the most beautiful places ever</li>
              <li>- There are numerous locations that speak to their heritage. </li>
              <li>- We roam your world in search of luxury</li>
            </ul>
            <button className="book-btn">
             Book a tour !
            </button>
          </div>
        </div>


    </div>



    </>
  )
}

export default Services