import React from 'react';
import Page from './components/Layout/Page'
import MovieCard from './components/Movies/MovieCard'
import MovieDetails from './components/MovieDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Page>
            <p>hello world</p>
            <Route exact path="/" component={MovieCard} />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Page>
      </Switch>
    </Router>
  );
}

export default App;
