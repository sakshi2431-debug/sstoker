import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Cities</li>
                <li className="fListItem">About Us</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Contact us</li>
                <li className="fListItem">Blog</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Register</li>
                <li className="fListItem">Post an Apartment</li>
            </ul>
        </div>
        <div className="fText">
            Copyright @sstoker2022
        </div>
    </div>
  )
}

export default Footer