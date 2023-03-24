import { faBed, faCar, faPerson,  } from "@fortawesome/free-solid-svg-icons"
import{FontAwesomeIcon} from "@fontawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Header = ({type}) => {

    const [ openOptions, setOpenOptions] = useState(false);
    const [ oprions, setOptions] = useState({
        adult : 1,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name,operation) => {
        setOptions((prev) => {
            return{
                ...prev,
                [name]:operation === "i" ? options[name] + 1: options[name] -1,
            };
        });
    };

    const handleSearch = ()=>{
        navigate("/hotels", {state:{ date, options}})
    }

    return(
        <div className="header">
        <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }>
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
            {type !== "list" && (
            <>
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
                   <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{'${<option.adut}adult . ${option.room}room'}</span>
                    {openOptions && (
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.room <= 0}
                            className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="headerSearchItem">
                   <button className="headerButton" onClick={handleSearch}>Search</button>
                </div>
            

            </div> </>)}
            </div>
        </div>
    );
};

export default Header