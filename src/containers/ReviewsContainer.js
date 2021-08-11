import React, {Component} from 'react'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {

    state = {
        reviews: [],
        displayForm: false,
        formData: {
            id: 0,
            rating: 0,
            description: "",
            movieId: 0,
            movieName: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.data
            })
        })
    }

    getReviews = () => {
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.data
            })
        })
    }

    editReview = id => {
        let review = this.state.reviews.find(review => review.id === id)
        this.setState({
            reviews: [],
            displayForm: true,
            formData: {
                id: review.id,
                rating: review.attributes.rating,
                description: review.attributes.description,
                movieId: review.attributes.movie.id,
                movieName: review.attributes.movie.Title
            }
        })
    }

    submitEdit = event => {
        event.preventDefault()
        let formData = this.state.formData
        const params = {
            "rating": event.target.rating.value,
            "description": event.target.description.value,
            "movie_id": formData.movieId
        }

        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(params)
        }

        fetch(`http://localhost:3000/reviews/${parseInt(formData.id)}`, requestOptions)
        .then(resp => resp.json())
        .then(() => {
            this.setState({
                displayForm: false,
                formData: {
                    id: 0,
                    rating: 0,
                    description: "",
                    movieId: 0,
                    movieName: ""
                }
            })
            this.getReviews()
        })
    }

    deleteReview = id => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }

        fetch(`http://localhost:3000/reviews/${id}`, requestOptions)
        .then(resp => resp.json())
        .then(() => {
            this.setState({
                reviews: []
            })
            this.getReviews()
        })
    }

    submitNewReview = event => {
        event.preventDefault()
        const params = {
            "rating": event.target.rating.value,
            "description": event.target.description.value,
            "movie_id": event.target.movieId.value
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(params)
        }

        fetch('http://localhost:3000/reviews', requestOptions)
        .then(resp => resp.json())
        .then(data => {
            this.setState((prevState) => {
                return { reviews: [...prevState.reviews, data]
                }
            })
        })

    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.submitNewReview(event)} className="addReviewForm">
                    <input type="number" name="rating" placeholder="Choose a Rating...1-5"></input>
                    <input type="text" name="description" placeholder="Review Description"></input>  
                    <input type="number" name="movieId" placeholder="Movie ID"></input>  
                    <input type="submit" value="Create a New Review"></input>
                </form>
                {this.state.reviews.map(review => <Reviews key={review.id} edit={this.editReview} delete={this.deleteReview} submitSearch={this.props.submitSearch} review={review}/>)}
                {this.state.displayForm === true ? 
                    <div className="component">
                        <h1 id={this.state.formData.movieId}>Edit Review for {this.state.formData.movieName}</h1><br></br>
                        <form onSubmit={event => this.submitEdit(event)} className="reviewForm">
                            <label for="rating">Rating:</label><br></br>
                            <input type="number" name="rating" placeholder={this.state.formData.rating}></input><br></br>
                            <label for="description">Description:</label><br></br>
                            <textarea name="description" placeholder={this.state.formData.description}></textarea><br></br><br></br>                       
                            <input type="submit" value="Edit Review"></input>
                        </form>
                    </div> 
                    : null}
            </div>
        )
    }
}

export default ReviewsContainer