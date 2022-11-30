import newimg from "../assets/newimg.webp"

const Services = () => {
  return (
    <div className="services">
        <div className="services-title">
            <h1>Services</h1>
        </div>

        <div className="services-items">
          <img className="services-image" src={newimg} alt="" />
        

          <div className="services-description">
            <ul className="services-list">
              <li> Asperiores repudiandae at modi velit laborum odit,</li>
              <li> Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li> nihil earum nulla minus sed, facere, omnis cumque?</li>
              <li> nihil earum nulla minus sed, facere, omnis cumque?</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Services