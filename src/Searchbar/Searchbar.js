import React from "react";
import "./Searchbar.css"


const Searchbar = ()=>{
    return(
        <>
                <form>
            
                <input type="text" placeholder="search items here..." className="searchBar" value={search} onChange={handleChange}/>
                <button  className="searchbarButton">🔎</button>

            </form>
            
        </>
    )
}
export default Searchbar
