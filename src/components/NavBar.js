import React from 'react'
import {  Link } from "react-router-dom";

const NavBar = props => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/watchlists">Watchlists</Link>
                </li>
                <button onClick={props.searchStatus} id="searchButton">Search Movies</button>
            </ul>
        </div>
    )
}

export default NavBar;