import React from 'react';

const Movies = props => {
    if (props.movie.errors !== undefined) {
        return(
            <div><h2 className="errorMessage">{props.movie.errors}</h2></div>
        )
    } else if (props.movie.data !== undefined) {
        return(
            <div key={props.movie.data.id} id={props.movie.data.id} className="movieComponent">
                <img src={props.movie.data.attributes.Poster} alt={props.movie.data.attributes.Title}></img><br></br>
                <h1>{props.movie.data.attributes.Title} - {props.movie.data.attributes.Year}</h1>
                <h3>Plot: {props.movie.data.attributes.Plot}</h3>
                <h3>Genre: {props.movie.data.attributes.Genre}</h3>
                <h3>Runtime: {props.movie.data.attributes.Runtime}</h3>
                <h3>Rated: {props.movie.data.attributes.Rated}</h3>
            </div>
            )    
    } else {
        return null
    }
}

export default Movies;