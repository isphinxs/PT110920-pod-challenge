import React from 'react'

const Reviews = props => {
    if (props.review !== undefined) {
        let title = props.review.attributes.movie.Title
        let id = props.review.id
        let rating = props.review.attributes.rating
        return(
            <div className="row">
                <div className="column" id="imageLeft">
                    <img onClick={(event) => props.submitSearch(title, event)} src={props.review.attributes.movie.Poster} alt={title}></img>
                </div>
                <div id={id} className="column" id="textRight">
                    <h1 id={id}>{title} - {props.review.attributes.movie.Year}</h1><br></br>
                    <h2>{props.review.attributes.description}</h2><br></br>
                    <h2>{rating === 1 ? rating + '  Star' : rating + '  Stars'}</h2><br></br>
                    <button className="button" onClick={() => props.edit(id)}>Edit</button><br></br><br></br>
                    <button className="button" onClick={() => props.delete(id)}>Delete</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Reviews