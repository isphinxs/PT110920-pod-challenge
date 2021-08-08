import React, {Component} from "react";
import Movies from "../component/Movies";

class MoviesContainer extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        // change default port on api to 3001
        fetch("http://localhost:3001/movies")
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
