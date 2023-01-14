import newimg from "../../assets/newimg.webp";
import "./Services.css";


const Services = () => {
  return (
    
    <div className="services col-12">
      <div className="main-services col-lg-8 ">
          <div className="services-title col-12">
              <h1>Services</h1>
          </div>

          <div className="services-items col-12 ">
              <img className="services-image col-5 " src={newimg} alt="" />
            

              <div className="services-description col-lg-5 col-sm-10 col-xs-12">
                    <ul className="services-list  ">
                      <li>Asperiores repudiandae at modi velit laborum odit</li>
                      <li>Visit to the most beautiful places ever</li>
                      <li>There are a lot of locations that speak to their heritage.</li>
                      <li>We roam your world in search of luxury</li>
                    </ul>
                  <a className="book-btn" href="https://www.google.com/travel/flights">
                  Book a tour !
                  </a>
              </div>
          </div>
          </div>

    </div>

  )
}

export default Services