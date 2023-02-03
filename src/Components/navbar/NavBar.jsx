import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="main-nav col-12 ">
        <div className="navbar col-lg-8 m-auto ">
            <a href="/" className="logo"> Super Trip </a>

            <div className="navigation">
                <a href="#services">SERVICES|</a>
                <a href="#trip">TRIPS|</a>
                <a href="#contact">CONTACT|</a>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar;