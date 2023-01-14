import "./Footer.css"
import {AiOutlineCopyright} from "react-icons/ai"


const Footer = () => {
  return (
    <div className="footer col-12 ">
      <div className="main-footer col-10">

          <a href="/" className="footer-logo"> Super Trip </a>
          
          <div className="info">
            <p>Copyright<AiOutlineCopyright/> Tarek Ghali</p>
            
          </div>
      </div>
    </div>
  )
}

export default Footer