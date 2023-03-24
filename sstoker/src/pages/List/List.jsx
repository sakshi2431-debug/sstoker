import React, { useState } from "react";
import "./list.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import SearchItem from "../../components/searchItem/SearchItem";

const List =() =>{


    const location = useLocation();
    const [destination,setDestination] = useState(location.state.destination)
    const [options,setOptions] = useState(location.state.options)

    
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text"/>
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">

                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per month</small>
                                </span>
                                <input type="number" min ={1} className="lsOptionInput"/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max price <small>per month</small>
                                </span>
                                <input type="number" min ={1}  className="lsOptionInput"/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adults
                                </span>
                                <input type="number" min ={1} className="lsOptionInput" placeholder={options.adult}/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Rooms
                                </span>
                                <input type="number" min ={1} className="lsOptionInput" placeholder={options.room}/>
                            </div>
                        </div>
                        <button>Search</button>
                        </div>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;