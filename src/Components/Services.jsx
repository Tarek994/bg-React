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
            <ol>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>

            </ol>
          </div>
        </div>
    </div>
  )
}

export default Services