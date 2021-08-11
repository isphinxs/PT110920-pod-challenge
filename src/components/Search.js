import React from 'react'

const Search = props => {
    return(
        <div className="searchform cf">
            <form onSubmit={(event) => props.submitSearch(event.target.search.value, event)}> 
                <input type="text" name="search" placeholder="Search Movies..."></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;