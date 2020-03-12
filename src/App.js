import React ,{Suspense,lazy} from 'react';
import Page from './components/Layout/Page';
import {Spinner} from './Util/helper';
import {Helmet} from "react-helmet";
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
       <Helmet>
        <title>Tmovie</title>
        <meta charSet="utf-8" />
        <meta name="description" content="this is movie app show the top 10 trend movie using 
          Mdb api,you can show the movie details and watch the trailer too on youtube"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Helmet>
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
