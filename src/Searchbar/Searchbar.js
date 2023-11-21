import React from "react";
import "./Searchbar.css"


const Searchbar = ()=>{
    return(
        <>
                <form>
            
                <input type="text" placeholder="search items here..." className="searchBar" />
                <button  className="searchbarButton">🔎</button>

            </form>
            
        </>
    )
}
export default Searchbar
