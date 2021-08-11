<<<<<<< HEAD
import React, {Component} from 'react'
import MoviesShow from '../components/MoviesShow'

class MoviesContainer extends Component {
    render() {
        return (
            <div>
                <MoviesShow movie={this.props.movies}/>
            </div>
        )
    }
}

export default MoviesContainer
=======
import React, {Component} from "react";
import Movies from "../component/Movies";

class MoviesContainer extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/movies")
            .then(resp => resp.json())
            .then(movies => {
                this.setState({movies: movies.data});
            })
    }

    render() {
        // limit number of results to 10
        const movies = this.state.movies.slice(0, 10);
        return (
            <div>
                <h1>Movies Container</h1>
                <ul>
                    {movies ? movies.map(movie => <li key={movie.id}><Movies movie={movie} /></li>) : "Loading"}
                </ul>
            </div>   
        );
    }
}

export default MoviesContainer;
>>>>>>> b301ab5b150c6f1b86995018519d66a0a8225abe
