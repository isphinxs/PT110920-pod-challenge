import React from 'react';

const Movies = props => {
    if (props.movie.errors !== undefined) {
        return(
            <div><h2 className="errorMessage">{props.movie.errors}</h2></div>
        )
    } else if (props.movie !== undefined) {
        return(
            <div key={props.movie.id} id={props.movie.id} className="movieComponent">
                <img src={props.movie.attributes.Poster} alt={props.movie.attributes.Title}></img><br></br>
                <h1>{props.movie.attributes.Title} - {props.movie.attributes.Year}</h1>
                <h3>Plot: {props.movie.attributes.Plot}</h3>
                <h3>Genre: {props.movie.attributes.Genre}</h3>
                <h3>Runtime: {props.movie.attributes.Runtime}</h3>
                <h3>Rated: {props.movie.attributes.Rated}</h3>
            </div>
            )    
    } else {
        return null
    }
}

export default Movies;