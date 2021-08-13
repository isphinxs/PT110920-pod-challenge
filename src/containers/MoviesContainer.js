import React, {Component} from 'react'
import Movies from '../components/Movies'

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
        const movies = this.state.movies ? this.state.movies.slice(0, 10) : null;
        return (
            <div>
                <h1>Movies Container</h1>
                {movies ? movies.map(movie => <Movies movie={movie}/>) : "Loading"}
            </div>   
        );
    }
}

export default MoviesContainer;
