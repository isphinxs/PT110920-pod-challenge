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