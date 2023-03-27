import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="SVG\hostelrules01.jpg" alt="" className="pList" />
            <div className="pListTitles">
                <h1>Hostels</h1>
                <h1>233 hostel</h1>
            </div>
        </div>
        <div className="pListItem">
            <img src="SVG\hostelrules01.jpg" alt="" className="pList" />
            <div className="pListTitles">
                <h1>Mess/Diner</h1>
                <h1>233 Mess</h1>
            </div>
        </div>
        <div className="pListItem">
            <img src="SVG\hostelrules01.jpg" alt="" className="pList" />
            <div className="pListTitles">
                <h1>Mess/Diner</h1>
                <h1>233 Mess</h1>
            </div>
        </div>
        <div className="pListItem">
            <img src="SVG\hostelrules01.jpg" alt="" className="pList" />
            <div className="pListTitles">
                <h1>Gym</h1>
                <h1>233 Gyms</h1>
            </div>
        </div>
    </div>
  )
}

export default PropertyList