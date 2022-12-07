import old from "../../assets/old.webp"
import {ImLocation} from "react-icons/im" 
import {BsTelephoneFill} from "react-icons/bs" 
import {MdEmail} from "react-icons/md"


const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="contact-left">
        <div className="contact-title">
            <h1 className="">Contact us</h1>
        </div>
          <div >
            <img className="contact-image" src={old} alt=""/>
          </div>
          
          
        </div>

        <div className="contact-right">
          <div className="contact-description">
              <ul className="contact-list">
                <li><ImLocation/> London, UK  </li>
                <li><BsTelephoneFill/> +20 765 834 286</li>
                <li><MdEmail/> Super-trip@gmail.com</li>
              </ul>
            
              
          </div>

        </div>

    </div>
    </>
  )
}

export default Contact