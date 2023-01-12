import "./Contact.css";
import old from "../../assets/old.webp"
import {ImLocation} from "react-icons/im" 
import {BsTelephoneFill} from "react-icons/bs" 
import {MdEmail} from "react-icons/md"


const Contact = () => {
  return (
   
    <div className="contact col-lg-12">
      <div className="main-contact col-lg-10">
            
                <div className="contact-title col-12">
                    <h1 className="">Contact us</h1>
                </div>

                <div className="contact-description">
                    <img className="contact-image" src={old} alt=""/>
                  
                    <ul className="contact-list">
                      <li><ImLocation/> London, UK  </li>
                      <li><BsTelephoneFill/> +20 765 834 286</li>
                      <li><MdEmail/> Super-trip@gmail.com</li>
                    </ul>
                  
                    
                </div>
            

      </div>
    </div>
    
  )
}

export default Contact