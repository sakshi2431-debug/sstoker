import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">Navbar
            <div className="navContainer">
                <img className="logo" src="SVG\Asset 2.svg"/>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>  
                </div>
            </div>
        </div>
    )
}

export default Navbar