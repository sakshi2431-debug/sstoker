import React from 'react'
import ".//featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="SVG\Pimpri-Chinchwad_Skyline.jpg"
             alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Chinchwad</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="SVG\tourist-places-to-visit-in-pune_g.jpg"
             alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Pune City</h1>
                <h2>323 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="SVG\navi-mumbai-at-night.jpg" 
            alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Navi Mumbai</h1>
                <h2>523 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="SVG\Deeksha-Bhoomi-Nagpur-Maharashtra-1000x750.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Nagpur</h1>
                <h2>854 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured