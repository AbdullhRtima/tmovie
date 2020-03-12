import React ,{Suspense,lazy} from 'react';
import Page from './components/Layout/Page';
import {Spinner} from './Util/helper'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const MovieCard = lazy(() => import('./components/Movies/MovieCard')); 
const MovieDetails = lazy(() => import('./components/MovieDetails')); 

function App() {
  return (
    <Suspense fallback={<Spinner/>}>
       <Router>
        <Switch>
          <Page>
            <Route exact path="/" component={MovieCard} />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Page>
        </Switch>
      </Router>
    </Suspense>

  );
}

export default App;
