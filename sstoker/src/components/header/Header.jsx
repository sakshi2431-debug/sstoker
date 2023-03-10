import{FontAwesomeIcon} from "@fontawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import "./header.css"


const Header = () => {
    return(
        <div className="header">
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon="fa-regular faBed" />
                <span>Stays</span>
            </div>
            <div className="headerList">
                <div className="headerListItem"></div>
                <FontAwesomeIcon icon="fa-regular fa-utensils" />
                <span>Restaurants and Mess</span>
            </div>
            < h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or
                20 with a free sstoker account
            </p>
            <button className="headerBtn">Sign in/Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faBed} className="headerIcon"/> 
                   <input
                   type="text"
                   placeholder="Where are you going?" 
                   className="headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faPerson} className="headerIcon"/> 
                   <span className="headerSearchText">2 adults 1 room </span>
                </div>
                <div className="headerSearchItem">
                   <button className="headerButton">Search</button>
                </div>
            

            </div>
            </div>
        </div>
    )
}

export default Header