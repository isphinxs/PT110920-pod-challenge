import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PodChallenge from './component/PodChallenge';
import NavBar from './components/NavBar';
import MoviesContainer from './containers/MoviesContainer';
import ReviewsContainer from './containers/ReviewsContainer';
import WatchlistsContainer from './containers/WatchlistsContainer';
import Search from './components/Search';

class App extends Component {

  state = {
    search: false,
    movies: []
  }

  searchStatus = () => {
    this.state.search === false ? this.setState({search: true}) : this.setState({search: false})
  }

  submitSearch = (name, event) => {
    event.preventDefault()
    const params = {
      "search": name
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    }

    fetch('http://localhost:3000/search_by_name', requestOptions)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        search: false,
        movies: data
      })
    })
  }

  render() {
    return (
      <Router>
        <NavBar searchStatus={this.searchStatus}/>
        {this.state.search === true ? <Search submitSearch={this.submitSearch}/> : null}
        <Switch>
          <Route path='/movies'><MoviesContainer movies={this.state.movies}/></Route>
          <Route path='/reviews'><ReviewsContainer submitSearch={this.submitSearch}/></Route>
          <Route path='/watchlists'><WatchlistsContainer/></Route>
        </Switch>
      </Router>  
    );
  }
}

export default App;
