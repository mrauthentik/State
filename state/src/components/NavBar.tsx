import logo from '../assets/logo/logo.png'

export const NavBar = () =>{
    return (
        <div className="nav-section">
            <nav>
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="nav-items">
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Services</span>
                    <span>Contact</span>
                </div>
                <div className="cv">
                    Download CV
                </div>
            </nav>
        </div>
    )
}