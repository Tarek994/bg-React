import "./Contact.css";
import old from "../../assets/old.webp"
import {ImLocation} from "react-icons/im" 
import {BsTelephoneFill} from "react-icons/bs" 
import {MdEmail} from "react-icons/md"


const Contact = () => {
  return (
   
    <div className="contact col-12">
      <div className="main-contact col-10">
            
                <div className="contact-title col-12">
                    <h1 className="">Contact us</h1>
                </div>

                <div className="contact-description col-12">
                    <img className="contact-image col-6" src={old} alt=""/>
                  
                    <ul className="contact-list col-6">
                      <li><ImLocation/> London, UK  </li>
                      <li><BsTelephoneFill/> +20 000 000 000</li>
                      <li><MdEmail/> super-trip@gmail.com</li>
                    </ul>
                </div>
      </div>

     
    </div>
    
  )
}

export default Contact